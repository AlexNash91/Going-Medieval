const Units = require('./units')

class Archer extends Units {
    constructor(ATK, DEF, HP) {
        ATK = 12
        DEF = 2
        HP = 15 
    }   
}

module.exports = Archer