const Units = require('./units')

class Knight extends Units {
    constructor(ATK, DEF, HP) {
        ATK = 15
        DEF = 7
        HP = 50  
    }
}

module.exports = Knight