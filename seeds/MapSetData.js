const { Mapset } = require("../models");

const MapSetData = [
  {
    x: 550,
    y: 55,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 55,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 850,
    y: 55,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 1000,
    y: 55,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 1150,
    y: 55,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 625,
    y: 100,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 775,
    y: 100,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 925,
    y: 100,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 1075,
    y: 100,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 550,
    y: 145,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 145,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 850,
    y: 145,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 1000,
    y: 145,
    spr: "field",
    defSpr: "field",
    res: "food",
    cas: "castle",
    own: "crisscross",
  },
  {
    x: 1150,
    y: 145,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
    own: "crisscross",

  },
  {
    x: 625,
    y: 190,
    spr: "hills",
    defSpr: "field",
    res: "stone",
    own: "crisscross",
  },
  {
    x: 775,
    y: 190,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 925,
    y: 190,
    spr: "field",
    defSpr: "field",
    res: "food",
    own: "crisscross",
  },
  {
    x: 1075,
    y: 190,
    spr: "forest",
    defSpr: "field",
    res: "wood",
    own: "crisscross",
  },
  {
    x: 550,
    y: 235,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 235,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 850,
    y: 235,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 1000,
    y: 235,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 1150,
    y: 235,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 625,
    y: 280,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 775,
    y: 280,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 925,
    y: 280,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 1075,
    y: 280,
    spr: "forest",
    defSpr: "field",
    res: "wood",
    own: "crisscross",
  },
  {
    x: 550,
    y: 325,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 325,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 850,
    y: 325,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 1000,
    y: 325,
    spr: "water",
    defSpr: "water",
    res: "food",
  },
  {
    x: 1150,
    y: 325,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 625,
    y: 370,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 775,
    y: 370,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 925,
    y: 370,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 1075,
    y: 370,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 550,
    y: 415,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 415,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 850,
    y: 415,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 1000,
    y: 415,
    spr: "water",
    defSpr: "water",
    res: "food",
  },
  {
    x: 1150,
    y: 415,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 625,
    y: 460,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 775,
    y: 460,
    spr: "field",
    defSpr: "field",
    res: "food",
  },
  {
    x: 925,
    y: 460,
    spr: "water",
    defSpr: "water",
    res: "food",
  },
  {
    x: 1075,
    y: 460,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 550,
    y: 505,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 505,
    spr: "field",
    defSpr: "field",
    res: "food",
    cas: "castle",
    own: "dagnabbit",
  },
  {
    x: 850,
    y: 505,
    spr: "water",
    defSpr: "water",
    res: "food",
    own: "dagnabbit",
  },
  {
    x: 1000,
    y: 505,
    spr: "forest",
    defSpr: "field",
    res: "wood",
    own: "dagnabbit",
  },
  {
    x: 1150,
    y: 505,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
    own: "dagnabbit",
  },
  {
    x: 625,
    y: 550,
    spr: "hills",
    defSpr: "field",
    res: "stone",
    own: "dagnabbit",
  },
  {
    x: 775,
    y: 550,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 925,
    y: 550,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 1075,
    y: 550,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 550,
    y: 595,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 595,
    spr: "forest",
    defSpr: "field",
    res: "wood",
  },
  {
    x: 850,
    y: 595,
    spr: "water",
    defSpr: "water",
    res: "food",
  },
  {
    x: 1000,
    y: 595,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 1150,
    y: 595,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 625,
    y: 640,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 775,
    y: 640,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 925,
    y: 640,
    spr: "water",
    defSpr: "water",
    res: "food",
  },
  {
    x: 1075,
    y: 640,
    spr: "hills",
    defSpr: "field",
    res: "stone",
  },
  {
    x: 550,
    y: 685,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 700,
    y: 685,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 850,
    y: 685,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 1000,
    y: 685,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 1150,
    y: 685,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 625,
    y: 730,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 775,
    y: 730,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 925,
    y: 730,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
  {
    x: 1075,
    y: 730,
    spr: "mountain",
    defSpr: "mountain",
    res: "iron",
  },
];
const seedMap = () => Mapset.bulkCreate(MapSetData);

module.exports = seedMap;
