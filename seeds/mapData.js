const { Map } = require('../models');

const mapData = [
       
      {
        map_one: 'Sommer',

        
      },
      {
        map_two: 'Herfst',
        
      },
      {
        map_three: 'Invierno',
        
      },
]

const seedMaps = () => Gallery.bulkCreate(gallerydata);

module.exports = seedMaps;