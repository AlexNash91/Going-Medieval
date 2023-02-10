// create new scene
let gameScene = new Phaser.Scene('Game');

//DOEST WORK CANT FIND API/MAP
// fetch('/api/map')
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

//set config
let config = {
    type: Phaser.AUTO,  //Phaser default to WebGL
    width: 1000,
    height: 1000,
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
};

//called once after preload ends
gameScene.create = function () {

    // Get the data from the mapset table  HA! NICE TRY ASSHOLE  THIS SHIT DOESNT WORK EITHER
    // Mapset.findAll().then(mapsets => {
    //     mapsets.forEach(mapset => {
    //         console.log(mapset.dataValues);
    //     });
    // });

    const mockDBdata = [
        {
            x: 50,
            y: 45,
            spr: 'field',
            def: 'field',
            res: 'food++',
            own: null
        },
        {
            x: 200,
            y: 45,
            spr: 'field',
            def: 'field',
            res: 'food++',
            own: null
        },
        {

            x: 350,
            y: 45,
            spr: 'field',
            def: 'field',
            res: 'food++',
            own: null
        },
        {

            x: 125,
            y: 90,
            spr: 'forest',
            def: 'field',
            res: 'wood++',
            own: null
        },
        {

            x: 275,
            y: 90,
            spr: 'hills',
            def: 'field',
            res: 'stone++',
            own: null
        },
        {

            x: 425,
            y: 90,
            spr: 'mountain',
            def: 'field',
            res: 'iron++',
            own: null
        },
        {

            x: 50,
            y: 135,
            spr: 'field',
            def: 'field',
            res: 'food++',
            own: null
        },
        {

            x: 200,
            y: 135,
            spr: 'field',
            def: 'field',
            res: 'food++',
            own: null
        },
        {

            x: 350,
            y: 135,
            spr: 'field',
            def: 'field',
            res: 'food++',
            own: null
        },
    ]

    //creates test sprites and sets pos depth and scale
    for (var i = 0; i < mockDBdata.length; i++) {
        window['t' + (i)] = this.add.sprite(mockDBdata[i].x, mockDBdata[i].y, mockDBdata[i].spr, mockDBdata[i].y,);
        window['t' + (i)].setDepth(0);
        window['t' + (i)].setScale(1);
    }
};

//create new game
let game = new Phaser.Game(config);