//Uncaught ReferenceError: require is not defined
// const Mapset = require("../../Models/Mapset");

//Uncaught SyntaxError: Cannot use import statement outside a module
// import Mapset from "../../Models/Mapset";


// create new scene
let gameScene = new Phaser.Scene('Game');

let player = "MEEEEEEEEE"

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
    this.load.image('water', './Assets/Tiles/0986.png')
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

    //creates button to test claiming the active tile
    let button = self.add.rectangle(160,200, 120, 50, 0x000000);
    button.setStrokeStyle(2, 0xffffff);
    let buttonText = self.add.text(160,200,'Claim Tile', { font: '24px Arial', fill: '#ffffff' });
    buttonText.setOrigin(0.5);
    button.setInteractive();
    button.on('pointerdown', function () {
        console.log('Button clicked!');
        
            //CURRENTLY BORKED - See Issue #52
            // Mapset.update({
            //   own: player
            // }, {
            //   where: {
            //     id: activeTile[0]
            //   }
            // }).then(function (result) {
            //   console.log("Data updated successfully!");
            // });
    });

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

                //adds on click functionality to the tile
                window['t' + (i)].on("pointerdown", (function (index) {
                    return function () {
                        for (var j = 0; j < data.length; j++) {
                            if (j !== index) {
                                window['t' + (j)].setAlpha(1);
                            }
                        }
                        let activeTile = [id, spr, res, own]

                        window['t' + (index)].setAlpha(.5);
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