// create new scene
let gameScene = new Phaser.Scene('Game');

let username = "johncrally"
let activeTile = []
let reloadTime = 1000
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
    this.load.image('water', './Assets/Tiles/0986.png');
};

//called once after preload ends  
gameScene.create = function () {
    fetch('/api/timer')
        .then(resp => resp.json())
        .then(data => {
            const timerValue = data[0].timer;
            console.log("Data: " + timerValue);
            this.time.addEvent({
                delay: timerValue + 1000,
                callback: function () {
                    // window.location.reload();
                    buildmap();
                },
                callbackScope: this,
                loop: true
            });
        })
        .catch(err => console.log(err))

    let self = this;
    //draws a box to place text over - placeholder
    let box = self.add.rectangle(10, 0, 700, 920, 0x5a5a5a);
    //box border
    box.setStrokeStyle(10, 0x000000);

    //creates the text object to be displayed
    self.activeTileText = self.add.text(20, 20, '', { font: '24px Arial', fill: '#ffffff' });

    // ------------------------------BUTTON BLOCK: section that adds code for all buttons----------------------------------------------

    //CLAIM BUTTON = creates simTickBtn to test claiming the active tile
    let claimBtn = self.add.rectangle(500, 500, 120, 50, 0x000000);
    claimBtn.setStrokeStyle(2, 0xffffff);
    let claimBtnText = self.add.text(500, 500, 'Claim Tile', { font: '24px Arial', fill: '#ffffff' });
    claimBtnText.setOrigin(0.5);
    claimBtn.setInteractive();
    claimBtn.on('pointerdown', function () {
        console.log('Button clicked!');
        fetch('/claim', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, penClaim: activeTile[0] })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    // ATTACK BUTTON  
    let atkBtn = self.add.rectangle(160, 75, 120, 50, 0x000000);
    atkBtn.setStrokeStyle(2, 0xffffff);
    let buttonText = self.add.text(160, 75, 'Attack', { font: '24px Arial', fill: '#ffffff' });
    buttonText.setOrigin(0.5);
    atkBtn.setInteractive();
    atkBtn.on("pointerdown", function () {
        console.log('Button clicked!');
        attackInit()
    })

    // IMPROVE SOLDIERS BUTTON
    let impSol = self.add.rectangle(160, 125, 120, 50, 0x000000);
    impSol.setStrokeStyle(2, 0xffffff);
    let impSolText = self.add.text(160, 125, 'Improve Soldiers', { font: '24px Arial', fill: '#ffffff' });
    impSolText.setOrigin(0.5);
    impSol.setInteractive();
    impSol.on("pointerdown", function () {
        console.log('Button clicked!');
        // PATCH request for mapset

        // fetch('/api/map', {
        //     method: 'PATCH',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ })
        //   })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error(error));

        // increment data for DAM, DEF, and HP
    })

    // IMPROVE ARCHERS BUTTON
    let impArc = self.add.rectangle(160, 175, 120, 50, 0x000000);
    impArc.setStrokeStyle(2, 0xffffff);
    let impArcText = self.add.text(160, 175, 'Improve Archers', { font: '24px Arial', fill: '#ffffff' });
    impArcText.setOrigin(0.5);
    impArc.setInteractive();
    impArc.on("pointerdown", function () {
        console.log('Button clicked!');
        // PATCH request for mapset

        // fetch('/api/map', {
        //     method: 'PATCH',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ })
        //   })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error(error));

        // increment data for DAM, DEF, and HP
    })

    // IMPROVE KNIGHTS BUTTON
    let impKni = self.add.rectangle(160, 225, 120, 50, 0x000000);
    impKni.setStrokeStyle(2, 0xffffff);
    let impKniText = self.add.text(160, 225, 'Improve Knights', { font: '24px Arial', fill: '#ffffff' });
    impKniText.setOrigin(0.5);
    impKni.setInteractive();
    impKni.on("pointerdown", function () {
        console.log('Button clicked!');
        // PATCH request for mapset

        // fetch('/api/map', {
        //     method: 'PATCH',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ })
        //   })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error(error));

        // increment data for DAM, DEF, and HP 
    })

    // TRAIN SOLDIERS BUTTON
    let genSol = self.add.rectangle(160, 275, 120, 50, 0x000000);
    genSol.setStrokeStyle(2, 0xffffff);
    let genSolText = self.add.text(160, 275, 'Train Soldier', { font: '24px Arial', fill: '#ffffff' });
    genSolText.setOrigin(0.5);
    genSol.setInteractive();
    genSol.on('pointerdown', function () {
        console.log('Button clicked!');
        fetch('/ranks', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, penSol: sol })
        })
            // console.log("Button clicked!")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    // TRAIN ARCHERS BUTTON
    let genArc = self.add.rectangle(160, 325, 120, 50, 0x000000);
    genArc.setStrokeStyle(2, 0xffffff);
    let genArcText = self.add.text(160, 325, 'Train Archer', { font: '24px Arial', fill: '#ffffff' });
    genArcText.setOrigin(0.5);
    genArc.setInteractive();
    genArc.on('pointerdown', function () {
        console.log('Button clicked!');
        fetch('/ranks', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, penArc: arc })
        })
            // console.log("Button clicked!")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });
  
    // TRAIN KNIGHTS BUTTON
    let genKni = self.add.rectangle(160, 375, 120, 50, 0x000000);
    genKni.setStrokeStyle(2, 0xffffff);
    let genKniText = self.add.text(160, 375, 'Train Knight', { font: '24px Arial', fill: '#ffffff' });
    genKniText.setOrigin(0.5);
    genKni.setInteractive();
    genKni.on('pointerdown', function () {
        console.log('Button clicked!');
        fetch('/ranks', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, penKni: kni })
        })
            // console.log("Button clicked!")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });



    //Fetchs data from the mapset table and builds the map tiles with that data.  Also turns on interactivity and adds pointerover functions.  Note the invocation of IIFE in the pointerover and pointerout functions.  this was required to get those functions to alter the alpha.  That is why "index" is being used in the function instead of "i"
    function buildmap() {
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

    }

    buildmap();

    fetch('/api/timer')
        .then(response => response.json())
        .then(data => {
            // Find the timer with ID of 1 in the response
            const timer1 = data.find(timer => timer.id === 1);
            // Create a text object to display the timer value
            this.add.text(600, 600
                , `Timer value at ID 1: ${timer1.timer}`, { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' });
        })
        .catch(error => console.error(error));

};

gameScene.update = function () {
}()

//create new game
let game = new Phaser.Game(config);

// --------------------------------------------------Attacking functions---------------------------------------------------------------
attack(); {
    // FETCH request gets ATK from Mapset
    // Player ATK must be higher than opponents HP + DEF
    // determines a winner

    // let ATK = your ATK
    // let HP = opponents HP
    // let DEF = opponents DEF

    // if (ATK > HP + DEF ) {
    //     console.log("You win!")
    // }

    // PATCH request updates tile assignment
    //     fetch('/api/map', {
    //         method: 'PATCH',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id:, own:  })
    //       })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.error(error));
}

function attackInit() {
    // calculate amount of turns to get to selected tile
    // d=√((x2 – x1)² + (y2 – y1)²)
    // decrement turns left with each tick
    const turns = "amount of turns left"
    // conditional that checks if turns left === 0
    if (turns === 0) {
        attack()
    }
    // when 0, run attack function  
}

// timer1.timer

