// create new scene
let gameScene = new Phaser.Scene('Game');

let localUsername;

let activeTile = []
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
    backgroundColor: '#D3D3D3',
    scene: gameScene
};

// load assets
gameScene.preload = function () {
    //load images
    this.load.image('field', './Assets/Tiles/0001.png');
    this.load.image('forest', './Assets/Tiles/0009.png');
    this.load.image('hills', './Assets/Tiles/0020.png');
    this.load.image('mountain', './Assets/Tiles/0167.png');
    this.load.image('water', './Assets/Tiles/0986.png');
    this.load.image('castle', './Assets/Tiles/1014.png');
    this.load.image('scroll', './Assets/Tiles/scroll.png')
};

//called once after preload ends  
gameScene.create = function () {
    let self = this;
    // box builders -----------------------------------------------------------------
    // box builders -----------------------------------------------------------------
    // box builders -----------------------------------------------------------------
    const messageBox = this.add.graphics().setDepth(5);
    const mboxWidth = 285;
    const mboxHeight = 125;
    const mboxX = 140;
    const mboxY = 110;
    messageBox.fillStyle(0xffffff, 1).setAlpha(0);
    messageBox.fillRect(mboxX, mboxY, mboxWidth, mboxHeight);
    const messageText = this.add.text(mboxX, mboxY, "", { font: "24px Arial", fill: "#000000", wordWrap: { width: mboxWidth - 20 } }).setDepth(6);

    const statBox = this.add.graphics().setDepth(5);
    const sboxWidth = 285;
    const sboxHeight = 200;
    const sboxX = 120;
    const sboxY = 285;
    statBox.fillStyle(0xffffff, 1).setAlpha(0);
    statBox.fillRect(sboxX, sboxY, sboxWidth, sboxHeight);
    //placeholder stats
    const statText = this.add.text(sboxX, sboxY, "==------------------------------==\n   Food: 30 Wood: 34\n   Stone: 12  Iron: 12\n   Soldiers: 6 | Health: 22\n   Archers: 4 | Attack: 18\n   Knights: 2 | Defense: 4", { font: "24px Arial", fill: "#000000", wordWrap: { width: sboxWidth - 20 } }).setDepth(6);




    //draws a box to place text over - placeholder
    self.add.sprite(270, 400, 'scroll').setScale(.94).setDepth(0)


    //CLAIM BUTTON = creates simTickBtn to test claiming the active tile
    let claimBtn = self.add.rectangle(340, 560, 120, 50, 0x000000);
    claimBtn.setStrokeStyle(2, 0xffffff);
    let claimBtnText = self.add.text(340, 560, 'Claim Tile', { font: '24px Arial', fill: '#ffffff' });
    claimBtnText.setOrigin(0.5);
    claimBtn.setInteractive();
    claimBtn.on('pointerdown', function () {
        if (activeTile[3] == null && activeTile[3] !== localUsername) {
            messageText.setText(`Claiming the ${activeTile[1]}!`); console.log("Claiming the tile!")
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
        } else if (activeTile[3] !== null && activeTile[3] !== localUsername) {
            messageText.setText("CANNOT CLAIM TILE IS ALREADY TAKEN"); console.log("CANNOT CLAIM TILE IS ALREADY TAKEN")
        } else { messageText.setText("YOU ALREADY OWN THIS"); console.log("YOU ALREADY OWN THIS") }
    });

    // ATTACK BUTTON
    let attackBtn = self.add.rectangle(340, 670, 120, 50, 0xff00000);
    attackBtn.setStrokeStyle(2, 0x000000);
    let attackBtnText = self.add.text(340, 670, 'ATTACK!', { font: '24px Arial', fill: '#000000' });
    attackBtnText.setOrigin(0.5);
    attackBtn.setInteractive();
    attackBtn.on('pointerdown', function () {
        messageText.setText(`Attacking ${activeTile[0]}`); console.log("Now Attacking")
        fetch('/target', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: localUsername, targeting: activeTile[0] })

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    // TRAIN SOLDIER BUTTON
    let trainSolBtn = self.add.rectangle(200, 560, 120, 50, 0xffffff);
    trainSolBtn.setStrokeStyle(2, 0x000000);
    let trainSolBtnText = self.add.text(200, 560, 'Soldiers', { font: '24px Arial', fill: '#000000' });
    trainSolBtnText.setOrigin(0.5);
    trainSolBtn.setInteractive();
    trainSolBtn.on('pointerdown', function () {
        messageText.setText(`Training Soldiers!`); console.log("Training Soldiers!")
        fetch('/players', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: localUsername, training: "soldier" })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    // TRAIN ARCHER BUTTON
    let trainArcBtn = self.add.rectangle(200, 615, 120, 50, 0xffffff);
    trainArcBtn.setStrokeStyle(2, 0x000000);
    let trainArcBtnText = self.add.text(200, 615, 'Archers', { font: '24px Arial', fill: '#000000' });
    trainArcBtnText.setOrigin(0.5);
    trainArcBtn.setInteractive();
    trainArcBtn.on('pointerdown', function () {
        messageText.setText(`Training Archers!!`); console.log("Training Archers!")
        fetch('/players', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: localUsername, training: "archer" })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    // TRAIN KNIGHT BUTTON
    let trainKniBtn = self.add.rectangle(200, 670, 120, 50, 0xffffff);
    trainKniBtn.setStrokeStyle(2, 0x000000);
    let trainKniBtnText = self.add.text(200, 670, 'Knights', { font: '24px Arial', fill: '#000000' });
    trainKniBtnText.setOrigin(0.5);
    trainKniBtn.setInteractive();
    trainKniBtn.on('pointerdown', function () {
        messageText.setText(`Training Knights!`); console.log("Training Knights!")
        fetch('/players', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: localUsername, training: "knight" })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    // SET KINGDOM BUTTON
    fetch(`/players?username=${localUsername}`)
        .then(res => res.json())
        .then(data => {
            if (data.length && data[0].kingdomTile === null) {
                messageText.setText("First things first!  Settle your kingdom on any available field."); console.log("YOU ALREADY OWN THIS")
                let kingBtn = self.add.rectangle(265, 250, 200, 50, 0x000000);
                kingBtn.setStrokeStyle(2, 0xffffff);
                let kingBtnText = self.add.text(265, 250, 'Set Kingdom', { font: '24px Arial', fill: '#ffffff' });
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
                    } else if (activeTile[4] == null && activeTile[1] !== "field") {
                        messageText.setText("I'm sorry, but that is not a field.  Look for the grass tiles.");
                        console.log("CANNOT SETTLE TILE IS NOT A FIELD")
                    } else {
                        messageText.setText("I'm sorry, but that area has already been claimed.");
                        console.log("CANNOT SETTLE TILE IS ALREADY OWNED")
                    }
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
                localUsername = data.username
                console.log("localUsername: " + localUsername)
                for (var i = 0; i < data.gameData.length; i++) {
                    window['t' + (i)] = self.add.sprite(data.gameData[i].x, data.gameData[i].y, data.gameData[i].spr).setDepth(0).setInteractive();
                    if (data.gameData[i].cas) {
                        window['t' + (i)] = self.add.sprite(data.gameData[i].x, data.gameData[i].y + 10, data.gameData[i].cas).setDepth(1).setInteractive();
                    }
                    sprites.push(window['t' + (i)]); // Add the sprite object to the array

                    let text;  //may be redundant DELETE LATER
                    let id = data.gameData[i].id
                    let spr = data.gameData[i].spr
                    let res = data.gameData[i].res
                    let own = data.gameData[i].own

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
                            for (var j = 0; j < data.gameData.length; j++) {
                                if (j !== index) {
                                    window['t' + (j)].clearTint();
                                }
                            }
                            activeTile = [id, spr, res, own]

                            window['t' + (index)].setTint(0xff00ff);
                            console.log(activeTile)

                            // Update the text object with the contents of activeTile
                            if (activeTile[3] == localUsername) {
                                messageText.setText(`This ${activeTile[1]} is yours.\nIt generates 1 ${activeTile[2]} each day.`);
                            } else if (activeTile[3] == null) {
                                messageText.setText(`This ${activeTile[1]} can be claimed!\nIt generates 1 ${activeTile[2]} each day.`);
                            } else {
                                messageText.setText(`This ${activeTile[1]} is owned by ${activeTile[3]}.\nIt generates 1 ${activeTile[2]} each day.`);
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
