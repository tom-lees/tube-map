export interface Station {
  name: string;
  x: number;
  y: number;
  z: number;
  order: number;
}

// prettier-ignore
export const bakerlooStations: Station[] = [
  { name: "Harrow & Wealdstone", x: 515443.4908, y: 189445.8062, z: 0, order: 1 },
  { name: "Kenton", x: 516727.9918, y: 188314.4716, z: 0, order: 2 },
  { name: "South Kenton", x: 517336.1598, y: 187060.2129, z: 0, order: 3 },
  { name: "North Wembley", x: 517667.5472, y: 186197.873500001, z: 0, order: 4 },
  { name: "Wembley Central", x: 518182.8112, y: 185084.709899999, z: 0, order: 5 },
  { name: "Stonebridge Park", x: 519615.5138, y: 184218.2261, z: 0, order: 6 },
  { name: "Harlesden", x: 520874.9265, y: 183414.186899999, z: 0, order: 7 },
  { name: "Willesden Junction", x: 521858.4876, y: 182959.8201, z: 0, order: 8 },
  { name: "Kensal Green", x: 523257.1398, y: 182789.7245, z: 0, order: 9 },
  { name: "Queen's Park", x: 524547.4749, y: 183200.2402, z: 0, order: 10 },
  { name: "Kilburn Park", x: 525357.7486, y: 183328.0363, z: 0, order: 11 },
  { name: "Maida Vale", x: 525940.2151, y: 182761.773700001, z: 0, order: 12 },
  { name: "Warwick Avenue", x: 526112.4036, y: 182039.408, z: 0, order: 13 },
  { name: "Paddington", x: 526659.2098, y: 181314.446900001, z: 0, order: 14 },
  { name: "Paddington", x: 526703.6907, y: 181197.8431, z: 0, order: 15 },
  { name: "Edgware Road (Bakerloo)", x: 527046.7044, y: 181758.9463, z: 0, order: 16 },
  { name: "Marylebone", x: 527458.7894, y: 181957.287599999, z: 0, order: 17 },
  { name: "Baker Street", x: 527954.6729, y: 182063.567500001, z: 0, order: 18 },
  { name: "Regent's Park", x: 528699.2958, y: 182113.1305, z: 0, order: 19 },
  { name: "Oxford Circus", x: 529046.6139, y: 181236.3369, z: 0, order: 20 },
  { name: "Piccadilly Circus", x: 529612.6446, y: 180665.529899999, z: 0, order: 21 },
  { name: "Charing Cross", x: 530057.6992, y: 180378.381899999, z: 0, order: 22 },
  { name: "Embankment", x: 530419.3254, y: 180395.871400001, z: 0, order: 23 },
  { name: "Waterloo", x: 530968.1802, y: 179961.9154, z: 0, order: 24 },
  { name: "Lambeth North", x: 531133.5815, y: 179456.1932, z: 0, order: 25 },
  { name: "Elephant & Castle", x: 531908.9646, y: 179141.8869, z: 0, order: 26 },
];

// prettier-ignore
export const centralStations: Station[] = [
  { name: "Shepherd's Bush", x: 523719.5706, y: 179883.5582, z: 0, order: 1 },
  { name: "Holland Park", x: 524626.2477, y: 180217.3517, z: 0, order: 2 },
  { name: "Queensway", x: 525903.0798, y: 180593.604, z: 0, order: 3 },
  { name: "Notting Hill Gate", x: 525284.9146, y: 180456.3574, z: 0, order: 4 },
  { name: "Lancaster Gate", x: 526710.5082, y: 180773.3476, z: 0, order: 5 },
  { name: "Marble Arch", x: 527960.1312, y: 181017.4747, z: 0, order: 6 },
  { name: "Bond Street", x: 528490.674, y: 181117.635, z: 0, order: 7 },
  { name: "Oxford Circus", x: 529046.6139, y: 181236.3369, z: 0, order: 8 },
  { name: "Tottenham Court Road", x: 529815.381, y: 181382.496200001, z: 0, order: 9 },
  { name: "Holborn", x: 530512.0615, y: 181525.070900001, z: 0, order: 10 },
  { name: "Chancery Lane", x: 531123.9465, y: 181615.465500001, z: 0, order: 11 },
  { name: "St. Paul's", x: 532108.3512, y: 181274.1885, z: 0, order: 12 },
  { name: "Bank", x: 532710.1551, y: 181119.8978, z: 0, order: 13 },
  { name: "Liverpool Street", x: 533093.853, y: 181566.9186, z: 0, order: 14 },
  { name: "Bethnal Green", x: 535043.5417, y: 182718.410700001, z: 0, order: 15 },
  { name: "Mile End", x: 536500.7831, y: 182534.4935, z: 0, order: 16 },
  { name: "Stratford", x: 538530.0487, y: 184394.6448, z: 0, order: 17 },
  { name: "Leyton", x: 538367.4374, y: 186075.853599999, z: 0, order: 18 },
  { name: "Leytonstone", x: 539279.2763, y: 187404.735400001, z: 0, order: 19 },
  { name: "Wanstead", x: 540673.1526, y: 188253.507300001, z: 0, order: 20 },
  { name: "Redbridge", x: 541834.4862, y: 188358.000499999, z: 0, order: 21 },
  { name: "Gants Hill", x: 543273.6779, y: 188430.207599999, z: 0, order: 22 },
  { name: "Newbury Park", x: 544920.2921, y: 188384.718599999, z: 0, order: 23 },
  { name: "Barkingside", x: 544798.7557, y: 189493.9487, z: 0, order: 24 },
  { name: "Fairlop", x: 544935.5979, y: 190594.5734, z: 0, order: 25 },
  { name: "Hainault", x: 545079.8923, y: 191498.1822, z: 0, order: 26 },
  { name: "Grange Hill", x: 544967.3103, y: 192558.691299999, z: 0, order: 27 },
  { name: "Chigwell", x: 543795.2009, y: 193021.039000001, z: 0, order: 28 },
  { name: "Buckhurst Hill", x: 541777.5666, y: 193891.179, z: 0, order: 29 },
  { name: "Loughton", x: 542318.8891, y: 195612.3879, z: 0, order: 30 },
  { name: "Debden", x: 544272.9229, y: 196121.782099999, z: 0, order: 31 },
  { name: "Theydon Bois", x: 545541.5127, y: 199100.828500001, z: 0, order: 32 },
  { name: "Epping", x: 546209.4306, y: 201538.4, z: 0, order: 33 },
  { name: "West Ruislip", x: 508378.6627, y: 186795.997400001, z: 0, order: 34 },
  { name: "Ruislip Gardens", x: 510266.398, y: 185851.599300001, z: 0, order: 35 },
  { name: "South Ruislip", x: 511097.3834, y: 185434.104699999, z: 0, order: 36 },
  { name: "Northolt", x: 513213.3316, y: 184523.897600001, z: 0, order: 37 },
  { name: "Greenford", x: 514763.0955, y: 183928.051899999, z: 0, order: 38 },
  { name: "Perivale", x: 516378.3501, y: 183314.9891, z: 0, order: 39 },
  { name: "Hanger Lane", x: 518527.3157, y: 182634.1785, z: 0, order: 40 },
  { name: "Ealing Broadway", x: 517989.3481, y: 180932.526699999, z: 0, order: 41 },
  { name: "West Acton", x: 519372.862, y: 181295.9254, z: 0, order: 42 },
  { name: "North Acton", x: 520828.4021, y: 181956.9398, z: 0, order: 43 },
  { name: "East Acton", x: 521720.9991, y: 181197.768999999, z: 0, order: 44 },
  { name: "White City", x: 523307.8235, y: 180748.416200001, z: 0, order: 45 },
];

// prettier-ignore
export const circleStations: Station[] = [
  { name: "Edgware Road (Circle Line)", x: 527220.0675, y: 181696.8814, z: 0, order: 1 },
  { name: "Paddington", x: 526659.2098, y: 181314.446900001, z: 0, order: 2 },
  { name: "Bayswater", x: 525842.957, y: 180822.646199999, z: 0, order: 3 },
  { name: "Notting Hill Gate", x: 525284.9146, y: 180456.3574, z: 0, order: 4 },
  { name: "High Street Kensington", x: 525578.3546, y: 179494.316500001, z: 0, order: 5 },
  { name: "Gloucester Road", x: 526182.7589, y: 178846.489499999, z: 0, order: 6 },
  { name: "South Kensington", x: 526917.564, y: 178820.259, z: 0, order: 7 },
  { name: "Sloane Square", x: 528090.7172, y: 178654.7576, z: 0, order: 8 },
  { name: "Victoria", x: 528998.7715, y: 179129.9345, z: 0, order: 9 },
  { name: "St. James's Park", x: 529646.6061, y: 179498.074100001, z: 0, order: 10 },
  { name: "Westminster", x: 530195.6727, y: 179668.226399999, z: 0, order: 11 },
  { name: "Embankment", x: 530419.3254, y: 180395.871400001, z: 0, order: 12 },
  { name: "Temple", x: 530958.661, y: 180802.829600001, z: 0, order: 13 },
  { name: "Blackfriars", x: 531693.8776, y: 180893.0855, z: 0, order: 14 },
  { name: "Mansion House", x: 532354.1684, y: 180931.563200001, z: 0, order: 15 },
  { name: "Cannon Street", x: 532611.4757, y: 180900.064999999, z: 0, order: 16 },
  { name: "Monument", x: 532911.9191, y: 180824.076099999, z: 0, order: 17 },
  { name: "Tower Hill", x: 533579.4477, y: 180755.3849, z: 0, order: 18 },
  { name: "Aldgate", x: 533613.1509, y: 181262.295499999, z: 0, order: 19 },
  { name: "Liverpool Street", x: 533093.853, y: 181566.9186, z: 0, order: 20 },
  { name: "Moorgate", x: 532667.8252, y: 181668.244999999, z: 0, order: 21 },
  { name: "Barbican", x: 532004.2025, y: 181856.329700001, z: 0, order: 22 },
  { name: "Farringdon", x: 531559.9989, y: 181873.9267, z: 0, order: 23 },
  { name: "King's Cross St. Pancras", x: 530174.7976, y: 182874.774700001, z: 0, order: 24 },
  { name: "Euston Square", x: 529416.5999, y: 182393.381999999, z: 0, order: 25 },
  { name: "Great Portland Street", x: 528837.973, y: 182179.857899999, z: 0, order: 26 },
  { name: "Baker Street", x: 527954.6729, y: 182063.567500001, z: 0, order: 27 },
  { name: "Latimer Road", x: 523762.9916, y: 180897.8333, z: 0, order: 28 },
  { name: "Ladbroke Grove", x: 524234.8749, y: 181339.0615, z: 0, order: 29 },
  { name: "Westbourne Park", x: 524901.4238, y: 181755.9263, z: 0, order: 30 },
  { name: "Royal Oak", x: 525833.8943, y: 181570.6391, z: 0, order: 31 },
  { name: "Wood Lane", x: 523373.9519, y: 180519.177100001, z: 0, order: 32 },
  { name: "Shepherd's Bush Market", x: 523197.0859, y: 180064.2324, z: 0, order: 33 },
  { name: "Goldhawk Road", x: 523183.913, y: 179607.8456, z: 0, order: 34 },
];

// prettier-ignore
// District

// prettier-ignore
export const jubileeStations: Station[] = [
  { name: "Stanmore", x: 517562.6021, y: 192572.9608, z: 77, order: 1 },
  { name: "Canons Park", x: 518186.8967, y: 191252.07, z: 70, order: 2 },
  { name: "Queensbury", x: 518808.7824, y: 189763.2019, z: 51, order: 3 },
  { name: "Kingsbury", x: 519358.6236, y: 188712.7984, z: 38, order: 4 },
  { name: "Wembley Park", x: 519315.8795, y: 186388.4845, z: 37, order: 5 },
  { name: "Neasden", x: 521342.3348, y: 185397.9068, z: 32, order: 6 },
  { name: "Dollis Hill", x: 522189.8506, y: 185144.0201, z: 39, order: 7 },
  { name: "Willesden Green", x: 523328.566, y: 184883.4222, z: 50, order: 8 },
  { name: "Kilburn", x: 524583.2751, y: 184644.8518, z: 52, order: 9 },
  { name: "West Hampstead", x: 525592.1984, y: 184652.8993, z: 51, order: 10, },
  { name: "Finchley Road", x: 526220.4473, y: 184716.2096, z: 49, order: 11 },
  { name: "Swiss Cottage", x: 526663.6914, y: 184334.9639, z: 40, order: 12 },
  { name: "St. John's Wood", x: 526735.2854, y: 183390.8717, z: 31, order: 13, },
  { name: "Baker Street", x: 527954.6729, y: 182063.5675, z: 7, order: 14 },
  { name: "Bond Street", x: 528490.674, y: 181117.635, z: -9, order: 15 },    // TODO This should be 27-20 or 27-23
  { name: "Green Park", x: 529007.2306, y: 180294.8348, z: -13, order: 16 },
  { name: "Westminster", x: 530195.6727, y: 179668.2264, z: -16, order: 17 },    // TODO This should be 6-22 or 6-31
  { name: "Waterloo", x: 530968.1802, y: 179961.9154, z: -26, order: 18 },
  { name: "Southwark", x: 531592.3412, y: 180073.9905, z: -10, order: 19 },
  { name: "London Bridge", x: 532683.0478, y: 180188.8523, z: -23, order: 20 },
  { name: "Bermondsey", x: 534459.7378, y: 179416.2232, z: -12, order: 21 },
  { name: "Canada Water", x: 535456.6419, y: 179467.0078, z: -13, order: 22 },
  { name: "Canary Wharf", x: 537677.3398, y: 180139.7318, z: -16, order: 23 },
  { name: "North Greenwich", x: 539215.8219, y: 179859.3744, z: -13, order: 24, },
  { name: "Canning Town", x: 539428.3256, y: 181377.274, z: -2, order: 25 },
  { name: "West Ham", x: 539130.9809, y: 182944.6443, z: 0, order: 26 },
  { name: "Stratford", x: 538530.0487, y: 184394.6448, z: 0, order: 27 },
];

// prettier-ignore
export const hammersmithAndCityStations: Station[] = [
  { name: "Barking", x: 544358.8052, y: 184382.179, z: 0, order: 1 },
  { name: "East Ham", x: 542463.3563, y: 184275.4352, z: 0, order: 2 },
  { name: "Upton Park", x: 541254.2061, y: 183793.4852, z: 0, order: 3 },
  { name: "Plaistow", x: 540003.2462, y: 183297.1438, z: 0, order: 4 },
  { name: "West Ham", x: 539130.9809, y: 182944.6443, z: 0, order: 5 },
  { name: "Bromley-by-Bow", x: 538049.5634, y: 182523.5136, z: 0, order: 6 },
  { name: "Bow Road", x: 537089.8973, y: 182735.9513, z: 0, order: 7 },
  { name: "Mile End", x: 536500.7831, y: 182534.4935, z: 0, order: 8 },
  { name: "Stepney Green", x: 535621.3116, y: 182135.557, z: 0, order: 9 },
  { name: "Whitechapel", x: 534644.6261, y: 181850.3379, z: 0, order: 10 },
  { name: "Aldgate East", x: 533936.1921, y: 181374.788, z: 0, order: 11 },
  { name: "Liverpool Street", x: 533093.853, y: 181566.9186, z: 0, order: 12 },
  { name: "Moorgate", x: 532667.8252, y: 181668.245, z: 0, order: 13 },
  { name: "Barbican", x: 532004.2025, y: 181856.3297, z: 0, order: 14 },
  { name: "Farringdon", x: 531559.9989, y: 181873.9267, z: 0, order: 15 },
  { name: "King's Cross St. Pancras", x: 530174.7976, y: 182874.7747, z: 0, order: 16 },
  { name: "Euston Square", x: 529416.5999, y: 182393.382, z: 0, order: 17 },
  { name: "Great Portland Street", x: 528837.973, y: 182179.8579, z: 0, order: 18 },
  { name: "Baker Street", x: 527954.6729, y: 182063.5675, z: 0, order: 19 },
  { name: "Paddington (H&C Line)", x: 526459.0141, y: 181526.6432, z: 0, order: 20 },
  { name: "Royal Oak", x: 525833.8943, y: 181570.6391, z: 0, order: 21 },
  { name: "Westbourne Park", x: 524901.4238, y: 181755.9263, z: 0, order: 22 },
  { name: "Ladbroke Grove", x: 524234.8749, y: 181339.0615, z: 0, order: 23 },
  { name: "Latimer Road", x: 523762.9916, y: 180897.8333, z: 0, order: 24 },
  { name: "Wood Lane", x: 523373.9519, y: 180519.1771, z: 0, order: 25 },
  { name: "Shepherd's Bush Market", x: 523197.0859, y: 180064.2324, z: 0, order: 26 },
  { name: "Goldhawk Road", x: 523183.913, y: 179607.8456, z: 0, order: 27 },
  { name: "Hammersmith (H&C Line)", x: 523325.1097, y: 178697.9863, z: 0, order: 28 }
];

// prettier-ignore
// Metropolitan

// prettier-ignore
// Northern Line

// prettier-ignore
