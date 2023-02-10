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

//called once after preload ends
gameScene.create = function () {
    fetch('/api/map')
        .then(resp => resp.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                window['t' + (i)] = this.add.sprite(data[i].x, data[i].y, data[i].spr);
                window['t' + (i)].setDepth(10);
                window['t' + (i)].setScale(1);
            }
        })
        .catch(err => console.log(err))
};

//create new game
let game = new Phaser.Game(config);