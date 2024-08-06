const data = {
  parcelTypes: [
    { id: 1, parcelType:     "Common", parcelRate: 0.0000000011 },
    { id: 2, parcelType:       "Rare", parcelRate: 0.0000000016 },
    { id: 3, parcelType:       "Epic", parcelRate: 0.0000000022 },
    { id: 4, parcelType:  "Legendary", parcelRate: 0.0000000044 }
  ],
  rentTables: {
    usa: [
      { id:  1, row: [   1,  150, 30,  0.6266,  15.7690, 189.23,   219.95] },
      { id:  2, row: [ 151,  220, 20,  0.9190,  15.4700, 185.64,   230.69] },
      { id:  3, row: [ 221,  290, 15,  1.2114,  15.3440, 184.13,   243.52] },
      { id:  4, row: [ 291,  365, 12,  1.5247,  15.5010, 186.01,   260.75] },
      { id:  5, row: [ 366,  435, 10,  1.8171,  15.4450, 185.35,   274.42] },
      { id:  6, row: [ 436,  545,  8,  2.2766,  15.5570, 186.68,   298.28] },
      { id:  7, row: [ 546,  625,  7,  2.6108,  15.6650, 187.98,   315.96] },
      { id:  8, row: [ 626,  730,  6,  3.0494,  15.7550, 189.06,   338.54] },
      { id:  9, row: [ 731,  875,  5,  3.6551,  15.8390, 190.07,   369.24] },
      { id: 10, row: [ 876,  1100, 4,  4.5950,  16.0820, 192.99,   418.23] },
      { id: 11, row: [ 1101, 1500, 3,  6.2660,  16.6530, 199.84,   506.99] },
      { id: 12, row: [ 1501, 3000, 2, 12.5300,  22.9700, 275.70,   890.00] },
      { id: 13, row: [ 6000,   -1, 2, 25.0600,  45.9500, 551.40,  1780.01] },
      { id: 14, row: [10000,   -1, 2, 41.7700,  76.5800, 919.00,  2966.68] }
    ],
    mex: [
      { id:  1, row: [    1,    50,  20,  0.2089,  2.6456,  31.75,   41.99] },
      { id:  2, row: [   51,    85,  15,  0.3551,  3.6099,  43.32,   60.72] },
      { id:  3, row: [   86,   100,  12,  0.4117,  2.8545,  34.25,   54.73] },
      { id:  4, row: [  101,   140,   8,  0.5850,  3.5089,  42.11,   70.77] },
      { id:  5, row: [  141,   175,   7,  0.7310,  3.1678,  38.01,   72.82] },
      { id:  6, row: [  176,   225,   5,  0.9400,  3.2896,  39.48,   85.55] },
      { id:  7, row: [  226,   300,   4,  1.2500,  3.3418,  40.10,  101.53] },
      { id:  8, row: [  301,   400,   3,  1.6700,  3.0633,  36.76,  118.67] },
      { id:  9, row: [  401,  1000,   2,  4.1800,  7.6583,  91.90,  296.67] },
      { id: 10, row: [ 3000,    -1,   2, 12.5300, 22.9700, 275.70,  890.00] },
      { id: 11, row: [ 6000,    -1,   2, 25.0600, 45.9500, 551.40, 1780.01] },
      { id: 12, row: [10000,    -1,   2, 41.7700, 76.5800, 919.00, 2966.68] }
    ],
    intl: [
      { id:  1, row: [    1,    60,  20,  0.2506,  4.2190,  50.63,   62.91] },
      { id:  2, row: [   61,   100,  15,  0.4177,  5.2912,  63.49,   83.97] },
      { id:  3, row: [  101,   150,  10,  0.6266,  5.3260,  63.91,   94.63] },
      { id:  4, row: [  151,   180,   8,  0.7520,  5.1380,  61.66,   98.51] },
      { id:  5, row: [  181,   220,   7,  0.9190,  5.5140,  66.17,  111.22] },
      { id:  6, row: [  221,   250,   6,  1.0440,  5.3956,  64.75,  115.94] },
      { id:  7, row: [  251,   300,   5,  1.2500,  5.4304,  65.17,  126.60] },
      { id:  8, row: [  301,   350,   4,  1.4600,  5.1172,  61.41,  133.07] },
      { id:  9, row: [  351,   450,   3,  1.8800,  5.0127,  60.15,  152.30] },
      { id: 10, row: [  451,  3000,   2, 12.5300, 22.9700, 275.70,  890.00] },
      { id: 11, row: [ 6000,    -1,   2, 25.0600, 45.9500, 551.40, 1780.01] },
      { id: 12, row: [10000,    -1,   2, 41.7700, 76.5800, 919.00, 2966.68] }
    ]
  }
};

export default data;