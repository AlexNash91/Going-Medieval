// create new scene
let gameScene = new Phaser.Scene('Game');

fetch('/api/map')
.then(resp => resp.json())
.then(data => {
    console.log(data)
})
.catch(err => console.log(err))

//set config
let config = {
    type: Phaser.AUTO,  //Phaser default to WebGL
    width: 640,
    height: 360,
    scene: gameScene
};

// load assets
gameScene.preload = function () {
    //load images
    this.load.image('background', './Assets/background.jpg');
    this.load.image('player', './Assets/player.png');
    this.load.image('tile1', './Assets/Tiles/0001.png');
    this.load.image('tile2', './Assets/Tiles/0019.png');
    this.load.image('tile3', './Assets/Tiles/0009.png');
    this.load.image('sett1', './Assets/Tiles/1182.png');
    // this.load.image('cast1', '../Assets/Tiles/1014.png');
    // this.load.image('cast2', '../Assets/Tiles/1013.png');

};

//called once after preload ends
gameScene.create = function () {

    //pulls W and H from config obj
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    //create bg sprite
    let bg = this.add.sprite(0, 0, 'background');

    // change anchor/origin to top left and fits to width/height

    bg.setPosition(gameW / 2, gameH / 2);
    bg.setDisplaySize(gameW, gameH);

    // //creates player sprite and sets pos
    // let p1 = this.add.sprite(0, 0, 'player');
    // p1.setPosition(gameW/2, gameH/2);

    const data = [
        {

            x: 50,
            y: 45,
            spr: 0001,
            def: 0001,
            res: 'food++',
            own: null
        },
        {
            x: 125,
            y: 88,
            spr: 0001,
            def: 0001,
            res: 'food++',
            own: null
        },
        {

            x: 50,
            y: 131,
            spr: 0001,
            def: 0001,
            res: 'food++',
            own: null
        },
    ]

    //creates test sprites and sets pos
    // let t1 = this.add.sprite(0, 0, 'tile1');
    // let t2 = this.add.sprite(0, 0, 'tile2');
    // let t3 = this.add.sprite(0, 0, 'tile3');
    // let s1 = this.add.sprite(0, 0, 'sett1');
    for (var i = 0; i < data.length; i++) {
        window['t' + (i + 1)] = this.add.sprite(0, 0, 'tile' + (i + 1));
        window['t' + (i + 1)].setPosition(data[i].x, data[i].y,);
    }

    console.log(t1, t2, t3);
    // t1.setPosition(50, 45,);
    // t2.setPosition(125, 88,);
    // t3.setPosition(50, 131);
    // s1.setPosition(50, 45);

    console.log(gameW, gameH);
    console.log(t1)
};

//create new game
let game = new Phaser.Game(config);