// create new scene
let gameScene = new Phaser.Scene('Game');

let localUsername = "johncrally"
let activeTile = []
let claimMessage = []
let reloadTime = 15000
let sprites = []
let sol = true
let arc = true
let kni = true

//set config
let config = {
    type: Phaser.AUTO,  //Phaser default to WebGL
    width: 1200,
    height: 800,
    backgroundColor: '#E2CE84',
    scene: gameScene
};

// load assets
gameScene.preload = function () {
    //load images
    this.load.image('field', './Assets/Tiles/0001.png');
    this.load.image('forest', './Assets/Tiles/0009.png');
    this.load.image('hills', './Assets/Tiles/0020.png');
    this.load.image('mountain', './Assets/Tiles/0167.png');
    this.load.image('lake', './Assets/Tiles/0986.png');
    this.load.image('castle', './Assets/Tiles/1014.png');
    this.load.image('scroll', './Assets/Tiles/scroll.png')
};

//called once after preload ends  
gameScene.create = function () {
    let self = this;
    //draws a box to place text over - placeholder
    self.add.sprite(230,375, 'scroll').setScale(1).setDepth(0)


    let settledBox = self.add.rectangle(175, 30, 200, 50, 0x000000);
    settledBox.setStrokeStyle(2, 0xffffff);
    let settledBoxText = self.add.text(175, 30, 'Kingdom Settled!', { font: '24px Arial', fill: '#ffffff' });
    settledBoxText.setOrigin(0.5);

    //creates the text object to be displayed
    self.activeTileText = self.add.text(10, 100, '', { font: '24px Arial', fill: '#ffffff' });
    self.claimMessageText = self.add.text(10, 300, '', { font: '24px Arial', fill: '#ffffff' });

    // ------------------------------BUTTON BLOCK: section that adds code for all buttons----------------------------------------------

    //CLAIM BUTTON = creates simTickBtn to test claiming the active tile
    
    let claimBtn = self.add.rectangle(200, 300, 120, 50, 0x000000);
    claimBtn.setStrokeStyle(2, 0xffffff);
    let claimBtnText = self.add.text(200, 300, 'Claim Tile', { font: '24px Arial', fill: '#ffffff' });
    claimBtnText.setOrigin(0.5);
    claimBtn.setInteractive();
    claimBtn.on('pointerdown', function () {
        if (activeTile[3] == null && activeTile[3] !== localUsername ) {
            console.log("Claimming Tile")
            fetch('/claim', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: localUsername, penClaim: activeTile[0] })

            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        } else if (activeTile[3] !== null && activeTile[3] !== localUsername ) {
            self.claimMessageText.setText("CANNOT CLAIM TILE IS ALREADY TAKEN");console.log("CANNOT CLAIM TILE IS ALREADY TAKEN")
        } else  { self.claimMessageText.setText("YOU ALREADY OWN THIS");console.log("YOU ALREADY OWN THIS") }
    });


    fetch(`/players?username=${localUsername}`)
        .then(res => res.json())
        .then(data => {
            if (data.length && data[0].kingdomTile === null) {
                let kingBtn = self.add.rectangle(175, 30, 200, 50, 0x000000);
                kingBtn.setStrokeStyle(2, 0xffffff);
                let kingBtnText = self.add.text(175, 30, 'Set Kingdom', { font: '24px Arial', fill: '#ffffff' });
                kingBtnText.setOrigin(0.5);
                kingBtn.setInteractive();
                kingBtn.on('pointerdown', function () {
                    if (activeTile[3] == null && activeTile[1] == "field") {
                        console.log("Setting Kingdom!")
                        fetch('/kingdom', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username: localUsername, own: localUsername, kingdomTile: activeTile[0], cas: "castle", id: activeTile[0] })

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                kingBtn.destroy();
                                kingBtnText.destroy();
                                buildmap();
                            })
                            .catch(error => console.error(error));
                    } else if (activeTile[4] == null && activeTile[1] !== "field"){ 
                        console.log("CANNOT SETTLE TILE IS NOT A FIELD") 
                    } else {console.log("CANNOT SETTLE TILE IS ALREADY OWNED")}
                });
            }
        })
        .catch(error => console.error(error));

    //Fetchs data from the mapset table and builds the map tiles with that data.  Also turns on interactivity and adds pointerover functions.  Note the invocation of IIFE in the pointerover and pointerout functions.  this was required to get those functions to alter the alpha.  That is why "index" is being used in the function instead of "i"
    function buildmap() {
        // Loop through the array of existing sprite objects and destroy them
        for (let i = 0; i < sprites.length; i++) {
            sprites[i].destroy();
        }
        sprites = []; // Clear the array

        fetch('/api/map')
            .then(resp => resp.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    window['t' + (i)] = self.add.sprite(data[i].x, data[i].y, data[i].spr).setDepth(0).setInteractive();
                    if (data[i].cas) {
                        window['t' + (i)] = self.add.sprite(data[i].x, data[i].y + 10, data[i].cas).setDepth(1).setInteractive();
                    }
                    sprites.push(window['t' + (i)]); // Add the sprite object to the array

                    let text;  //may be redundant DELETE LATER
                    let id = data[i].id
                    let spr = data[i].spr
                    let res = data[i].res
                    let own = data[i].own

                    window['t' + (i)].on("pointerover", (function (index) {
                        return function () {
                            window['t' + (index)].setAlpha(.5);
                        }
                    })(i));

                    window['t' + (i)].on("pointerout", (function (index) {
                        return function () {
                            window['t' + (index)].setAlpha(1);
                        }
                    })(i));

                    //adds on click functionality to the tile - clears the tint on any tile that isnt the one being clicked
                    window['t' + (i)].on("pointerdown", (function (index) {
                        return function () {
                            for (var j = 0; j < data.length; j++) {
                                if (j !== index) {
                                    window['t' + (j)].clearTint();
                                }
                            }
                            activeTile = [id, spr, res, own]

                            window['t' + (index)].setTint(0xff00ff);
                            console.log(activeTile)

                            // Update the text object with the contents of activeTile
                            if (activeTile[3] == localUsername) {
                                self.activeTileText.setText(`This ${activeTile[1]} is yours.\nIt generates 1 ${activeTile[2]} each day.`);
                            } else if (activeTile[3] == null) {
                                self.activeTileText.setText(`This ${activeTile[1]} can be claimed!\nIt generates 1 ${activeTile[2]} each day.`);
                            } else {
                                self.activeTileText.setText(`This ${activeTile[1]} is owned by ${activeTile[3]}.\nIt generates 1 ${activeTile[2]} each day.`);
                            }
                           
                        }
                    })(i));
                }
            })
            .catch(err => console.log(err))
        console.log("MAP BUILT!")
    }

    buildmap();
    this.time.addEvent({ delay: reloadTime, callback: buildmap, callbackScope: this, loop: true });
};

gameScene.update = function () {
}()

//create new game
let game = new Phaser.Game(config);
