// create new scene
let gameScene = new Phaser.Scene('Game');

let player = "MEEEEEEEEE"
let activeTile = []

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
    this.load.image('water', './Assets/Tiles/0986.png');
};

//called once after preload ends  
gameScene.create = function () {
    let self = this;
    //draws a box to place text over - placeholder
    let box = self.add.rectangle(10, 0, 700, 920, 0x5a5a5a);
    //box border
    box.setStrokeStyle(10, 0x000000);

    //creates the text object to be displayed
    self.activeTileText = self.add.text(20, 20, '', { font: '24px Arial', fill: '#ffffff' });

    //CLAIM BUTTON = creates simTickBtn to test claiming the active tile
    let claimBtn = self.add.rectangle(160,200, 120, 50, 0x000000);
    claimBtn.setStrokeStyle(2, 0xffffff);
    let claimBtnText = self.add.text(160,200,'Claim Tile', { font: '24px Arial', fill: '#ffffff' });
    claimBtnText.setOrigin(0.5);
    claimBtn.setInteractive();
    claimBtn.on('pointerdown', function () {
        console.log('Button clicked!');
        fetch('/api/map', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: activeTile[0], own: player })
          })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    //BUTTON BLOCK: section that adds code for all conditional buttons 
    let atkBtn = self.add.rectangle(160,25, 120, 50, 0x000000);
    atkBtn.setStrokeStyle(2, 0xffffff);
    let buttonText = self.add.text(160,25,'Attack', { font: '24px Arial', fill: '#ffffff' });
    buttonText.setOrigin(0.5);
    atkBtn.setInteractive();
    atkBtn.on("pointerdown", function () {    
    })

    let impBtn = self.add.rectangle(160,25, 120, 50, 0x000000);
    atkBtn.setStrokeStyle(2, 0xffffff);
    let impBtnText = self.add.text(160,25,'Attack', { font: '24px Arial', fill: '#ffffff' });
    impBtnText.setOrigin(0.5);
    impBtn.setInteractive();
    impBtn.on("pointerdown", function () {    
    })

    let genBtn = self.add.rectangle(160,25, 120, 50, 0x000000);
    genBtn.setStrokeStyle(2, 0xffffff);
    let genBtnText = self.add.text(160,25,'Attack', { font: '24px Arial', fill: '#ffffff' });
    genBtnText.setOrigin(0.5);
    genBtn.setInteractive();
    genBtn.on("pointerdown", function () {    
    })



    //Fetchs data from the mapset table and builds the map tiles with that data.  Also turns on interactivity and adds pointerover functions.  Note the invocation of IIFE in the pointerover and pointerout functions.  this was required to get those functions to alter the alpha.  That is why "index" is being used in the function instead of "i"
    fetch('/api/map')
    .then(resp => resp.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            window['t' + (i)] = self.add.sprite(data[i].x, data[i].y, data[i].spr);
            window['t' + (i)].setDepth(0);
            window['t' + (i)].setInteractive();

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
                    self.activeTileText.setText(`ID: ${activeTile[0]} \nSpr: ${activeTile[1]} \nRes: ${activeTile[2]} \nOwn: ${activeTile[3]}`);
                }
            })(i));
        }
    })
    .catch(err => console.log(err))

};

gameScene.update = function () {
}()

//create new game
let game = new Phaser.Game(config);
