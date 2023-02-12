const Units = require('./units')

class Archer extends Units {
    constructor(ATK, DEF, HP) {
        ATK = 10
        DEF = 10
        HP = 10    
    }   
}

module.exports = Archer