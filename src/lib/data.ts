import type { Product } from "./types"

// Mock data for our cyber-themed library products
export const products: Product[] = [
  // BLADES
  {
    id: "DS-001",
    name: "Dran Sword",
    image: "https://i.ibb.co/G40ySY2X/DS-1-B01.webp",
    category: "blade",
    type: "attack",
    price: "BX-01",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "3-60 Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "3-60",
      "Bit": "Flat",
    },
    bey: [
      {
        id: "DS-002",
        name: "BX-07",
        image: "https://i.ibb.co/mCsJJFYs/DS-2-B07.webp"
      },
      {
        id: "DS-003",
        name: "BX-14",
        image: "https://i.ibb.co/svrBXkVr/DS-3-B14.webp"
      },
      {
        id: "DS-004",
        name: "BX-17",
        image: "https://i.ibb.co/VYF6BrfF/DS-4-B17.webp"
      },
      {
        id: "DS-005",
        name: "BX-00",
        image: "https://i.ibb.co/679WNZxb/DS-5-B00.webp"
      },
      {
        id: "DS-006",
        name: "UX-00",
        image: "https://i.ibb.co/gZPVr6tz/DS-6-25th.webp"
      },
      {
        id: "DS-007",
        name: "BX-00",
        image: "https://i.ibb.co/gMZ2QQFt/DS-7-UX00.webp"
      },
    ],
  },
  {
    id: "HS-001",
    name: "Hells Scythe",
    image: "https://i.ibb.co/Pss3pxX5/HS-1-B02.webp",
    category: "blade",
    type:"balance",
    price: "BX-02",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "4-60 Taper",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "9-60",
      "Bit": "Ball",
    },
    bey: [
      {
        id: "HS-002",
        name: "BX-00",
        image: "https://i.ibb.co/21RXmBKy/HS-2-B00.webp"
      },
      {
        id: "HS-002",
        name: "BX-08",
        image: "https://i.ibb.co/sdKqGYNk/HS-3-B08.webp"
      },
      {
        id: "HS-003",
        name: "BX-14",
        image: "https://i.ibb.co/wrbWPP9Y/HS-4-B14.webp"
      },
      {
        id: "HS-004",
        name: "Hell Persona",
        image: "https://i.ibb.co/spNPWk1P/HS-5-B00.webp"
      },
    ]
  },
  {
    id: "WA-001",
    name: "Wizard Arrow",
    image: "https://i.ibb.co/HDpHNQJ0/WA-1-B03.webp",
    category: "blade",
    type:"stamina",
    price: "BX-03",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "4-80 Ball",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "1-80",
      "Bit": "Orb, Ball",
    },
    bey: [
      {
        id: "WA-002",
        name: "BX-05",
        image: "https://i.ibb.co/yD685wp/WA-2-B05.webp"
      },
      {
        id: "WA-003",
        name: "BX-08",
        image: "https://i.ibb.co/xSdv8S60/WA-3-B08.webp"
      },
      {
        id: "WA-004",
        name: "BX-14",
        image: "https://i.ibb.co/QvXy1C28/WA-4-B14.webp"
      },
      {
        id: "WA-005",
        name: "BX-17",
        image: "https://i.ibb.co/XZ4cTffR/WA-5-B17.webp"
      },
      {
        id: "WA-006",
        name: "BX-21",
        image: "https://i.ibb.co/5xGWKqsX/WA-6-B21.webp"
      },
      {
        id: "WA-007",
        name: "BX-24",
        image: "https://i.ibb.co/B566Xm8M/WA-7-B24.webp"
      },
    ]
  },
  {
    id: "KS-001",
    name: "Knight Shield",
    image: "https://i.ibb.co/Gfdx0kYG/KS-1-B04.webp",
    category: "blade",
    type:"defense",
    price: "BX-04",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "3-80 Needle",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-60, 5-80",
      "Bit": "Dot, Spike",
    },
    bey: [
      {
        id: "KS-002",
        name: "BX-06",
        image: "https://i.ibb.co/5g3XrCBS/KS-2-B06.webp"
      },
      {
        id: "KS-003",
        name: "BX-08",
        image: "https://i.ibb.co/6cXM80JP/KS-3-B08.webp"
      },
      {
        id: "KS-004",
        name: "BX-14",
        image: "https://i.ibb.co/V03rFym8/KS-4-B14.webp"
      },
      {
        id: "KS-005",
        name: "BX-20",
        image: "https://i.ibb.co/xKGq7Myy/KS-5-B20.webp"
      },
      {
        id: "KS-006",
        name: "G3 Prize",
        image: "https://i.ibb.co/GfrjdNCW/KS-6-G3P.webp"
      },
    ]
  },
  {
    id: "KL-001",
    name: "Knight Lance",
    image: "https://i.ibb.co/bMFnLVjr/KL-1-B13.webp",
    category: "blade",
    type:"defense",
    price: "BX-13",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "4-80 High Needle",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "9-60, 9-70, 9-80",
      "Bit": "Needle, Metal Needle",
    },
    bey: [
      {
        id: "KL-002",
        name: "BX-21",
        image: "https://i.ibb.co/xtW6KfZD/KL-2-B21.webp"
      },
      {
        id: "KL-003",
        name: "BX-24",
        image: "https://i.ibb.co/ds0zjkft/KL-3-B24.webp"
      },
    ]
  },
  {
    id: "SE-001",
    name: "Shark Edge",
    image: "https://i.ibb.co/TD4nSSZF/SE-1-B14.webp",
    category: "blade",
    type:"attack",
    price: "BX-14",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "3-60 Low Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "1-60, 9-60, 4-55",
      "Bit": "Low Flat, Flat, Under Needle",
    },
    bey: [
      {
        id: "SE-002",
        name: "BX-14",
        image: "https://i.ibb.co/7H2dWMh/SE-2-B14.webp"
      },
      {
        id: "SE-003",
        name: "BX-20",
        image: "https://i.ibb.co/gZc9jXrX/SE-3-B20.webp"
      },
      {
        id: "SE-004",
        name: "BX-31",
        image: "https://i.ibb.co/pjwcs3bd/SE-4-B31.webp"
      },
      {
        id: "SE-005",
        name: "BX-00",
        image: "https://i.ibb.co/S4pGMHd0/SE-5-B00.webp"
      },
    ]
  },
  {
    id: "LC-001",
    name: "Leon Claw",
    image: "https://i.ibb.co/JwCKgzQX/LC-1-B15.webp",
    category: "blade",
    type:"balance",
    price: "BX-15",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~31 g",
      "Stock Combo": "5-60 Point",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "5-60, 9-60",
      "Bit": "Point, Flat",
    },
    bey: [
      {
        id: "LC-002",
        name: "BX-00",
        image: "https://i.ibb.co/jvYdnq90/LC-4-B00.webp"
      },
      {
        id: "LC-003",
        name: "BX-24",
        image: "https://i.ibb.co/7tqvWDcM/LC-2-B24.webp"
      },
      {
        id: "LC-004",
        name: "UX-12",
        image: "https://i.ibb.co/Fbkt3N7V/LC-3-U12.webp"
      },
    ]
  },
  {
    id: "VT-001",
    name: "Viper Tail",
    image: "https://i.ibb.co/Fqd2JgW8/VT-1-B16.webp",
    category: "blade",
    type:"stamina",
    price: "BX-16",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~34 g",
      "Stock Combo": "5-80 Orb",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "5-60, 3-80",
      "Bit": "Taper, High Taper, Hexa",
    },
    bey: [
      {
        id: "VT-002",
        name: "BX-16",
        image: "https://i.ibb.co/23Tb48Z0/VT-2-B16.webp"
      },
      {
        id: "VT-003",
        name: "BX-16",
        image: "https://i.ibb.co/XxYkf2pq/VT-3-B16.webp"
      },
      {
        id: "VT-004",
        name: "BX-24",
        image: "https://i.ibb.co/BVLYS6Qz/VT-4-B24.webp"
      },
      {
        id: "VT-005",
        name: "BX-35",
        image: "https://i.ibb.co/W4Z2YTFC/VT-5-B35.webp"
      },
    ]
  },
  {
    id: "RH-001",
    name: "Rhino Horn",
    image: "https://i.ibb.co/BHD7xD78/RH-1-B19.webp",
    category: "blade",
    type:"defense",
    price: "BX-19",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "3-80 Spike",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "4-80, 9-60",
      "Bit": "Taper",
    },
    bey: [
      {
        id: "RH-001",
        name: "BX-31",
        image: "https://i.ibb.co/dwyChgTD/RH-2-B31.webp"
      },
    ]
  },
  {
    id: "DD-001",
    name: "Dran Dagger",
    image: "https://i.ibb.co/0V2bg1Wf/DD-1-B20.webp",
    category: "blade",
    type:"attack",
    price: "BX-20",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "4-60 Rush",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "4-60, 6-60, 9-60, 5-60",
      "Bit": "Rush, Flat, Accel, Point",
    },
    bey: [
      {
        id: "DD-002",
        name: "BX-31",
        image: "https://i.ibb.co/60bF0hgd/DD-2-B31.webp"
      },
      {
        id: "DD-003",
        name: "BX-00",
        image: "https://i.ibb.co/zT62PX0G/DD-3-B00.webp"
      },
      {
        id: "DD-004",
        name: "UX-00",
        image: "https://i.ibb.co/5WLJxJ7n/DD-4-U00.webp"
      },
    ]
  },
  {
    id: "HC-001",
    name: "Hells Chain",
    image: "https://i.ibb.co/Cs7GFrZW/HC-1-B21.webp",
    category: "blade",
    type:"balance",
    price: "BX-21",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "5-60 High Taper",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "5-80",
      "Bit": "Ball, Gear Ball",
    },
    bey: [
      {
        id: "HC-002",
        name: "BX-31",
        image: "https://i.ibb.co/hF91LLCt/HC-2-B31.webp"
      },
      {
        id: "HC-003",
        name: "BX-00",
        image: "https://i.ibb.co/N2JBtG4F/HC-3-B00.webp"
      },
    ]
  },
  {
    id: "PW-001",
    name: "Phoenix Wing",
    image: "https://i.ibb.co/jk5WmMPQ/PW-1-B23.webp",
    category: "blade",
    type:"attack",
    price: "BX-23",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~39 g",
      "Stock Combo": "9-60 Gear Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "3-60, 1-60, 9-60",
      "Bit": "Rush, Low Rush, Point, Level",
    },
    bey: [
      {
        id: "PW-002",
        name: "BX-35",
        image: "https://i.ibb.co/1JQcjB3n/PW-2-B35.webp"
      },
      {
        id: "PW-003",
        name: "BX-00",
        image: "https://i.ibb.co/yckZp8YX/PW-3-B00.webp"
      },
      {
        id: "PW-004",
        name: "BX-00",
        image: "https://i.ibb.co/nsNSpDZM/PW-4-B00.webp"
      },
    ]
  },
  {
    id: "WG-001",
    name: "Wyvern Gale",
    image: "https://i.ibb.co/nNwbhPn9/WG-1-B24.webp",
    category: "blade",
    type:"stamina",
    price: "BX-24",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "5-80 Gear Ball",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "9-60, 3-80",
      "Bit": "Ball",
    },
    bey: [
      {
        id: "WG-002",
        name: "BX-24",
        image: "https://i.ibb.co/RTZLt8Wn/WG-2-B24.webp"
      },
      {
        id: "WG-003",
        name: "UX-07",
        image: "https://i.ibb.co/DHbvc2gF/WG-3-U07.webp"
      },
      {
        id: "WG-004",
        name: "UX-12",
        image: "https://i.ibb.co/SwDGpb6v/WG-4-U12.webp"
      },
    ]
  },
  {
    id: "US-001",
    name: "Unicorn Sting",
    image: "https://i.ibb.co/Ngq8QzDT/US-1-B26.webp",
    category: "blade",
    type:"balance",
    price: "BX-26",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "5-60 Gear Point",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-60",
      "Bit": "Point, Gear Point, Ball",
    },
    bey: [
      {
        id: "US-002",
        name: "BX-35",
        image: "https://i.ibb.co/DPsr9PJF/US-2-B35.webp"
      },
    ]
  },
  {
    id: "SC-001",
    name: "Sphinx Cowl",
    image: "https://i.ibb.co/Lz9t60PV/SC-1-B27.webp",
    category: "blade",
    type:"defense",
    price: "BX-27",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "9-80 Gear Needle",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "1-60, 3-60",
      "Bit": "Hexa, Spike",
    },
    bey: [
      {
        id: "SC-002",
        name: "BX-27",
        image: "https://i.ibb.co/5hSjMhkS/SC-2-B27.webp"
      },
      {
        id: "SC-003",
        name: "BX-27",
        image: "https://i.ibb.co/Fqkq8Hvq/SC-3-B27.webp"
      },
      {
        id: "SC-004",
        name: "UX-07",
        image: "https://i.ibb.co/PG3h6nHR/SC-4-U07.webp"
      },
    ]
  },
  {
    id: "DB-001",
    name: "Dran Buster",
    image: "https://i.ibb.co/jkhHF3kD/DB-1-U01.webp",
    category: "blade",
    type:"attack",
    price: "UX-01",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "1-60 Accel",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "1-60, 3-60, 5-60, 7-60",
      "Bit": "Flat, Low Flat, Rush, Low Rush",
    },
    bey: [
      {
        id: "DB-002",
        name: "UX-04",
        image: "https://i.ibb.co/8nc3jQZ8/DB-2-U04.webp"
      },
      {
        id: "DB-003",
        name: "UX-00",
        image: "https://i.ibb.co/LXm2NgHp/DB-3-U00.webp"
      },
      {
        id: "DB-004",
        name: "UX-00",
        image: "https://i.ibb.co/GQksyfXB/DB-4-LTD1.webp"
      },
      {
        id: "DB-005",
        name: "UX-00",
        image: "https://i.ibb.co/4ZTZKwt9/DB-5-LTD2.webp"
      },
      {
        id: "DB-006",
        name: "UX-00",
        image: "https://i.ibb.co/GvCK9FW3/DB-6-LTD3.webp"
      },
      {
        id: "DB-007",
        name: "UX-00",
        image: "https://i.ibb.co/pjMnLD7w/DB-7-U00.webp"
      },
      {
        id: "DB-008",
        name: "UX-00",
        image: "https://i.ibb.co/yn47CjJb/DB-8-U00.webp"
      },
      {
        id: "DB-009",
        name: "CX-08",
        image: "https://i.ibb.co/MDLYBsgR/DB-9-C08.webp"
      },
    ]
  },
  {
    id: "HH-001",
    name: "Hells Hammer",
    image: "https://i.ibb.co/5h9B4pBW/HH-1-U02.webp",
    category: "blade",
    type:"balance",
    price: "UX-02",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "3-70 Hexa",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "7-70, 9-60, 9-60",
      "Bit": "Hexa, Point",
    },
    bey: [
      {
        id: "HH-002",
        name: "UX-10",
        image: "https://i.ibb.co/3tzKJFW/HH-2-U10.webp"
      },
      {
        id: "HH-003",
        name: "UX-00",
        image: "https://i.ibb.co/wrQFjYRd/HH-3-U00.webp"
      },
    ]
  },
  {
    id: "WR-001",
    name: "Wizard Rod",
    image: "https://i.ibb.co/fY7sCHPy/WR-1-U03.webp",
    category: "blade",
    type:"stamina",
    price: "UX-03",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "5-70 Disc Ball",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "9-60, 3-60, 5-70",
      "Bit": "Ball, Under Needle",
    },
    bey: [
      {
        id: "WR-002",
        name: "UX-04",
        image: "https://i.ibb.co/fVR6nWmd/WR-2-U04.webp"
      },
      {
        id: "WR-003",
        name: "BX-35",
        image: "https://i.ibb.co/KcKGrbHc/WR-3-B35.webp"
      },
      {
        id: "WR-004",
        name: "G3 Prize",
        image: "https://i.ibb.co/YBkMFQS0/WR-4-G3P.webp"
      },
    ]
  },
  {
    id: "TB-001",
    name: "Tyranno Beat",
    image: "https://i.ibb.co/ycnqcV1s/TB-1-B31.webp",
    category: "blade",
    type:"attack",
    price: "BX-31",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "4-70 Quake",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "5-70, 3-70",
      "Bit": "Point, Rush",
    },
    bey: [
      {
        id: "TB-002",
        name: "BX-31",
        image: "https://i.ibb.co/gZpSpZDP/TB-2-B31.webp"
      },
      {
        id: "TB-003",
        name: "UX-10",
        image: "https://i.ibb.co/KcdGRtMh/TB-3-U10.webp"
      },
    ]
  },
  {
    id: "SSw-001",
    name: "Shinobi Shadow",
    image: "https://i.ibb.co/9kQk4ZGV/SSw-1-U05.webp",
    category: "blade",
    type:"defense",
    price: "UX-05",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~28 g",
      "Stock Combo": "1-80 Metal Needle",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "6-80, 5-70, 9-60, 5-80",
      "Bit": "Orb",
    },
    bey: [
      {
        id: "SSw-002",
        name: "UX-05",
        image: "https://i.ibb.co/xtQ1WPWb/SSw-2-U005.webp"
      },
      {
        id: "SSw-003",
        name: "UX-05",
        image: "https://i.ibb.co/MkdtLYq3/SSw-3-U05.webp"
      },
      {
        id: "SSw-004",
        name: "UX-12",
        image: "https://i.ibb.co/kgNMDjGv/SSw-4-U12.webp"
      },
    ]
  },
  {
    id: "WT-001",
    name: "Weiss Tiger",
    image: "https://i.ibb.co/27w3KWWC/WT-1-B33.webp",
    category: "blade",
    type:"balance",
    price: "BX-33",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~34 g",
      "Stock Combo": "3-60 Unite",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "6-60, 5-60, 7-60",
      "Bit": "Unite, Taper, Low Flat",
    },
    // bey: [
    //   {
    //     id: "WT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "CDg-001",
    name: "Cobalt Dragoon",
    image: "https://i.ibb.co/pvQHqSHM/CDg-1-B34.webp",
    category: "blade",
    type:"attack",
    price: "BX-34",
    specs: {
      "Type": "Attack",
      "Spin": "Left",
      "Weight": "~38 g",
      "Stock Combo": "2-60 Cyclone",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "6-60, 5-60, 1-60, 3-60",
      "Bit": "Elevate, Level, Low Rush, Rush",
    },
    bey: [
      {
        id: "CDg-002",
        name: "BX-00",
        image: "https://i.ibb.co/GvN6TM6Y/CDg-2-B00.webp"
      },
      {
        id: "CDg-003",
        name: "CX-08",
        image: "https://i.ibb.co/0Vyt3PK2/CDg-3-C08.webp"
      },
    ]
  },
  {
    id: "BSl-001",
    name: "Black Shell",
    image: "https://i.ibb.co/kV9RTVYn/BSl-1-B35.webp",
    category: "blade",
    type:"defense",
    price: "BX-35",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "4-60 Dot",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "7-60, 6-60, 5-60, 4-55",
      "Bit": "Low Flat, Under Needle",
    },
    bey: [
      {
        id: "BSl-002",
        name: "BX-35",
        image: "https://i.ibb.co/x8cKGMGw/BSl-2-B35.webp"
      },
      {
        id: "BSl-003",
        name: "CX-08",
        image: "https://i.ibb.co/5xtZDZrh/BSl-3-C08.webp"
      },
    ]
  },
  {
    id: "LCT-001",
    name: "Leon Crest",
    image: "https://i.ibb.co/Zz3D7qkL/LCT-1-U06.webp",
    category: "blade",
    type:"defense",
    price: "UX-06",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "7-60 Gear Needle",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "7-60, 5-60",
      "Bit": "Flat, Orb",
    },
    bey: [
      {
        id: "LCT-002",
        name: "CX-05",
        image: "https://i.ibb.co/ymsy12LQ/LCT-2-C05.webp"
      },
    ]
  },
  {
    id: "PR-001",
    name: "Phoenix Rudder",
    image: "https://i.ibb.co/VcbnBVfV/PR-1-U07.webp",
    category: "blade",
    type:"stamina",
    price: "UX-07",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~34 g",
      "Stock Combo": "9-70 Glide",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "9-60, 7-70, 9-70",
      "Bit": "Orb, Hexa, Ball",
    },
    bey: [
      {
        id: "PR-002",
        name: "CX-05",
        image: "https://i.ibb.co/XvZnwDC/PR-2-C05.webp"
      },
    ]
  },
  {
    id: "WW-001",
    name: "Whale Wave",
    image: "https://i.ibb.co/v6WNXDz3/WW-1-B36.webp",
    category: "blade",
    type:"balance",
    price: "BX-36",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~38 g",
      "Stock Combo": "5-80 Elavate",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "7-60, 7-70, 9-60",
      "Bit": "Rush, Low Rush, Flat",
    },
    bey: [
      {
        id: "WW-002",
        name: "BX-36",
        image: "https://i.ibb.co/mVvtBGY7/WW-2-B36.webp"
      },
      {
        id: "WW-003",
        name: "BX-36",
        image: "https://i.ibb.co/wnyW6K6/WW-3-B36.webp"
      },
      {
        id: "WW-004",
        name: "CX-05",
        image: "https://i.ibb.co/gKnzQDL/WW-4-C05.webp"
      },
    ]
  },
  {
    id: "BSc-001",
    name: "Bear Scratch",
    image: "https://i.ibb.co/SDfXPWbF/BSc-1-B37.webp",
    category: "blade",
    type:"attack",
    price: "BX-37",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~29 g",
      "Stock Combo": "5-60 Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "4-80, 9-60",
      "Bit": "Taper",
    },
    // bey: [
    //   {
    //     id: "BSc-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "SW-001",
    name: "Silver Wolf",
    image: "https://i.ibb.co/4gZf8gxT/SW-1-U08.webp",
    category: "blade",
    type:"stamina",
    price: "UX-08",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "3-80 Free Ball",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "9-60, 9-70, 7-60",
      "Bit": "Free Ball, Ball, High Needle, Hexa",
    },
    // bey: [
    //   {
    //     id: "SW-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "SSr-001",
    name: "Samurai Saber",
    image: "https://i.ibb.co/1txNx0QD/SSr-1-U09.webp",
    category: "blade",
    type:"attack",
    price: "UX-09",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "2-70 Level",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "3-60, 9-60, 5-60",
      "Bit": "Level, Taper, Ball",
    },
    bey: [
      {
        id: "SSr-002",
        name: "UX-00",
        image: "https://i.ibb.co/bjSHyzWg/SSr-2-U00.webp"
      },
    ]
  },
  {
    id: "KM-001",
    name: "Knight Mail",
    image: "https://i.ibb.co/zHBzhLzt/KM-1-U10.webp",
    category: "blade",
    type:"defense",
    price: "UX-10",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "3-85 Bound Spike",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "3-60, 7-60, 1-60, 5-60",
      "Bit": "Dot, Metal Needle, Level, Low Rush",
    },
    // bey: [
    //   {
    //     id: "KM-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "PS-001",
    name: "Ptera Swing",
    image: "https://i.ibb.co/BHsTx3T2/PS-1-U10.webp",
    category: "blade",
    type:"stamina",
    price: "UX-10",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~34 g",
      "Stock Combo": "7-70 Ball",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "1-60, 9-60, 3-80",
      "Bit": "Low Flat, Ball",
    },
    // bey: [
    //   {
    //     id: "PS-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "CG-001",
    name: "Crimson Garuda",
    image: "https://i.ibb.co/HD6qp9nf/CG-1-B38.webp",
    category: "blade",
    type:"balance",
    price: "BX-38",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "4-70 Trans Point",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "7-70, 9-60, 5-60",
      "Bit": "Taper, Rush, Low Flat",
    },
    // bey: [
    //   {
    //     id: "CG-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "ID-001",
    name: "Impact Drake",
    image: "https://i.ibb.co/93VWgjL1/ID-1-U11.webp",
    category: "blade",
    type:"attack",
    price: "UX-11",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~39 g",
      "Stock Combo": "9-60 Low Rush",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "9-60, 4-60, 7-70, 7-80",
      "Bit": "Low Rush, Rush, Level, Gear Rush",
    },
    // bey: [
    //   {
    //     id: "ID-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "GC-001",
    name: "Ghost Circle",
    image: "https://i.ibb.co/7tJZH3hb/GC-1-U12.webp",
    category: "blade",
    type:"stamina",
    price: "UX-12",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~26 g",
      "Stock Combo": "0-80 Gear Ball",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "0-80, 9-60, 7-60, 5-80",
      "Bit": "Ball, Hexa, Bound Spike, Elevate",
    },
    bey: [
      {
        id: "GC-002",
        name: "UX-12",
        image: "https://i.ibb.co/MyKCQx7y/GC-2-U12.webp"
      },
    ]
  },
  {
    id: "GR-001",
    name: "Golem Rock",
    image: "https://i.ibb.co/N0MY0LF/GR-1-U13.webp",
    category: "blade",
    type:"defense",
    price: "UX-13",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~34 g",
      "Stock Combo": "1-60 Under Neddle",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "7-60, 7-70, 5-60, 1-60",
      "Bit": "Under Needle, Hexa , Low Rush",
    },
    // bey: [
    //   {
    //     id: "GR-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "SDk-001",
    name: "Shleter Drake",
    image: "https://i.ibb.co/xqPCD6hq/SDk-1-B39.webp",
    category: "blade",
    type:"balance",
    price: "BX-39",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "7-80 Gear Point",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "9-60, 3-60, 1-60",
      "Bit": "Low Flat, Trans Point, Under Needle",
    },
    bey: [
      {
        id: "SDk-002",
        name: "BX-39",
        image: "https://i.ibb.co/8npbt9wf/SDk-2-B39.webp"
      },
      {
        id: "SDk-003",
        name: "BX-39",
        image: "https://i.ibb.co/VppwHZK7/SDk-3-B39.webp"
      },
    ]
  },
  {
    id: "DBS-001",
    name: "Dran Brave S",
    image: "https://i.ibb.co/WNP49D0p/DBS-1-C01.webp",
    category: "blade",
    type:"attack",
    price: "CX-01",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "6-60 Vortex",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "3-60, 1-60, 5-60, 7-60",
      "Bit": "Flat, Rush, Low Rush, Gear Rush",
    },
    bey: [
      {
        id: "DBS-002",
        name: "CX-04",
        image: "https://i.ibb.co/0pYwhrRB/DBS-2-C04.webp"
      },
    ]
  },
  {
    id: "WAR-001",
    name: "Wizard Arc R",
    image: "https://i.ibb.co/PzrFrsqt/WAR-1-C02.webp",
    category: "blade",
    type:"stamina",
    price: "CX-02",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "4-55 Low Orb",
      "Assist Blade": "Round",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-70",
      "Bit": "Ball, Hexa, Low Orb, Orb",
    },
    bey: [
      {
        id: "WAR-002",
        name: "CX-00",
        image: "https://i.ibb.co/JRy1Ch0Y/WAR-2-C00.webp"
      },
    ]
  },
  {
    id: "PDB-001",
    name: "Perseus Dark B",
    image: "https://i.ibb.co/1Cq0bqk/PDB-1-C03.webp",
    category: "blade",
    type:"defense",
    price: "CX-03",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "6-80 Wedge",
      "Assist Blade": "Bumper",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 7-70, 4-60",
      "Bit": "High Needle, Metal Needle, Dot, Low Rush",
    },
    bey: [
      {
        id: "PDB-002",
        name: "CX-04",
        image: "https://i.ibb.co/M5jDMj6y/PDB-2-C04.webp"
      },
      {
        id: "PDB-003",
        name: "G3 Prize",
        image: "https://i.ibb.co/pBTH7C8y/PDB-3-G3-P.webp"
      },
    ]
  },
  {
    id: "HRT-001",
    name: "Hells Reaper T",
    image: "https://i.ibb.co/Fk094YjS/HRT-1-C05.webp",
    category: "blade",
    type:"balance",
    price: "CX-05",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "4-70 Kick",
      "Assist Blade": "Turn",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-60, 5-80",
      "Bit": "Taper, Kick, Rush",
    },
    bey: [
      {
        id: "HRT-002",
        name: "CX-05 (Hells Arc T)",
        image: "https://i.ibb.co/vxRW58zD/HRT-2-C05.webp"
      },
    ]
  },
  {
    id: "RRC-001",
    name: "Rhino Reaper C",
    image: "https://i.ibb.co/VYwCTRkb/RRC-1-C05.webp",
    category: "blade",
    type:"defense",
    price: "CX-05",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "4-55 Dot",
      "Assist Blade": "Charge",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-60, 5-80",
      "Bit": "Taper, Kick, Rush, Dot",
    },
    // bey: [
    //   {
    //     id: "RRC-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "SSp-001",
    name: "Scorpio Spear",
    image: "https://i.ibb.co/391sdH6d/SSp-1-U14.webp",
    category: "blade",
    type:"balance",
    price: "UX-14",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~39 g",
      "Stock Combo": "0-70 Zap",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 0-70",
      "Bit": "Point, Kick, Taper, Hexa",
    },
    // bey: [
    //   {
    //     id: "SSp-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "FBJ-001",
    name: "Fox Brush J",
    image: "https://i.ibb.co/XwHSLJr/FBJ-1-C06.webp",
    category: "blade",
    type:"attack",
    price: "CX-06",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~36? g",
      "Stock Combo": "9-70 Gear Rush",
      "Assist Blade": "Jaggy",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "1-60, 6-60, 9-60, 5-60, 7-60",
      "Bit": "Taper, Low Rush, Low Flat, Gear Rush",
    },
    bey: [
      {
        id: "FBJ-002",
        name: "CX-06",
        image: "https://i.ibb.co/8DB3pTJb/FBJ-2-C06.webp"
      },
      {
        id: "FBJ-003",
        name: "CX-06",
        image: "https://i.ibb.co/PZPHR9Bp/FBJ-3-C06.webp"
      },
    ]
  },
  {
    id: "TPs-001",
    name: "Tricera Press",
    image: "https://i.ibb.co/KxPCPGJp/TPs-1-B44.webp",
    category: "blade",
    type:"defense",
    price: "BX-44",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "M-85 BS",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "5-70, 5-60",
      "Bit": "Wedge",
    },
    // bey: [
    //   {
    //     id: "TPs-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "PBA-001",
    name: "Pegasus Blast A",
    image: "https://i.ibb.co/zhvkgRmL/PBA-1-C07.webp",
    category: "blade",
    type:"attack",
    price: "CX-07",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "Tr",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "PBA-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "CFW-001",
    name: "Cerberus Flame W",
    image: "https://i.ibb.co/VcQ0v6Ls/CFW-1-C08.webp",
    category: "blade",
    type:"stamina",
    price: "CX-08",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "5-80 WB",
      "Assist Blade": "Wheel",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    bey: [
      {
        id: "CFW-002",
        name: "CX-08 (Cerberus Dark W)",
        image: "https://i.ibb.co/zWN3G949/CFW-2-C08.webp"
      },
    ]
  },
  {
    id: "WFM-001",
    name: "Whale Flame M",
    image: "https://i.ibb.co/tpHHqbQh/WFM-1-C08.webp",
    category: "blade",
    type:"balance",
    price: "CX-08",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "3-85 HT",
      "Assist Blade": "Massive",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "WFM-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  //RARE BLADE
  {
    id: "CDk-001",
    name: "Cobalt Drake",
    image: "https://i.ibb.co/KjHsS8q2/CDk-1-B00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~38 g",
      "Stock Combo": "4-60 Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "9-60, 1-60, 5-60, 7-60",
      "Bit": "Flat, Point, Rush",
    },
    bey: [
      {
        id: "CDk-002",
        name: "BX-00",
        image: "https://i.ibb.co/4ggqPtvt/CDk-2-B00.webp"
      },
    ]
  },
  {
    id: "PF-001",
    name: "Phoenix Feather",
    image: "https://i.ibb.co/NgYDNzQ0/PF-1-B00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "3-60 Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "3-60, 5-60, 7-60",
      "Bit": "Vortex, Rush",
    },
    bey: [
      {
        id: "PF-002",
        name: "UX-12",
        image: "https://i.ibb.co/MyvGTPGr/PF-2-U12.webp"
      },
      {
        id: "PF-002",
        name: "BX-00",
        image: "https://i.ibb.co/bjY3fZy8/PF-3-B00.webp"
      },
    ]
  },
  {
    id: "AP-001",
    name: "Aero Pegasus",
    image: "https://i.ibb.co/5XY6MgBH/AP-1-U00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "UX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~38 g",
      "Stock Combo": "3-70 Accel",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "3-60, 9-60, 5-60, 7-60",
      "Bit": "Rush, Low Rush, level",
    },
    // bey: [
    //   {
    //     id: "AP-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "SK-001",
    name: "Shinobi Knife (XONE)",
    image: "https://i.ibb.co/vxw8CZC7/SK-1-XONE.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "4-60 Low Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "4-60, 4-80, 9-60",
      "Bit": "Level, Low Rush, Taper",
    },
    // bey: [
    //   {
    //     id: "SK-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "MT-001",
    name: "Mammoth Tusk",
    image: "https://i.ibb.co/mrrM6Jzz/MT-1-B00.webp",
    category: "blade",
    type: ["balance", "rare"],
    price: "BX-00",
    specs: {
      "Type": "Balacne",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "2-80 Elevate",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "6-60, 5-60, 9-60, 1-60",
      "Bit": "Flat, Low Flat, Taper, Gear Point",
    },
    // bey: [
    //   {
    //     id: "MT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "CC-001",
    name: "Croc Crunch",
    image: "https://i.ibb.co/C3jpr2Th/CC-1-B00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "2-60 Quake",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "3-60, 1-60, 5-60",
      "Bit": "Low Rush, Low Flat, Gear Rush",
    },
    // bey: [
    //   {
    //     id: "CC-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "SSt-001",
    name: "Samurai Steel",
    image: "https://i.ibb.co/ZRdNsxyV/SSt-1-B00.webp",
    category: "blade",
    type:["attack", "rare"],
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "5-70 Gear Flat",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "5-60, 9-60, 7-60",
      "Bit": "Level, Flat, Point",
    },
    // bey: [
    //   {
    //     id: "SSt-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "LFT-001",
    name: "Leon Fang T (Red Ver.)",
    image: "https://i.ibb.co/twWHjc2b/LFT-1-RED.webp",
    category: "blade",
    type:["attack", "rare"],
    price: "CX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "4-60 Accel",
      "Assist Blade": "Turn",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "LFT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "DAS-001",
    name: "Dran Arc S (MC Blue)",
    image: "https://i.ibb.co/Hp9J3rBn/Persona-CX.webp",
    category: "blade",
    type:["balance", "rare"],
    price: "CX-00",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "2-70 Kick",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "5-60",
      "Bit": "Hexa",
    },
    // bey: [
    //   {
    //     id: "DAS-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  // ASSIST BLADES
  {
    id: "S-001",
    name: "Slash",
    image: "https://i.ibb.co/Cpv5ZKcn/S-1-C01.webp",
    category: "assist-blade",
    price: "CX-01",
    specs: {
      "Spin": "Right",
      "Weight": "~4 g",
      "High Level": "~9 MM",
    },
    bey: [
      {
        id: "S-002",
        name: "CX-04",
        image: "https://i.ibb.co/Zp90jhR3/S-2-C04.webp"
      },
    ]
  },
  {
    id: "R-001",
    name: "Round",
    image: "https://i.ibb.co/B5W0gtY8/R-1-C02.webp",
    category: "assist-blade",
    price: "CX-02",
    specs: {
      "Spin": "Right",
      "Weight": "~4 g",
      "High Level": "~10 MM",
    },
    bey: [
      {
        id: "R-002",
        name: "CX-00",
        image: "https://i.ibb.co/mC2xhrQ7/R-2-C00.webp"
      },
    ]
  },
  {
    id: "B-001",
    name: "Bumper",
    image: "https://i.ibb.co/CsXLs9tV/B-1-C03.webp",
    category: "assist-blade",
    price: "CX-03",
    specs: {
      "Spin": "Right",
      "Weight": "~5 g",
      "High Level": "~10 MM",
    },
    bey: [
      {
        id: "B-002",
        name: "CX-04",
        image: "https://i.ibb.co/bjSR90Rb/B-2-C04.webp"
      },
    ]
  },
  {
    id: "T-001",
    name: "Turn",
    image: "https://i.ibb.co/p62pryH9/T-1-C05.webp",
    category: "assist-blade",
    price: "CX-05",
    specs: {
      "Spin": "Right",
      "Weight": "~6 g",
      "High Level": "~10 MM",
    },
    bey: [
      {
        id: "T-002",
        name: "CX-05",
        image: "https://i.ibb.co/VW2GdZHW/T-2-C05.webp"
      },
      {
        id: "T-003",
        name: "CX-00",
        image: "https://i.ibb.co/7tL83gw9/T-3-C00.webp"
      },
    ]
  },
  {
    id: "C-001",
    name: "Charge",
    image: "https://i.ibb.co/1JXJ2CB7/C-1-C05.webp",
    category: "assist-blade",
    price: "CX-05",
    specs: {
      "Spin": "Right",
      "Weight": "~5 g",
      "High Level": "~10 MM",
    },
    // bey: [
    //   {
    //     id: "C-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "J-001",
    name: "Jaggy",
    image: "https://i.ibb.co/1JP9XPQj/J-1-C06.webp",
    category: "assist-blade",
    price: "CX-06",
    specs: {
      "Spin": "Right",
      "Weight": "~5 g",
      "High Level": "~9 MM",
    },
    bey: [
      {
        id: "J-002",
        name: "CX-06",
        image: "https://i.ibb.co/7J0mqvnj/J-2-C06.webp"
      },
      {
        id: "J-003",
        name: "CX-06",
        image: "https://i.ibb.co/qYr6pSBy/J-3-C06.webp"
      },
    ]
  },
  {
    id: "A-001",
    name: "Assault",
    image: "https://i.ibb.co/LdDXTjKk/A-1-C07.webp",
    category: "assist-blade",
    price: "CX-07",
    specs: {
      "Spin": "Right",
      "Weight": "~ g",
      "High Level": "~ MM",
    },
    // bey: [
    //   {
    //     id: "A-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "W-001",
    name: "Wheel",
    image: "https://i.ibb.co/Y4rMVF0y/W-1-C08.webp",
    category: "assist-blade",
    price: "CX-08",
    specs: {
      "Spin": "Right",
      "Weight": "~ g",
      "High Level": "~ MM",
    },
    bey: [
      {
        id: "W-002",
        name: "CX-08",
        image: ""
      },
    ]
  },
  {
    id: "M-001",
    name: "Massive",
    image: "https://i.ibb.co/jPjx5q0t/M-1-C08.webp",
    category: "assist-blade",
    price: "CX-08",
    specs: {
      "Spin": "Right",
      "Weight": "~ g",
      "High Level": "~ MM",
    },
    // bey: [
    //   {
    //     id: "M-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  // RATCHETS
  {
    id: "070-001",
    name: "0-70 (UX-14)",
    image: "https://i.ibb.co/1ftYncmr/0-70-1-U14.webp",
    category: "ratchet",
    price: "0-70",
    features: [
      "0 Contact Points",
      "High : 7.0 mm",
      "Weight: ~7 g",
    ],
    // bey: [
    //   {
    //     id: "080-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "080-001",
    name: "0-80 (UX-12)",
    image: "https://i.ibb.co/hxLdSfhf/0-80-1-U12.webp",
    category: "ratchet",
    price: "0-80",
    features: [
      "0 Contact Points",
      "High : 8.0 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "080-002",
        name: "UX-12",
        image: "https://i.ibb.co/6cVdqyVC/0-80-2-U12.webp"
      },
      {
        id: "080-003",
        name: "UX-12",
        image: "https://i.ibb.co/RTXGkgKr/0-80-3-U12.webp"
      },
      {
        id: "080-004",
        name: "CX-06",
        image: "https://i.ibb.co/0RZR7ZyH/0-80-4-C06.webp"
      },
    ]
  },
  {
    id: "160-001",
    name: "1-60 (UX-01)",
    image: "https://i.ibb.co/39mbJTH1/1-60-1-U01.webp",
    category: "ratchet",
    price: "1-60",
    features: [
      "1 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "160-002",
        name: "UX-04",
        image: "https://i.ibb.co/wZqn88m5/1-60-2-U04.webp"
      },
      {
        id: "160-003",
        name: "BX-31",
        image: "https://i.ibb.co/BKdhw5R6/1-60-3-B31.webp"
      },
      {
        id: "160-004",
        name: "BX-35",
        image: "https://i.ibb.co/XffCCMYL/1-60-4-B35.webp"
      },
      {
        id: "160-005",
        name: "BX-00",
        image: "https://i.ibb.co/n886nNmt/1-60-5-B00.webp"
      },
      {
        id: "160-006",
        name: "UX-10",
        image: "https://i.ibb.co/rKmMB0kw/1-60-6-U10.webp"
      },
      {
        id: "160-007",
        name: "UX-13",
        image: "https://i.ibb.co/BKQPS0rv/1-60-7-U00.webp"
      },
      {
        id: "160-008",
        name: "Park Limited",
        image: "https://i.ibb.co/spwXkfqS/1-60-8-LTD.webp"
      },
      {
        id: "160-009",
        name: "Park Limited",
        image: "https://i.ibb.co/cK8pbBhj/1-60-9-LTD.webp"
      },
      {
        id: "160-00=10",
        name: "Park Limited",
        image: "https://i.ibb.co/9kkfV44b/1-60-10-LTD.webp"
      },
      {
        id: "160-011",
        name: "Park Limited",
        image: "https://i.ibb.co/kVZ5Vvqr/1-60-11-LTD.webp"
      },
      {
        id: "160-012",
        name: "Park Limited",
        image: "https://i.ibb.co/rRg6jcYC/1-60-12-LTD.webp"
      },
      {
        id: "160-013",
        name: "Park Limited",
        image: "https://i.ibb.co/Dgwfc2Nd/1-60-13-LTD.webp"
      },
      {
        id: "160-014",
        name: "UX-13",
        image: "https://i.ibb.co/nN0nY7JM/1-60-14-U13.webp"
      },
    ]
  },
  {
    id: "180-001",
    name: "1-80 (UX-05)",
    image: "https://i.ibb.co/MwrKzWg/1-80-1-U05.webp",
    category: "ratchet",
    price: "1-80",
    features: [
      "1 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6.5 g",
    ],
    bey: [
      {
        id: "180-002",
        name: "UX-07",
        image: "https://i.ibb.co/YTWjYHJr/1-80-2-U07.webp"
      },
      {
        id: "180-003",
        name: "Collab",
        image: "https://i.ibb.co/Mk4L5PX0/1-80-3-Col.webp"
      },
    ]
  },
  {
    id: "260-001",
    name: "2-60 (BX-34)",
    image: "https://i.ibb.co/Vc4KzB0n/2-60-1-B34.webp",
    category: "ratchet",
    price: "2-60",
    features: [
      "2 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6.2 g",
    ],
    bey: [
      {
        id: "260-002",
        name: "BX-00",
        image: "https://i.ibb.co/QxX2PQ2/2-60-2-B00.webp"
      },
      {
        id: "260-003",
        name: "UX-07",
        image: "https://i.ibb.co/n87K2g6k/2-60-3-U07.webp"
      },
      {
        id: "260-004",
        name: "25th Anniversary",
        image: "https://i.ibb.co/dw9gMt0F/2-60-4-25th.webp"
      },
      {
        id: "260-005",
        name: "UX-12",
        image: "https://i.ibb.co/5xFhGnM5/2-60-5-U12.webp"
      },
      {
        id: "260-006",
        name: "BX-00",
        image: "https://i.ibb.co/DD66dnSb/2-60-6-B00.webp"
      },
      {
        id: "260-007",
        name: "CX-06",
        image: "https://i.ibb.co/tNWJ9G7/2-60-7-C06.webp"
      },
    ]
  },
  {
    id: "270-001",
    name: "2-70 (UX-09)",
    image: "https://i.ibb.co/HfD0mdf5/2-70-1-U09.webp",
    category: "ratchet",
    price: "2-70",
    features: [
      "2 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6.3 g",
    ],
    bey: [
      {
        //metal coat orange
        id: "270-002",
        name: "UX-00",
        image: ""
      },
    ]
  },
  {
    id: "280-001",
    name: "2-80 (BX-00)",
    image: "https://i.ibb.co/RGFDdmY8/2-80-1-B00.webp",
    category: "ratchet",
    price: "2-80",
    features: [
      "2 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6.9 g",
    ],
    bey: [
      {
        id: "280-002",
        name: "BX-00",
        image: "https://i.ibb.co/N60MgZrz/2-80-2-B00.webp"
      },
    ]
  },
  {
    id: "360-001",
    name: "3-60 (BX-01)",
    image: "https://i.ibb.co/Qv29Y5pf/3-60-1-B01.webp",
    category: "ratchet",
    price: "3-60",
    features: [
      "3 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "360-002",
        name: "BX-07",
        image: "https://i.ibb.co/dsm9xW62/3-60-2-B07.webp"
      },
      {
        id: "360-003",
        name: "BX-14",
        image: "https://i.ibb.co/ch9X0FV6/3-60-3-B14.webp"
      },
      {
        id: "360-004",
        name: "BX-14",
        image: "https://i.ibb.co/2fskgqs/3-60-4-B14.webp"
      },
      {
        id: "360-005",
        name: "BX-17",
        image: "https://i.ibb.co/zTfFvLXS/3-60-5-B17.webp"
      },
      {
        id: "360-006",
        name: "BX-21",
        image: "https://i.ibb.co/2YLzfWqd/3-60-6-B21.webp"
      },
      {
        id: "360-007",
        name: "BX-24",
        image: "https://i.ibb.co/9kyzR5qd/3-60-7-B24.webp"
      },
      {
        id: "360-008",
        name: "BX-31",
        image: "https://i.ibb.co/zhcPx6wc/3-60-8-B31.webp"
      },
      {
        id: "360-009",
        name: "BX-33",
        image: "https://i.ibb.co/2YhDhGfV/3-60-9-B33.webp"
      },
      {
        id: "360-010",
        name: "BX-39",
        image: "https://i.ibb.co/BVpxTtQw/3-60-10-B39.webp"
      },
      {
        id: "360-011",
        name: "Collab",
        image: "https://i.ibb.co/5X188nJ7/3-60-11-Col.webp"
      },
      {
        id: "360-012",
        name: "Collab",
        image: "https://i.ibb.co/9H7Dh5wR/3-60-12-Col.webp"
      },
      {
        id: "360-013",
        name: "Collab",
        image: "https://i.ibb.co/MktJJJb2/3-60-13-Col.webp"
      },
      {
        id: "360-014",
        name: "B00",
        image: "https://i.ibb.co/KpcP076z/3-60-14-B00.webp"
      },
    ]
  },
  {
    id: "370-001",
    name: "3-70 (UX-02)",
    image: "https://i.ibb.co/7JNjTb1r/3-70-1.webp",
    category: "ratchet",
    price: "3-70",
    features: [
      "3 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "370-002",
        name: "UX-05",
        image: ""
      },
      {
        id: "370-003",
        name: "UX-00",
        image: ""
      },
      {
        id: "370-004",
        name: "BX-35",
        image: ""
      },
      {
        id: "370-005",
        name: "UX-00",
        image: ""
      },
      {
        id: "370-006",
        name: "UX-00",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-380",
    name: "3-80 (BX-04)",
    image: "https://i.ibb.co/hJyK6nNH/3-80-1.webp",
    category: "ratchet",
    price: "3-80",
    features: [
      "3 Contact Points",
      "High : 8.0 mm",
      "Weight: ~7.1 g",
    ],
    bey: [
      {
        id: "380-001",
        name: "BX-06",
        image: "https://i.ibb.co/3537qJp8/3-80-2.png"
      },
      {
        id: "380-002",
        name: "BX-08",
        image: "https://i.ibb.co/hJVRcvsK/3-80-3.png"
      },
      {
        id: "380-003",
        name: "BX-14",
        image: "https://i.ibb.co/4nwBkzVR/3-80-4.png"
      },
      {
        id: "380-004",
        name: "BX-16",
        image: "https://i.ibb.co/3YvPmsXW/3-80-5.png"
      },
      {
        id: "380-005",
        name: "BX-19",
        image: "https://i.ibb.co/gLJ2XR7T/3-80-6.png"
      },
      {
        id: "380-006",
        name: "BX-20",
        image: "https://i.ibb.co/gbBqwbHP/3-80-7.png"
      },
      {
        id: "380-007",
        name: "BX-24",
        image: "https://i.ibb.co/MyzhchPp/3-80-8.png"
      },
      {
        id: "380-008",
        name: "BX-00",
        image: "https://i.ibb.co/xSdYmQhS/3-80-9.png"
      },
      {
        id: "380-009",
        name: "BX-00",
        image: "https://i.ibb.co/7tcPLkfX/3-80-10.png"
      },
      {
        id: "380-010",
        name: "UX-08",
        image: "https://i.ibb.co/zVTyrXdP/3-80-11.png"
      },
      {
        id: "380-011",
        name: "UX-12",
        image: "https://i.ibb.co/GvD6LvZH/3-80-12.png"
      },
      {
        id: "380-012",
        name: "Collab",
        image: "https://i.ibb.co/mC1S3dDX/3-80-13.png"
      },
      {
        id: "380-013",
        name: "Collab",
        image: "https://i.ibb.co/bgqrDmhS/3-80-14.png"
      },
      {
        id: "380-014",
        name: "Collab",
        image: "https://i.ibb.co/HQ1bbmW/3-80-15.png"
      },
    ]
  },
  {
    id: "ratchet-385",
    name: "3-85 (UX-10)",
    image: "https://i.ibb.co/0VG31SMS/3-85-1.webp",
    category: "ratchet",
    price: "3-85",
    features: [
      "3 Contact Points",
      "High : 8.5 mm",
      "Weight: ~4.7 g",
    ],
    bey: [
      {
        id: "385-001",
        name: "CX-05",
        image: "https://i.ibb.co/TxCfvjTG/3-85-2.png"
      },
      {
        id: "385-002",
        name: "Collab",
        image: "https://i.ibb.co/PstSp0rx/3-85-3.png"
      },
    ]
  },
  {
    id: "ratchet-455",
    name: "4-55 (CX-02)",
    image: "https://i.ibb.co/3yzN8j05/Ratchet4-55.webp",
    category: "ratchet",
    price: "4-55",
    features: [
      "4 Contact Points",
      "High : 4.5 mm",
      "Weight: ~4.8 g",
    ],
    bey: [
      {
        id: "455-001",
        name: "CX-05",
        image: "https://i.ibb.co/pvznvkvk/4-55-2.png"
      },
      {
        id: "455-002",
        name: "CX-08",
        image: ""
      },
      {
        id: "455-003",
        name: "Collab",
        image: "https://i.ibb.co/mCBv57CG/4-55-3.png"
      },
      {
        id: "455-004",
        name: "CX-00",
        image: "https://i.ibb.co/1GnbLngj/4-55-5-C00.png"
      },
    ]
  },
  {
    id: "ratchet-460",
    name: "4-60 (BX-02)",
    image: "https://i.ibb.co/ccTS0Ngq/4-60-1.webp",
    category: "ratchet",
    price: "4-60",
    features: [
      "4 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "460-001",
        name: "BX-08",
        image: "https://i.ibb.co/tMfqmp2M/4-60-2.png"
      },
      {
        id: "460-002",
        name: "BX-00",
        image: "https://i.ibb.co/mrkQ0DWs/4-60-3.png"
      },
      {
        id: "460-003",
        name: "BX-14",
        image: "https://i.ibb.co/DfJ2Pq2Q/4-60-4.png"
      },
      {
        id: "460-004",
        name: "BX-16",
        image: "https://i.ibb.co/V0P8XjVS/4-60-5.png"
      },
      {
        id: "460-005",
        name: "BX-20",
        image: "https://i.ibb.co/4RmQ7Xyf/4-60-6.png"
      },
      {
        id: "460-006",
        name: "BX-24",
        image: "https://i.ibb.co/Wvz4Fc54/4-60-7.png"
      },
      {
        id: "460-007",
        name: "BX-00",
        image: "https://i.ibb.co/WmfMjb5/4-60-8.png"
      },
      {
        id: "460-008",
        name: "BX-35",
        image: "https://i.ibb.co/93yVprhs/4-60-9.png"
      },
      {
        id: "460-009",
        name: "BX-00",
        image: "https://i.ibb.co/Lw572M0/4-60-10.png"
      },
      {
        id: "460-010",
        name: "BX-00",
        image: "https://i.ibb.co/MkyKnTwV/4-60-11.png"
      },
      {
        id: "460-011",
        name: "UX-12",
        image: "https://i.ibb.co/4wKQGwQP/4-60-12.png"
      },
      {
        id: "460-012",
        name: "Collab",
        image: "https://i.ibb.co/kVfz4yBG/4-60-13.png"
      },
      {
        id: "460-013",
        name: "Collab",
        image: "https://i.ibb.co/prBwRw0h/4-60-14.png"
      },
      {
        id: "460-014",
        name: "Collab",
        image: "https://i.ibb.co/hRfGCJM5/4-60-15.png"
      },
      {
        id: "460-016",
        name: "CX-00",
        image: "https://i.ibb.co/m5RBYqg1/4-60-16.png"
      },
    ]
  },
  {
    id: "ratchet-470",
    name: "4-70 (BX-31)",
    image: "https://i.ibb.co/jvD5Sv5Q/4-70-1.webp",
    category: "ratchet",
    price: "4-70",
    features: [
      "4 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6.5 g",
    ],
    bey: [
      {
        id: "470-001",
        name: "BX-31",
        image: "https://i.ibb.co/G4PW99Cx/4-70-2.png"
      },
      {
        id: "470-002",
        name: "BX-36",
        image: "https://i.ibb.co/zh9Crr56/4-70-3.png"
      },
      {
        id: "470-003",
        name: "BX-38",
        image: "https://i.ibb.co/99kychFw/4-70-4.png"
      },
      {
        id: "470-004",
        name: "CX-05",
        image: "https://i.ibb.co/NgZSTC1s/4-70-6.png"
      },
      {
        id: "470-005",
        name: "CX-05",
        image: "https://i.ibb.co/gLLhJsSY/4-70-5.png"
      },
    ]
  },
  {
    id: "ratchet-480",
    name: "4-80 (BX-03)",
    image: "https://i.ibb.co/KjzwjNrC/4-80-1.webp",
    category: "ratchet",
    price: "4-80",
    features: [
      "4 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "480-001",
        name: "BX-05",
        image: "https://i.ibb.co/jvfQGkqh/4-80-2.png"
      },
      {
        id: "480-002",
        name: "BX-08",
        image: "https://i.ibb.co/KjWrzs6d/4-80-3.png"
      },
      {
        id: "480-003",
        name: "BX-13",
        image: "https://i.ibb.co/DdL8NgT/4-80-4.png"
      },
      {
        id: "480-004",
        name: "BX-14",
        image: "https://i.ibb.co/Dg930Cd6/4-80-5.png"
      },
      {
        id: "480-005",
        name: "BX-14",
        image: "https://i.ibb.co/C3R0V7kY/4-80-6.png"
      },
      {
        id: "480-006",
        name: "BX-17",
        image: "https://i.ibb.co/9kGmyrrB/4-80-7.png"
      },
      {
        id: "480-007",
        name: "BX-21",
        image: "https://i.ibb.co/ch9sc89K/4-80-8.png"
      },
      {
        id: "480-008",
        name: "BX-24",
        image: "https://i.ibb.co/XfQFWH1p/4-80-9.png"
      },
      {
        id: "480-009",
        name: "BX-00",
        image: "https://i.ibb.co/HL0D1TSr/4-80-10.png"
      },
      {
        id: "480-010",
        name: "BX-27",
        image: "https://i.ibb.co/7N4LF2Hn/4-80-11.png"
      },
      {
        id: "480-011",
        name: "Collab",
        image: "https://i.ibb.co/jZr1vh8f/4-80-12.png"
      },
      {
        id: "480-012",
        name: "Collab",
        image: "https://i.ibb.co/WWXPc5xy/4-80-13.png"
      },
      {
        id: "480-013",
        name: "Collab",
        image: "https://i.ibb.co/Ngypm7GP/4-80-14.png"
      },
    ]
  },
  {
    id: "ratchet-560",
    name: "5-60 (BX-15)",
    image: "https://i.ibb.co/Gv4BdLY2/5-60-1.webp",
    category: "ratchet",
    price: "5-60",
    features: [
      "5 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.6 g",
    ],
    bey: [
      {
        id: "560-001",
        name: "BX-21",
        image: "https://i.ibb.co/mVQCpgdf/5-60-2.png"
      },
      {
        id: "560-002",
        name: "BX-24",
        image: "https://i.ibb.co/xtczWYrX/5-60-3.png"
      },
      {
        id: "560-003",
        name: "BX-26",
        image: "https://i.ibb.co/wF4jchjS/5-60-4.png"
      },
      {
        id: "560-004",
        name: "BX-27",
        image: "https://i.ibb.co/bgrRzvQy/5-60-5.png"
      },
      {
        id: "560-005",
        name: "BX-00",
        image: "https://i.ibb.co/MD90qCP2/5-60-6.png"
      },
      {
        id: "560-006",
        name: "BX-00",
        image: "https://i.ibb.co/yndvggXP/5-60-7.png"
      },
      {
        id: "560-007",
        name: "BX-37",
        image: "https://i.ibb.co/8gcb16C7/5-60-8.png"
      },
      {
        id: "560-008",
        name: "BX-37",
        image: "https://i.ibb.co/Cc5qb3d/5-60-9.png"
      },
    ]
  },
  {
    id: "ratchet-570",
    name: "5-70 (UX-03)",
    image: "https://i.ibb.co/n5jp5Gf/5-70-1.webp",
    category: "ratchet",
    price: "5-70",
    features: [
      "5 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6.6 g",
    ],
    bey: [
      {
        id: "570-001",
        name: "UX-04",
        image: "https://i.ibb.co/27GXvN4V/5-70-2.png"
      },
      {
        id: "570-002",
        name: "BX-35",
        image: "https://i.ibb.co/vKFzjYs/5-70-3.png"
      },
      {
        id: "570-003",
        name: "BX-39",
        image: "https://i.ibb.co/kgMkw4Hz/5-70-4.png"
      },
      {
        // samurai steel
        id: "570-004",
        name: "BX-00",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-580",
    name: "5-80 (BX-16)",
    image: "https://i.ibb.co/Xx5rhbg8/5-80-1.webp",
    category: "ratchet",
    price: "5-80",
    features: [
      "5 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7.2 g",
    ],
    bey: [
      {
        id: "580-001",
        name: "BX-20",
        image: "https://i.ibb.co/xqzhJLPt/5-80-2.png"
      },
      {
        id: "580-002",
        name: "BX-24",
        image: "https://i.ibb.co/Z1Ssxc7S/5-80-3.png"
      },
      {
        id: "580-003",
        name: "BX-31",
        image: "https://i.ibb.co/21Q2nxBt/5-80-4.png"
      },
      {
        id: "580-004",
        name: "BX-35",
        image: "https://i.ibb.co/vx2t7GqZ/5-80-5.png"
      },
      {
        id: "580-005",
        name: "BX-36",
        image: "https://i.ibb.co/WNQ1xwQK/5-80-6.png"
      },
      {
        id: "580-006",
        name: "CX-08",
        image: ""
      },
      {
        id: "580-007",
        name: "CX-08",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-660",
    name: "6-60 (CX-01)",
    image: "https://i.ibb.co/QvWbpK2N/6-60-1.webp",
    category: "ratchet",
    price: "6-60",
    features: [
      "6 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.1 g",
    ],
    bey: [
      {
        id: "660-001",
        name: "CX-04",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-680",
    name: "6-80 (CX-03)",
    image: "https://i.ibb.co/spsD7V08/6-80-1.webp",
    category: "ratchet",
    price: "6-80",
    features: [
      "6 Contact Points",
      "High : 8.00 mm",
      "Weight: ~6.9 g",
    ],
    bey: [
      {
        id: "680-001",
        name: "CX-04",
        image: ""
      },
      {
        id: "680-002",
        name: "G3 Prize",
        image: "https://i.ibb.co/gL7p4Cjg/6-80-3.png"
      },
    ]
  },
  {
    id: "ratchet-760",
    name: "7-60 (UX-06)",
    image: "https://i.ibb.co/1Jq4ptqF/Ratchet7-60.webp",
    category: "ratchet",
    price: "7-70",
    features: [
      "7 Contact Points",
      "High : 6.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "760-001",
        name: "BX-00",
        image: "https://i.ibb.co/LdDb24qv/media.png"
      },
      {
        id: "760-002",
        name: "CX-05",
        image: "https://i.ibb.co/KcVkfgXK/7-60-3.png"
      },
    ]
  },
  {
    id: "ratchet-770",
    name: "7-70 (UX-10)",
    image: "https://i.ibb.co/CKTC6dtd/7-70-1.webp",
    category: "ratchet",
    price: "7-70",
    features: [
      "7 Contact Points",
      "High : 7.00 mm",
      "Weight: ~7.1 g",
    ],
    bey: [
      {
        id: "770-001",
        name: "CX-08",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-780",
    name: "7-80 (CX-39)",
    image: "https://i.ibb.co/Xfcp7yT3/7-80-1.webp",
    category: "ratchet",
    price: "7-80",
    features: [
      "7 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7.8 g",
    ],
    // bey: [
    //   {
    //     id: "760-001",
    //     name: "BX-00",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "ratchet-960",
    name: "9-60 (BX-23)",
    image: "https://i.ibb.co/B2nvgjRc/9-60-1.webp",
    category: "ratchet",
    price: "9-60",
    features: [
      "9 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.2 g",
    ],
    bey: [
      {
        id: "960-001",
        name: "UX-05",
        image: "https://i.ibb.co/tMBr5x5f/9-60-2.png"
      },
      {
        id: "960-002",
        name: "UX-10",
        image: "https://i.ibb.co/nsvtjXnT/9-60-3.png"
      },
      {
        id: "960-003",
        name: "Collab",
        image: "https://i.ibb.co/B5s77rm5/9-60-4.png"
      },
    ]
  },
  {
    id: "ratchet-970",
    name: "9-70 (UX-07)",
    image: "https://i.ibb.co/M5CNHgY5/9-70-1.webp",
    category: "ratchet",
    price: "9-70",
    features: [
      "9 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "970-001",
        name: "UX-06",
        image: "https://i.ibb.co/LDy7tgnr/Screenshot-2025-04-19-132540-Photoroom.png"
      },
    ]
  },
  {
    id: "ratchet-980",
    name: "9-80 (BX-27)",
    image: "https://i.ibb.co/Wp3tZJxx/9-80-1.webp",
    category: "ratchet",
    price: "9-80",
    features: [
      "9 Contact Points",
      "High : 8.00 mm",
      "Weight: ~6.8 g",
    ],
    bey: [
      {
        id: "980-001",
        name: "BX-31",
        image: "https://i.ibb.co/wh5ZyvbR/9-80-2.png"
      },
      {
        id: "980-002",
        name: "BX-35",
        image: "https://i.ibb.co/zhNcrTwx/9-80-3.png"
      },
      {
        id: "980-003",
        name: "BX-00",
        image: "https://i.ibb.co/gMWfJwv9/9-80-4.png"
      },
      {
        id: "980-004",
        name: "CX-05",
        image: "https://i.ibb.co/WvsBB5TB/9-80-5.png"
      },
    ]
  },
  {
    id: "ratchet-M85",
    name: "M-85 (BX-44)",
    image: "https://i.ibb.co/Nnsyx1QZ/beyblade-x-bx-44-tricera-press-m-85-bs-2.png",
    category: "ratchet",
    price: "M-85",
    features: [
      "5 Contact Points",
      "High : 8.50 mm",
      "Weight: ~10 g",
    ],
    // bey: [
    //   {
    //     id: "970-001",
    //     name: "BX-44",
    //     image: "https://i.ibb.co/LDy7tgnr/Screenshot-2025-04-19-132540-Photoroom.png"
    //   },
    // ]
  },
  {
    id: "ratchet-tr",
    name: "Tr (CX-07)",
    image: "https://i.ibb.co/Fqnp4ZPs/Tr-1.png",
    category: "ratchet",
    price: "Turbo",
    features: [
      "Ratchet + Bit",
      "2 Contact Points",
      "High : 9 -> 6.50 mm",
      "Weight: ~ g",
    ],
    // bey: [
    //   {
    //     id: "970-001",
    //     name: "BX-44",
    //     image: "https://i.ibb.co/LDy7tgnr/Screenshot-2025-04-19-132540-Photoroom.png"
    //   },
    // ]
  },

  // BITS
  {
    id: "bit-001",
    name: "F (BX-01)",
    image: "https://i.ibb.co/Fb19tC1y/F-1.webp",
    category: "bit",
    type:"attack",
    price: "Flat",
    specs: {
      "Type": "Attack",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "F-001",
        name: "BX-07",
        image: "https://i.ibb.co/Z16vgVCK/F-2.png"
      },
      {
        id: "F-002",
        name: "BX-16",
        image: "https://i.ibb.co/S7HdHFXs/F-3.png"
      },
      {
        id: "F-003",
        name: "BX-17",
        image: "https://i.ibb.co/sdMdhN4c/F-4.png"
      },
      {
        id: "F-004",
        name: "BX-20",
        image: "https://i.ibb.co/S4y422pR/F-5.png"
      },
      {
        id: "F-005",
        name: "BX-24",
        image: "https://i.ibb.co/5X1HZNC9/F6.png"
      },
      {
        id: "F-006",
        name: "BX-00",
        image: "https://i.ibb.co/rKGbGtQz/F-7.png"
      },
      {
        id: "F-007",
        name: "BX-00",
        image: "https://i.ibb.co/ZpM0L5JT/F-8.png"
      },
      {
        id: "F-008",
        name: "BX-00",
        image: "https://i.ibb.co/JM7QWrR/F-9.png"
      },
      {
        id: "F-009",
        name: "BX-37",
        image: "https://i.ibb.co/v6SmkC5h/F-10.png"
      },
      {
        id: "F-010",
        name: "UX-12",
        image: "https://i.ibb.co/bRMnfjb5/F-11.png"
      },
      {
        id: "F-011",
        name: "BX-00",
        image: "https://i.ibb.co/SpcM9dS/F-12.png"
      },
      {
        id: "F-012",
        name: "Collab",
        image: "https://i.ibb.co/jkwYSdwm/F-13.png"
      },
      {
        id: "F-013",
        name: "Collab",
        image: "https://i.ibb.co/TGcBPqt/F-14.png"
      },
      {
        id: "F-014",
        name: "Collab",
        image: "https://i.ibb.co/m5mxzjJL/F-15.png"
      },
      {
        id: "F-015",
        name: "CX-08",
        image: ""
      },
    ]
  },
  {
    id: "bit-002",
    name: "T (BX-02)",
    image: "https://i.ibb.co/Lzv1tRjV/T-1.webp",
    category: "bit",
    type:"balance",
    price: "Taper",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "T-001",
        name: "BX-07",
        image: "https://i.ibb.co/SXJZQxKR/T-2.png"
      },
      {
        id: "T-002",
        name: "BX-16",
        image: "https://i.ibb.co/mFtyXdpK/T-3.png"
      },
      {
        id: "T-003",
        name: "BX-17",
        image: "https://i.ibb.co/NdvX6kns/T-4.png"
      },
      {
        id: "T-004",
        name: "BX-20",
        image: "https://i.ibb.co/9m2zkPj1/T-5.png"
      },
      {
        id: "T-005",
        name: "BX-24",
        image: "https://i.ibb.co/MwQw375/T6.png"
      },
      {
        id: "T-006",
        name: "BX-00",
        image: "https://i.ibb.co/NdBS4z2h/T-7.png"
      },
    ]
  },
  {
    id: "bit-003",
    name: "B (BX-03)",
    image: "https://i.ibb.co/Q3pGKC9j/B-1.png",
    category: "bit",
    type:"stamina",
    price: "Ball",
    specs: {
      "Type": "Stamina",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "B-001",
        name: "BX-07",
        image: "https://i.ibb.co/HT7cshVB/B-2.png"
      },
      {
        id: "B-002",
        name: "BX-16",
        image: "https://i.ibb.co/9kM61wXc/B-3.png"
      },
      {
        id: "B-003",
        name: "BX-17",
        image: "https://i.ibb.co/3Yj866q9/B-4.png"
      },
      {
        id: "B-004",
        name: "BX-20",
        image: "https://i.ibb.co/C565PXkK/B-5.png"
      },
      {
        id: "B-005",
        name: "BX-24",
        image: "https://i.ibb.co/1tB31V4s/B-6.png"
      },
      {
        id: "B-006",
        name: "BX-00",
        image: "https://i.ibb.co/0y7K5HdG/B-7.png"
      },
      {
        id: "B-007",
        name: "Collab",
        image: "https://i.ibb.co/67pmgqZz/B-8.png"
      },
      {
        id: "B-008",
        name: "Collab",
        image: "https://i.ibb.co/WvXYtVp7/B-9.png"
      },
      {
        id: "B-009",
        name: "Collab",
        image: "https://i.ibb.co/wNTqqpb0/B-10.png"
      },
    ]
  },
  {
    id: "bit-004",
    name: "N (BX-04)",
    image: "https://i.ibb.co/VcNhWfpy/N-1.png",
    category: "bit",
    type:"defense",
    price: "Needle",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "N-001",
        name: "BX-06",
        image: "https://i.ibb.co/jvgLDdQ6/N-2.png"
      },
      {
        id: "N-002",
        name: "BX-08",
        image: "https://i.ibb.co/93HcRpwb/N-3.png"
      },
      {
        id: "N-003",
        name: "BX-14",
        image: "https://i.ibb.co/LXtQspqq/N-4.png"
      },
      {
        id: "N-004",
        name: "BX-21",
        image: "https://i.ibb.co/CjmGq6R/N-5.png"
      },
      {
        id: "N-005",
        name: "UX-12",
        image: "https://i.ibb.co/9m8xzHmX/N-6.png"
      },
      {
        id: "N-006",
        name: "Collab",
        image: "https://i.ibb.co/RpRyZd5M/N-7.png"
      },
      {
        id: "N-007",
        name: "Collab",
        image: "https://i.ibb.co/zWh05tM2/N-8.png"
      },
      {
        id: "N-008",
        name: "Collab",
        image: "https://i.ibb.co/yFCr9SNs/N-9.png"
      },
    ]
  },
  {
    id: "bit-005",
    name: "HN (BX-13)",
    image: "https://i.ibb.co/Fk76tP6f/HN-1.png",
    category: "bit",
    type:"defense",
    price: "High Needle",
    specs: {
      "Type": "Defense",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "HN-001",
        name: "BX-16",
        image: "https://i.ibb.co/35mr99wg/HN-2.png"
      },
      {
        id: "HN-002",
        name: "BX-24",
        image: "https://i.ibb.co/gZc0t2BR/HN-3.png"
      },
      {
        id: "HN-003",
        name: "BX-36",
        image: "https://i.ibb.co/nNWLbh9T/HN-4.png"
      },
    ]
  },
  {
    id: "bit-006",
    name: "LF (BX-14)",
    image: "https://i.ibb.co/9HYJWNsd/LF-1.png",
    category: "bit",
    type:"attack",
    price: "Low Flat",
    specs: {
      "Type": "Attack",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "LF-001",
        name: "BX-14",
        image: "https://i.ibb.co/BKgRr83M/LF-2.png"
      },
      {
        id: "LF-002",
        name: "BX-14",
        image: "https://i.ibb.co/WWgVQ90j/LF-3.png"
      },
      {
        id: "LF-003",
        name: "BX-21",
        image: "https://i.ibb.co/XNDF27V/LF-4.png"
      },
      {
        id: "LF-004",
        name: "UX-05",
        image: "https://i.ibb.co/k2YRdgQS/LF-5.png"
      },
      {
        id: "LF-005",
        name: "BX-00",
        image: "https://i.ibb.co/27zzkhNB/LF-6.png"
      },
      {
        id: "LF-006",
        name: "CX-05",
        image: "https://i.ibb.co/ynQ5cq7W/LF-7.png"
      },
    ]
  },
  {
    id: "bit-007",
    name: "P (BX-15)",
    image: "https://i.ibb.co/7x5WSk15/P-1.png",
    category: "bit",
    type:"balance",
    price: "Point",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "P-001",
        name: "BX-00",
        image: "https://i.ibb.co/xKfDGfvq/P-2.png"
      },
      {
        id: "P-002",
        name: "BX-00",
        image: "https://i.ibb.co/DP5vwK8C/P-3.png"
      },
      {
        id: "P-003",
        name: "BX-31",
        image: "https://i.ibb.co/rGZyNcZm/P-4.png"
      },
      {
        id: "P-004",
        name: "UX-10",
        image: "https://i.ibb.co/hxmz8FTy/P-5.png"
      },
      {
        id: "P-005",
        name: "Collab",
        image: "https://i.ibb.co/Ngz9XQDw/P-6.png"
      },
      {
        id: "P-006",
        name: "Collab",
        image: "https://i.ibb.co/HTbBVFWN/P7.png"
      },
      {
        id: "P-007",
        name: "Collab",
        image: "https://i.ibb.co/7N2yLBwY/P8.png"
      },
    ]
  },
  {
    id: "bit-008",
    name: "O (BX-16)",
    image: "https://i.ibb.co/kVMd9cmN/O-1.png",
    category: "bit",
    type:"stamina",
    price: "Orb",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "O-001",
        name: "BX-27",
        image: "https://i.ibb.co/ndSYjKt/O-2.png"
      },
      {
        id: "O-002",
        name: "BX-31",
        image: "https://i.ibb.co/h1ZgrMC0/O-3.png"
      },
      {
        id: "O-003",
        name: "BX-39",
        image: "https://i.ibb.co/9kc1DXgh/O-4.png"
      },
      {
        id: "O-004",
        name: "CX-05",
        image: "https://i.ibb.co/xKWnG7zk/O-5.png"
      },
    ]
  },
  {
    id: "bit-009",
    name: "R (BX-20)",
    image: "https://i.ibb.co/dw9N6Jwp/R-1.png",
    category: "bit",
    type:"attack",
    price: "Rush",
    specs: {
      "Type": "Attack",
      "Weight": "~2.1 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "R-001",
        name: "BX-35",
        image: "https://i.ibb.co/YTypRJQS/R-2.png"
      },
      {
        id: "R-002",
        name: "UX-10",
        image: "https://i.ibb.co/8g2yHFSX/R-3.png"
      },
    ]
  },
  {
    id: "bit-010",
    name: "HT (BX-21)",
    image: "https://i.ibb.co/m5fJP8W2/HT-1.webp",
    category: "bit",
    type:"balance",
    price: "High Taper",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "HT-001",
        name: "BX-27",
        image: "https://i.ibb.co/TBckLgfN/HT-2.png"
      },
      {
        id: "HT-002",
        name: "BX-27",
        image: "https://i.ibb.co/v4sSwS04/HT-3.png"
      },
      {
        id: "HT-003",
        name: "CX-08",
        image: ""
      },
    ]
  },
  {
    id: "bit-011",
    name: "S (BX-19)",
    image: "https://i.ibb.co/5W2jsJcd/S-1.webp",
    category: "bit",
    type:"defense",
    price: "Spike",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "S-001",
        name: "BX-31",
        image: "https://i.ibb.co/PvSGXfpd/S-2.png"
      },
      {
        id: "S-002",
        name: "UX-07",
        image: "https://i.ibb.co/b522bsDR/S-3.png"
      },
    ]
  },
  {
    id: "bit-012",
    name: "GF (BX-23)",
    image: "https://i.ibb.co/DfpX7m8J/GF-1.png",
    category: "bit",
    type:"attack",
    price: "Gear Flat",
    specs: {
      "Type": "Attack",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "GF-001",
        name: "BX-00",
        image: "https://i.ibb.co/5XpBYNcC/GF-2.png"
      },
      {
        id: "GF-002",
        name: "UX-07",
        image: "https://i.ibb.co/ksT1Kmrb/GF-3.png"
      },
      {
        // samurai steel
        id: "GF-003",
        name: "BX-00",
        image: ""
      },
    ]
  },
  {
    id: "bit-013",
    name: "GB (BX-24)",
    image: "https://i.ibb.co/0RX4ysFC/GB-1.png",
    category: "bit",
    type:"stamina",
    price: "Gear Ball",
    specs: {
      "Type": "Stamina",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "GB-001",
        name: "BX-24",
        image: "https://i.ibb.co/VWY1qQBr/GB-2.png"
      },
      {
        id: "GB-002",
        name: "BX-24",
        image: "https://i.ibb.co/mVTCbCnJ/GB-3.png"
      },
      {
        id: "GB-003",
        name: "BX-36",
        image: "https://i.ibb.co/qYg9PtM4/GB-4.png"
      },
      {
        id: "GB-004",
        name: "UX-12",
        image: "https://i.ibb.co/p6xh44Tz/GB-5.png"
      },
    ]
  },
  {
    id: "bit-014",
    name: "GP (BX-26)",
    image: "https://i.ibb.co/s99xdg3g/GP-1.webp",
    category: "bit",
    type:"balance",
    price: "Gear Point",
    specs: {
      "Type": "Balance",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "GP-001",
        name: "UX-05",
        image: "https://i.ibb.co/mVZn322z/GP-2.png"
      },
      {
        id: "GP-002",
        name: "BX-00",
        image: "https://i.ibb.co/jZ6yX1bq/GP-3.png"
      },
      {
        id: "GP-003",
        name: "BX-39",
        image: "https://i.ibb.co/HpzSqH5T/GP-4.png"
      },
    ]
  },
  {
    id: "bit-015",
    name: "GN (BX-27)",
    image: "https://i.ibb.co/LzG7HNsG/GN-1.png",
    category: "bit",
    type:"defense",
    price: "Gear Needle",
    specs: {
      "Type": "Defense",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "GN-001",
        name: "UX-06",
        image: "https://i.ibb.co/spbfqHQ6/media.png"
      },
    ]
  },
  {
    id: "bit-016",
    name: "A (UX-01)",
    image: "https://i.ibb.co/Rx6Xn5z/A-1.webp",
    category: "bit",
    type:"attack",
    price: "Accel",
    specs: {
      "Type": "Attack",
      "Weight": "~2.6 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "A-001",
        name: "UX-04",
        image: "https://i.ibb.co/9kjQVhJD/A-2.png"
      },
      {
        id: "A-002",
        name: "UX-00",
        image: "https://i.ibb.co/0jzc0mHg/A-3.png"
      },
      {
        id: "A-003",
        name: "CX-00",
        image: "https://i.ibb.co/YrskvTC/Screenshot-2025-05-15-153702-Photoroom.png"
      },
    ]
  },
  {
    id: "bit-017",
    name: "H (UX-02)",
    image: "https://i.ibb.co/bM5nwSTC/H-1.webp",
    category: "bit",
    type:"balance",
    price: "Hexa",
    specs: {
      "Type": "Balance",
      "Weight": "~2.6 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "H-001",
        name: "BX-35",
        image: "https://i.ibb.co/2HqWZSH/H-2.png"
      },
      {
        id: "H-002",
        name: "UX-12",
        image: "https://i.ibb.co/1GGz3c5t/H-3.png"
      },
      {
        id: "H-003",
        name: "UX-00",
        image: "https://i.ibb.co/bRd6Hy2p/H-4.png"
      },
    ]
  },
  {
    id: "bit-018",
    name: "DB (UX-03)",
    image: "https://i.ibb.co/PsfCdskv/DB-1.webp",
    category: "bit",
    type:"stamina",
    price: "Disc Ball",
    specs: {
      "Type": "Stamina",
      "Weight": "~3.2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "DB-001",
        name: "UX-04",
        image: "https://i.ibb.co/fGGYBFFY/DB-2.png"
      },
      {
        id: "DB-002",
        name: "UX-00",
        image: "https://i.ibb.co/VYMMMzhZ/DB-3.png"
      },
      {
        id: "DB-002",
        name: "CX-06",
        image: "https://i.ibb.co/1fzG84TK/DB-4.png"
      },
    ]
  },
  {
    id: "bit-019",
    name: "Q (BX-31)",
    image: "https://i.ibb.co/PsMP3TkH/Q-1.webp",
    category: "bit",
    type:"attack",
    price: "Quake",
    specs: {
      "Type": "Attack",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Q-001",
        name: "BX-31",
        image: "https://i.ibb.co/rfwWZQ6L/Q-2.png"
      },
      {
        id: "Q-002",
        name: "BX-31",
        image: "https://i.ibb.co/XfSbqR0Q/Q-3.png"
      },
      {
        id: "Q-003",
        name: "BX-00",
        image: "https://i.ibb.co/93dcfjCk/Q-4.png"
      },
    ]
  },
  {
    id: "bit-020",
    name: "MN (UX-05)",
    image: "https://i.ibb.co/1t1b62Zt/MN-1.webp",
    category: "bit",
    type:"defense",
    price: "Metal Needle",
    specs: {
      "Type": "Defense",
      "Weight": "~2.7 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "MN-001",
        name: "UX-10",
        image: "https://i.ibb.co/xtYY9QyC/media.png"
      },
      {
        id: "MN-002",
        name: "CX-08",
        image: ""
      },
    ]
  },
  {
    id: "bit-021",
    name: "U (BX-33)",
    image: "https://i.ibb.co/39mxwYx1/U-1.webp",
    category: "bit",
    type:"balance",
    price: "Unite",
    specs: {
      "Type": "Balacne",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "U-001",
        name: "CX-06",
        image: "https://i.ibb.co/BK3bydYw/U-2.png"
      },
    ]
  },
  {
    id: "bit-022",
    name: "C (BX-34)",
    image: "https://i.ibb.co/8LJ49Q63/C-1.webp",
    category: "bit",
    type:"attack",
    price: "Cyclone",
    specs: {
      "Type": "Attack",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "C-001",
        name: "BX-00",
        image: "https://i.ibb.co/x8MD6CMb/C-2.png"
      },
      {
        id: "C-002",
        name: "UX-12",
        image: "https://i.ibb.co/HDKPPFvw/C-3.png"
      },
    ]
  },
  {
    id: "bit-023",
    name: "D (BX-35)",
    image: "https://i.ibb.co/LdMgVJbW/D-1.png",
    category: "bit",
    type:"defense",
    price: "Dot",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "D-001",
        name: "BX-35",
        image: "https://i.ibb.co/7wDkLM5/D-2.png"
      },
      {
        id: "D-002",
        name: "BX-35",
        image: "https://i.ibb.co/Z6PMR8DY/D-3.png"
      },
      {
        id: "D-003",
        name: "BX-00",
        image: "https://i.ibb.co/tTkydcsj/D-4.png"
      },
      {
        id: "D-004",
        name: "BX-39",
        image: "https://i.ibb.co/s9pG8nch/D-5.png"
      },
      {
        id: "D-005",
        name: "CX-05",
        image: "https://i.ibb.co/Jw2H5cvQ/D-6.png"
      },
    ]
  },
  {
    id: "bit-024",
    name: "G (UX-07)",
    image: "https://i.ibb.co/gZPVr1X6/G-1.webp",
    category: "bit",
    type:"stamina",
    price: "Glide",
    specs: {
      "Type": "Stamina",
      "Weight": "~2.5 g",
      "Gears": "16",
      "Burst Resistance": "Low"
    },
    // bey: [
    //   {
    //     id: "G-001",
    //     name: "BX-35",
    //     image: "https://i.ibb.co/7wDkLM5/D-2.png"
    //   },
    // ]
  },
  {
    id: "bit-025",
    name: "E (BX-36)",
    image: "https://i.ibb.co/xKPCMW5g/E-1.webp",
    category: "bit",
    type:"balance",
    price: "Elevate",
    specs: {
      "Type": "Balance",
      "Weight": "~3.2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "E-001",
        name: "UX-12",
        image: "https://i.ibb.co/0zXcZ2F/E-2.png"
      },
      {
        id: "E-002",
        name: "BX-00",
        image: "https://i.ibb.co/1tCYv50j/E-3.png"
      },
    ]
  },
  {
    id: "bit-026",
    name: "FB (UX-08)",
    image: "https://i.ibb.co/1fRpB7t5/FB-1.webp",
    category: "bit",
    type:"stamina",
    price: "Free Ball",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    // bey: [
    //   {
    //     id: "FB-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-027",
    name: "BS (UX-10)",
    image: "https://i.ibb.co/RGfCnzm1/BS-1.webp",
    category: "bit",
    type:"defense",
    price: "Bound Spike",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "BS-001",
        name: "BX-44",
        image: "https://i.ibb.co/rjr9fFW/beyblade-x-bx-44-tricera-press-m-85-bs-3.png"
      },
    ]
  },
  {
    id: "bit-028",
    name: "RA (UX-10)",
    image: "https://i.ibb.co/XxrL2p47/RA-1.webp",
    category: "bit",
    type:"attack",
    price: "Rubber Accel",
    specs: {
      "Type": "Attack",
      "Weight": "~3 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "RA-001",
        name: "25th Anniversary",
        image: "https://i.ibb.co/HDsxGrs5/RA-2.png"
      },
      {
        id: "RA-002",
        name: "25th Anniversary",
        image: "https://i.ibb.co/fdmtZ5mG/RA-3.png"
      },
      {
        id: "RA-003",
        name: "25th Anniversary",
        image: "https://i.ibb.co/s9pwnvtQ/RA-4.png"
      }
    ]
  },
  {
    id: "bit-029",
    name: "L (UX-09)",
    image: "https://i.ibb.co/S4Z1Njz8/L-1.webp",
    category: "bit",
    type:"attack",
    price: "Level",
    specs: {
      "Type": "Attack",
      "Weight": "~2.6 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    //metal coat orange
    bey: [
      {
        id: "L-001",
        name: "UX-00",
        image: ""
      },
    ]
  },
  {
    id: "bit-030",
    name: "TP (BX-38)",
    image: "https://i.ibb.co/YwBMrdN/TP-1.webp",
    category: "bit",
    type:"balance",
    price: "Trans Point",
    specs: {
      "Type": "Attack",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "TP-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-031",
    name: "LR (UX-11)",
    image: "https://i.ibb.co/NnfcKKXv/LR-1.webp",
    category: "bit",
    type:"attack",
    price: "Low Rush",
    specs: {
      "Type": "Attack",
      "Weight": "~1.9 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "LR-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-032",
    name: "UN (UX-13)",
    image: "https://i.ibb.co/dJVZBhD1/UN-1.webp",
    category: "bit",
    type:"defense",
    price: "Under Needle",
    specs: {
      "Type": "Defense",
      "Weight": "~1.8 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    // bey: [
    //   {
    //     id: "UN-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-033",
    name: "V (CX-01)",
    image: "https://i.ibb.co/wFbx73MV/Bit-Vortex.webp",
    category: "bit",
    type:"attack",
    price: "Vortex",
    specs: {
      "Type": "Attack",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "V-001",
        name: "CX-04",
        image: ""
      },
    ]
  },
  {
    id: "bit-034",
    name: "LO (CX-02)",
    image: "https://i.ibb.co/M5cncSdq/LO-1.webp",
    category: "bit",
    type:"stamina",
    price: "Low Orb",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "LO-001",
        name: "CX-00",
        image: "https://i.ibb.co/60CF1y7K/LO-2.png"
      },
    ]
  },
  {
    id: "bit-035",
    name: "W (CX-03)",
    image: "https://i.ibb.co/rGmF2J4d/W-1.webp",
    category: "bit",
    type:"defense",
    price: "Wedge",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "W-001",
        name: "CX-04",
        image: ""
      },
      {
        id: "W-002",
        name: "G3 Prize",
        image: "https://i.ibb.co/VksWCPD/W-3.png"
      },
    ]
  },
  {
    id: "bit-036",
    name: "K (CX-05)",
    image: "https://i.ibb.co/Nn31LkgV/K-1.webp",
    category: "bit",
    type:"balance",
    price: "Kick",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "K-001",
        name: "CX-05",
        image: "https://i.ibb.co/0V29bD1C/K-2.png"
      },
      {
        id: "K-002",
        name: "CX-05",
        image: "https://i.ibb.co/S7ZTXPyf/K-3.png"
      },
    ]
  },
  {
    id: "bit-037",
    name: "Z (UX-14)",
    image: "https://i.ibb.co/r2LvMz1P/Z-1.png",
    category: "bit",
    type:"balance",
    price: "Zap",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "W-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-038",
    name: "GR (CX-06)",
    image: "https://i.ibb.co/MyD88gMn/Bit-Gear-Rush-Photoroom.png",
    category: "bit",
    type:"attack",
    price: "Gear Rush",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "W-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-039",
    name: "Tr (CX-07)",
    image: "https://i.ibb.co/Fqnp4ZPs/Tr-1.png",
    category: "bit",
    type:"attack",
    price: "Turbo",
    specs: {
      "Type": "Attack",
      "Weight": "~ g",
      "Gears": "",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "W-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
  },
  {
    id: "bit-040",
    name: "WB (CX-08)",
    image: "https://i.ibb.co/B5p39Y4J/WB-1.png",
    category: "bit",
    type:"stamina",
    price: "Wall Ball",
    specs: {
      "Type": "Stamina",
      "Weight": "~ g",
      "Gears": "16",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "WB-001",
        name: "CX-08",
        image: ""
      },
      {
        id: "WB-002",
        name: "CX-08",
        image: ""
      },
    ]
  },

  // OTHER
  {
    id: "other-001",
    name: "Start Dash Set",
    image: "https://i.ibb.co/Ld3GLtry/Start-Dash-Set-Box.webp",
    category: "other",
    price: "BX-07",
    features: [
      "Xtreme Stadium",
      "Dran Sword 3-60 Flat (Special Ver.)",
      "String Launcher (Blue Ver.)",
      "Launcher Grip (Blue Ver.)"
    ],
    pro: [
      {
        id: "DS-002",
        name: "Dran Sword (Special Ver.)",
        image: "https://i.ibb.co/mCsJJFYs/DS-2-B07.webp"
      },
      {
        id: "Lun07-001",
        name: "BX-07",
        image: "https://i.ibb.co/JhVt9cX/Beyblade-X-String-Launcher-Blue-Ver.webp"
      },
      {
        id: "Gip07-0001",
        name: "BX-07",
        image: "https://i.ibb.co/whtdZFVX/Beyblade-X-Launcher-Grip-Blue-Ver.webp"
      },
      {
        id: "Sta-0001",
        name: "BX-07",
        image: "https://i.ibb.co/214TCT0j/Xtreme-Stadium-BX-07.webp"
      },
    ]
  },
  {
    id: "other-002",
    name: "3on3 Deck Set",
    image: "https://i.ibb.co/8yN1V4g/B08.webp",
    category: "other",
    price: "BX-08",
    features: [
      "Hells Scythe 3-80 B",
      "Wizard Arrow 4-60 N",
      "Knight Shield 4-80 T",
    ],
    pro: [
      {
        id: "B8-001",
        name: "Hells Scythe 3-80 Ball",
        image: "https://i.ibb.co/sdKqGYNk/HS-3-B08.webp"
      },
      {
        id: "B8-002",
        name: "Wizard Arrow 4-60 Needle",
        image: "https://i.ibb.co/xSdv8S60/WA-3-B08.webp"
      },
      {
        id: "B8-003",
        name: "Knight Shield 4-80 Taper",
        image: "https://i.ibb.co/6cXM80JP/KS-3-B08.webp"
      },
    ]
  },
  {
    id: "other-003",
    name: "Beybattle Pass",
    image: "https://i.ibb.co/4wJ98Qgn/B09.webp",
    category: "other",
    price: "BX-09",
    features: [
      "Beybattle Pass",
    ],
  },
  {
    id: "other-004",
    name: "Xtreme Stadium",
    image: "https://i.ibb.co/1fXSD1gn/B10.webp",
    category: "other",
    price: "BX-10",
    features: [
      "Xtreme Stadium",
    ],
  },
  {
    id: "other-005",
    name: "Launcher Grip",
    image: "https://i.ibb.co/VWMbdxR0/Beyblade-X-Launcher-Grip-Packaging.webp",
    category: "other",
    price: "BX-11",
    features: [
      "Launcher Grip (Black Ver.)",
    ],
  },
  {
    id: "other-006",
    name: "3on3 Deck Case",
    image: "https://i.ibb.co/r2KCRpTk/3on3-Deck-Case-Packaging.webp",
    category: "other",
    price: "BX-12",
    features: [
      "3on3 Deck Case",
    ],
  },
  {
    id: "other-007",
    name: "Battle Entry Set",
    image: "https://i.ibb.co/ksBSvwjY/B17.webp",
    category: "other",
    price: "BX-17",
    features: [
      "DranSword 3-60 F (Red Ver.)",
      "WizardArrow 4-80 B (Blue Ver.)",
      "Winder Launcher (Red Ver.)",
      "Winder Launcher (Blue Ver.)",
      "Xtreme Stadium (Black Ver.)",
    ],
    pro: [
      {
        id: "B17-001",
        name: "DranSword 3-60 Flat (Red Ver.)",
        image: "https://i.ibb.co/VYF6BrfF/DS-4-B17.webp"
      },
      {
        id: "B17-002",
        name: "WizardArrow 4-80 Ball (Blue Ver.)",
        image: "https://i.ibb.co/XZ4cTffR/WA-5-B17.webp"
      },
      {
        id: "B17-003",
        name: "Winder Launcher (Red Ver.)",
        image: "https://i.ibb.co/wNc2GGZ8/Beyblade-X-Winder-Launcher-Red-Ver.webp"
      },
      {
        id: "B17-004",
        name: "Winder Launcher (Blue Ver.)",
        image: "https://i.ibb.co/QLNqvbW/Beyblade-X-Winder-Launcher-Blue-Ver.webp"
      },
      {
        id: "B17-005",
        name: "Xtreme Stadium (Black Ver.)",
        image: "https://i.ibb.co/Ndgs5DbL/Xtreme-Stadium-Black-Ver.webp"
      },
    ]
  },
  {
    id: "other-008",
    name: "String Launcher",
    image: "https://i.ibb.co/Z1BqBNmR/Beyblade-X-String-Launcher-Packaging.webp",
    category: "other",
    price: "BX-18",
    features: [
      "String Launcher",
    ],
  },
  {
    id: "other-009",
    name: "Gear Case",
    image: "https://i.ibb.co/s9qVBQ6s/Beyblade-X-Gear-Case.webp",
    category: "other",
    price: "BX-25",
    features: [
      "Gear Case",
    ],
  },
  {
    id: "other-010",
    name: "String Launcher (White Ver.)",
    image: "https://i.ibb.co/zW6sQSBg/Beyblade-X-String-Launcher-White-Ver.webp",
    category: "other",
    price: "BX-28",
    features: [
      "String Launcher (White Ver.)",
    ],
  },
  {
    id: "other-011",
    name: "Custom Grip (White Ver.)",
    image: "https://i.ibb.co/VWhzj7sD/Beyblade-X-Custom-Grip-White-Ver-Packaging.webp",
    category: "other",
    price: "BX-29",
    features: [
      "Custom Grip (White Ver.)",
    ],
  },
  {
    id: "other-012",
    name: "Custom Grip (Red Ver.)",
    image: "https://i.ibb.co/zTQNqB1M/Beyblade-X-Custom-Grip-Red-Ver-Packaging.webp",
    category: "other",
    price: "BX-30",
    features: [
      "Custom Grip (Red Ver.)",
    ],
  },
  {
    id: "other-013",
    name: "Wide Xtreme Stadium",
    image: "https://i.ibb.co/Q3Wvn6qK/Wide-Xtreme-Stadium.webp",
    category: "other",
    price: "BX-32",
    features: [
      "Wide Xtreme Stadium",
    ],
  },
  {
    id: "other-014",
    name: "Battle Entry Set U",
    image: "https://i.ibb.co/Xf7hqF9n/Battle-Entry-Set-U-Box.webp",
    category: "other",
    price: "UX-04",
    features: [
      "DranBuster 1-60 Accel (Special Ver.)",
      "WizardRod 5-70 Disc Ball (Special Ver.)",
      "Winder Launcher (White & Black Ver.)",
      "Winder Launcher (Black & Yellow Ver.)",
      "Xtreme Stadium (Special Ver.)",
    ],
    pro: [
      {
        id: "U4-001",
        name: "DranBuster 1-60 A (Special Ver.)",
        image: "https://i.ibb.co/8nc3jQZ8/DB-2-U04.webp"
      },
      {
        id: "U4-002",
        name: "WizardRod 5-70 DB (Special Ver.)",
        image: "https://i.ibb.co/fVR6nWmd/WR-2-U04.webp"
      },
      {
        id: "U4-003",
        name: "Winder Launcher (White & Black Ver.)",
        image: "https://i.ibb.co/bMZ1ffvC/Beyblade-X-Winder-Launcher-White-Black-Ver.webp"
      },
      {
        id: "U4-004",
        name: "Winder Launcher (Black & Yellow Ver.)",
        image: "https://i.ibb.co/8gJFrNdB/Beyblade-X-Winder-Launcher-Black-Yellow-Ver.webp"
      },
      {
        id: "U4-005",
        name: "Xtreme Stadium (Special Ver.)",
        image: "https://i.ibb.co/fGCBrK1C/Xtreme-Stadium-Special-Ver.webp"
      },
    ]
  },
  {
    id: "other-015",
    name: "Double Xtreme Stadium Set",
    image: "https://i.ibb.co/Fqx8fT4j/Double-Xtreme-Stadium-Set-Box.webp",
    category: "other",
    price: "BX-37",
    features: [
      "Double Xtreme Stadium Set",
    ],
    pro: [
      {
        id: "B32-001",
        name: "BearScratch 5-60 Flat",
        image: "https://i.ibb.co/SDfXPWbF/BSc-1-B37.webp"
      },
      {
        id: "B17-002",
        name: "Double Xtreme Stadium",
        image: "https://i.ibb.co/4ncCr3h8/Double-Xtreme-Stadium.webp"
      },
      {
        id: "B17-003",
        name: "Winder Launcher (Black×Gold Ver.)",
        image: "https://i.ibb.co/fY9VdT4s/Beyblade-X-Winder-Launcher-Black-Gold-Ver.webp"
      },
    ]
  },
  {
    id: "other-016",
    name: "Custom Grip (Black & Green Clear Ver.)",
    image: "https://i.ibb.co/Kj3FK0V5/BXG07-1.webp",
    category: "other",
    price: "BX-00",
    features: [
      "Custom Grip (Black & Green Clear Ver.)",
    ],
  },
  {
    id: "other-017",
    name: "Battle Entry Set C",
    image: "https://i.ibb.co/dsRzfwqc/Battle-Entry-Set-C-Box.webp",
    category: "other",
    price: "CX-04",
    features: [
      "Dran Brave S 6-60 Vortex (Special Ver.)",
      "Perseus Dark B 6-80 Wedge (Special Ver.)",
      "Winder Launcher (Black & Magenta Ver.)",
      "Winder Launcher (White & Blue Ver.)",
      "Xtreme Stadium (Special Ver.)",
    ],
    pro: [
      {
        id: "C4-001",
        name: "DranBrave S 6-60 V (Special Ver.)",
        image: "https://i.ibb.co/0pYwhrRB/DBS-2-C04.webp"
      },
      {
        id: "C4-002",
        name: "PerseusDark B 6-80 W (Special Ver.)",
        image: "https://i.ibb.co/M5jDMj6y/PDB-2-C04.webp"
      },
      {
        id: "C4-003",
        name: "Winder Launcher (Black & Magenta Ver.)",
        image: "https://i.ibb.co/0jsQk0s8/Beyblade-X-Winder-Launcher-Black-Magenta-Ver.webp"
      },
      {
        id: "C4-004",
        name: "Winder Launcher (White & Blue Ver.)",
        image: "https://i.ibb.co/fVJ5XrWn/Beyblade-X-Winder-Launcher-White-Blue-Ver.webp"
      },
      {
        id: "C4-005",
        name: "Xtreme Stadium (Special Ver.)",
        image: "https://i.ibb.co/wNv1tKhD/Xtreme-Stadium-CX-04.webp"
      },
    ]
  },
  {
    id: "other-018",
    name: "Winder Launcher L",
    image: "https://i.ibb.co/Zp29VbbR/Beyblade-X-Winder-Launcher-L-Packaging.webp",
    category: "other",
    price: "BX-40",
    features: [
      "Winder Launcher L",
    ],
  },
  {
    id: "other-019",
    name: "Rubber Custom Grip (Gunmetal Ver.)",
    image: "https://i.ibb.co/4nhB4X2M/Beyblade-X-Rubber-Custom-Grip-Gunmetal-Ver-Packaging.webp",
    category: "other",
    price: "BX-41",
    features: [
      "Rubber Custom Grip (Gunmetal Ver.)",
    ],
  },
  {
    id: "other-020",
    name: "Rubber Custom Grip (Blue Ver.)",
    image: "https://i.ibb.co/tpRcpjLx/Beyblade-X-Rubber-Custom-Grip-Blue-Ver-Packaging.webp",
    category: "other",
    price: "BX-42",
    features: [
      "Rubber Custom Grip (Blue Ver.)",
    ],
  },
  {
    id: "other-021",
    name: "Gear Case (White Ver.)",
    image: "https://i.ibb.co/1G77fbPb/Beyblade-X-Gear-Case-White-Ver.webp",
    category: "other",
    price: "BX-43",
    features: [
      "Gear Case (White Ver.)",
    ],
  },

  //X-OVER Bakuten Shoot Beyblade
  {
    id: "OBS-001",
    name: "Dranzer Spiral",
    image: "https://i.ibb.co/Txb1ckbY/DSL-1.webp",
    category: "x-over",
    type: "balance",
    price: "BX-00",
    specs: {
      "Type": "Balacne",
      "Spin": "Right",
      "Weight": "~27 g",
      "Stock Combo": "3-80 Taper",
      "Product Line": "BX",
      "Original Generation": "Bakuten Shoot Beyblade",
    },
    bey: [
      {
        id: "DSL-002",
        name: "BX-00",
        image: "https://i.ibb.co/hxvhHGbm/DSL-2.webp"
      },
    ]
  },
  {
    id: "OBS-002",
    name: "Driger Slash",
    image: "https://i.ibb.co/cSWdnpXM/DSH-1.webp",
    category: "x-over",
    type: "balance",
    price: "BX-00",
    specs: {
      "Type": "Balacne",
      "Spin": "Right",
      "Weight": "~28 g",
      "Stock Combo": "4-80 Point",
      "Product Line": "BX",
      "Original Generation": "Bakuten Shoot Beyblade",
    },
  },
  {
    id: "OBS-003",
    name: "Draciel Shield",
    image: "https://i.ibb.co/gbMjd9Nv/DSD-1.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~28 g",
      "Stock Combo": "7-60 Dot",
      "Product Line": "BX",
      "Original Generation": "Bakuten Shoot Beyblade",
    },
  },
  {
    id: "OBS-004",
    name: "Dragoon Storm",
    image: "https://i.ibb.co/cS5tT3qF/DST-1.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00 25th Anniversary",
    specs: {
      "Type": "Attack",
      "Spin": "Left",
      "Weight": "~25 g",
      "Stock Combo": "4-60 Rubber Accel",
      "Product Line": "BX",
      "Original Generation": "Bakuten Shoot Beyblade",
    },
  },

  //X-OVER Metal Fight Beyblade
  {
    id: "OMF-001",
    name: "Lightning L-Drago (Upper)",
    image: "https://i.ibb.co/M5CXBJWZ/LDU-1.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Left",
      "Weight": "~34 g",
      "Stock Combo": "1-60 Flat",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
    bey: [
      {
        id: "LDR-002",
        name: "BX-00(Rapid)",
        image: "https://i.ibb.co/SXDGLZnV/LDR-1.webp"
      },
    ]
  },
  {
    id: "OMF-003",
    name: "Storm Pegasis",
    image: "https://i.ibb.co/gL0YjrkQ/SPS-1.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00 25th Anniversary",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "3-70 Rubber Accel",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
  },

  //X-OVER Beyblade Burst
  {
    id: "OBB-001",
    name: "Victory Valkyrie",
    image: "https://i.ibb.co/DDmVg7gb/VVV-1.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00 25th Anniversary",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "2-60 Rubber Accel",
      "Product Line": "BX",
      "Original Generation": "Beyblade Burst",
    },
  },
  {
    id: "OBB-002",
    name: "Xeno Xcalibur",
    image: "https://i.ibb.co/SX9LvxSZ/XXX-1.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "3-60 Gear Flat",
      "Product Line": "BX",
      "Original Generation": "Beyblade Burst",
    },
  },

  //Collab
  {
    id: "CLB-001",
    name: "Luke Skywalker",
    image: "https://i.ibb.co/Gf7MDs1X/Star1.webp",
    category: "x-over",
    type: "stamina",
    price: "BX-00",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "4-80 Ball",
      "Product Line": "BX",
      "Collab": "Star Wars",
    },
  },
  {
    id: "CLB-002",
    name: "Darth Vader",
    image: "https://i.ibb.co/1tHxb5mt/Star2.webp",
    category: "x-over",
    type: "balance",
    price: "BX-00",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "4-60 Point",
      "Product Line": "BX",
      "Collab": "Star Wars",
    },
  },
  {
    id: "CLB-003",
    name: "The Mandalorian",
    image: "https://i.ibb.co/238Q6j7J/Star3.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "3-60 Flat",
      "Product Line": "BX",
      "Collab": "Star Wars",
    },
  },
  {
    id: "CLB-004",
    name: "Moff Gideon",
    image: "https://i.ibb.co/Kj8Nfh4g/Star4.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "3-80 Needle",
      "Product Line": "BX",
      "Collab": "Star Wars",
    },
  },
  {
    id: "CLB-005",
    name: "Optimus Prime",
    image: "https://i.ibb.co/gZGDNpsj/Trans1.webp",
    category: "x-over",
    type: "balance",
    price: "BX-00",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~31 g",
      "Stock Combo": "4-60 Point",
      "Product Line": "BX",
      "Collab": "Transformers",
    },
  },
  {
    id: "CLB-006",
    name: "Megatron",
    image: "https://i.ibb.co/G4yxCC6c/Trans2.webp",
    category: "x-over",
    type: "stamina",
    price: "BX-00",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~31 g",
      "Stock Combo": "4-80 Ball",
      "Product Line": "BX",
      "Collab": "Transformers",
    },
  },
  {
    id: "CLB-007",
    name: "Optimus Primal",
    image: "https://i.ibb.co/zT3sxjyB/Trans3.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "3-60 Flat",
      "Product Line": "BX",
      "Collab": "Transformers",
    },
  },
  {
    id: "CLB-008",
    name: "Star Scream",
    image: "https://i.ibb.co/PzVSrxdm/Trans4.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~29 g",
      "Stock Combo": "3-80 Needle",
      "Product Line": "BX",
      "Collab": "Transformers",
    },
  },
  {
    id: "CLB-009",
    name: "Iron Man",
    image: "https://i.ibb.co/Df1jK98q/Marvel1.webp",
    category: "x-over",
    type: "stamina",
    price: "BX-00",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "4-80 Ball",
      "Product Line": "BX",
      "Collab": "Marvel",
    },
  },
  {
    id: "CLB-010",
    name: "Thanos",
    image: "https://i.ibb.co/chyBrhbJ/Marvel2.webp",
    category: "x-over",
    type: "balance",
    price: "BX-00",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~29 g",
      "Stock Combo": "4-60 Point",
      "Product Line": "BX",
      "Collab": "Marvel",
    },
  },
  {
    id: "CLB-011",
    name: "Spider Man",
    image: "https://i.ibb.co/PGwj3Dhv/Marvel3.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "3-60 Point",
      "Product Line": "BX",
      "Collab": "Marvel",
    },
  },
  {
    id: "CLB-012",
    name: "Venom",
    image: "https://i.ibb.co/zWCNSNhS/Marvel4.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~34 g",
      "Stock Combo": "3-80 Needle",
      "Product Line": "BX",
      "Collab": "Marvel",
    },
  },
  {
    id: "CLB-013",
    name: "T.Rex",
    image: "https://i.ibb.co/TM6b09kq/Jura-1.webp",
    category: "x-over",
    type: "stamina",
    price: "BX-00",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "1-80 Gear Ball",
      "Product Line": "BX",
      "Collab": "Jurassic World",
    },
  },
  {
    id: "CLB-014",
    name: "Mosasaurus",
    image: "https://i.ibb.co/rR443LXd/Jura-2.webp",
    category: "x-over",
    type: "balance",
    price: "BX-00",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "9-60 Unite",
      "Product Line": "BX",
      "Collab": "Jurassic World",
    },
  },
  {
    id: "CLB-015",
    name: "Spinosaurus",
    image: "https://i.ibb.co/Z6dbCbrP/Jura-3.webp",
    category: "x-over",
    type: "attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "3-85 Accel",
      "Product Line": "BX",
      "Collab": "Jurassic World",
    },
  },
  {
    id: "CLB-016",
    name: "Quetzalcoatlus",
    image: "https://i.ibb.co/Lz0yMdTy/Jura-4.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "4-55 Dot",
      "Product Line": "BX",
      "Collab": "Jurassic World",
    },
  },

  //troll credits
  {
    id: "CD001",
    name: "Credits? Why you want to know that???",
    image: "https://i.ibb.co/0pcrGh1N/Credit.webp",
    category: "credits",
    price: "This website don't want anything from you.",
    specs: {
      "Creator Name": "What you looking for?",
      "Donation": "Go to Philanthropy funds.",
      "Ownership": "I'm not Takara Tomy. Beyblade is not my product.",
      "Objective": "To make it easier for the community to find data about Beyblade X parts.",
      "Special Thanks": "Thanks to Takara Tomy for making Beyblade.",
    },
  },
];



// Helper functions to get products
export function getProducts(category?: 'blade' | 'assist-blade' | 'ratchet' | 'bit' | 'other' | 'X-Over' | 'credits'): Product[] {
  if (category) {
    return products.filter(product => product.category === category);
  }
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
