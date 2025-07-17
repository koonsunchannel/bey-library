import type { Product } from "./types"

// Mock data for our cyber-themed library products
export const products: Product[] = [
  // BLADES
  {
    id: "Blade-DS-001",
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
        id: "Blade-DS-002",
        name: "BX-07",
        image: "https://i.ibb.co/mCsJJFYs/DS-2-B07.webp"
      },
      {
        id: "Blade-DS-003",
        name: "BX-14",
        image: "https://i.ibb.co/svrBXkVr/DS-3-B14.webp"
      },
      {
        id: "Blade-DS-004",
        name: "BX-17",
        image: "https://i.ibb.co/VYF6BrfF/DS-4-B17.webp"
      },
      {
        id: "Blade-DS-005",
        name: "BX-00",
        image: "https://i.ibb.co/679WNZxb/DS-5-B00.webp"
      },
      {
        id: "Blade-DS-006",
        name: "25th Anniversary",
        image: "https://i.ibb.co/gZPVr6tz/DS-6-25th.webp"
      },
      {
        id: "Blade-DS-007",
        name: "BX-00",
        image: "https://i.ibb.co/gMZ2QQFt/DS-7-UX00.webp"
      },
      {
        id: "Blade-DS-008",
        name: "Suhiro Ver.",
        image: "https://i.ibb.co/jvr7wYYs/DS-8-Sushi.webp"
      },
      {
        id: "Blade-DS-009",
        name: "G1 Prize",
        image: "https://i.ibb.co/4RT0RwrG/DS-9-G1P.webp"
      },
      {
        id: "Blade-DS-010",
        name: "G1 Prize",
        image: "https://i.ibb.co/HfB4fTr9/DS-10-G1-P.webp"
      },
      {
        id: "Blade-DS-011",
        name: "G1 Prize",
        image: "https://i.ibb.co/8D1CqMsh/DS-11-G1-P.webp"
      },
    ],
  },
  {
    id: "Blade-HS-001",
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
        id: "Blade-HS-002",
        name: "BX-00",
        image: "https://i.ibb.co/21RXmBKy/HS-2-B00.webp"
      },
      {
        id: "Blade-HS-002",
        name: "BX-08",
        image: "https://i.ibb.co/sdKqGYNk/HS-3-B08.webp"
      },
      {
        id: "Blade-HS-003",
        name: "BX-14",
        image: "https://i.ibb.co/wrbWPP9Y/HS-4-B14.webp"
      },
      {
        id: "Blade-HS-004",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/spNPWk1P/HS-5-B00.webp"
      },
    ]
  },
  {
    id: "Blade-WA-001",
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
        id: "Blade-WA-002",
        name: "BX-05",
        image: "https://i.ibb.co/yD685wp/WA-2-B05.webp"
      },
      {
        id: "Blade-WA-003",
        name: "BX-08",
        image: "https://i.ibb.co/xSdv8S60/WA-3-B08.webp"
      },
      {
        id: "Blade-WA-004",
        name: "BX-14",
        image: "https://i.ibb.co/QvXy1C28/WA-4-B14.webp"
      },
      {
        id: "Blade-WA-005",
        name: "BX-17",
        image: "https://i.ibb.co/XZ4cTffR/WA-5-B17.webp"
      },
      {
        id: "Blade-WA-006",
        name: "BX-21",
        image: "https://i.ibb.co/5xGWKqsX/WA-6-B21.webp"
      },
      {
        id: "Blade-WA-007",
        name: "BX-24",
        image: "https://i.ibb.co/B566Xm8M/WA-7-B24.webp"
      },
    ]
  },
  {
    id: "Blade-KS-001",
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
        id: "Blade-KS-002",
        name: "BX-06",
        image: "https://i.ibb.co/5g3XrCBS/KS-2-B06.webp"
      },
      {
        id: "Blade-KS-003",
        name: "BX-08",
        image: "https://i.ibb.co/6cXM80JP/KS-3-B08.webp"
      },
      {
        id: "Blade-KS-004",
        name: "BX-14",
        image: "https://i.ibb.co/V03rFym8/KS-4-B14.webp"
      },
      {
        id: "Blade-KS-005",
        name: "BX-20",
        image: "https://i.ibb.co/xKGq7Myy/KS-5-B20.webp"
      },
      {
        id: "Blade-KS-006",
        name: "G3 Prize",
        image: "https://i.ibb.co/GfrjdNCW/KS-6-G3P.webp"
      },
    ]
  },
  {
    id: "Blade-KL-001",
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
        id: "Blade-KL-002",
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
    id: "Blade-SE-001",
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
        id: "Blade-SE-002",
        name: "BX-14",
        image: "https://i.ibb.co/7H2dWMh/SE-2-B14.webp"
      },
      {
        id: "Blade-SE-003",
        name: "BX-20",
        image: "https://i.ibb.co/gZc9jXrX/SE-3-B20.webp"
      },
      {
        id: "Blade-SE-004",
        name: "BX-31",
        image: "https://i.ibb.co/pjwcs3bd/SE-4-B31.webp"
      },
      {
        id: "Blade-SE-005",
        name: "BX-00",
        image: "https://i.ibb.co/S4pGMHd0/SE-5-B00.webp"
      },
    ]
  },
  {
    id: "Blade-LC-001",
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
        id: "Blade-LC-002",
        name: "BX-00",
        image: "https://i.ibb.co/jvYdnq90/LC-4-B00.webp"
      },
      {
        id: "Blade-LC-003",
        name: "BX-24",
        image: "https://i.ibb.co/7tqvWDcM/LC-2-B24.webp"
      },
      {
        id: "Blade-LC-004",
        name: "UX-12",
        image: "https://i.ibb.co/Fbkt3N7V/LC-3-U12.webp"
      },
    ]
  },
  {
    id: "Blade-VT-001",
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
        id: "Blade-VT-002",
        name: "BX-16",
        image: "https://i.ibb.co/23Tb48Z0/VT-2-B16.webp"
      },
      {
        id: "Blade-VT-003",
        name: "BX-16",
        image: "https://i.ibb.co/XxYkf2pq/VT-3-B16.webp"
      },
      {
        id: "Blade-VT-004",
        name: "BX-24",
        image: "https://i.ibb.co/BVLYS6Qz/VT-4-B24.webp"
      },
      {
        id: "Blade-VT-005",
        name: "BX-35",
        image: "https://i.ibb.co/W4Z2YTFC/VT-5-B35.webp"
      },
    ]
  },
  {
    id: "Blade-RH-001",
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
        id: "Blade-RH-001",
        name: "BX-31",
        image: "https://i.ibb.co/dwyChgTD/RH-2-B31.webp"
      },
    ]
  },
  {
    id: "Blade-DD-001",
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
        id: "Blade-DD-002",
        name: "BX-31",
        image: "https://i.ibb.co/60bF0hgd/DD-2-B31.webp"
      },
      {
        id: "Blade-DD-003",
        name: "BX-00",
        image: "https://i.ibb.co/zT62PX0G/DD-3-B00.webp"
      },
      {
        id: "Blade-DD-004",
        name: "UX-00",
        image: "https://i.ibb.co/5WLJxJ7n/DD-4-U00.webp"
      },
    ]
  },
  {
    id: "Blade-HC-001",
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
        id: "Blade-HC-002",
        name: "BX-31",
        image: "https://i.ibb.co/hF91LLCt/HC-2-B31.webp"
      },
      {
        id: "Blade-HC-003",
        name: "BX-00",
        image: "https://i.ibb.co/N2JBtG4F/HC-3-B00.webp"
      },
    ]
  },
  {
    id: "Blade-PW-001",
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
        id: "Blade-PW-002",
        name: "BX-35",
        image: "https://i.ibb.co/1JQcjB3n/PW-2-B35.webp"
      },
      {
        id: "Blade-PW-003",
        name: "BX-00",
        image: "https://i.ibb.co/yckZp8YX/PW-3-B00.webp"
      },
      {
        id: "Blade-PW-004",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/nsNSpDZM/PW-4-B00.webp"
      },
    ]
  },
  {
    id: "Blade-WG-001",
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
        id: "Blade-WG-002",
        name: "BX-24",
        image: "https://i.ibb.co/RTZLt8Wn/WG-2-B24.webp"
      },
      {
        id: "Blade-WG-003",
        name: "UX-07",
        image: "https://i.ibb.co/DHbvc2gF/WG-3-U07.webp"
      },
      {
        id: "Blade-WG-004",
        name: "UX-12",
        image: "https://i.ibb.co/SwDGpb6v/WG-4-U12.webp"
      },
    ]
  },
  {
    id: "Blade-US-001",
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
        id: "Blade-US-002",
        name: "BX-35",
        image: "https://i.ibb.co/DPsr9PJF/US-2-B35.webp"
      },
    ]
  },
  {
    id: "Blade-SC-001",
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
        id: "Blade-SC-002",
        name: "BX-27",
        image: "https://i.ibb.co/5hSjMhkS/SC-2-B27.webp"
      },
      {
        id: "Blade-SC-003",
        name: "BX-27",
        image: "https://i.ibb.co/Fqkq8Hvq/SC-3-B27.webp"
      },
      {
        id: "Blade-SC-004",
        name: "UX-07",
        image: "https://i.ibb.co/PG3h6nHR/SC-4-U07.webp"
      },
    ]
  },
  {
    id: "Blade-DB-001",
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
        id: "Blade-DB-002",
        name: "UX-04",
        image: "https://i.ibb.co/8nc3jQZ8/DB-2-U04.webp"
      },
      {
        id: "Blade-DB-003",
        name: "UX-00",
        image: "https://i.ibb.co/LXm2NgHp/DB-3-U00.webp"
      },
      {
        id: "Blade-DB-004",
        name: "UX-00",
        image: "https://i.ibb.co/GQksyfXB/DB-4-LTD1.webp"
      },
      {
        id: "Blade-DB-005",
        name: "UX-00",
        image: "https://i.ibb.co/4ZTZKwt9/DB-5-LTD2.webp"
      },
      {
        id: "Blade-DB-006",
        name: "UX-00",
        image: "https://i.ibb.co/GvCK9FW3/DB-6-LTD3.webp"
      },
      {
        id: "Blade-DB-007",
        name: "UX-00",
        image: "https://i.ibb.co/pjMnLD7w/DB-7-U00.webp"
      },
      {
        id: "Blade-DB-008",
        name: "UX-00",
        image: "https://i.ibb.co/yn47CjJb/DB-8-U00.webp"
      },
      {
        id: "Blade-DB-009",
        name: "CX-08",
        image: "https://i.ibb.co/MDLYBsgR/DB-9-C08.webp"
      },
    ]
  },
  {
    id: "Blade-HH-001",
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
        id: "Blade-H-002",
        name: "UX-10",
        image: "https://i.ibb.co/3tzKJFW/HH-2-U10.webp"
      },
      {
        id: "Blade-HH-003",
        name: "UX-00",
        image: "https://i.ibb.co/wrQFjYRd/HH-3-U00.webp"
      },
    ]
  },
  {
    id: "Blade-WR-001",
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
        id: "Blade-WR-002",
        name: "UX-04",
        image: "https://i.ibb.co/fVR6nWmd/WR-2-U04.webp"
      },
      {
        id: "Blade-WR-003",
        name: "BX-35",
        image: "https://i.ibb.co/KcKGrbHc/WR-3-B35.webp"
      },
      {
        id: "Blade-WR-004",
        name: "G3 Prize",
        image: "https://i.ibb.co/YBkMFQS0/WR-4-G3P.webp"
      },
    ]
  },
  {
    id: "Blade-TB-001",
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
        id: "Blade-TB-002",
        name: "BX-31",
        image: "https://i.ibb.co/gZpSpZDP/TB-2-B31.webp"
      },
      {
        id: "Blade-TB-003",
        name: "UX-10",
        image: "https://i.ibb.co/KcdGRtMh/TB-3-U10.webp"
      },
    ]
  },
  {
    id: "Blade-SSw-001",
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
        id: "Blade-SSw-002",
        name: "UX-05",
        image: "https://i.ibb.co/xtQ1WPWb/SSw-2-U005.webp"
      },
      {
        id: "Blade-SSw-003",
        name: "UX-05",
        image: "https://i.ibb.co/MkdtLYq3/SSw-3-U05.webp"
      },
      {
        id: "Blade-SSw-004",
        name: "UX-12",
        image: "https://i.ibb.co/kgNMDjGv/SSw-4-U12.webp"
      },
    ]
  },
  {
    id: "Blade-WT-001",
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
    //     id: "Blade-WT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-CDg-001",
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
        id: "Blade-CDg-002",
        name: "BX-00",
        image: "https://i.ibb.co/GvN6TM6Y/CDg-2-B00.webp"
      },
      {
        id: "Blade-CDg-003",
        name: "CX-08",
        image: "https://i.ibb.co/0Vyt3PK2/CDg-3-C08.webp"
      },
    ]
  },
  {
    id: "Blade-BSl-001",
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
        id: "Blade-BSl-002",
        name: "BX-35",
        image: "https://i.ibb.co/x8cKGMGw/BSl-2-B35.webp"
      },
      {
        id: "Blade-BSl-003",
        name: "CX-08",
        image: "https://i.ibb.co/5xtZDZrh/BSl-3-C08.webp"
      },
    ]
  },
  {
    id: "Blade-LCT-001",
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
    id: "Blade-PR-001",
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
    id: "Blade-WW-001",
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
        id: "Blade-WW-002",
        name: "BX-36",
        image: "https://i.ibb.co/mVvtBGY7/WW-2-B36.webp"
      },
      {
        id: "Blade-WW-003",
        name: "BX-36",
        image: "https://i.ibb.co/wnyW6K6/WW-3-B36.webp"
      },
      {
        id: "Blade-WW-004",
        name: "CX-05",
        image: "https://i.ibb.co/gKnzQDL/WW-4-C05.webp"
      },
    ]
  },
  {
    id: "Blade-BSc-001",
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
    //     id: "Blade-BSc-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SW-001",
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
    //     id: "Blade-SW-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SSr-001",
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
        id: "Blade-Sr-002",
        name: "UX-00",
        image: "https://i.ibb.co/SXrCpqwg/SSr-2-U00.webp"
      },
    ]
  },
  {
    id: "Blade-KM-001",
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
    bey: [
      {
        id: "Blade-KM-002",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/BH43hfjg/KM-2-U00.webp"
      },
    ]
  },
  {
    id: "Blade-PS-001",
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
    //     id: "Blade-PS-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-CG-001",
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
    //     id: "Blade-CG-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-ID-001",
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
    //     id: "Blade-ID-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-GC-001",
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
        id: "Blade-GC-002",
        name: "UX-12",
        image: "https://i.ibb.co/MyKCQx7y/GC-2-U12.webp"
      },
    ]
  },
  {
    id: "Blade-GR-001",
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
    //     id: "Blade-GR-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SDk-001",
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
        id: "Blade-SDk-002",
        name: "BX-39",
        image: "https://i.ibb.co/8npbt9wf/SDk-2-B39.webp"
      },
      {
        id: "Blade-SDk-003",
        name: "BX-39",
        image: "https://i.ibb.co/VppwHZK7/SDk-3-B39.webp"
      },
    ]
  },
  {
    id: "Blade-DBS-001",
    name: "Dran Brave",
    image: "https://i.ibb.co/WNP49D0p/DBS-1-C01.webp",
    category: "blade",
    type:"attack",
    price: "CX-01",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "S 6-60 Vortex",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "3-60, 1-60, 5-60, 7-60",
      "Bit": "Flat, Rush, Low Rush, Gear Rush",
    },
    bey: [
      {
        id: "Blade-DBS-002",
        name: "CX-04",
        image: "https://i.ibb.co/0pYwhrRB/DBS-2-C04.webp"
      },
      {
        id: "Blade-DBS-003",
        name: "G1 Prize",
        image: "https://i.ibb.co/pvbcRDKW/DBs-3-G1-P.webp"
      },
      {
        id: "Blade-DBS-004",
        name: "G1 Prize",
        image: "https://i.ibb.co/DPs076hm/DBs-4-G1-P.webp"
      },
      {
        id: "Blade-DBS-005",
        name: "G1 Prize",
        image: "https://i.ibb.co/nsy5cj2d/DBs-5-G1-P.webp"
      },
    ]
  },
  {
    id: "Blade-WAR-001",
    name: "Wizard Arc",
    image: "https://i.ibb.co/PzrFrsqt/WAR-1-C02.webp",
    category: "blade",
    type:"stamina",
    price: "CX-02",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "R 4-55 Low Orb",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Round",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-70",
      "Bit": "Ball, Hexa, Low Orb, Orb",
    },
    bey: [
      {
        id: "Blade-WAR-002",
        name: "CX-00",
        image: "https://i.ibb.co/JRy1Ch0Y/WAR-2-C00.webp"
      },
    ]
  },
  {
    id: "Blade-PDB-001",
    name: "Perseus Dark",
    image: "https://i.ibb.co/1Cq0bqk/PDB-1-C03.webp",
    category: "blade",
    type:"defense",
    price: "CX-03",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "B 6-80 Wedge",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Bumper",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 7-70, 4-60",
      "Bit": "High Needle, Metal Needle, Dot, Low Rush",
    },
    bey: [
      {
        id: "Blade-PDB-002",
        name: "CX-04",
        image: "https://i.ibb.co/M5jDMj6y/PDB-2-C04.webp"
      },
      {
        id: "Blade-PDB-003",
        name: "G3 Prize",
        image: "https://i.ibb.co/pBTH7C8y/PDB-3-G3-P.webp"
      },
    ]
  },
  {
    id: "Blade-HRT-001",
    name: "Hells Reaper",
    image: "https://i.ibb.co/Fk094YjS/HRT-1-C05.webp",
    category: "blade",
    type:"balance",
    price: "CX-05",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "T 4-70 Kick",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Turn",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-60, 5-80",
      "Bit": "Taper, Kick, Rush",
    },
    bey: [
      {
        id: "Blade-HRT-002",
        name: "CX-05 (Hells Arc T)",
        image: "https://i.ibb.co/vxRW58zD/HRT-2-C05.webp"
      },
      {
        id: "Blade-HRT-003",
        name: "CX-05 (Full Set)",
        image: "https://i.ibb.co/fWwkJKS/HRT-3-F-C05.webp"
      },
      {
        id: "Blade-HRT-004",
        name: "UX-15 (Hells Brave J)",
        image: "https://i.ibb.co/VYYLvnyS/HRT-4-U15.webp"
      },
    ]
  },
  {
    id: "Blade-RRC-001",
    name: "Rhino Reaper",
    image: "https://i.ibb.co/VYwCTRkb/RRC-1-C05.webp",
    category: "blade",
    type:"defense",
    price: "CX-05",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "C 4-55 Dot",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Charge",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "7-60, 9-60, 5-60, 5-80",
      "Bit": "Taper, Kick, Rush, Dot",
    },
    // bey: [
    //   {
    //     id: "Blade-RRC-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SSp-001",
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
    //     id: "Blade-SSp-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-FBJ-001",
    name: "Fox Brush",
    image: "https://i.ibb.co/XwHSLJr/FBJ-1-C06.webp",
    category: "blade",
    type:"attack",
    price: "CX-06",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~36? g",
      "Stock Combo": "J 9-70 Gear Rush",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Jaggy",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "1-60, 6-60, 9-60, 5-60, 7-60",
      "Bit": "Taper, Low Rush, Low Flat, Gear Rush",
    },
    bey: [
      {
        id: "Blade-FBJ-002",
        name: "CX-06",
        image: "https://i.ibb.co/8DB3pTJb/FBJ-2-C06.webp"
      },
      {
        id: "Blade-FBJ-003",
        name: "CX-06",
        image: "https://i.ibb.co/PZPHR9Bp/FBJ-3-C06.webp"
      },
    ]
  },
  {
    id: "Blade-TPs-001",
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
    //     id: "Blade-TPs-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-PBA-001",
    name: "Pegasus Blast",
    image: "https://i.ibb.co/zhvkgRmL/PBA-1-C07.webp",
    category: "blade",
    type:"attack",
    price: "CX-07",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "A Tr",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Assault",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    bey: [
      {
        id: "Blade-PBA-002",
        name: "CoroCoro Event",
        image: "https://i.ibb.co/wN5GJCvD/PBA-2-C00.webp"
      },
    ]
  },
  {
    id: "Blade-CFW-001",
    name: "Cerberus Flame",
    image: "https://i.ibb.co/VcQ0v6Ls/CFW-1-C08.webp",
    category: "blade",
    type:"stamina",
    price: "CX-08",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "W 5-80 WB",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Wheel",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    bey: [
      {
        id: "Blade-CFW-002",
        name: "CX-08 (Cerberus Dark W)",
        image: "https://i.ibb.co/zWN3G949/CFW-2-C08.webp"
      },
      {
        id: "Blade-CFW-003",
        name: "CX-08 (Full Set)",
        image: "https://i.ibb.co/FkqM0H7R/CFW-3-F-C08.webp"
      },
    ]
  },
  {
    id: "Blade-WFM-001",
    name: "Whale Flame",
    image: "https://i.ibb.co/tpHHqbQh/WFM-1-C08.webp",
    category: "blade",
    type:"balance",
    price: "CX-08",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "M 3-85 HT",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Massive",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "Blade-WFM-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SSl-001",
    name: "Shark Scale",
    image: "https://i.ibb.co/j9JBGxv2/SSl-1-U15.webp",
    category: "blade",
    type:"attack",
    price: "UX-15",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "4-50 Under Flat",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "Blade-SSl-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-TR-001",
    name: "Tyranno Roar",
    image: "https://i.ibb.co/5xBj96Sc/TR-1-U15.webp",
    category: "blade",
    type:"attack",
    price: "UX-15",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "1-70 Level",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "Blade-TR-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SCa-001",
    name: "Samurai Calibur",
    image: "https://i.ibb.co/fz8bZVPf/SCa-1-B45.webp",
    category: "blade",
    type:"balance",
    price: "BX-45",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "6-70 Merge",
      "Product Line": "BX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "Blade-SCa-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  //RARE BLADE
  {
    id: "Blade-CDk-001",
    name: "Cobalt Drake",
    image: "https://i.ibb.co/KjHsS8q2/CDk-1-B00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-Rare Bey Battle",
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
        id: "Blade-CDk-002",
        name: "BX-00",
        image: "https://i.ibb.co/4ggqPtvt/CDk-2-B00.webp"
      },
    ]
  },
  {
    id: "Blade-PF-001",
    name: "Phoenix Feather",
    image: "https://i.ibb.co/NgYDNzQ0/PF-1-B00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-CoroCoro Comic",
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
        id: "Blade-PF-002",
        name: "UX-12",
        image: "https://i.ibb.co/MyvGTPGr/PF-2-U12.webp"
      },
      {
        id: "Blade-PF-003",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/bjY3fZy8/PF-3-B00.webp"
      },
    ]
  },
  {
    id: "Blade-AP-001",
    name: "Aero Pegasus",
    image: "https://i.ibb.co/5XY6MgBH/AP-1-U00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "UX-Rare Bey Battle",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~38 g",
      "Stock Combo": "3-70 Accel",
      "Product Line": "UX",
    },
    combo: {
      "Ratchet": "3-60, 9-60, 5-60, 7-60",
      "Bit": "Rush, Low Rush, level",
    },
    // bey: [
    //   {
    //     id: "Blade-AP-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SK-001",
    name: "Shinobi Knife (XONE)",
    image: "https://i.ibb.co/vxw8CZC7/SK-1-XONE.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-Game Package",
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
    //     id: "Blade-SK-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-MT-001",
    name: "Mammoth Tusk",
    image: "https://i.ibb.co/mrrM6Jzz/MT-1-B00.webp",
    category: "blade",
    type: ["balance", "rare"],
    price: "BX-Rare Bey Battle",
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
    //     id: "Blade-MT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-CC-001",
    name: "Croc Crunch",
    image: "https://i.ibb.co/C3jpr2Th/CC-1-B00.webp",
    category: "blade",
    type: ["attack", "rare"],
    price: "BX-CoroCoro Comic",
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
    //     id: "Blade-CC-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SSt-001",
    name: "Samurai Steel",
    image: "https://i.ibb.co/ZRdNsxyV/SSt-1-B00.webp",
    category: "blade",
    type:["attack", "rare"],
    price: "BX-CoroCoro Comic",
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
    //     id: "Blade-SSt-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-LFT-001",
    name: "Leon Fang (Red Ver.)",
    image: "https://i.ibb.co/twWHjc2b/LFT-1-RED.webp",
    category: "blade",
    type:["attack", "rare"],
    price: "CX-Game Package",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "4-60 Accel",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Turn",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "Blade-LFT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-DAS-001",
    name: "Dran Arc (MC Blue)",
    image: "https://i.ibb.co/NnmhMKLB/Persona-CX.webp",
    category: "blade",
    type:["balance", "rare"],
    price: "CX-CoroCoro Comic",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "S 2-70 Kick",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "5-60",
      "Bit": "Hexa",
    },
    // bey: [
    //   {
    //     id: "Blade-DAS-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-VVS-001",
    name: "Valkyrie Volt",
    image: "https://i.ibb.co/hFs4WM7S/VBS-1-C00.webp",
    category: "blade",
    type:["attack", "rare"],
    price: "CX-Rare Bey Battle",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "S 4-70 Vortex",
      "Lock Chip Type": "Metal",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    combo: {
      "Ratchet": "",
      "Bit": "",
    },
    // bey: [
    //   {
    //     id: "Blade-VBS-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  // ASSIST BLADES
  {
    id: "As-S-001",
    name: "S (Slash)",
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
        id: "As-S-002",
        name: "CX-04",
        image: "https://i.ibb.co/Zp90jhR3/S-2-C04.webp"
      },
      {
        id: "As-S-003",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/LzYkW1xw/S-3-C00.png"
      },
      {
        id: "As-S-004",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/BHrsBYgF/S-4-C00.webp"
      },
    ]
  },
  {
    id: "As-R-001",
    name: "R (Round)",
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
        id: "As-R-002",
        name: "CX-00",
        image: "https://i.ibb.co/mC2xhrQ7/R-2-C00.webp"
      },
    ]
  },
  {
    id: "As-B-001",
    name: "B (Bumper)",
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
        id: "As-B-002",
        name: "CX-04",
        image: "https://i.ibb.co/bjSR90Rb/B-2-C04.webp"
      },
    ]
  },
  {
    id: "As-T-001",
    name: "T (Turn)",
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
        id: "As-T-002",
        name: "CX-05",
        image: "https://i.ibb.co/VW2GdZHW/T-2-C05.webp"
      },
      {
        id: "As-T-003",
        name: "CX-00",
        image: "https://i.ibb.co/7tL83gw9/T-3-C00.webp"
      },
    ]
  },
  {
    id: "As-C-001",
    name: "C (Charge)",
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
    //     id: "As-C-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "As-J-001",
    name: "J (Jaggy)",
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
        id: "As-J-002",
        name: "CX-06",
        image: "https://i.ibb.co/7J0mqvnj/J-2-C06.webp"
      },
      {
        id: "As-J-003",
        name: "CX-06",
        image: "https://i.ibb.co/qYr6pSBy/J-3-C06.webp"
      },
      {
        id: "As-J-004",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/d4Nnc11L/J-4-C00.webp"
      },
      {
        id: "As-J-005",
        name: "UX-15",
        image: ""
      },
    ]
  },
  {
    id: "As-A-001",
    name: "A (Assault)",
    image: "https://i.ibb.co/LdDXTjKk/A-1-C07.webp",
    category: "assist-blade",
    price: "CX-07",
    specs: {
      "Spin": "Right",
      "Weight": "~ g",
      "High Level": "~ MM",
    },
    bey: [
      {
        id: "As-A-002",
        name: "CoroCoro Event",
        image: "https://i.ibb.co/rGXRT7bx/A-2-C00.webp"
      },
    ]
  },
  {
    id: "As-W-001",
    name: "W (Wheel)",
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
        id: "As-W-002",
        name: "CX-08",
        image: "https://i.ibb.co/DHRCNgSZ/W-2-C08.webp"
      },
    ]
  },
  {
    id: "As-M-001",
    name: "M (Massive)",
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
    //     id: "As-M-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  // RATCHETS
  {
    id: "Rat-070-001",
    name: "0-70",
    image: "https://i.ibb.co/1ftYncmr/0-70-1-U14.webp",
    category: "ratchet",
    price: "UX-14",
    features: [
      "0 Contact Points",
      "High : 7.0 mm",
      "Weight: ~7 g",
    ],
    // bey: [
    //   {
    //     id: "Rat-080-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Rat-080-001",
    name: "0-80",
    image: "https://i.ibb.co/hxLdSfhf/0-80-1-U12.webp",
    category: "ratchet",
    price: "UX-12",
    features: [
      "0 Contact Points",
      "High : 8.0 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-080-002",
        name: "UX-12",
        image: "https://i.ibb.co/6cVdqyVC/0-80-2-U12.webp"
      },
      {
        id: "Rat-080-003",
        name: "UX-12",
        image: "https://i.ibb.co/RTXGkgKr/0-80-3-U12.webp"
      },
      {
        id: "Rat-080-004",
        name: "CX-06",
        image: "https://i.ibb.co/0RZR7ZyH/0-80-4-C06.webp"
      },
    ]
  },
  {
    id: "Rat-160-001",
    name: "1-60",
    image: "https://i.ibb.co/39mbJTH1/1-60-1-U01.webp",
    category: "ratchet",
    price: "UX-01",
    features: [
      "1 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-160-002",
        name: "UX-04",
        image: "https://i.ibb.co/wZqn88m5/1-60-2-U04.webp"
      },
      {
        id: "Rat-160-003",
        name: "BX-31",
        image: "https://i.ibb.co/BKdhw5R6/1-60-3-B31.webp"
      },
      {
        id: "Rat-160-004",
        name: "BX-35",
        image: "https://i.ibb.co/XffCCMYL/1-60-4-B35.webp"
      },
      {
        id: "Rat-160-005",
        name: "BX-00",
        image: "https://i.ibb.co/n886nNmt/1-60-5-B00.webp"
      },
      {
        id: "Rat-160-006",
        name: "UX-10",
        image: "https://i.ibb.co/rKmMB0kw/1-60-6-U10.webp"
      },
      {
        id: "Rat-160-007",
        name: "UX-13",
        image: "https://i.ibb.co/BKQPS0rv/1-60-7-U00.webp"
      },
      {
        id: "Rat-160-008",
        name: "Park Limited",
        image: "https://i.ibb.co/spwXkfqS/1-60-8-LTD.webp"
      },
      {
        id: "Rat-160-009",
        name: "Park Limited",
        image: "https://i.ibb.co/cK8pbBhj/1-60-9-LTD.webp"
      },
      {
        id: "Rat-160-00=10",
        name: "Park Limited",
        image: "https://i.ibb.co/9kkfV44b/1-60-10-LTD.webp"
      },
      {
        id: "Rat-160-011",
        name: "Park Limited",
        image: "https://i.ibb.co/kVZ5Vvqr/1-60-11-LTD.webp"
      },
      {
        id: "Rat-160-012",
        name: "Park Limited",
        image: "https://i.ibb.co/rRg6jcYC/1-60-12-LTD.webp"
      },
      {
        id: "Rat-160-013",
        name: "Park Limited",
        image: "https://i.ibb.co/Dgwfc2Nd/1-60-13-LTD.webp"
      },
      {
        id: "Rat-160-014",
        name: "UX-13",
        image: "https://i.ibb.co/nN0nY7JM/1-60-14-U13.webp"
      },
      {
        id: "Rat-160-015",
        name: "CX-08",
        image: "https://i.ibb.co/ycDrxSYC/1-60-15-C08.webp"
      },
    ]
  },
  {
    id: "Rat-170-001",
    name: "1-70",
    image: "https://i.ibb.co/Z6wCbgdh/1-70-1-U15.webp",
    category: "ratchet",
    price: "UX-15",
    features: [
      "1 Contact Points",
      "High : 7.0 mm",
      "Weight: ~ g",
    ],
    // bey: [
    //   {
    //     id: "Rat-170-002",
    //     name: "UX-07",
    //     image: "https://i.ibb.co/YTWjYHJr/1-80-2-U07.webp"
    //   },
    // ]
  },
  {
    id: "Rat-180-001",
    name: "1-80",
    image: "https://i.ibb.co/MwrKzWg/1-80-1-U05.webp",
    category: "ratchet",
    price: "UX-05",
    features: [
      "1 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6.5 g",
    ],
    bey: [
      {
        id: "Rat-180-002",
        name: "UX-07",
        image: "https://i.ibb.co/YTWjYHJr/1-80-2-U07.webp"
      },
      {
        id: "Rat-180-003",
        name: "Collab",
        image: "https://i.ibb.co/Mk4L5PX0/1-80-3-Col.webp"
      },
    ]
  },
  {
    id: "Rat-260-001",
    name: "2-60",
    image: "https://i.ibb.co/Vc4KzB0n/2-60-1-B34.webp",
    category: "ratchet",
    price: "BX-34",
    features: [
      "2 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6.2 g",
    ],
    bey: [
      {
        id: "Rat-260-002",
        name: "BX-00",
        image: "https://i.ibb.co/QxX2PQ2/2-60-2-B00.webp"
      },
      {
        id: "Rat-260-003",
        name: "UX-07",
        image: "https://i.ibb.co/n87K2g6k/2-60-3-U07.webp"
      },
      {
        id: "Rat-260-004",
        name: "25th Anniversary",
        image: "https://i.ibb.co/dw9gMt0F/2-60-4-25th.webp"
      },
      {
        id: "Rat-260-005",
        name: "UX-12",
        image: "https://i.ibb.co/5xFhGnM5/2-60-5-U12.webp"
      },
      {
        id: "Rat-260-006",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/DD66dnSb/2-60-6-B00.webp"
      },
      {
        id: "Rat-260-007",
        name: "CX-06",
        image: "https://i.ibb.co/tNWJ9G7/2-60-7-C06.webp"
      },
    ]
  },
  {
    id: "Rat-270-001",
    name: "2-70",
    image: "https://i.ibb.co/HfD0mdf5/2-70-1-U09.webp",
    category: "ratchet",
    price: "UX-09",
    features: [
      "2 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6.3 g",
    ],
    bey: [
      {
        //metal coat orange
        id: "Rat-270-002",
        name: "CoroCoro Comic",
        image: ""
      },
      {
        //Dran Arc S
        id: "Rat-270-003",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/8Dk2br85/2-70-3-C00.webp"
      },
    ]
  },
  {
    id: "Rat-280-001",
    name: "2-80",
    image: "https://i.ibb.co/RGFDdmY8/2-80-1-B00.webp",
    category: "ratchet",
    price: "BX-00",
    features: [
      "2 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6.9 g",
    ],
    bey: [
      {
        id: "Rat-280-002",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/N60MgZrz/2-80-2-B00.webp"
      },
    ]
  },
  {
    id: "Rat-360-001",
    name: "3-60",
    image: "https://i.ibb.co/Qv29Y5pf/3-60-1-B01.webp",
    category: "ratchet",
    price: "BX-01",
    features: [
      "3 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "Rat-360-002",
        name: "BX-07",
        image: "https://i.ibb.co/dsm9xW62/3-60-2-B07.webp"
      },
      {
        id: "Rat-360-003",
        name: "BX-14",
        image: "https://i.ibb.co/ch9X0FV6/3-60-3-B14.webp"
      },
      {
        id: "360-004",
        name: "BX-14",
        image: "https://i.ibb.co/2fskgqs/3-60-4-B14.webp"
      },
      {
        id: "Rat-360-005",
        name: "BX-17",
        image: "https://i.ibb.co/zTfFvLXS/3-60-5-B17.webp"
      },
      {
        id: "Rat-360-006",
        name: "BX-21",
        image: "https://i.ibb.co/2YLzfWqd/3-60-6-B21.webp"
      },
      {
        id: "Rat-360-007",
        name: "BX-24",
        image: "https://i.ibb.co/9kyzR5qd/3-60-7-B24.webp"
      },
      {
        id: "Rat-360-008",
        name: "BX-31",
        image: "https://i.ibb.co/zhcPx6wc/3-60-8-B31.webp"
      },
      {
        id: "Rat-360-009",
        name: "BX-33",
        image: "https://i.ibb.co/2YhDhGfV/3-60-9-B33.webp"
      },
      {
        id: "Rat-360-010",
        name: "BX-39",
        image: "https://i.ibb.co/BVpxTtQw/3-60-10-B39.webp"
      },
      {
        id: "Rat-360-011",
        name: "Collab",
        image: "https://i.ibb.co/5X188nJ7/3-60-11-Col.webp"
      },
      {
        id: "Rat-360-012",
        name: "Collab",
        image: "https://i.ibb.co/9H7Dh5wR/3-60-12-Col.webp"
      },
      {
        id: "Rat-360-013",
        name: "Collab",
        image: "https://i.ibb.co/MktJJJb2/3-60-13-Col.webp"
      },
      {
        id: "Rat-360-014",
        name: "BX-00",
        image: "https://i.ibb.co/KpcP076z/3-60-14-B00.webp"
      },
      {
        id: "Rat-360-015",
        name: "Sushiro Ver.",
        image: "https://i.ibb.co/nqQJD8C5/3-60-15-Sushi.webp"
      },
      {
        id: "Rat-360-016",
        name: "UX-15",
        image: "https://i.ibb.co/Q7km5vgM/3-60-16-U15.webp"
      },
    ]
  },
  {
    id: "Rat-370-001",
    name: "3-70",
    image: "https://i.ibb.co/9HD6jrmG/3-70-1-U02.webp",
    category: "ratchet",
    price: "UX-02",
    features: [
      "3 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "Rat-370-002",
        name: "UX-05",
        image: "https://i.ibb.co/F4Gwtkmj/3-70-2-U05.webp"
      },
      {
        id: "Rat-370-003",
        name: "BX-35",
        image: "https://i.ibb.co/ZpRTWfTm/3-70-3-B35.webp"
      },
      {
        id: "Rat-370-004",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/ds8fFzwr/3-70-4-U00.webp"
      },
      {
        id: "Rat-370-005",
        name: "UX-00",
        image: "https://i.ibb.co/V025Gj95/3-70-5-25th.webp"
      },
      {
        id: "Rat-370-006",
        name: "25th Anniversary",
        image: "https://i.ibb.co/V025Gj95/3-70-5-25th.webp"
      },
      {
        id: "Rat-370-007",
        name: "UX-00",
        image: "https://i.ibb.co/gZJmNMDZ/3-70-6-U00.webp"
      },
    ]
  },
  {
    id: "Rat-380-001",
    name: "3-80",
    image: "https://i.ibb.co/FL1qMSss/3-80-1-B04.webp",
    category: "ratchet",
    price: "BX-04",
    features: [
      "3 Contact Points",
      "High : 8.0 mm",
      "Weight: ~7.1 g",
    ],
    bey: [
      {
        id: "Rat-380-002",
        name: "BX-06",
        image: "https://i.ibb.co/XfLBmxw0/3-80-2-B06.webp"
      },
      {
        id: "Rat-380-003",
        name: "BX-08",
        image: "https://i.ibb.co/b5mJ3XnP/3-80-3-B08.webp"
      },
      {
        id: "Rat-380-004",
        name: "BX-14",
        image: "https://i.ibb.co/GyPPTF1/3-80-4-B14.webp"
      },
      {
        id: "Rat-380-005",
        name: "BX-16",
        image: "https://i.ibb.co/Wvcmfd97/3-80-5-B16.webp"
      },
      {
        id: "Rat-380-006",
        name: "BX-19",
        image: "https://i.ibb.co/8LFHRpXG/3-80-6-B19.webp"
      },
      {
        id: "Rat-380-007",
        name: "BX-20",
        image: "https://i.ibb.co/21tLYn7H/3-80-7-B20.webp"
      },
      {
        id: "Rat-380-008",
        name: "BX-24",
        image: "https://i.ibb.co/N6LV9vrc/3-80-8-B24.webp"
      },
      {
        id: "Rat-380-009",
        name: "BX-00",
        image: "https://i.ibb.co/tMsw14vh/3-80-9-B00.webp"
      },
      {
        id: "Rat-380-010",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/yFkMdhgc/3-80-10-B00.webp"
      },
      {
        id: "Rat-380-011",
        name: "BX-36",
        image: "https://i.ibb.co/zTSz9CZT/3-80-11-B36.webp"
      },
      {
        id: "Rat-380-012",
        name: "UX-08",
        image: "https://i.ibb.co/NwTC7Sc/3-80-12-U08.webp"
      },
      {
        id: "Rat-380-013",
        name: "UX-12",
        image: "https://i.ibb.co/23Q2tnGH/3-80-13-U12.webp"
      },
      {
        id: "Rat-380-014",
        name: "Collab",
        image: "https://i.ibb.co/VYBGdcHt/3-80-14-Col.webp"
      },
      {
        id: "Rat-380-015",
        name: "Collab",
        image: "https://i.ibb.co/8LhHQKtw/3-80-15-Col.webp"
      },
      {
        id: "Rat-380-016",
        name: "Collab",
        image: "https://i.ibb.co/Fkns32NS/3-80-16-Col.webp"
      },
      {
        id: "Rat-380-017",
        name: "G3 Prize",
        image: "https://i.ibb.co/N2pTYPv4/3-80-17-G3-P.webp"
      },
    ]
  },
  {
    id: "Rat-385-001",
    name: "3-85",
    image: "https://i.ibb.co/8L9yt4hY/3-85-1-U10.webp",
    category: "ratchet",
    price: "UX-10",
    features: [
      "3 Contact Points",
      "High : 8.5 mm",
      "Weight: ~4.7 g",
    ],
    bey: [
      {
        id: "Rat-385-002",
        name: "CX-05",
        image: "https://i.ibb.co/MDttB0K8/3-85-2-C05.webp"
      },
      {
        id: "Rat-385-003",
        name: "Collab",
        image: "https://i.ibb.co/39PzGjFZ/3-85-3-Col.webp"
      },
      {
        id: "Rat-385-004",
        name: "CX-08",
        image: "https://i.ibb.co/qZkWLmB/3-85-4-C08.webp"
      },
      {
        id: "Rat-385-005",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/WWtVbrbw/3-85-5-U00.webp"
      },
    ]
  },
  {
    id: "Rat-450-001",
    name: "4-50",
    image: "https://i.ibb.co/vCgy13ZZ/4-50-1-U15.webp",
    category: "ratchet",
    price: "UX-15",
    features: [
      "4 Contact Points",
      "High : 5.0 mm",
      "Weight: ~ g",
    ],
    // bey: [
    //   {
    //     id: "Rat-450-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Rat-455-001",
    name: "4-55",
    image: "https://i.ibb.co/G3kQrKdb/4-55-1-C02.webp",
    category: "ratchet",
    price: "CX-02",
    features: [
      "4 Contact Points",
      "High : 4.5 mm",
      "Weight: ~4.8 g",
    ],
    bey: [
      {
        id: "Rat-455-002",
        name: "CX-05",
        image: "https://i.ibb.co/x8DmxJNM/4-55-2-C05.webp"
      },
      {
        id: "Rat-455-003",
        name: "CX-08",
        image: "https://i.ibb.co/vCCB70KB/4-55-6-C08.webp"
      },
      {
        id: "Rat-455-004",
        name: "Collab",
        image: "https://i.ibb.co/pr6M1wVK/4-55-4-Col.webp"
      },
      {
        id: "Rat-455-004",
        name: "CX-00",
        image: "https://i.ibb.co/XryYNrvt/4-55-5-C00.webp"
      },
    ]
  },
  {
    id: "Rat-460-001",
    name: "4-60",
    image: "https://i.ibb.co/0VqTk9m8/4-60-1-B02.webp",
    category: "ratchet",
    price: "BX-02",
    features: [
      "4 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "Rat-460-002",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/tTT5QV1b/4-60-2-B00.webp"
      },
      {
        id: "Rat-460-003",
        name: "BX-00",
        image: "https://i.ibb.co/rG2tc0DY/4-60-3-B00.webp"
      },
      {
        id: "Rat-460-004",
        name: "BX-08",
        image: "https://i.ibb.co/Y4wNBLcf/4-60-4-B08.webp"
      },
      {
        id: "Rat-460-005",
        name: "BX-14",
        image: "https://i.ibb.co/8gfnKQHr/4-60-5-B14.webp"
      },
      {
        id: "Rat-460-006",
        name: "BX-16",
        image: "https://i.ibb.co/0V9dwJy2/4-60-6-B16.webp"
      },
      {
        id: "Rat-460-007",
        name: "BX-20",
        image: "https://i.ibb.co/PLCchzS/4-60-7-B20.webp"
      },
      {
        id: "Rat-460-008",
        name: "BX-24",
        image: "https://i.ibb.co/k6cGJJr7/4-60-8-B24.webp"
      },
      {
        id: "Rat-460-009",
        name: "BX-35",
        image: "https://i.ibb.co/chdZsSYr/4-60-9-B35.webp"
      },
      {
        id: "Rat-460-010",
        name: "25th Anniversary",
        image: "https://i.ibb.co/21z2RR3f/4-60-10-25th.webp"
      },
      {
        id: "Rat-460-011",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/cSz248ms/4-60-11-B00.webp"
      },
      {
        id: "Rat-460-012",
        name: "Game Package",
        image: "https://i.ibb.co/Wv5PzZgQ/4-60-12-B00.webp"
      },
      {
        id: "Rat-460-013",
        name: "UX-12",
        image: "https://i.ibb.co/Kxsf4TsB/4-60-13-U12.webp"
      },
      {
        id: "Rat-460-014",
        name: "Collab",
        image: "https://i.ibb.co/4nMyx4mb/4-60-14-Col.webp"
      },
      {
        id: "Rat-460-015",
        name: "Collab",
        image: "https://i.ibb.co/bMjV2FGT/4-60-15-Col.webp"
      },
      {
        id: "Rat-460-016",
        name: "Collab",
        image: "https://i.ibb.co/h1FQgdJK/4-60-16-Col.webp"
      },
      {
        id: "Rat-460-017",
        name: "Game Package",
        image: "https://i.ibb.co/ds9dvRhC/4-60-17-C00.webp"
      },
    ]
  },
  {
    id: "Rat-470-001",
    name: "4-70",
    image: "https://i.ibb.co/CsNVCTwJ/4-70-1-B31.webp",
    category: "ratchet",
    price: "BX-31",
    features: [
      "4 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6.5 g",
    ],
    bey: [
      {
        id: "Rat-470-002",
        name: "BX-31",
        image: "https://i.ibb.co/gM3c3Dhm/4-70-2-B31.webp"
      },
      {
        id: "Rat-470-003",
        name: "BX-36",
        image: "https://i.ibb.co/nN3Mh5wp/4-70-3-B36.webp"
      },
      {
        id: "Rat-470-004",
        name: "BX-38",
        image: "https://i.ibb.co/8GfsBvW/4-70-4-B38.webp"
      },
      {
        id: "Rat-470-005",
        name: "CX-05",
        image: "https://i.ibb.co/hx8hZ2nc/4-70-5-C05.webp"
      },
      {
        id: "Rat-470-006",
        name: "CX-05",
        image: "https://i.ibb.co/mCKNsyKt/4-70-6-C05.webp"
      },
      {
        id: "Rat-470-007",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/Zz5TVXcH/4-70-7-C00.webp"
      },
    ]
  },
  {
    id: "Rat-480-001",
    name: "4-80",
    image: "https://i.ibb.co/fYt4J1q7/4-80-1-B03.webp",
    category: "ratchet",
    price: "BX-03",
    features: [
      "4 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-480-002",
        name: "BX-05",
        image: "https://i.ibb.co/Ldzk057w/4-80-2-B05.webp"
      },
      {
        id: "Rat-480-003",
        name: "BX-08",
        image: "https://i.ibb.co/Xk3qgtYj/4-80-3-B08.webp"
      },
      {
        id: "Rat-480-004",
        name: "BX-13",
        image: "https://i.ibb.co/RG2rd1QD/4-80-4-B13.webp"
      },
      {
        id: "Rat-480-005",
        name: "BX-14",
        image: "https://i.ibb.co/rGsTfBzV/4-80-5-B14.webp"
      },
      {
        id: "Rat-480-006",
        name: "BX-14",
        image: "https://i.ibb.co/jPVQbBzx/4-80-6-B14.webp"
      },
      {
        id: "Rat-480-007",
        name: "BX-17",
        image: "https://i.ibb.co/HTDJsXzM/4-80-7-B17.webp"
      },
      {
        id: "Rat-480-008",
        name: "BX-21",
        image: "https://i.ibb.co/fVjVgvMP/4-80-8-B21.webp"
      },
      {
        id: "Rat-480-009",
        name: "BX-24",
        image: "https://i.ibb.co/TqnBSsvg/4-80-9-B24.webp"
      },
      {
        id: "Rat-480-010",
        name: "BX-27",
        image: "https://i.ibb.co/DfGFzGGr/4-80-10-B27.webp"
      },
      {
        id: "Rat-480-011",
        name: "BX-00",
        image: "https://i.ibb.co/JWQRGBmY/4-80-11-B00.webp"
      },
      {
        id: "Rat-480-012",
        name: "Collab",
        image: "https://i.ibb.co/27dN0yyg/4-80-12-Col.webp"
      },
      {
        id: "Rat-480-013",
        name: "Collab",
        image: "https://i.ibb.co/R47CKmJL/4-80-13-Col.webp"
      },
      {
        id: "Rat-480-014",
        name: "Collab",
        image: "https://i.ibb.co/1GFGtqjt/4-80-14-Col.webp"
      },
    ]
  },
  {
    id: "Rat-560-001",
    name: "5-60",
    image: "https://i.ibb.co/nqbhGh4z/5-60-1-B15.webp",
    category: "ratchet",
    price: "BX-15",
    features: [
      "5 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.6 g",
    ],
    bey: [
      {
        id: "Rat-560-002",
        name: "BX-21",
        image: "https://i.ibb.co/vvJRjNjV/5-60-2-B21.webp"
      },
      {
        id: "Rat-560-003",
        name: "BX-24",
        image: "https://i.ibb.co/chvjpmr5/5-60-3-B24.webp"
      },
      {
        id: "Rat-560-004",
        name: "BX-00",
        image: "https://i.ibb.co/bD9x9nR/5-60-4-B00.webp"
      },
      {
        id: "Rat-560-005",
        name: "BX-26",
        image: "https://i.ibb.co/wNFg5TfP/5-60-5-B26.webp"
      },
      {
        id: "Rat-560-006",
        name: "BX-00",
        image: "https://i.ibb.co/RLLbKNV/5-60-10-B00.png"
      },
      {
        id: "Rat-560-007",
        name: "BX-27",
        image: "https://i.ibb.co/hRhWqDZ9/5-60-7-B27.webp"
      },
      {
        id: "Rat-560-008",
        name: "BX-37",
        image: "https://i.ibb.co/TMDXwD5s/5-60-8-B00.webp"
      },
      {
        id: "Rat-560-009",
        name: "BX-37",
        image: "https://i.ibb.co/XrDHt0NZ/5-60-9-B37.webp"
      },
    ]
  },
  {
    id: "Rat-570-001",
    name: "5-70",
    image: "https://i.ibb.co/HD5Bdf2v/5-70-1-U03.webp",
    category: "ratchet",
    price: "UX-03",
    features: [
      "5 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6.6 g",
    ],
    bey: [
      {
        id: "Rat-570-002",
        name: "UX-04",
        image: "https://i.ibb.co/qFmpMZy6/5-70-2-U04.webp"
      },
      {
        id: "Rat-570-003",
        name: "BX-35",
        image: "https://i.ibb.co/twYv1fyv/5-70-3-B35.webp"
      },
      {
        id: "Rat-570-004",
        name: "BX-39",
        image: "https://i.ibb.co/T6rTDQ5/5-70-4-B39.webp"
      },
      {
        id: "Rat-570-005",
        name: "G3 Prize",
        image: "https://i.ibb.co/Q7FLgWk7/5-70-5-G3-P.webp"
      },
      {
        id: "Rat-570-006",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/4w3QKPGK/5-70-6-B00.webp"
      },
    ]
  },
  {
    id: "Rat-580-001",
    name: "5-80",
    image: "https://i.ibb.co/JRm2c35r/5-80-1-B16.webp",
    category: "ratchet",
    price: "BX-16",
    features: [
      "5 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7.2 g",
    ],
    bey: [
      {
        id: "Rat-580-002",
        name: "BX-20",
        image: "https://i.ibb.co/zWq21DW5/5-80-2-B20.webp"
      },
      {
        id: "Rat-580-003",
        name: "BX-24",
        image: "https://i.ibb.co/39qs6LmF/5-80-3-B24.webp"
      },
      {
        id: "Rat-580-004",
        name: "BX-31",
        image: "https://i.ibb.co/zVV7rNhp/5-80-4-B31.webp"
      },
      {
        id: "Rat-580-005",
        name: "BX-35",
        image: "https://i.ibb.co/qM64fcL5/5-80-5-B35.webp"
      },
      {
        id: "Rat-580-006",
        name: "BX-36",
        image: "https://i.ibb.co/wrZG4HfZ/5-80-6-B36.webp"
      },
      {
        id: "Rat-580-007",
        name: "CX-08",
        image: "https://i.ibb.co/ynvx7Dts/5-80-7-C08.webp"
      },
      {
        id: "Rat-580-008",
        name: "CX-08",
        image: "https://i.ibb.co/rRQhH5bg/5-80-8-C08.webp"
      },
    ]
  },
  {
    id: "Rat-660-001",
    name: "6-60",
    image: "https://i.ibb.co/LXzr1j6d/6-60-1-C01.webp",
    category: "ratchet",
    price: "CX-01",
    features: [
      "6 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.1 g",
    ],
    bey: [
      {
        id: "Rat-660-002",
        name: "CX-04",
        image: "https://i.ibb.co/B2sVVD1g/6-60-2-C04.webp"
      },
      {
        id: "Rat-660-003",
        name: "G1 Prize",
        image: "https://i.ibb.co/mr9W1JFp/6-60-3-G1-P.webp"
      },
      {
        id: "Rat-660-004",
        name: "G1 Prize",
        image: "https://i.ibb.co/XxsrGkvy/6-60-4-G1-P.webp"
      },
      {
        id: "Rat-660-005",
        name: "G1 Prize",
        image: "https://i.ibb.co/S4xbf6Qt/6-60-5-G1-P.webp"
      },
    ]
  },
  {
    id: "Rat-670-001",
    name: "6-70",
    image: "https://i.ibb.co/C5kQN1tT/6-70-1-B45.webp",
    category: "ratchet",
    price: "BX-45",
    features: [
      "6 Contact Points",
      "High : 7.0 mm",
      "Weight: ~ g",
    ],
    // bey: [
    //   {
    //     id: "Rat-670-002",
    //     name: "UX-07",
    //     image: "https://i.ibb.co/YTWjYHJr/1-80-2-U07.webp"
    //   },
    // ]
  },
  {
    id: "Rat-680-001",
    name: "6-80",
    image: "https://i.ibb.co/qYwHBx4r/6-80-1-C03.webp",
    category: "ratchet",
    price: "CX-03",
    features: [
      "6 Contact Points",
      "High : 8.00 mm",
      "Weight: ~6.9 g",
    ],
    bey: [
      {
        id: "Rat-680-002",
        name: "CX-04",
        image: "https://i.ibb.co/GfPD5b1m/6-80-2-C04.webp"
      },
      {
        id: "Rat-680-003",
        name: "G3 Prize",
        image: "https://i.ibb.co/Tqnjh6Jp/6-80-3-G3-P.webp"
      },
      {
        //lock leon
        id: "Rat-680-004",
        name: "BX-00",
        image: ""
      },
    ]
  },
  {
    id: "Rat-760-001",
    name: "7-60",
    image: "https://i.ibb.co/7T427Ry/7-60-1-U06.webp",
    category: "ratchet",
    price: "UX-06",
    features: [
      "7 Contact Points",
      "High : 6.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-760-002",
        name: "BX-00",
        image: "https://i.ibb.co/Fb3xSYJ7/7-60-2-B00.webp"
      },
      {
        id: "Rat-760-003",
        name: "CX-05",
        image: "https://i.ibb.co/MD5dxgdQ/7-60-3-C05.webp"
      },
    ]
  },
  {
    id: "Rat-770-001",
    name: "7-70",
    image: "https://i.ibb.co/f3jVx2N/7-70-1-U10.webp",
    category: "ratchet",
    price: "UX-10",
    features: [
      "7 Contact Points",
      "High : 7.00 mm",
      "Weight: ~7.1 g",
    ],
    bey: [
      {
        id: "Rat-770-002",
        name: "CX-08",
        image: "https://i.ibb.co/gL9GxQk7/7-70-2-C08.webp"
      },
    ]
  },
  {
    id: "Rat-780-001",
    name: "7-80",
    image: "https://i.ibb.co/PZjCjcrB/7-80-1-B39.webp",
    category: "ratchet",
    price: "CX-39",
    features: [
      "7 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7.8 g",
    ],
    // bey: [
    //   {
    //     id: "Rat-780-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Rat-960-001",
    name: "9-60",
    image: "https://i.ibb.co/C3XBTB4x/9-60-1-B23.webp",
    category: "ratchet",
    price: "BX-23",
    features: [
      "9 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6.2 g",
    ],
    bey: [
      {
        id: "Rat-960-002",
        name: "UX-05",
        image: "https://i.ibb.co/KjDN2gyT/9-60-2-U05.webp"
      },
      {
        id: "Rat-960-003",
        name: "UX-11",
        image: "https://i.ibb.co/qMPb8yg6/9-60-3-U11.webp"
      },
      {
        id: "Rat-960-004",
        name: "BX-00",
        image: "https://i.ibb.co/YB74yMf7/9-60-4-B00.webp"
      },
      {
        id: "Rat-960-005",
        name: "Collab",
        image: "https://i.ibb.co/zh1bZdg5/9-60-5-Col.webp"
      },
    ]
  },
  {
    id: "Rat-970-001",
    name: "9-70",
    image: "https://i.ibb.co/fVphTQyV/9-70-1-U07.webp",
    category: "ratchet",
    price: "UX-07",
    features: [
      "9 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "Rat-970-002",
        name: "CX-06",
        image: "https://i.ibb.co/gFvCh9FG/9-70-2-C06.webp"
      },
    ]
  },
  {
    id: "Rat-980-001",
    name: "9-80",
    image: "https://i.ibb.co/99fYmz4F/9-80-1-B27.webp",
    category: "ratchet",
    price: "BX-27",
    features: [
      "9 Contact Points",
      "High : 8.00 mm",
      "Weight: ~6.8 g",
    ],
    bey: [
      {
        id: "Rat-980-002",
        name: "BX-31",
        image: "https://i.ibb.co/QjfXWGpk/9-80-2-B31.webp"
      },
      {
        id: "Rat-980-003",
        name: "BX-35",
        image: "https://i.ibb.co/qY3F19Kc/9-80-3-B35.webp"
      },
      {
        id: "Rat-980-004",
        name: "BX-00",
        image: "https://i.ibb.co/fZGvnCW/9-80-4-B00.webp"
      },
      {
        id: "Rat-980-005",
        name: "CX-05",
        image: "https://i.ibb.co/GQxYqLjk/9-80-5-C05.webp"
      },
    ]
  },
  {
    id: "Rat-M85-001",
    name: "M-85",
    image: "https://i.ibb.co/93dWZSNz/M-85-1-B44.webp",
    category: "ratchet",
    price: "BX-44",
    features: [
      "5 Contact Points",
      "High : 8.50 mm",
      "Weight: ~10 g",
    ],
    // bey: [
    //   {
    //     id: "Rat-M85-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Hybrid-Rat-Tr-001",
    name: "Tr",
    image: "https://i.ibb.co/0N8WDtj/Tr-1-C07.webp",
    category: "ratchet",
    price: "CX-07",
    features: [
      "Integrated Bit (Ratchet + Bit)",
      "2 Contact Points",
      "High : 9 -> 6.50 mm",
      "Weight: ~ g",
    ],
    bey: [
      {
        id: "Hybrid-Rat-Tr-002",
        name: "CoroCoro Event",
        image: "https://i.ibb.co/My90NVBb/Tr-2-C00.webp"
      },
    ]
  },

  // BITS
  {
    id: "Bit-F-001",
    name: "F (Flat)",
    image: "https://i.ibb.co/27dbvcjp/F-1-B01.webp",
    category: "bit",
    type:"attack",
    price: "BX-01",
    specs: {
      "Type": "Attack",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-F-002",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/jZL95XWm/F-2-B00.webp"
      },
      {
        id: "Bit-F-003",
        name: "BX-07",
        image: "https://i.ibb.co/0jN6fy2b/F-3-B07.webp"
      },
      {
        id: "Bit-F-004",
        name: "BX-16",
        image: "https://i.ibb.co/3mmJmrWk/F-4-B16.webp"
      },
      {
        id: "Bit-F-005",
        name: "BX-17",
        image: "https://i.ibb.co/RpJMPMCp/F-5-B17.webp"
      },
      {
        id: "Bit-F-006",
        name: "BX-20",
        image: "https://i.ibb.co/pB445sqC/F-6-B20.webp"
      },
      {
        id: "Bit-F-007",
        name: "BX-24",
        image: "https://i.ibb.co/kZ8H9Dr/F-7-B24.webp"
      },
      {
        id: "Bit-F-008",
        name: "BX-00",
        image: "https://i.ibb.co/wZfMzkTP/F-8-B00.webp"
      },
      {
        id: "Bit-F-009",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/Vc2NMzrT/F-9-B00.webp"
      },
      {
        id: "Bit-F-0010",
        name: "BX-37",
        image: "https://i.ibb.co/hJ6Gz13c/F-10-B37.webp"
      },
      {
        id: "Bit-F-011",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/YBXxNHHs/F-11-B00.webp"
      },
      {
        id: "Bit-F-012",
        name: "UX-12",
        image: "https://i.ibb.co/xKVcW1yy/F-12-U12.webp"
      },
      {
        id: "Bit-F-013",
        name: "Collab",
        image: "https://i.ibb.co/jPJsvRYS/F-13-Col.webp"
      },
      {
        id: "Bit-F-014",
        name: "Collab",
        image: "https://i.ibb.co/4R62DVvF/F-14-Col.webp"
      },
      {
        id: "Bit-F-015",
        name: "Collab",
        image: "https://i.ibb.co/rfp4N8wW/F-15-Col.webp"
      },
      {
        id: "Bit-F-016",
        name: "Sushiro Ver.",
        image: "https://i.ibb.co/JFsw5s1x/F-16-Sushi.webp"
      },
      {
        id: "Bit-F-017",
        name: "CX-08",
        image: "https://i.ibb.co/kfs70Vv/F-17-C08.webp"
      },
    ]
  },
  {
    id: "Bit-T-001",
    name: "T (Taper)",
    image: "https://i.ibb.co/6cNv6WyN/T-1-B02.webp",
    category: "bit",
    type:"balance",
    price: "BX-02",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-T-002",
        name: "BX-00",
        image: "https://i.ibb.co/kV6GsRts/T-2-B00.webp"
      },
      {
        id: "Bit-T-003",
        name: "BX-07",
        image: "https://i.ibb.co/PGKy6cz3/T-3-B07.webp"
      },
      {
        id: "Bit-T-004",
        name: "BX-14",
        image: "https://i.ibb.co/MDJFFchy/T-4-B14.webp"
      },
      {
        id: "Bit-T-005",
        name: "BX-20",
        image: "https://i.ibb.co/JWb85h5g/T-5-B20.webp"
      },
      {
        id: "Bit-T-006",
        name: "BX-24",
        image: "https://i.ibb.co/hFGyw8CY/T-6-B24.webp"
      },
      {
        id: "Bit-T-007",
        name: "BX-00",
        image: "https://i.ibb.co/8g07nwD4/T-7-B00.webp"
      },
    ]
  },
  {
    id: "Bit-B-001",
    name: "B (Ball)",
    image: "https://i.ibb.co/rKyT4M4j/B-1-B03.webp",
    category: "bit",
    type:"stamina",
    price: "BX-03",
    specs: {
      "Type": "Stamina",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-B-002",
        name: "BX-05",
        image: "https://i.ibb.co/JRftq6Th/B-2-B05.webp"
      },
      {
        id: "Bit-B-003",
        name: "BX-08",
        image: "https://i.ibb.co/JFWxwG6Z/B-3-B08.webp"
      },
      {
        id: "Bit-B-004",
        name: "BX-14",
        image: "https://i.ibb.co/W4nDQvf6/B-4-B14.webp"
      },
      {
        id: "Bit-B-005",
        name: "BX-17",
        image: "https://i.ibb.co/B5khm7mx/B-5-B17.webp"
      },
      {
        id: "Bit-B-006",
        name: "BX-35",
        image: "https://i.ibb.co/v6JGYQDM/B-6-B35.webp"
      },
      {
        id: "Bit-B-007",
        name: "UX-10",
        image: "https://i.ibb.co/SwvxKWqD/B-7-U10.webp"
      },
      {
        id: "Bit-B-008",
        name: "Collab",
        image: "https://i.ibb.co/4Zj5xtBx/B-8-Col.webp"
      },
      {
        id: "Bit-B-009",
        name: "Collab",
        image: "https://i.ibb.co/d4509mKh/B-9-Col.webp"
      },
      {
        id: "Bit-B-010",
        name: "Collab",
        image: "https://i.ibb.co/qFdHFgDq/B-10-Col.webp"
      },
    ]
  },
  {
    id: "Bit-N-001",
    name: "N (Needle)",
    image: "https://i.ibb.co/9fKjm15/N-1-B04.webp",
    category: "bit",
    type:"defense",
    price: "BX-04",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-N-002",
        name: "BX-06",
        image: "https://i.ibb.co/6cgZvKFQ/N-2-B06.webp"
      },
      {
        id: "Bit-N-003",
        name: "BX-08",
        image: "https://i.ibb.co/GSDfvz9/N-3-B08.webp"
      },
      {
        id: "Bit-N-004",
        name: "BX-14",
        image: "https://i.ibb.co/DgQY8Dkz/N-4-B14.webp"
      },
      {
        id: "Bit-N-005",
        name: "BX-21",
        image: "https://i.ibb.co/Lh64BP2V/N-5-B21.webp"
      },
      {
        id: "Bit-N-006",
        name: "UX-12",
        image: "https://i.ibb.co/qtZ25R8/N-6-U12.webp"
      },
      {
        id: "Bit-N-007",
        name: "Collab",
        image: "https://i.ibb.co/ZRwhTTJm/N-7-Col.webp"
      },
      {
        id: "Bit-N-008",
        name: "Collab",
        image: "https://i.ibb.co/3y314tkL/N-8-Col.webp"
      },
      {
        id: "Bit-N-009",
        name: "Collab",
        image: "https://i.ibb.co/qLpCydVM/N-9-Col.webp"
      },
      {
        id: "Bit-N-010",
        name: "G3P",
        image: "https://i.ibb.co/WC87d0Q/N-10-G3P.webp"
      },
    ]
  },
  {
    id: "Bit-HN-001",
    name: "HN (High Needle)",
    image: "https://i.ibb.co/d4Tsqsm8/HN-1-B13.webp",
    category: "bit",
    type:"defense",
    price: "BX-13",
    specs: {
      "Type": "Defense",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-HN-002",
        name: "BX-16",
        image: "https://i.ibb.co/BKsp0Z8B/HN-2-B16.webp"
      },
      {
        id: "Bit-HN-003",
        name: "BX-24",
        image: "https://i.ibb.co/4ZVLnhBy/HN-3-B24.webp"
      },
      {
        id: "Bit-HN-004",
        name: "BX-36",
        image: "https://i.ibb.co/Y4LFpPWH/HN-4-B36.webp"
      },
    ]
  },
  {
    id: "Bit-LF-001",
    name: "LF (Low Flat)",
    image: "https://i.ibb.co/VWYKF0xs/LF-1-B14.webp",
    category: "bit",
    type:"attack",
    price: "BX-14",
    specs: {
      "Type": "Attack",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-LF-002",
        name: "BX-14",
        image: "https://i.ibb.co/KxCBKZmc/LF-2-BX14.webp"
      },
      {
        id: "Bit-LF-003",
        name: "BX-14",
        image: "https://i.ibb.co/6cvBCkRf/LF-3-B14.webp"
      },
      {
        id: "Bit-LF-004",
        name: "BX-21",
        image: "https://i.ibb.co/6J8n9CmW/LF-4-B21.webp"
      },
      {
        id: "Bit-LF-005",
        name: "UX-05",
        image: "https://i.ibb.co/PZbDZzVg/LF-5-U05.webp"
      },
      {
        id: "Bit-LF-006",
        name: "Game Package",
        image: "https://i.ibb.co/5hZVzD0J/LF-6-U00.webp"
      },
      {
        id: "Bit-LF-007",
        name: "CX-05",
        image: "https://i.ibb.co/RkMWbLrH/LF-7-C05.webp"
      },
    ]
  },
  {
    id: "Bit-P-001",
    name: "P (Point)",
    image: "https://i.ibb.co/LDHqkB60/P-1-B15.webp",
    category: "bit",
    type:"balance",
    price: "BX-15",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-P-002",
        name: "BX-00",
        image: "https://i.ibb.co/F4St5cL3/P-2-B00.webp"
      },
      {
        id: "Bit-P-003",
        name: "BX-00",
        image: "https://i.ibb.co/0VRDnZds/P-3-B00.webp"
      },
      {
        id: "Bit-P-004",
        name: "BX-31",
        image: "https://i.ibb.co/B59C7NLW/P-4-B31.webp"
      },
      {
        id: "Bit-P-005",
        name: "UX-10",
        image: "https://i.ibb.co/PZ4tHYP2/P-5-U10.webp"
      },
      {
        id: "Bit-P-006",
        name: "Collab",
        image: "https://i.ibb.co/RTCHFJ3z/P-6-Col.webp"
      },
      {
        id: "Bit-P-007",
        name: "Collab",
        image: "https://i.ibb.co/b5CqHpZv/P-7-Col.webp"
      },
      {
        id: "Bit-P-008",
        name: "Collab",
        image: "https://i.ibb.co/0VtVvG1x/P-8-Col.webp"
      },
    ]
  },
  {
    id: "Bit-O-001",
    name: "O (Orb)",
    image: "https://i.ibb.co/RGkfTnq6/O-1-B16.webp",
    category: "bit",
    type:"stamina",
    price: "BX-16",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-O-002",
        name: "BX-27",
        image: "https://i.ibb.co/Xx2hRp91/O-2-B27.webp"
      },
      {
        id: "Bit-O-003",
        name: "BX-31",
        image: "https://i.ibb.co/hF5ZyFfy/O-3-B31.webp"
      },
      {
        id: "Bit-O-004",
        name: "BX-39",
        image: "https://i.ibb.co/sJpVgkTX/O-4-B39.webp"
      },
      {
        id: "Bit-O-005",
        name: "CX-05",
        image: "https://i.ibb.co/xN1nhYP/O-5-C05.webp"
      },
    ]
  },
  {
    id: "Bit-R-001",
    name: "R (Rush)",
    image: "https://i.ibb.co/mrWG6RGP/R-1-B20.webp",
    category: "bit",
    type:"attack",
    price: "BX-20",
    specs: {
      "Type": "Attack",
      "Weight": "~2.1 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-R-002",
        name: "BX-35",
        image: "https://i.ibb.co/Vcjmt9kr/R-2-B35.webp"
      },
      {
        id: "Bit-R-003",
        name: "UX-10",
        image: "https://i.ibb.co/nNnrXB3s/R-3-U10.webp"
      },
    ]
  },
  {
    id: "Bit-HT-001",
    name: "HT (High Taper)",
    image: "https://i.ibb.co/zVwvh0BL/HT-1-B21.webp",
    category: "bit",
    type:"balance",
    price: "BX-21",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-HT-002",
        name: "BX-27",
        image: "https://i.ibb.co/n80TNXZr/HT-2-B27.webp"
      },
      {
        id: "Bit-HT-003",
        name: "BX-27",
        image: "https://i.ibb.co/ZRSg2dh7/HT-3-B00.webp"
      },
      {
        id: "Bit-HT-004",
        name: "CX-08",
        image: "https://i.ibb.co/SXjYBh7R/HT-4-C08.webp"
      },
    ]
  },
  {
    id: "Bit-S-001",
    name: "S (Spike)",
    image: "https://i.ibb.co/jP8K5VgK/S-1-B19.webp",
    category: "bit",
    type:"defense",
    price: "BX-19",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-S-002",
        name: "BX-31",
        image: "https://i.ibb.co/svfd9f7S/S-2-B31.webp"
      },
      {
        id: "Bit-S-003",
        name: "UX-07",
        image: "https://i.ibb.co/20yXykrQ/S-3-U07.webp"
      },
    ]
  },
  {
    id: "Bit-GF-001",
    name: "GF (Gear Flat)",
    image: "https://i.ibb.co/23SnXTdN/GF-1-B23.webp",
    category: "bit",
    type:"attack",
    price: "BX-23",
    specs: {
      "Type": "Attack",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-GF-002",
        name: "UX-07",
        image: "https://i.ibb.co/xtz1bH1W/GF-2-U07.webp"
      },
      {
        id: "Bit-GF-003",
        name: "BX-00",
        image: "https://i.ibb.co/9mQ7yrY1/GF-3-B00.webp"
      },
      {
        id: "Bit-GF-004",
        name: "BX-00",
        image: "https://i.ibb.co/6R4h9Mf8/GF-4-B00.webp"
      },
      {
        id: "Bit-GF-005",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/fzN70FT8/GF-5-B00.webp"
      },
      {
        id: "Bit-GF-006",
        name: "UX-15",
        image: "https://i.ibb.co/jPMPfvM1/GF-6-U15.webp"
      },
    ]
  },
  {
    id: "Bit-GB-001",
    name: "GB (Gear Ball)",
    image: "https://i.ibb.co/TxDYBGs3/GB-1-B24.webp",
    category: "bit",
    type:"stamina",
    price: "BX-24",
    specs: {
      "Type": "Stamina",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-GB-002",
        name: "BX-24",
        image: "https://i.ibb.co/7xY2kJVH/GB-2-B24.webp"
      },
      {
        id: "Bit-GB-003",
        name: "BX-24",
        image: "https://i.ibb.co/7NQxg6rp/GB-3-B24.webp"
      },
      {
        id: "Bit-GB-004",
        name: "BX-36",
        image: "https://i.ibb.co/nsPdxTNn/GB-4-B36.webp"
      },
      {
        id: "Bit-GB-005",
        name: "UX-12",
        image: "https://i.ibb.co/p60Rq7Lj/GB-5-U12.webp"
      },
    ]
  },
  {
    id: "Bit-GP-001",
    name: "GP (Gear Point)",
    image: "https://i.ibb.co/WpVNTWXw/GP-1-B26.webp",
    category: "bit",
    type:"balance",
    price: "BX-26",
    specs: {
      "Type": "Balance",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-GP-002",
        name: "UX-05",
        image: "https://i.ibb.co/pBLqKtvX/GP-2-U05.webp"
      },
      {
        id: "Bit-GP-003",
        name: "BX-00",
        image: "https://i.ibb.co/prG0LcMq/GP-3-B00.webp"
      },
      {
        id: "Bit-GP-004",
        name: "BX-39",
        image: "https://i.ibb.co/twTTGKR4/GP-4-B39.webp"
      },
    ]
  },
  {
    id: "Bit-GN-001",
    name: "GN (Gear Needle)",
    image: "https://i.ibb.co/PGtZPt5z/GN-1-B27.webp",
    category: "bit",
    type:"defense",
    price: "BX-27",
    specs: {
      "Type": "Defense",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-GN-002",
        name: "UX-06",
        image: "https://i.ibb.co/BVYvMK2j/GN-2-U06.webp"
      },
      {
        //lock leon
        id: "Bit-GN-003",
        name: "BX-00",
        image: ""
      },
    ]
  },
  {
    id: "Bit-A-001",
    name: "A (Accel)",
    image: "https://i.ibb.co/xq72jrDy/A-1-U01.webp",
    category: "bit",
    type:"attack",
    price: "UX-01",
    specs: {
      "Type": "Attack",
      "Weight": "~2.6 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-A-002",
        name: "UX-04",
        image: "https://i.ibb.co/zT08FKg8/A-2-U04.webp"
      },
      {
        id: "Bit-A-003",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/k22n73mc/A-3-U00.webp"
      },
      {
        id: "Bit-A-004",
        name: "UX-00",
        image: "https://i.ibb.co/rfHJnh5M/A-4-U00.webp"
      },
      {
        id: "Bit-A-005",
        name: "Park Limited",
        image: "https://i.ibb.co/BVpfTNvL/A-5-LTD.webp"
      },
      {
        id: "Bit-A-006",
        name: "Park Limited",
        image: "https://i.ibb.co/h1XdYJQK/A-6-LTD.webp"
      },
      {
        id: "Bit-A-007",
        name: "Park Limited",
        image: "https://i.ibb.co/67CnS4Qm/A-7-LTD.webp"
      },
      {
        id: "Bit-A-008",
        name: "Park Limited",
        image: "https://i.ibb.co/fVKg2RTq/A-8-LTD.webp"
      },
      {
        id: "Bit-A-009",
        name: "Park Limited",
        image: "https://i.ibb.co/tTpn429F/A-9-LTD.webp"
      },
      {
        id: "Bit-A-010",
        name: "Park Limited",
        image: "https://i.ibb.co/twQVshHS/A-10-LTD.webp"
      },
      {
        id: "Bit-A-011",
        name: "Game Package",
        image: "https://i.ibb.co/0p2F849G/A-11-C00.webp"
      },
      {
        id: "Bit-A-012",
        name: "Collab",
        image: "https://i.ibb.co/pvhhykxq/A-12-Col.webp"
      },
    ]
  },
  {
    id: "Bit-H-001",
    name: "H (Hexa)",
    image: "https://i.ibb.co/wNGHygPb/H-1-U02.webp",
    category: "bit",
    type:"balance",
    price: "UX-02",
    specs: {
      "Type": "Balance",
      "Weight": "~2.6 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-H-002",
        name: "BX-35",
        image: "https://i.ibb.co/sppfs0yX/H-2-B35.webp"
      },
      {
        id: "Bit-H-003",
        name: "UX-00",
        image: "https://i.ibb.co/wZWbYZtT/H-3-U00.webp"
      },
      {
        id: "Bit-H-004",
        name: "UX-12",
        image: "https://i.ibb.co/99Hvx1nV/H-4-U12.webp"
      },
    ]
  },
  {
    id: "Bit-DB-001",
    name: "DB (Disc Ball)",
    image: "https://i.ibb.co/8DFB9k4m/DB-1-U03.webp",
    category: "bit",
    type:"stamina",
    price: "UX-03",
    specs: {
      "Type": "Stamina",
      "Weight": "~3.2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-DB-002",
        name: "UX-04",
        image: "https://i.ibb.co/nMg4sYdB/DB-2-U04.webp"
      },
      {
        id: "Bit-DB-003",
        name: "G3 Prize",
        image: "https://i.ibb.co/hFJdwHWJ/DB-3-G3P.webp"
      },
      {
        id: "Bit-DB-004",
        name: "BX-00",
        image: "https://i.ibb.co/Gf9WpjjV/DB-4-B00.webp"
      },
      {
        id: "Bit-DB-005",
        name: "CX-06",
        image: "https://i.ibb.co/bj5PnHCr/DB-5-C06.webp"
      },
    ]
  },
  {
    id: "Bit-Q-001",
    name: "Q (Quake)",
    image: "https://i.ibb.co/wN6TLKHf/Q-1-B31.webp",
    category: "bit",
    type:"attack",
    price: "BX-31",
    specs: {
      "Type": "Attack",
      "Weight": "~2.3 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-Q-002",
        name: "BX-31",
        image: "https://i.ibb.co/XxpnfR7D/Q-2-B31.webp"
      },
      {
        id: "Bit-Q-003",
        name: "BX-31",
        image: "https://i.ibb.co/JjfSKbP8/Q-3-B31.webp"
      },
      {
        id: "Bit-Q-004",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/TDdk2NYH/Q-4-B00.webp"
      },
    ]
  },
  {
    id: "Bit-MN-001",
    name: "MN (Metal Needle)",
    image: "https://i.ibb.co/1GV1081f/MN-1-U05.webp",
    category: "bit",
    type:"defense",
    price: "UX-05",
    specs: {
      "Type": "Defense",
      "Weight": "~2.7 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-MN-002",
        name: "UX-10",
        image: "https://i.ibb.co/DZ9dRNF/MN-2-U10.webp"
      },
      {
        id: "Bit-MN-003",
        name: "CX-08",
        image: "https://i.ibb.co/GQ1d3hKM/MN-3-C08.webp"
      },
    ]
  },
  {
    id: "Bit-U-001",
    name: "U (Unite)",
    image: "https://i.ibb.co/B519fP43/U-1-B33.webp",
    category: "bit",
    type:"balance",
    price: "BX-33",
    specs: {
      "Type": "Balacne",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-U-002",
        name: "CX-06",
        image: "https://i.ibb.co/YFMnT5nY/U-2-C06.webp"
      },
      {
        id: "Bit-U-003",
        name: "Collab",
        image: "https://i.ibb.co/MDw6BP5y/U-3-Col.webp"
      },
    ]
  },
  {
    id: "Bit-C-001",
    name: "C (Cyclone)",
    image: "https://i.ibb.co/Lhv43yQc/C-1-B34.webp",
    category: "bit",
    type:"attack",
    price: "BX-34",
    specs: {
      "Type": "Attack",
      "Weight": "~2.1 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-C-002",
        name: "BX-00",
        image: "https://i.ibb.co/DHq3cnJF/C-2-B00.webp"
      },
      {
        id: "Bit-C-003",
        name: "UX-12",
        image: "https://i.ibb.co/XxR5hKdC/C-3-U12.webp"
      },
    ]
  },
  {
    id: "Bit-D-001",
    name: "D (Dot)",
    image: "https://i.ibb.co/KjnqzxP9/D-1-B35.webp",
    category: "bit",
    type:"defense",
    price: "BX-35",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-D-002",
        name: "BX-35",
        image: "https://i.ibb.co/HTkYmHHB/D-2-B35.webp"
      },
      {
        id: "Bit-D-003",
        name: "BX-35",
        image: "https://i.ibb.co/jkBLBXnW/D-3-B35.webp"
      },
      {
        id: "Bit-D-004",
        name: "BX-00",
        image: "https://i.ibb.co/0jvMQLyw/D-4-B00.webp"
      },
      {
        id: "Bit-D-005",
        name: "BX-39",
        image: "https://i.ibb.co/4BKwW78/D-5-B39.webp"
      },
      {
        id: "Bit-D-006",
        name: "CX-05",
        image: "https://i.ibb.co/BVR27YYy/D-6-C05.webp"
      },
      {
        id: "Bit-D-007",
        name: "CX-05",
        image: "https://i.ibb.co/mC3s896y/D-7-B00.webp"
      },
    ]
  },
  {
    id: "Bit-G-001",
    name: "G (Glide)",
    image: "https://i.ibb.co/xKpq45M6/G-1-U07.webp",
    category: "bit",
    type:"stamina",
    price: "UX-07",
    specs: {
      "Type": "Stamina",
      "Weight": "~2.5 g",
      "Gears": "16",
      "Burst Resistance": "Low"
    },
    // bey: [
    //   {
    //     id: "Bit-G-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-E-001",
    name: "E (Elevate)",
    image: "https://i.ibb.co/8LvNJXFr/E-1-B36.webp",
    category: "bit",
    type:"balance",
    price: "BX-36",
    specs: {
      "Type": "Balance",
      "Weight": "~3.2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-E-002",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/yBVRdQLC/E-2-B00.webp"
      },
      {
        id: "Bit-E-003",
        name: "UX-12",
        image: "https://i.ibb.co/LdmQfjfG/E-3-U12.webp"
      },
    ]
  },
  {
    id: "Bit-FB-001",
    name: "FB (Free Ball)",
    image: "https://i.ibb.co/1GYFKzb8/FB-1-U08.webp",
    category: "bit",
    type:"stamina",
    price: "UX-08",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    // bey: [
    //   {
    //     id: "Bit-FB-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-BS-001",
    name: "BS (Bound Spike)",
    image: "https://i.ibb.co/fdkh2Qwn/BS-1-U10.webp",
    category: "bit",
    type:"defense",
    price: "UX-10",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-BS-002",
        name: "BX-44",
        image: "https://i.ibb.co/pBZwnqSq/BS-2-B44.webp"
      },
      {
        id: "Bit-BS-003",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/B2nddjH1/BS-3-U00.webp"
      },
    ]
  },
  {
    id: "Bit-RA-001",
    name: "RA (Rubber Accel)",
    image: "https://i.ibb.co/WWNMXBCK/RA-1-U10.webp",
    category: "bit",
    type:"attack",
    price: "UX-10",
    specs: {
      "Type": "Attack",
      "Weight": "~3 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-RA-002",
        name: "25th Anniversary",
        image: "https://i.ibb.co/KpCFJWKR/RA-2-25th.webp"
      },
      {
        id: "Bit-RA-003",
        name: "25th Anniversary",
        image: "https://i.ibb.co/zcCbjx0/RA-3-25th.webp"
      },
      {
        id: "Bit-RA-004",
        name: "25th Anniversary",
        image: "https://i.ibb.co/twdxk36f/RA-4-25th.webp"
      }
    ]
  },
  {
    id: "Bit-L-001",
    name: "L (Level)",
    image: "https://i.ibb.co/fVv0V8DL/L-1-U09.webp",
    category: "bit",
    type:"attack",
    price: "UX-09",
    specs: {
      "Type": "Attack",
      "Weight": "~2.6 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    //metal coat orange
    bey: [
      {
        id: "Bit-L-002",
        name: "CoroCoro Comic",
        image: ""
      },
      {
        id: "Bit-L-003",
        name: "UX-15",
        image: "https://i.ibb.co/BK7RZT6f/L-3-U15.webp"
      },
    ]
  },
  {
    id: "Bit-TP-001",
    name: "TP (Trans Point)",
    image: "https://i.ibb.co/9k669c0p/TP-1-B38.webp",
    category: "bit",
    type:"balance",
    price: "BX-38",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-TP-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-LR-001",
    name: "LR (Low Rush)",
    image: "https://i.ibb.co/xS4d31Gc/LR-1-U11.webp",
    category: "bit",
    type:"attack",
    price: "UX-11",
    specs: {
      "Type": "Attack",
      "Weight": "~1.9 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-LR-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-UN-001",
    name: "UN (Under Needle)",
    image: "https://i.ibb.co/78br1Q2/UN-1-U13.webp",
    category: "bit",
    type:"defense",
    price: "UX-13",
    specs: {
      "Type": "Defense",
      "Weight": "~1.8 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    // bey: [
    //   {
    //     id: "Bit-UN-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-V-001",
    name: "V (Vortex)",
    image: "https://i.ibb.co/V0xVfX6G/V-1-C01.webp",
    category: "bit",
    type:"attack",
    price: "CX-01",
    specs: {
      "Type": "Attack",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-V-002",
        name: "CX-04",
        image: "https://i.ibb.co/4C2Htff/V-2-C04.webp"
      },
      {
        id: "Bit-V-003",
        name: "G1 Prize",
        image: "https://i.ibb.co/C5L2xH3Q/V-3-G1P.webp"
      },
      {
        id: "Bit-V-004",
        name: "G1 Prize",
        image: "https://i.ibb.co/hRKhL0CZ/V-4-G1P.webp"
      },
      {
        id: "Bit-V-005",
        name: "G1 Prize",
        image: "https://i.ibb.co/nq4svh2b/V-5-G1P.webp"
      },
      {
        id: "Bit-V-006",
        name: "Rare Bey Battle",
        image: "https://i.ibb.co/pj84Gp7f/V-6-C00.webp"
      },
    ]
  },
  {
    id: "bit-034",
    name: "LO (Low Orb)",
    image: "https://i.ibb.co/FZtDSm5/LO-1-C02.webp",
    category: "bit",
    type:"stamina",
    price: "CX-02",
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
        image: "https://i.ibb.co/ccSVdNkz/LO-2-C00.webp"
      },
    ]
  },
  {
    id: "Bit-W-001",
    name: "W (Wedge)",
    image: "https://i.ibb.co/fdWvXx5d/W-1-C03.webp",
    category: "bit",
    type:"defense",
    price: "CX-03",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "10",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-W-002",
        name: "CX-04",
        image: "https://i.ibb.co/hjhZ72V/W-2-C04.webp"
      },
      {
        id: "Bit-W-003",
        name: "G3 Prize",
        image: "https://i.ibb.co/gMbZvZqp/W-3-G3P.webp"
      },
    ]
  },
  {
    id: "Bit-K-001",
    name: "K (Kick)",
    image: "https://i.ibb.co/cX69bTwj/K-1-C05.webp",
    category: "bit",
    type:"balance",
    price: "CX-05",
    specs: {
      "Type": "Balance",
      "Weight": "~2.2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-K-002",
        name: "CX-05",
        image: "https://i.ibb.co/pB2TfsHn/K-2-C05.webp"
      },
      {
        id: "Bit-K-003",
        name: "CX-05",
        image: "https://i.ibb.co/CL0pBRz/K-3-C05.webp"
      },
      {
        id: "K-003",
        name: "CoroCoro Comic",
        image: "https://i.ibb.co/7xSMtNSX/K-4-C00.webp"
      },
    ]
  },
  {
    id: "Bit-Z-001",
    name: "Z (Zap)",
    image: "https://i.ibb.co/YBD9RWkz/Z-1-U14.webp",
    category: "bit",
    type:"balance",
    price: "UX-14",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-Z-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-GR-001",
    name: "GR (Gear Rush)",
    image: "https://i.ibb.co/xS0Xx35Y/GR-1-C06.webp",
    category: "bit",
    type:"attack",
    price: "CX-06",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-GR-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Hybrid-Bit-Tr-001",
    name: "Tr (Turbo)",
    image: "https://i.ibb.co/0N8WDtj/Tr-1-C07.webp",
    category: "bit",
    type:"attack",
    price: "CX-07",
    specs: {
      "Type": "Attack, Integrated Bit",
      "Weight": "~ g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Hybrid-Bit-Tr-002",
        name: "CoroCoro Event",
        image: "https://i.ibb.co/My90NVBb/Tr-2-C00.webp"
      },
    ]
  },
  {
    id: "Bit-WB-001",
    name: "WB (Wall Ball)",
    image: "https://i.ibb.co/Qv570YqT/WB-1-C08.webp",
    category: "bit",
    type:"stamina",
    price: "CX-08",
    specs: {
      "Type": "Stamina",
      "Weight": "~ g",
      "Gears": "16",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-WB-002",
        name: "CX-08",
        image: "https://i.ibb.co/QvctgWBv/WB-2-C08.webp"
      },
      {
        id: "Bit-WB-003",
        name: "CX-08",
        image: "https://i.ibb.co/cSSV4mG5/WB-3-C08.webp"
      },
    ]
  },
  {
    id: "Bit-UF-001",
    name: "UF (Under Flat)",
    image: "https://i.ibb.co/mr2mZqsF/UF-1-U15.webp",
    category: "bit",
    type:"attack",
    price: "UX-15",
    specs: {
      "Type": "Attack",
      "Weight": "~ g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-UF-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-M-001",
    name: "M (Merge)",
    image: "https://i.ibb.co/HLM6Gc1g/M-1-B45.webp",
    category: "bit",
    type:"balance",
    price: "BX-45",
    specs: {
      "Type": "Balance",
      "Weight": "~ g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-UF-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Rare-Bit-001",
    name: "F/T/B/N (Bit Set)",
    image: "https://i.ibb.co/yF70q1My/Rare-Bit-1-B00.webp",
    category: "bit",
    type:"rare",
    price: "BX-Rare Bey Battle",
    specs: {
      "Type": "Attack/Balance/Stamina/Defense",
      "Gears": "12",
    },
    // bey: [
    //   {
    //     id: "Rare-Bit-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
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
    id: "Blade-X-OBS-001",
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
        id: "Blade-X-DSL-002",
        name: "BX-00",
        image: "https://i.ibb.co/hxvhHGbm/DSL-2.webp"
      },
    ]
  },
  {
    id: "Blade-X-OBS-002",
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
    id: "Blade-X-OBS-003",
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
    id: "Blade-X-OBS-004",
    name: "Dragoon Storm",
    image: "https://i.ibb.co/cS5tT3qF/DST-1.webp",
    category: "x-over",
    type: "attack",
    price: "25th Anniversary",
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
    id: "Blade-X-OMF-001",
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
    id: "Blade-X-OMF-003",
    name: "Storm Pegasis",
    image: "https://i.ibb.co/gL0YjrkQ/SPS-1.webp",
    category: "x-over",
    type: "attack",
    price: "25th Anniversary",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "3-70 Rubber Accel",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
  },
  {
    id: "Blade-X-OMF-004",
    name: "Rock Leone",
    image: "https://i.ibb.co/HcgMTBg/RLN-1.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~ g",
      "Stock Combo": "6-80 Gear Needle",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
  },

  //X-OVER Beyblade Burst
  {
    id: "Blade-X-OBB-001",
    name: "Victory Valkyrie",
    image: "https://i.ibb.co/DDmVg7gb/VVV-1.webp",
    category: "x-over",
    type: "attack",
    price: "25th Anniversary",
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
    id: "Blade-X-OBB-002",
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
    id: "Blade-X-CLB-001",
    name: "Luke Skywalker",
    image: "https://i.ibb.co/Gf7MDs1X/Star1.webp",
    category: "x-over",
    type: "stamina",
    price: "Collab Star Wars",
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
    id: "Blade-X-CLB-002",
    name: "Darth Vader",
    image: "https://i.ibb.co/1tHxb5mt/Star2.webp",
    category: "x-over",
    type: "balance",
    price: "Collab Star Wars",
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
    id: "Blade-X-CLB-003",
    name: "The Mandalorian",
    image: "https://i.ibb.co/238Q6j7J/Star3.webp",
    category: "x-over",
    type: "attack",
    price: "Collab Star Wars",
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
    id: "Blade-X-CLB-004",
    name: "Moff Gideon",
    image: "https://i.ibb.co/Kj8Nfh4g/Star4.webp",
    category: "x-over",
    type: "defense",
    price: "Collab Star Wars",
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
    id: "Blade-X-CLB-005",
    name: "Optimus Prime",
    image: "https://i.ibb.co/gZGDNpsj/Trans1.webp",
    category: "x-over",
    type: "balance",
    price: "Collab Transformers",
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
    id: "Blade-X-CLB-006",
    name: "Megatron",
    image: "https://i.ibb.co/G4yxCC6c/Trans2.webp",
    category: "x-over",
    type: "stamina",
    price: "Collab Transformers",
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
    id: "Blade-X-CLB-007",
    name: "Optimus Primal",
    image: "https://i.ibb.co/zT3sxjyB/Trans3.webp",
    category: "x-over",
    type: "attack",
    price: "Collab Transformers",
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
    id: "Blade-X-CLB-008",
    name: "Star Scream",
    image: "https://i.ibb.co/PzVSrxdm/Trans4.webp",
    category: "x-over",
    type: "defense",
    price: "Collab Transformers",
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
    id: "Blade-X-CLB-009",
    name: "Iron Man",
    image: "https://i.ibb.co/Df1jK98q/Marvel1.webp",
    category: "x-over",
    type: "stamina",
    price: "Collab Marvel",
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
    id: "Blade-X-CLB-010",
    name: "Thanos",
    image: "https://i.ibb.co/chyBrhbJ/Marvel2.webp",
    category: "x-over",
    type: "balance",
    price: "Collab Marvel",
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
    id: "Blade-X-CLB-011",
    name: "Spider Man",
    image: "https://i.ibb.co/PGwj3Dhv/Marvel3.webp",
    category: "x-over",
    type: "attack",
    price: "Collab Marvel",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~32 g",
      "Stock Combo": "3-60 Flat",
      "Product Line": "BX",
      "Collab": "Marvel",
    },
  },
  {
    id: "Blade-X-CLB-012",
    name: "Venom",
    image: "https://i.ibb.co/zWCNSNhS/Marvel4.webp",
    category: "x-over",
    type: "defense",
    price: "Collab Marvel",
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
    id: "Blade-X-CLB-013",
    name: "T.Rex",
    image: "https://i.ibb.co/TM6b09kq/Jura-1.webp",
    category: "x-over",
    type: "stamina",
    price: "Collab Jurassic World",
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
    id: "Blade-X-CLB-014",
    name: "Mosasaurus",
    image: "https://i.ibb.co/rR443LXd/Jura-2.webp",
    category: "x-over",
    type: "balance",
    price: "Collab Jurassic World",
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
    id: "Blade-X-CLB-015",
    name: "Spinosaurus",
    image: "https://i.ibb.co/Z6dbCbrP/Jura-3.webp",
    category: "x-over",
    type: "attack",
    price: "Collab Jurassic World",
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
    id: "Blade-X-CLB-016",
    name: "Quetzalcoatlus",
    image: "https://i.ibb.co/Lz0yMdTy/Jura-4.webp",
    category: "x-over",
    type: "defense",
    price: "Collab Jurassic World",
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
      "Creator Name": "Why you want to know that?",
      "Donation": "Go to Philanthropy funds.",
      "Ownership": "I'm not Takara Tomy. Beyblade is not my product, This web for community free use.",
      "Objective": "To make it easier for the community to find Beyblade X parts data, Not find me.",
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
