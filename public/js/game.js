// create new scene
let gameScene = new Phaser.Scene('Game');



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

//called once after preload ends  Fetchs data from the mapset table and builds the map tiles with that data.  Also turns on interactivity and adds pointerover functions.  Note the invocation of IIFE in the pointerover and pointerout functions.  this was required to get those functions to alter the alpha.  That is why "index" is being used in the function instead of "i"
gameScene.create = function () {
    fetch('/api/map')
        .then(resp => resp.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                window['t' + (i)] = this.add.sprite(data[i].x, data[i].y, data[i].spr);
                window['t' + (i)].setDepth(0);
                window['t' + (i)].setScale(1);
                window['t' + (i)].setInteractive();
                window['t' + (i)].on("pointerover", (function (index) {
                    return function () {
                        console.log('t' + (index) + "HOVER")
                        window['t' + (index)].setAlpha(.5);
                    }
                })(i));
                window['t' + (i)].on("pointerout", (function (index) {
                    return function () {
                        console.log("STOP")
                        window['t' + (index)].clearAlpha();
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