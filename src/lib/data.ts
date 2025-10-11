import type { Product } from "./types"

// Mock data for our cyber-themed library products
export const products: Product[] = [
  // BLADES
  {
    id: "Blade-DS-001",
    name: "Dran Sword",
    image: "/Blade/00Persona/DS 1 B01.webp",
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
    bey: [
      {
        id: "Blade-DS-002",
        name: "BX-07",
        image: "/Blade/00Persona/DS 2 B07.webp"
      },
      {
        id: "Blade-DS-003",
        name: "BX-14",
        image: "/Blade/00Persona/DS 3 B14.webp"
      },
      {
        id: "Blade-DS-004",
        name: "BX-17",
        image: "/Blade/00Persona/DS 4 B17.webp"
      },
      {
        id: "Blade-DS-005",
        name: "BX-00",
        image: "/Blade/00Persona/DS 5 B00.webp"
      },
      {
        id: "Blade-DS-006",
        name: "25th Anniversary",
        image: "/Blade/00Persona/DS 6 25th.webp"
      },
      {
        id: "Blade-DS-007",
        name: "BX-00",
        image: "/Blade/00Persona/DS 7 UX00.webp"
      },
      {
        id: "Blade-DS-008",
        name: "Suhiro Ver.",
        image: "/Blade/00Persona/DS 8 Sushi.webp"
      },
      {
        id: "Blade-DS-009",
        name: "G1 Prize",
        image: "/Blade/00Persona/DS 9 G1P.webp"
      },
      {
        id: "Blade-DS-010",
        name: "G1 Prize",
        image: "/Blade/00Persona/DS 10 G1P.webp"
      },
      {
        id: "Blade-DS-011",
        name: "G1 Prize",
        image: "/Blade/00Persona/DS 11 G1P.webp"
      },
    ],
  },
  {
    id: "Blade-HS-001",
    name: "Hells Scythe",
    image: "/Blade/00Persona/HS 1 B02.webp",
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
    bey: [
      {
        id: "Blade-HS-002",
        name: "BX-00",
        image: "/Blade/00Persona/HS 2 B00.webp"
      },
      {
        id: "Blade-HS-002",
        name: "BX-08",
        image: "/Blade/00Persona/HS 3 B08.webp"
      },
      {
        id: "Blade-HS-003",
        name: "BX-14",
        image: "/Blade/00Persona/HS 4 B14.webp"
      },
      {
        id: "Blade-HS-004",
        name: "CoroCoro Comic",
        image: "/Blade/00Persona/HS 5 B00.webp"
      },
    ]
  },
  {
    id: "Blade-WA-001",
    name: "Wizard Arrow",
    image: "/Blade/00Persona/WA 1 B03.webp",
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
    bey: [
      {
        id: "Blade-WA-002",
        name: "BX-05",
        image: "/Blade/00Persona/WA 2 B05.webp"
      },
      {
        id: "Blade-WA-003",
        name: "BX-08",
        image: "/Blade/00Persona/WA 3 B08.webp"
      },
      {
        id: "Blade-WA-004",
        name: "BX-14",
        image: "/Blade/00Persona/WA 4 B14.webp"
      },
      {
        id: "Blade-WA-005",
        name: "BX-17",
        image: "/Blade/00Persona/WA 5 B17.webp"
      },
      {
        id: "Blade-WA-006",
        name: "BX-21",
        image: "/Blade/00Persona/WA 6 B21.webp"
      },
      {
        id: "Blade-WA-007",
        name: "BX-24",
        image: "/Blade/00Persona/WA 7 B24.webp"
      },
    ]
  },
  {
    id: "Blade-KS-001",
    name: "Knight Shield",
    image: "/Blade/00Persona/KS 1 B04.webp",
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
    bey: [
      {
        id: "Blade-KS-002",
        name: "BX-06",
        image: "/Blade/00Persona/KS 2 B06.webp"
      },
      {
        id: "Blade-KS-003",
        name: "BX-08",
        image: "/Blade/00Persona/KS 3 B08.webp"
      },
      {
        id: "Blade-KS-004",
        name: "BX-14",
        image: "/Blade/00Persona/KS 4 B14.webp"
      },
      {
        id: "Blade-KS-005",
        name: "BX-20",
        image: "/Blade/00Persona/KS 5 B20.webp"
      },
      {
        id: "Blade-KS-006",
        name: "G3 Prize",
        image: "/Blade/00Persona/KS 6 G3P.webp"
      },
    ]
  },
  {
    id: "Blade-KL-001",
    name: "Knight Lance",
    image: "/Blade/00Persona/KL 1 B13.webp",
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
    bey: [
      {
        id: "Blade-KL-002",
        name: "BX-21",
        image: "/Blade/00Persona/KL 2 B21.webp"
      },
      {
        id: "KL-003",
        name: "BX-24",
        image: "/Blade/00Persona/KL 3 B24.webp"
      },
    ]
  },
  {
    id: "Blade-SE-001",
    name: "Shark Edge",
    image: "/Blade/00Persona/SE 1 B14.webp",
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
    bey: [
      {
        id: "Blade-SE-002",
        name: "BX-14",
        image: "/Blade/00Persona/SE 2 B14.webp"
      },
      {
        id: "Blade-SE-003",
        name: "BX-20",
        image: "/Blade/00Persona/SE 3 B20.webp"
      },
      {
        id: "Blade-SE-004",
        name: "BX-31",
        image: "/Blade/00Persona/SE 4 B31.webp"
      },
      {
        id: "Blade-SE-005",
        name: "BX-00",
        image: "/Blade/00Persona/SE 5 B00.webp"
      },
    ]
  },
  {
    id: "Blade-LC-001",
    name: "Leon Claw",
    image: "/Blade/00Zooganic/LC 1 B15.webp",
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
    bey: [
      {
        id: "Blade-LC-002",
        name: "BX-00",
        image: "/Blade/00Zooganic/LC 4 B00.webp"
      },
      {
        id: "Blade-LC-003",
        name: "BX-24",
        image: "/Blade/00Zooganic/LC 2 B24.webp"
      },
      {
        id: "Blade-LC-004",
        name: "UX-12",
        image: "/Blade/00Zooganic/LC 3 U12.webp"
      },
    ]
  },
  {
    id: "Blade-VT-001",
    name: "Viper Tail",
    image: "/Blade/00Zooganic/VT 1 B16.webp",
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
    bey: [
      {
        id: "Blade-VT-002",
        name: "BX-16",
        image: "/Blade/00Zooganic/VT 2 B16.webp"
      },
      {
        id: "Blade-VT-003",
        name: "BX-16",
        image: "/Blade/00Zooganic/VT 3 B16.webp"
      },
      {
        id: "Blade-VT-004",
        name: "BX-24",
        image: "/Blade/00Zooganic/VT 4 B24.webp"
      },
      {
        id: "Blade-VT-005",
        name: "BX-35",
        image: "/Blade/00Zooganic/VT 5 B35.webp"
      },
    ]
  },
  {
    id: "Blade-RH-001",
    name: "Rhino Horn",
    image: "/Blade/00Zooganic/RH 1 B19.webp",
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
    bey: [
      {
        id: "Blade-RH-001",
        name: "BX-31",
        image: "/Blade/00Zooganic/RH 2 B31.webp"
      },
    ]
  },
  {
    id: "Blade-DD-001",
    name: "Dran Dagger",
    image: "/Blade/00Persona/DD 1 B20.webp",
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
    bey: [
      {
        id: "Blade-DD-002",
        name: "BX-31",
        image: "/Blade/00Persona/DD 2 B31.webp"
      },
      {
        id: "Blade-DD-003",
        name: "BX-00",
        image: "/Blade/00Persona/DD 3 B00.webp"
      },
      {
        id: "Blade-DD-004",
        name: "UX-00",
        image: "/Blade/00Persona/DD 4 U00.webp"
      },
    ]
  },
  {
    id: "Blade-HC-001",
    name: "Hells Chain",
    image: "/Blade/00Persona/HC 1 B21.webp",
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
    bey: [
      {
        id: "Blade-HC-002",
        name: "BX-31",
        image: "/Blade/00Persona/HC 2 B31.webp"
      },
      {
        id: "Blade-HC-003",
        name: "Rare Bey Battle",
        image: "/Blade/00Persona/HC 3 B00.webp"
      },
    ]
  },
  {
    id: "Blade-PW-001",
    name: "Phoenix Wing",
    image: "/Blade/00Yggdrasil/PW 1 B23.webp",
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
    bey: [
      {
        id: "Blade-PW-002",
        name: "BX-35",
        image: "/Blade/00Yggdrasil/PW 2 B35.webp"
      },
      {
        id: "Blade-PW-003",
        name: "BX-00",
        image: "/Blade/00Yggdrasil/PW 3 B00.webp"
      },
      {
        id: "Blade-PW-004",
        name: "CoroCoro Comic",
        image: "/Blade/00Yggdrasil/PW 4 B00.webp"
      },
    ]
  },
  {
    id: "Blade-WG-001",
    name: "Wyvern Gale",
    image: "/Blade/00SubCharacter/WG 1 B24.webp",
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
    bey: [
      {
        id: "Blade-WG-002",
        name: "BX-24",
        image: "/Blade/00SubCharacter/WG 2 B24.webp"
      },
      {
        id: "Blade-WG-003",
        name: "UX-07",
        image: "/Blade/00SubCharacter/WG 3 U07.webp"
      },
      {
        id: "Blade-WG-004",
        name: "UX-12",
        image: "/Blade/00SubCharacter/WG 4 U12.webp"
      },
    ]
  },
  {
    id: "Blade-US-001",
    name: "Unicorn Sting",
    image: "/Blade/00Yggdrasil/US 1 B26.webp",
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
    bey: [
      {
        id: "Blade-US-002",
        name: "BX-35",
        image: "/Blade/00Yggdrasil/US 2 B35.webp"
      },
    ]
  },
  {
    id: "Blade-SC-001",
    name: "Sphinx Cowl",
    image: "/Blade/00Yggdrasil/SC 1 B27.webp",
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
    bey: [
      {
        id: "Blade-SC-002",
        name: "BX-27",
        image: "/Blade/00Yggdrasil/SC 2 B27.webp"
      },
      {
        id: "Blade-SC-003",
        name: "BX-27",
        image: "/Blade/00Yggdrasil/SC 3 B27.webp"
      },
      {
        id: "Blade-SC-004",
        name: "UX-07",
        image: "/Blade/00Yggdrasil/SC 4 U07.webp"
      },
    ]
  },
  {
    id: "Blade-DB-001",
    name: "Dran Buster",
    image: "/Blade/00Persona/DB 1 U01.webp",
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
    bey: [
      {
        id: "Blade-DB-002",
        name: "UX-04",
        image: "/Blade/00Persona/DB 2 U04.webp"
      },
      {
        id: "Blade-DB-003",
        name: "UX-00",
        image: "/Blade/00Persona/DB 3 U00.webp"
      },
      {
        id: "Blade-DB-004",
        name: "UX-00",
        image: "/Blade/00Persona/DB 4 LTD1.webp"
      },
      {
        id: "Blade-DB-005",
        name: "UX-00",
        image: "/Blade/00Persona/DB 5 LTD2.webp"
      },
      {
        id: "Blade-DB-006",
        name: "UX-00",
        image: "/Blade/00Persona/DB 6 LTD3.webp"
      },
      {
        id: "Blade-DB-007",
        name: "UX-00",
        image: "/Blade/00Persona/DB 7 U00.webp"
      },
      {
        id: "Blade-DB-008",
        name: "UX-00",
        image: "/Blade/00Persona/DB 8 U00.webp"
      },
      {
        id: "Blade-DB-009",
        name: "CX-08",
        image: "/Blade/00Persona/DB 9 C08.webp"
      },
    ]
  },
  {
    id: "Blade-HH-001",
    name: "Hells Hammer",
    image: "/Blade/00Persona/HH 1 U02.webp",
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
    bey: [
      {
        id: "Blade-H-002",
        name: "UX-10",
        image: "/Blade/00Persona/HH 2 U10.webp"
      },
      {
        id: "Blade-HH-003",
        name: "UX-00",
        image: "/Blade/00Persona/HH 3 U00.webp"
      },
    ]
  },
  {
    id: "Blade-WR-001",
    name: "Wizard Rod",
    image: "/Blade/00Persona/WR 1 U03.webp",
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
    bey: [
      {
        id: "Blade-WR-002",
        name: "UX-04",
        image: "/Blade/00Persona/WR 2 U04.webp"
      },
      {
        id: "Blade-WR-003",
        name: "BX-35",
        image: "/Blade/00Persona/WR 3 B35.webp"
      },
      {
        id: "Blade-WR-004",
        name: "G3 Prize",
        image: "/Blade/00Persona/WR 4 G3P.webp"
      },
    ]
  },
  {
    id: "Blade-TB-001",
    name: "Tyranno Beat",
    image: "/Blade/00SubCharacter/TB 1 B31.webp",
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
    bey: [
      {
        id: "Blade-TB-002",
        name: "BX-31",
        image: "/Blade/00SubCharacter/TB 2 B31.webp"
      },
      {
        id: "Blade-TB-003",
        name: "UX-10",
        image: "/Blade/00SubCharacter/TB 3 U10.webp"
      },
    ]
  },
  {
    id: "Blade-SSw-001",
    name: "Shinobi Shadow",
    image: "/Blade/00SubCharacter/SSw 1 U05.webp",
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
    bey: [
      {
        id: "Blade-SSw-002",
        name: "UX-05",
        image: "/Blade/00SubCharacter/SSw 2 U005.webp"
      },
      {
        id: "Blade-SSw-003",
        name: "UX-05",
        image: "/Blade/00SubCharacter/SSw 3 U05.webp"
      },
      {
        id: "Blade-SSw-004",
        name: "UX-12",
        image: "/Blade/00SubCharacter/SSw 4 U12.webp"
      },
    ]
  },
  {
    id: "Blade-WT-001",
    name: "Weiss Tiger",
    image: "/Blade/00Pendragon-Goldius/WT 1 B33.webp",
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
    image: "/Blade/00Pendragon-Goldius/CDg 1 B34.webp",
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
    bey: [
      {
        id: "Blade-CDg-002",
        name: "BX-00",
        image: "/Blade/00Pendragon-Goldius/CDg 2 B00.webp"
      },
      {
        id: "Blade-CDg-003",
        name: "CX-08",
        image: "/Blade/00Pendragon-Goldius/CDg 3 C08.webp"
      },
    ]
  },
  {
    id: "Blade-BSl-001",
    name: "Black Shell",
    image: "/Blade/00Pendragon-Goldius/BSl 1 B35.webp",
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
    bey: [
      {
        id: "Blade-BSl-002",
        name: "BX-35",
        image: "/Blade/00Pendragon-Goldius/BSl 2 B35.webp"
      },
      {
        id: "Blade-BSl-003",
        name: "CX-08",
        image: "/Blade/00Pendragon-Goldius/BSl 3 C08.webp"
      },
    ]
  },
  {
    id: "Blade-LCT-001",
    name: "Leon Crest",
    image: "/Blade/00Zooganic/LCT 1 U06.webp",
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
    bey: [
      {
        id: "LCT-002",
        name: "CX-05",
        image: "/Blade/00Zooganic/LCT 2 C05.webp"
      },
    ]
  },
  {
    id: "Blade-PR-001",
    name: "Phoenix Rudder",
    image: "/Blade/00Yggdrasil/PR 1 U07.webp",
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
    bey: [
      {
        id: "PR-002",
        name: "CX-05",
        image: "/Blade/00Yggdrasil/PR 2 C05.webp"
      },
    ]
  },
  {
    id: "Blade-WW-001",
    name: "Whale Wave",
    image: "/Blade/00Persona/WW 1 B36.webp",
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
    bey: [
      {
        id: "Blade-WW-002",
        name: "BX-36",
        image: "/Blade/00Persona/WW 2 B36.webp"
      },
      {
        id: "Blade-WW-003",
        name: "BX-36",
        image: "/Blade/00Persona/WW 3 B36.webp"
      },
      {
        id: "Blade-WW-004",
        name: "CX-05",
        image: "/Blade/00Persona/WW 4 C05.webp"
      },
    ]
  },
  {
    id: "Blade-BSc-001",
    name: "Bear Scratch",
    image: "/Blade/00SubCharacter/BSc 1 B37.webp",
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
    image: "/Blade/00SubCharacter/SW 1 U08.webp",
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
    image: "/Blade/00Persona/SSr 1 U09.webp",
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
    bey: [
      {
        id: "Blade-Sr-002",
        name: "UX-00",
        image: "/Blade/00Persona/SSr 2 U00.webp"
      },
    ]
  },
  {
    id: "Blade-KM-001",
    name: "Knight Mail",
    image: "/Blade/00Persona/KM 1 U10.webp",
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
    bey: [
      {
        id: "Blade-KM-002",
        name: "Rare Bey Battle",
        image: "/Blade/00Persona/KM 2 U00.webp"
      },
    ]
  },
  {
    id: "Blade-PS-001",
    name: "Ptera Swing",
    image: "/Blade/00SubCharacter/PS 1 U10.webp",
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
    image: "/Blade/00Pendragon-Goldius/CG 1 B38.webp",
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
    image: "/Blade/00Pendragon-Goldius/ID 1 U11.webp",
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
    image: "/Blade/00Pendragon-Goldius/GC 1 U12.webp",
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
    bey: [
      {
        id: "Blade-GC-002",
        name: "UX-12",
        image: "/Blade/00Pendragon-Goldius/GC 2 U12.webp"
      },
    ]
  },
  {
    id: "Blade-GR-001",
    name: "Golem Rock",
    image: "/Blade/00Pendragon-Goldius/GR 1 U13.webp",
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
    image: "/Blade/00Pendragon-Goldius/SDk 1 B39.webp",
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
    bey: [
      {
        id: "Blade-SDk-002",
        name: "BX-39",
        image: "/Blade/00Pendragon-Goldius/SDk 2 B39.webp"
      },
      {
        id: "Blade-SDk-003",
        name: "BX-39",
        image: "/Blade/00Pendragon-Goldius/SDk 3 B39.webp"
      },
    ]
  },
  {
    id: "Blade-DBS-001",
    name: "Dran Brave",
    image: "/Blade/00Persona/DBS 1 C01.webp",
    category: "blade",
    type:"attack",
    price: "CX-01",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~37 g (Stock Combo Blade)",
      "Stock Combo": "S 6-60 Vortex",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-DBS-002",
        name: "CX-04",
        image: "/Blade/00Persona/DBS 2 C04.webp"
      },
      {
        id: "Blade-DBS-003",
        name: "G1 Prize",
        image: "/Blade/00Persona/DBs 3 G1P.webp"
      },
      {
        id: "Blade-DBS-004",
        name: "G1 Prize",
        image: "/Blade/00Persona/DBs 4 G1P.webp"
      },
      {
        id: "Blade-DBS-005",
        name: "G1 Prize",
        image: "/Blade/00Persona/DBs 5 G1P.webp"
      },
      {
        id: "Blade-DBS-006",
        name: "CoroCoro Special",
        image: "/Blade/00Persona/DBS 6 SP1.webp"
      },
      {
        id: "Blade-DBS-007",
        name: "Rare Bey Battle",
        image: "/Blade/00Persona/Dran Lock R1.webp"
      },
      {
        id: "Blade-DBS-008",
        name: "CoroCoro Comic",
        image: "/Blade/00Persona/Persona CX.webp"
      },
      {
        id: "Blade-DBS-009",
        name: "Grand Prix Limited",
        image: "/Blade/00Persona/DBS 7 GPL.webp"
      },
    ]
  },
  {
    id: "Blade-WAR-001",
    name: "Wizard Arc",
    image: "/Blade/00Persona/WAR 1 C02 .webp",
    category: "blade",
    type:"stamina",
    price: "CX-02",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~35 g (Stock Combo Blade)",
      "Stock Combo": "R 4-55 Low Orb",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Round",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-WAR-002",
        name: "CX-00",
        image: "/Blade/00Persona/WAR 2 C00.webp"
      },
    ]
  },
  {
    id: "Blade-PDB-001",
    name: "Perseus Dark",
    image: "/Blade/00Zodiac - Fox/PDB 1 C03.webp",
    category: "blade",
    type:"defense",
    price: "CX-03",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~37 g (Stock Combo Blade)",
      "Stock Combo": "B 6-80 Wedge",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Bumper",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-PDB-002",
        name: "CX-04",
        image: "/Blade/00Zodiac - Fox/PDB 2 C04.webp"
      },
      {
        id: "Blade-PDB-003",
        name: "G3 Prize",
        image: "/Blade/00Zodiac - Fox/PDB 3 G3P.webp"
      },
    ]
  },
  {
    id: "Blade-HRT-001",
    name: "Hells Reaper",
    image: "/Blade/00Persona/HRT 1 C05.webp",
    category: "blade",
    type:"balance",
    price: "CX-05",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~36 g (Stock Combo Blade)",
      "Stock Combo": "T 4-70 Kick",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Turn",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-HRT-002",
        name: "CX-05 (Arc T)",
        image: "/Blade/00Persona/HRT 2 C05.webp"
      },
      {
        id: "Blade-HRT-003",
        name: "CX-05 (Full Set)",
        image: "/Blade/00Persona/HRT 3F C05.webp"
      },
      {
        id: "Blade-HRT-004",
        name: "UX-15 (Brave J)",
        image: "/Blade/00Persona/HRT 4 U15.webp"
      },
    ]
  },
  {
    id: "Blade-RRC-001",
    name: "Rhino Reaper",
    image: "/Blade/00Zooganic/RRC 1 C05.webp",
    category: "blade",
    type:"defense",
    price: "CX-05",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~35 g (Stock Combo Blade)",
      "Stock Combo": "C 4-55 Dot",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Charge",
      "Product Line": "CX",
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
    image: "/Blade/00Zodiac - Fox/SSp 1 U14.webp",
    category: "blade",
    type:"balance",
    price: "UX-14",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~39 g",
      "Stock Combo": "0-70 Zap",
      "Product Line": "UX",
      "Gimmick": "Mode Change (Defense/Attack)",
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
    image: "/Blade/00Zodiac - Fox/FBJ 1 C06.webp",
    category: "blade",
    type:"attack",
    price: "CX-06",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~36 g (Stock Combo Blade)",
      "Stock Combo": "J 9-70 Gear Rush",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Jaggy",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-FBJ-002",
        name: "CX-06",
        image: "/Blade/00Zodiac - Fox/FBJ 2 C06.webp"
      },
      {
        id: "Blade-FBJ-003",
        name: "CX-06",
        image: "/Blade/00Zodiac - Fox/FBJ 3 C06.webp"
      },
    ]
  },
  {
    id: "Blade-TPs-001",
    name: "Tricera Press",
    image: "/Blade/00Zodiac - Fox/TPs 1 B44.webp",
    category: "blade",
    type:"defense",
    price: "BX-44",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "M-85 Bound Spike",
      "Product Line": "BX",
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
    image: "/Blade/00Zodiac - Fox/PBA 1 C07.webp",
    category: "blade",
    type:"attack",
    price: "CX-07",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~39 g (Stock Combo Blade)",
      "Stock Combo": "A Turbo",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Assault",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-PBA-002",
        name: "CoroCoro Event",
        image: "/Blade/00Zodiac - Fox/PBA 2 C00.webp"
      },
    ]
  },
  {
    id: "Blade-CFW-001",
    name: "Cerberus Flame",
    image: "/Blade/00Zodiac - Fox/CFW 1 C08.webp",
    category: "blade",
    type:"stamina",
    price: "CX-08",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~37 g (Stock Combo Blade)",
      "Stock Combo": "W 5-80 Wall Ball",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Wheel",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "Blade-CFW-002",
        name: "CX-08 (Dark W)",
        image: "/Blade/00Zodiac - Fox/CFW 2 C08.webp"
      },
      {
        id: "Blade-CFW-003",
        name: "CX-08 (Full Set)",
        image: "/Blade/00Zodiac - Fox/CFW 3F C08.webp"
      },
    ]
  },
  {
    id: "Blade-WFM-001",
    name: "Whale Flame",
    image: "/Blade/00Persona/WFM 1 C08.webp",
    category: "blade",
    type:"balance",
    price: "CX-08",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~37 g (Stock Combo Blade)",
      "Stock Combo": "M 3-85 High Taper",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Massive",
      "Product Line": "CX",
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
    image: "/Blade/00Persona/SSl 1 U15.webp",
    category: "blade",
    type:"attack",
    price: "UX-15",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "4-50 Under Flat",
      "Product Line": "UX",
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
    image: "/Blade/00SubCharacter/TR 1 U15.webp",
    category: "blade",
    type:"attack",
    price: "UX-15",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "1-70 Level",
      "Product Line": "BX",
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
    image: "/Blade/00Persona/SCa 1 B45.webp",
    category: "blade",
    type:"balance",
    price: "BX-45",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~36 g",
      "Stock Combo": "6-70 Merge",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "Blade-SCa-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-SED-001",
    name: "Sol Eclipse",
    image: "/Blade/00Kurosu/SED Upper 1 C09.webp",
    category: "blade",
    type: ["balance"],
    price: "CX-09",
    specs: {
      Type: "Balance",
      Spin: "Right",
      Weight: "~39 g (Stock Combo Blade)",
      "Stock Combo": "D 5-70 Trans Kick",
      "Lock Chip Type": "Plastic",
      "Assist Blade": "Dual",
      "Product Line": "CX",
      Gimmick: "Mode Change (8 Modes custom)",
    },
    randomVariants: [
      {
        name: "Sol Eclipse (Upper)",
        image: "/Blade/00Kurosu/SED Upper 1 C09.webp",
        type: ["balance"]
      },
      {
        name: "Sol Eclipse (Smash)",
        image: "/Blade/00Kurosu/SED Smash 1 C09.webp",
        type: ["balance"]
      }
    ],
    // bey: [
    //   {
    //     id: "Blade-SED-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-GTk-001",
    name: "Goat Tackle",
    image: "/Blade/00SubCharacter/GTk 1 B46.webp",
    category: "blade",
    type:"balance",
    price: "BX-46",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~31 g",
      "Stock Combo": "7-70 Taper",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "Blade-Wy-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-CMr-001",
    name: "Clock Mirage",
    image: "/Blade/00Kurosu/CMr 1 U16.webp",
    category: "blade",
    type:"stamina",
    price: "UX-16",
    specs: {
      "Type": "Stamina",
      "Spin": "Right",
      "Weight": "~37 g",
      "Stock Combo": "9-65 Ball",
      "Product Line": "UX",
    },
    bey: [
      {
        id: "Blade-Wy-002",
        name: "UX-16",
        image: "/Blade/00Kurosu/CMr 2 U16.webp"
      },
      {
        id: "Blade-Wy-003",
        name: "UX-16",
        image: "/Blade/00Kurosu/CMr 3 U16.webp"
      },
    ]
  },

  //RARE BLADE
  {
    id: "Blade-CDk-001",
    name: "Cobalt Drake",
    image: "/Blade/00Pendragon-Goldius/CDk 1 B00.webp",
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
    bey: [
      {
        id: "Blade-CDk-002",
        name: "Rare Bey Battle",
        image: "/Blade/00Pendragon-Goldius/CDk 2 B00.webp"
      },
      {
        id: "Blade-CDk-003",
        name: "BX-46 (Regular Sale)",
        image: "/Blade/00Pendragon-Goldius/CDk 3 B46.webp"
      },
    ]
  },
  {
    id: "Blade-PF-001",
    name: "Phoenix Feather",
    image: "/Blade/00Yggdrasil/PF 1 B00.webp",
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
    bey: [
      {
        id: "Blade-PF-002",
        name: "UX-12 (Regular Sale)",
        image: "/Blade/00Yggdrasil/PF 2 U12.webp"
      },
      {
        id: "Blade-PF-003",
        name: "CoroCoro Comic",
        image: "/Blade/00Yggdrasil/PF 3 B00.webp"
      },
    ]
  },
  {
    id: "Blade-AP-001",
    name: "Aero Pegasus",
    image: "/Blade/00Zodiac - Fox/AP 1 U00.webp",
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
    bey: [
      {
        id: "Blade-AP-002",
        name: "UX-??",
        image: "/Blade/00Zodiac - Fox/AP 2 U--.webp"
      },
    ]
  },
  {
    id: "Blade-SK-001",
    name: "Shinobi Knife (XONE)",
    image: "/Blade/00SubCharacter/SK 1 XONE.webp",
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
    image: "/Blade/00SubCharacter/MT 1 B00.webp",
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
    image: "/Blade/00SubCharacter/CC 1 B00.webp",
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
    image: "/Blade/00Persona/SSt 1 B00.webp",
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
    image: "/Blade/00Zooganic/LFT 1 RED.webp",
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
    // bey: [
    //   {
    //     id: "Blade-LFT-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-VVS-001",
    name: "Valkyrie Volt",
    image: "/Blade/00Kurosu/VVS 1 C00.webp",
    category: "blade",
    type:["attack", "rare"],
    price: "CX-Rare Bey Battle",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~41 g",
      "Stock Combo": "S 4-70 Vortex",
      "Lock Chip Type": "Metal",
      "Assist Blade": "Slash",
      "Product Line": "CX",
    },
    // bey: [
    //   {
    //     id: "Blade-VBS-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Blade-WHv-001",
    name: "Wyvern Hover",
    image: "/Blade/00SubCharacter/WHr 1 U00.webp",
    category: "blade",
    type:["defense", "rare"],
    price: "UX-DMM Lottery",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~35 g",
      "Stock Combo": "2-80 Gear Needle",
      "Product Line": "UX",
    },
    bey: [
      {
        id: "Blade-Wy-002",
        name: "DMM Lottery",
        image: "/Blade/00SubCharacter/WHr 2 U00.webp"
      },
    ]
  },

  // ASSIST BLADES
  {
    id: "As-S-001",
    name: "S (Slash)",
    image: "/Assist Blade/S/S 1 C01.webp",
    category: "assist-blade",
    type: "assist",
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
        image: "/Assist Blade/S/S 2 C04.webp"
      },
      {
        id: "As-S-003",
        name: "CoroCoro Comic",
        image: "/Assist Blade/S/S 3 C00.webp"
      },
      {
        id: "As-S-004",
        name: "Rare Bey Battle",
        image: "/Assist Blade/S/S 4 C00.webp"
      },
    ]
  },
  {
    id: "As-R-001",
    name: "R (Round)",
    image: "/Assist Blade/R/R 1 C02.webp",
    category: "assist-blade",
    type: "assist",
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
        image: "/Assist Blade/R/R 2 C00.webp"
      },
    ]
  },
  {
    id: "As-B-001",
    name: "B (Bumper)",
    image: "/Assist Blade/B/B 1 C03.webp",
    category: "assist-blade",
    type: "assist",
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
        image: "/Assist Blade/B/B 2 C04.webp"
      },
    ]
  },
  {
    id: "As-T-001",
    name: "T (Turn)",
    image: "/Assist Blade/T/T 1 C05.webp",
    category: "assist-blade",
    type: "assist",
    price: "CX-05",
    specs: {
      "Spin": "Right",
      "Weight": "~6 g",
      "High Level": "~10 MM",
      "Gimmick": "Mode Change (Barrage/Parry)",
    },
    bey: [
      {
        id: "As-T-002",
        name: "CX-05",
        image: "/Assist Blade/T/T 2 C05.webp"
      },
      {
        id: "As-T-003",
        name: "CX-00",
        image: "/Assist Blade/T/T 3 C00.webp"
      },
    ]
  },
  {
    id: "As-C-001",
    name: "C (Charge)",
    image: "/Assist Blade/C/C 1 C05.webp",
    category: "assist-blade",
    type: "assist",
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
    image: "/Assist Blade/J/J 1 C06.webp",
    category: "assist-blade",
    type: "assist",
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
        image: "/Assist Blade/J/J 2 C06.webp"
      },
      {
        id: "As-J-003",
        name: "CX-06",
        image: "/Assist Blade/J/J 3 C06.webp"
      },
      {
        id: "As-J-004",
        name: "CoroCoro Comic",
        image: "/Assist Blade/J/J 4 C00.webp"
      },
      {
        id: "As-J-005",
        name: "UX-15",
        image: "/Assist Blade/J/J 5 U15.webp"
      },
    ]
  },
  {
    id: "As-A-001",
    name: "A (Assault)",
    image: "/Assist Blade/A/A 1 C07.webp",
    category: "assist-blade",
    type: "assist",
    price: "CX-07",
    specs: {
      "Spin": "Right",
      "Weight": "~5 g",
      "High Level": "~10 MM",
    },
    bey: [
      {
        id: "As-A-002",
        name: "CoroCoro Event",
        image: "/Assist Blade/A/A 2 C00.webp"
      },
    ]
  },
  {
    id: "As-W-001",
    name: "W (Wheel)",
    image: "/Assist Blade/W/W 1 C08.webp",
    category: "assist-blade",
    type: "assist",
    price: "CX-08",
    specs: {
      "Spin": "Right",
      "Weight": "~7 g",
      "High Level": "~10 MM",
    },
    bey: [
      {
        id: "As-W-002",
        name: "CX-08",
        image: "/Assist Blade/W/W 2 C08.webp"
      },
    ]
  },
  {
    id: "As-M-001",
    name: "M (Massive)",
    image: "/Assist Blade/M/M 1 C08.webp",
    category: "assist-blade",
    type: "assist",
    price: "CX-08",
    specs: {
      "Spin": "Right",
      "Weight": "~6 g",
      "High Level": "~10 MM",
    },
    // bey: [
    //   {
    //     id: "As-M-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "As-D-001",
    name: "D (Dual)",
    image: "/Assist Blade/D/D 1 C09.webp",
    category: "assist-blade",
    type: "assist",
    price: "CX-09",
    specs: {
      "Spin": "Right",
      "Weight": "~6 g",
      "High Level": "~10 MM",
      "Gimmick": "Mode Change (Upper/Smash)",
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
    image: "/Ratchet/0/0 70 1 U14.webp",
    category: "ratchet",
    type: "ratchet",
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
    image: "/Ratchet/0/0 80 1 U12.webp",
    category: "ratchet",
    type: "ratchet",
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
        image: "/Ratchet/0/0 80 2 U12.webp"
      },
      {
        id: "Rat-080-003",
        name: "UX-12",
        image: "/Ratchet/0/0 80 3 U12.webp"
      },
      {
        id: "Rat-080-004",
        name: "CX-06",
        image: "/Ratchet/0/0 80 4 C06.webp"
      },
    ]
  },
  {
    id: "Rat-160-001",
    name: "1-60",
    image: "/Ratchet/1/1 60 1 U01.webp",
    category: "ratchet",
    type: "ratchet",
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
        image: "/Ratchet/1/1 60 2 U04.webp"
      },
      {
        id: "Rat-160-003",
        name: "BX-31",
        image: "/Ratchet/1/1 60 3 B31.webp"
      },
      {
        id: "Rat-160-004",
        name: "BX-35",
        image: "/Ratchet/1/1 60 4 B35.webp"
      },
      {
        id: "Rat-160-005",
        name: "BX-00",
        image: "/Ratchet/1/1 60 5 B00.webp"
      },
      {
        id: "Rat-160-006",
        name: "UX-10",
        image: "/Ratchet/1/1 60 6 U10.webp"
      },
      {
        id: "Rat-160-007",
        name: "UX-13",
        image: "/Ratchet/1/1 60 7 U00.webp"
      },
      {
        id: "Rat-160-008",
        name: "Park Limited",
        image: "/Ratchet/1/1 60 8 LTD.webp"
      },
      {
        id: "Rat-160-009",
        name: "Park Limited",
        image: "/Ratchet/1/1 60 9 LTD.webp"
      },
      {
        id: "Rat-160-00=10",
        name: "Park Limited",
        image: "/Ratchet/1/1 60 10 LTD.webp"
      },
      {
        id: "Rat-160-011",
        name: "Park Limited",
        image: "/Ratchet/1/1 60 11 LTD.webp"
      },
      {
        id: "Rat-160-012",
        name: "Park Limited",
        image: "/Ratchet/1/1 60 12 LTD.webp"
      },
      {
        id: "Rat-160-013",
        name: "Park Limited",
        image: "/Ratchet/1/1 60 13 LTD.webp"
      },
      {
        id: "Rat-160-014",
        name: "UX-13",
        image: "/Ratchet/1/1 60 14 U13.webp"
      },
      {
        id: "Rat-160-015",
        name: "CX-08",
        image: "/Ratchet/1/1 60 15 C08.webp"
      },
    ]
  },
  {
    id: "Rat-170-001",
    name: "1-70",
    image: "/Ratchet/1/1 70 1 U15.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-15",
    features: [
      "1 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6 g",
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
    image: "/Ratchet/1/1 80 1 U05.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-05",
    features: [
      "1 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-180-002",
        name: "UX-07",
        image: "/Ratchet/1/1 80 2 U07.webp"
      },
      {
        id: "Rat-180-003",
        name: "Collab",
        image: "/Ratchet/1/1 80 3 Col.webp"
      },
    ]
  },
  {
    id: "Rat-260-001",
    name: "2-60",
    image: "/Ratchet/2/2 60 1 B34.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-34",
    features: [
      "2 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-260-002",
        name: "BX-00",
        image: "/Ratchet/2/2 60 2 B00.webp"
      },
      {
        id: "Rat-260-003",
        name: "UX-07",
        image: "/Ratchet/2/2 60 3 U07.webp"
      },
      {
        id: "Rat-260-004",
        name: "25th Anniversary",
        image: "/Ratchet/2/2 60 4 25th.webp"
      },
      {
        id: "Rat-260-005",
        name: "UX-12",
        image: "/Ratchet/2/2 60 5 U12.webp"
      },
      {
        id: "Rat-260-006",
        name: "CoroCoro Comic",
        image: "/Ratchet/2/2 60 6 B00.webp"
      },
      {
        id: "Rat-260-007",
        name: "CX-06",
        image: "/Ratchet/2/2 60 7 C06.webp"
      },
    ]
  },
  {
    id: "Rat-270-001",
    name: "2-70",
    image: "/Ratchet/2/2 70 1 U09.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-09",
    features: [
      "2 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6 g",
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
        image: "/Ratchet/2/2 70 3 C00.webp"
      },
    ]
  },
  {
    id: "Rat-280-001",
    name: "2-80",
    image: "/Ratchet/2/2 80 1 B00.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-00",
    features: [
      "2 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-280-002",
        name: "Rare Bey Battle",
        image: "/Ratchet/2/2 80 2 B00.webp"
      },
      {
        id: "Rat-280-003",
        name: "DMM Lottery",
        image: "/Ratchet/2/2 80 3 B00.webp"
      },
      {
        id: "Rat-280-004",
        name: "DMM Lottery",
        image: "/Ratchet/2/2 80 4 B00.webp"
      },
    ]
  },
  {
    id: "Rat-360-001",
    name: "3-60",
    image: "/Ratchet/3/3 60 1 B01.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-01",
    features: [
      "3 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-360-002",
        name: "BX-07",
        image: "/Ratchet/3/3 60 2 B07.webp"
      },
      {
        id: "Rat-360-003",
        name: "BX-14",
        image: "/Ratchet/3/3 60 3 B14.webp"
      },
      {
        id: "360-004",
        name: "BX-14",
        image: "/Ratchet/3/3 60 4 B14.webp"
      },
      {
        id: "Rat-360-005",
        name: "BX-17",
        image: "/Ratchet/3/3 60 5 B17.webp"
      },
      {
        id: "Rat-360-006",
        name: "BX-21",
        image: "/Ratchet/3/3 60 6 B21.webp"
      },
      {
        id: "Rat-360-007",
        name: "BX-24",
        image: "/Ratchet/3/3 60 7 B24.webp"
      },
      {
        id: "Rat-360-008",
        name: "BX-31",
        image: "/Ratchet/3/3 60 8 B31.webp"
      },
      {
        id: "Rat-360-009",
        name: "BX-33",
        image: "/Ratchet/3/3 60 9 B33.webp"
      },
      {
        id: "Rat-360-010",
        name: "BX-39",
        image: "/Ratchet/3/3 60 10 B39.webp"
      },
      {
        id: "Rat-360-011",
        name: "Collab",
        image: "/Ratchet/3/3 60 11 Col.webp"
      },
      {
        id: "Rat-360-012",
        name: "Collab",
        image: "/Ratchet/3/3 60 12 Col.webp"
      },
      {
        id: "Rat-360-013",
        name: "Collab",
        image: "/Ratchet/3/3 60 13 Col.webp"
      },
      {
        id: "Rat-360-014",
        name: "BX-00",
        image: "/Ratchet/3/3 60 14 B00.webp"
      },
      {
        id: "Rat-360-015",
        name: "Sushiro Ver.",
        image: "/Ratchet/3/3 60 15 Sushi.webp"
      },
      {
        id: "Rat-360-016",
        name: "UX-15",
        image: "/Ratchet/3/3 60 16 U15.webp"
      },
    ]
  },
  {
    id: "Rat-370-001",
    name: "3-70",
    image: "/Ratchet/3/3 70 1 U02.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-02",
    features: [
      "3 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-370-002",
        name: "UX-05",
        image: "/Ratchet/3/3 70 2 U05.webp"
      },
      {
        id: "Rat-370-003",
        name: "BX-35",
        image: "/Ratchet/3/3 70 3 B35.webp"
      },
      {
        id: "Rat-370-004",
        name: "Rare Bey Battle",
        image: "/Ratchet/3/3 70 4 U00.webp"
      },
      {
        id: "Rat-370-005",
        name: "UX-00",
        image: "/Ratchet/3/3 70 5 25th.webp"
      },
      {
        id: "Rat-370-006",
        name: "UX-00",
        image: "/Ratchet/3/3 70 6 U00.webp"
      },
      {
        id: "Rat-370-007",
        name: "UX-00",
        image: "/Ratchet/3/3 70 7 U00.webp"
      },
      {
        //AP Red Ver.
        id: "Rat-370-008",
        name: "UX-??",
        image: ""
      },
    ]
  },
  {
    id: "Rat-380-001",
    name: "3-80",
    image: "/Ratchet/3/3 80 1 B04.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-04",
    features: [
      "3 Contact Points",
      "High : 8.0 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-380-002",
        name: "BX-06",
        image: "/Ratchet/3/3 80 2 B06.webp"
      },
      {
        id: "Rat-380-003",
        name: "BX-08",
        image: "/Ratchet/3/3 80 3 B08.webp"
      },
      {
        id: "Rat-380-004",
        name: "BX-14",
        image: "/Ratchet/3/3 80 4 B14.webp"
      },
      {
        id: "Rat-380-005",
        name: "BX-16",
        image: "/Ratchet/3/3 80 5 B16.webp"
      },
      {
        id: "Rat-380-006",
        name: "BX-19",
        image: "/Ratchet/3/3 80 6 B19.webp"
      },
      {
        id: "Rat-380-007",
        name: "BX-20",
        image: "/Ratchet/3/3 80 7 B20.webp"
      },
      {
        id: "Rat-380-008",
        name: "BX-24",
        image: "/Ratchet/3/3 80 8 B24.webp"
      },
      {
        id: "Rat-380-009",
        name: "BX-00",
        image: "/Ratchet/3/3 80 9 B00.webp"
      },
      {
        id: "Rat-380-010",
        name: "CoroCoro Comic",
        image: "/Ratchet/3/3 80 10 B00.webp"
      },
      {
        id: "Rat-380-011",
        name: "BX-36",
        image: "/Ratchet/3/3 80 11 B36.webp"
      },
      {
        id: "Rat-380-012",
        name: "UX-08",
        image: "/Ratchet/3/3 80 12 U08.webp"
      },
      {
        id: "Rat-380-013",
        name: "UX-12",
        image: "/Ratchet/3/3 80 13 U12.webp"
      },
      {
        id: "Rat-380-014",
        name: "Collab",
        image: "/Ratchet/3/3 80 14 Col.webp"
      },
      {
        id: "Rat-380-015",
        name: "Collab",
        image: "/Ratchet/3/3 80 15 Col.webp"
      },
      {
        id: "Rat-380-016",
        name: "Collab",
        image: "/Ratchet/3/3 80 16 Col.webp"
      },
      {
        id: "Rat-380-017",
        name: "G3 Prize",
        image: "/Ratchet/3/3 80 17 G3P.webp"
      },
    ]
  },
  {
    id: "Rat-385-001",
    name: "3-85",
    image: "/Ratchet/3/3 85 1 U10.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-10",
    features: [
      "3 Contact Points",
      "High : 8.5 mm",
      "Weight: ~4 g",
    ],
    bey: [
      {
        id: "Rat-385-002",
        name: "CX-05",
        image: "/Ratchet/3/3 85 2 C05.webp"
      },
      {
        id: "Rat-385-003",
        name: "Collab",
        image: "/Ratchet/3/3 85 3 Col.webp"
      },
      {
        id: "Rat-385-004",
        name: "CX-08",
        image: "/Ratchet/3/3 85 4 C08.webp"
      },
      {
        id: "Rat-385-005",
        name: "Rare Bey Battle",
        image: "/Ratchet/3/3 85 5 U00.webp"
      },
    ]
  },
  {
    id: "Rat-450-001",
    name: "4-50",
    image: "/Ratchet/4/4 50 1 U15.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-15",
    features: [
      "4 Contact Points",
      "High : 5.0 mm",
      "Weight: ~5 g",
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
    image: "/Ratchet/4/4 55 1 C02.webp",
    category: "ratchet",
    type: "ratchet",
    price: "CX-02",
    features: [
      "4 Contact Points",
      "High : 4.5 mm",
      "Weight: ~4 g",
    ],
    bey: [
      {
        id: "Rat-455-002",
        name: "CX-05",
        image: "/Ratchet/4/4 55 2 C05.webp"
      },
      {
        id: "Rat-455-003",
        name: "CX-08",
        image: "/Ratchet/4/4 55 6 C08.webp"
      },
      {
        id: "Rat-455-004",
        name: "Collab",
        image: "/Ratchet/4/4 55 4 Col.webp"
      },
      {
        id: "Rat-455-004",
        name: "CX-00",
        image: "/Ratchet/4/4 55 5 C00.webp"
      },
    ]
  },
  {
    id: "Rat-460-001",
    name: "4-60",
    image: "/Ratchet/4/4 60 1 B02.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-02",
    features: [
      "4 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-460-002",
        name: "Rare Bey Battle",
        image: "/Ratchet/4/4 60 2 B00.webp"
      },
      {
        id: "Rat-460-003",
        name: "BX-00",
        image: "/Ratchet/4/4 60 3 B00.webp"
      },
      {
        id: "Rat-460-004",
        name: "BX-08",
        image: "/Ratchet/4/4 60 4 B08.webp"
      },
      {
        id: "Rat-460-005",
        name: "BX-14",
        image: "/Ratchet/4/4 60 5 B14.webp"
      },
      {
        id: "Rat-460-006",
        name: "BX-16",
        image: "/Ratchet/4/4 60 6 B16.webp"
      },
      {
        id: "Rat-460-007",
        name: "BX-20",
        image: "/Ratchet/4/4 60 7 B20.webp"
      },
      {
        id: "Rat-460-008",
        name: "BX-24",
        image: "/Ratchet/4/4 60 8 B24.webp"
      },
      {
        id: "Rat-460-009",
        name: "BX-35",
        image: "/Ratchet/4/4 60 9 B35.webp"
      },
      {
        id: "Rat-460-010",
        name: "25th Anniversary",
        image: "/Ratchet/4/4 60 10 25th.webp"
      },
      {
        id: "Rat-460-011",
        name: "Rare Bey Battle",
        image: "/Ratchet/4/4 60 11 B00.webp"
      },
      {
        id: "Rat-460-012",
        name: "Game Package",
        image: "/Ratchet/4/4 60 12 B00.webp"
      },
      {
        id: "Rat-460-013",
        name: "UX-12",
        image: "/Ratchet/4/4 60 13 U12.webp"
      },
      {
        id: "Rat-460-014",
        name: "Collab",
        image: "/Ratchet/4/4 60 14 Col.webp"
      },
      {
        id: "Rat-460-015",
        name: "Collab",
        image: "/Ratchet/4/4 60 15 Col.webp"
      },
      {
        id: "Rat-460-016",
        name: "Collab",
        image: "/Ratchet/4/4 60 16 Col.webp"
      },
      {
        id: "Rat-460-017",
        name: "Game Package",
        image: "/Ratchet/4/4 60 17 C00.webp"
      },
    ]
  },
  {
    id: "Rat-470-001",
    name: "4-70",
    image: "/Ratchet/4/4 70 1 B31.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-31",
    features: [
      "4 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-470-002",
        name: "BX-31",
        image: "/Ratchet/4/4 70 2 B31.webp"
      },
      {
        id: "Rat-470-003",
        name: "BX-36",
        image: "/Ratchet/4/4 70 3 B36.webp"
      },
      {
        id: "Rat-470-004",
        name: "BX-38",
        image: "/Ratchet/4/4 70 4 B38.webp"
      },
      {
        id: "Rat-470-005",
        name: "CX-05",
        image: "/Ratchet/4/4 70 5 C05.webp"
      },
      {
        id: "Rat-470-006",
        name: "CX-05",
        image: "/Ratchet/4/4 70 6 C05.webp"
      },
      {
        id: "Rat-470-007",
        name: "Rare Bey Battle",
        image: "/Ratchet/4/4 70 7 C00.webp"
      },
    ]
  },
  {
    id: "Rat-480-001",
    name: "4-80",
    image: "/Ratchet/4/4 80 1 B03.webp",
    category: "ratchet",
    type: "ratchet",
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
        image: "/Ratchet/4/4 80 2 B05.webp"
      },
      {
        id: "Rat-480-003",
        name: "BX-08",
        image: "/Ratchet/4/4 80 3 B08.webp"
      },
      {
        id: "Rat-480-004",
        name: "BX-13",
        image: "/Ratchet/4/4 80 4 B13.webp"
      },
      {
        id: "Rat-480-005",
        name: "BX-14",
        image: "/Ratchet/4/4 80 5 B14.webp"
      },
      {
        id: "Rat-480-006",
        name: "BX-14",
        image: "/Ratchet/4/4 80 6 B14.webp"
      },
      {
        id: "Rat-480-007",
        name: "BX-17",
        image: "/Ratchet/4/4 80 7 B17.webp"
      },
      {
        id: "Rat-480-008",
        name: "BX-21",
        image: "/Ratchet/4/4 80 8 B21.webp"
      },
      {
        id: "Rat-480-009",
        name: "BX-24",
        image: "/Ratchet/4/4 80 9 B24.webp"
      },
      {
        id: "Rat-480-010",
        name: "BX-27",
        image: "/Ratchet/4/4 80 10 B27.webp"
      },
      {
        id: "Rat-480-011",
        name: "BX-00",
        image: "/Ratchet/4/4 80 11 B00.webp"
      },
      {
        id: "Rat-480-012",
        name: "Collab",
        image: "/Ratchet/4/4 80 12 Col.webp"
      },
      {
        id: "Rat-480-013",
        name: "Collab",
        image: "/Ratchet/4/4 80 13 Col.webp"
      },
      {
        id: "Rat-480-014",
        name: "Collab",
        image: "/Ratchet/4/4 80 14 Col.webp"
      },
      {
        id: "Rat-480-015",
        name: "UX-00",
        image: "/Ratchet/4/4 80 15 U00.webp"
      },
    ]
  },
  {
    id: "Rat-560-001",
    name: "5-60",
    image: "/Ratchet/5/5 60 1 B15.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-15",
    features: [
      "5 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-560-002",
        name: "BX-21",
        image: "/Ratchet/5/5 60 2 B21.webp"
      },
      {
        id: "Rat-560-003",
        name: "BX-24",
        image: "/Ratchet/5/5 60 3 B24.webp"
      },
      {
        id: "Rat-560-004",
        name: "BX-00",
        image: "/Ratchet/5/5 60 4 B00.webp"
      },
      {
        id: "Rat-560-005",
        name: "BX-26",
        image: "/Ratchet/5/5 60 5 B26.webp"
      },
      {
        id: "Rat-560-006",
        name: "BX-00",
        image: "/Ratchet/5/5 60 6 B00.webp"
      },
      {
        id: "Rat-560-007",
        name: "BX-27",
        image: "/Ratchet/5/5 60 7 B27.webp"
      },
      {
        id: "Rat-560-008",
        name: "Rare Bey Battle",
        image: "/Ratchet/5/5 60 8 B00.webp"
      },
      {
        id: "Rat-560-009",
        name: "BX-37",
        image: "/Ratchet/5/5 60 9 B37.webp"
      },
    ]
  },
  {
    id: "Rat-570-001",
    name: "5-70",
    image: "/Ratchet/5/5 70 1 U03.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-03",
    features: [
      "5 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-570-002",
        name: "UX-04",
        image: "/Ratchet/5/5 70 2 U04.webp"
      },
      {
        id: "Rat-570-003",
        name: "BX-35",
        image: "/Ratchet/5/5 70 3 B35.webp"
      },
      {
        id: "Rat-570-004",
        name: "BX-39",
        image: "/Ratchet/5/5 70 4 B39.webp"
      },
      {
        id: "Rat-570-005",
        name: "G3 Prize",
        image: "/Ratchet/5/5 70 5 G3P.webp"
      },
      {
        id: "Rat-570-006",
        name: "CoroCoro Comic",
        image: "/Ratchet/5/5 70 6 B00.webp"
      },
      {
        id: "Rat-570-007",
        name: "CX-09",
        image: "/Ratchet/5/5 70 7 C09.webp"
      },
    ]
  },
  {
    id: "Rat-580-001",
    name: "5-80",
    image: "/Ratchet/5/5 80 1 B16.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-16",
    features: [
      "5 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-580-002",
        name: "BX-20",
        image: "/Ratchet/5/5 80 2 B20.webp"
      },
      {
        id: "Rat-580-003",
        name: "BX-24",
        image: "/Ratchet/5/5 80 3 B24.webp"
      },
      {
        id: "Rat-580-004",
        name: "BX-31",
        image: "/Ratchet/5/5 80 4 B31.webp"
      },
      {
        id: "Rat-580-005",
        name: "BX-35",
        image: "/Ratchet/5/5 80 5 B35.webp"
      },
      {
        id: "Rat-580-006",
        name: "BX-36",
        image: "/Ratchet/5/5 80 6 B36.webp"
      },
      {
        id: "Rat-580-007",
        name: "CX-08",
        image: "/Ratchet/5/5 80 7 C08.webp"
      },
      {
        id: "Rat-580-008",
        name: "CX-08",
        image: "/Ratchet/5/5 80 8 C08.webp"
      },
    ]
  },
  {
    id: "Rat-660-001",
    name: "6-60",
    image: "/Ratchet/6/6 60 1 C01.webp",
    category: "ratchet",
    type: "ratchet",
    price: "CX-01",
    features: [
      "6 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-660-002",
        name: "CX-04",
        image: "/Ratchet/6/6 60 2 C04.webp"
      },
      {
        id: "Rat-660-003",
        name: "G1 Prize",
        image: "/Ratchet/6/6 60 3 G1P.webp"
      },
      {
        id: "Rat-660-004",
        name: "G1 Prize",
        image: "/Ratchet/6/6 60 4 G1P.webp"
      },
      {
        id: "Rat-660-005",
        name: "G1 Prize",
        image: "/Ratchet/6/6 60 5 G1P.webp"
      },
      {
        id: "Rat-660-006",
        name: "GP Limited",
        image: ""
      },
    ]
  },
  {
    id: "Rat-670-001",
    name: "6-70",
    image: "/Ratchet/6/6 70 1 B45.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-45",
    features: [
      "6 Contact Points",
      "High : 7.0 mm",
      "Weight: ~6 g",
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
    image: "/Ratchet/6/6 80 1 C03.webp",
    category: "ratchet",
    type: "ratchet",
    price: "CX-03",
    features: [
      "6 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-680-002",
        name: "CX-04",
        image: "/Ratchet/6/6 80 2 C04.webp"
      },
      {
        id: "Rat-680-003",
        name: "G3 Prize",
        image: "/Ratchet/6/6 80 3 G3P.webp"
      },
      {
        id: "Rat-680-004",
        name: "BX-00",
        image: "/Ratchet/6/6 80 4 B00.webp"
      },
    ]
  },
  {
    id: "Rat-760-001",
    name: "7-60",
    image: "/Ratchet/7/7 60 1 U06.webp",
    category: "ratchet",
    type: "ratchet",
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
        image: "/Ratchet/7/7 60 2 B00.webp"
      },
      {
        id: "Rat-760-003",
        name: "CX-05",
        image: "/Ratchet/7/7 60 3 C05.webp"
      },
    ]
  },
  {
    id: "Rat-770-001",
    name: "7-70",
    image: "/Ratchet/7/7 70 1 U10.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-10",
    features: [
      "7 Contact Points",
      "High : 7.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-770-002",
        name: "CX-08",
        image: "/Ratchet/7/7 70 2 C08.webp"
      },
      {
        id: "Rat-770-003",
        name: "BX-46",
        image: "/Ratchet/7/7 70 3 B46.webp"
      },
    ]
  },
  {
    id: "Rat-780-001",
    name: "7-80",
    image: "/Ratchet/7/7 80 1 B39.webp",
    category: "ratchet",
    type: "ratchet",
    price: "CX-39",
    features: [
      "7 Contact Points",
      "High : 8.00 mm",
      "Weight: ~8 g",
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
    image: "/Ratchet/9/9 60 1 B23.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-23",
    features: [
      "9 Contact Points",
      "High : 6.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-960-002",
        name: "UX-05",
        image: "/Ratchet/9/9 60 2 U05.webp"
      },
      {
        id: "Rat-960-003",
        name: "UX-11",
        image: "/Ratchet/9/9 60 3 U11.webp"
      },
      {
        id: "Rat-960-004",
        name: "BX-00",
        image: "/Ratchet/9/9 60 4 B00.webp"
      },
      {
        id: "Rat-960-005",
        name: "Collab",
        image: "/Ratchet/9/9 60 5 Col.webp"
      },
      {
        id: "Rat-960-006",
        name: "UX-00",
        image: "/Ratchet/9/9 60 6 U00.webp"
      },
      {
        id: "Rat-960-007",
        name: "BX-46",
        image: "/Ratchet/9/9 60 7 B46.webp"
      },
    ]
  },
  {
    id: "Rat-965-001",
    name: "9-65",
    image: "/Ratchet/9/9 65 1 U16.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-16",
    features: [
      "9 Contact Points",
      "High : 6.50 mm",
      "Weight: ~4 g",
    ],
    bey: [
      {
        id: "Rat-965-002",
        name: "UX-16",
        image: "/Ratchet/9/9 65 2 U16.webp"
      },
      {
        id: "Rat-965-003",
        name: "UX-16",
        image: "/Ratchet/9/9 65 3 U16.webp"
      },
    ]
  },
  {
    id: "Rat-970-001",
    name: "9-70",
    image: "/Ratchet/9/9 70 1 U07.webp",
    category: "ratchet",
    type: "ratchet",
    price: "UX-07",
    features: [
      "9 Contact Points",
      "High : 7.00 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "Rat-970-002",
        name: "CX-06",
        image: "/Ratchet/9/9 70 2 C06.webp"
      },
    ]
  },
  {
    id: "Rat-980-001",
    name: "9-80",
    image: "/Ratchet/9/9 80 1 B27.webp",
    category: "ratchet",
    type: "ratchet",
    price: "BX-27",
    features: [
      "9 Contact Points",
      "High : 8.00 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "Rat-980-002",
        name: "BX-31",
        image: "/Ratchet/9/9 80 2 B31.webp"
      },
      {
        id: "Rat-980-003",
        name: "BX-35",
        image: "/Ratchet/9/9 80 3 B35.webp"
      },
      {
        id: "Rat-980-004",
        name: "BX-00",
        image: "/Ratchet/9/9 80 4 B00.webp"
      },
      {
        id: "Rat-980-005",
        name: "CX-05",
        image: "/Ratchet/9/9 80 5 C05.webp"
      },
    ]
  },
  {
    id: "Rat-M85-001",
    name: "M-85",
    image: "/Ratchet/M/M 85 1 B44.webp",
    category: "ratchet",
    type: "ratchet",
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
    image: "/Hybird Part/Tr 1 C07.webp",
    category: "ratchet",
    type: "ratchet",
    price: "CX-07",
    features: [
      "Hybrid Part (Ratchet + Bit)",
      "2 Contact Points",
      "High : 9 -> 6.50 mm",
      "Weight: ~12 g",
    ],
    bey: [
      {
        id: "Hybrid-Rat-Tr-002",
        name: "CoroCoro Event",
        image: "/Hybird Part/Tr 2 C00.webp"
      },
    ]
  },

  // BITS
  {
    id: "Bit-F-001",
    name: "F (Flat)",
    image: "/Bit/F/F 1 B01.webp",
    category: "bit",
    type:"attack",
    price: "BX-01",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-F-002",
        name: "Rare Bey Battle",
        image: "/Bit/F/F 2 B00.webp"
      },
      {
        id: "Bit-F-003",
        name: "BX-07",
        image: "/Bit/F/F 3 B07.webp"
      },
      {
        id: "Bit-F-004",
        name: "BX-16",
        image: "/Bit/F/F 4 B16.webp"
      },
      {
        id: "Bit-F-005",
        name: "BX-17",
        image: "/Bit/F/F 5 B17.webp"
      },
      {
        id: "Bit-F-006",
        name: "BX-20",
        image: "/Bit/F/F 6 B20.webp"
      },
      {
        id: "Bit-F-007",
        name: "BX-24",
        image: "/Bit/F/F 7 B24.webp"
      },
      {
        id: "Bit-F-008",
        name: "BX-00",
        image: "/Bit/F/F 8 B00.webp"
      },
      {
        id: "Bit-F-009",
        name: "CoroCoro Comic",
        image: "/Bit/F/F 9 B00.webp"
      },
      {
        id: "Bit-F-0010",
        name: "BX-37",
        image: "/Bit/F/F 10 B37.webp"
      },
      {
        id: "Bit-F-011",
        name: "Rare Bey Battle",
        image: "/Bit/F/F 11 B00.webp"
      },
      {
        id: "Bit-F-012",
        name: "UX-12",
        image: "/Bit/F/F 12 U12.webp"
      },
      {
        id: "Bit-F-013",
        name: "Collab",
        image: "/Bit/F/F 13 Col.webp"
      },
      {
        id: "Bit-F-014",
        name: "Collab",
        image: "/Bit/F/F 14 Col.webp"
      },
      {
        id: "Bit-F-015",
        name: "Collab",
        image: "/Bit/F/F 15 Col.webp"
      },
      {
        id: "Bit-F-016",
        name: "Sushiro Ver.",
        image: "/Bit/F/F 16 Sushi.webp"
      },
      {
        id: "Bit-F-017",
        name: "CX-08",
        image: "/Bit/F/F 17 C08.webp"
      },
    ]
  },
  {
    id: "Bit-T-001",
    name: "T (Taper)",
    image: "/Bit/T/T 1 B02.webp",
    category: "bit",
    type:"balance",
    price: "BX-02",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-T-002",
        name: "BX-00",
        image: "/Bit/T/T 2 B00.webp"
      },
      {
        id: "Bit-T-003",
        name: "BX-07",
        image: "/Bit/T/T 3 B07.webp"
      },
      {
        id: "Bit-T-004",
        name: "BX-14",
        image: "/Bit/T/T 4 B14.webp"
      },
      {
        id: "Bit-T-005",
        name: "BX-20",
        image: "/Bit/T/T 5 B20.webp"
      },
      {
        id: "Bit-T-006",
        name: "BX-24",
        image: "/Bit/T/T 6 B24.webp"
      },
      {
        id: "Bit-T-007",
        name: "BX-00",
        image: "/Bit/T/T 7 B00.webp"
      },
      {
        id: "Bit-T-008",
        name: "BX-46",
        image: "/Bit/T/T 8 B46.webp"
      },
    ]
  },
  {
    id: "Bit-B-001",
    name: "B (Ball)",
    image: "/Bit/B/B 1 B03.webp",
    category: "bit",
    type:"stamina",
    price: "BX-03",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-B-002",
        name: "BX-05",
        image: "/Bit/B/B 2 B05.webp"
      },
      {
        id: "Bit-B-003",
        name: "BX-08",
        image: "/Bit/B/B 3 B08.webp"
      },
      {
        id: "Bit-B-004",
        name: "BX-14",
        image: "/Bit/B/B 4 B14.webp"
      },
      {
        id: "Bit-B-005",
        name: "BX-17",
        image: "/Bit/B/B 5 B17.webp"
      },
      {
        id: "Bit-B-006",
        name: "BX-35",
        image: "/Bit/B/B 6 B35.webp"
      },
      {
        id: "Bit-B-007",
        name: "UX-10",
        image: "/Bit/B/B 7 U10.webp"
      },
      {
        id: "Bit-B-008",
        name: "Collab",
        image: "/Bit/B/B 8 Col.webp"
      },
      {
        id: "Bit-B-009",
        name: "Collab",
        image: "/Bit/B/B 9 Col.webp"
      },
      {
        id: "Bit-B-010",
        name: "Collab",
        image: "/Bit/B/B 10 Col.webp"
      },
      {
        id: "Bit-B-011",
        name: "UX-16",
        image: "/Bit/B/B 11 U16.webp"
      },
      {
        id: "Bit-B-012",
        name: "UX-16",
        image: "/Bit/B/B 12 U16.webp"
      },
      {
        id: "Bit-B-013",
        name: "UX-16",
        image: "/Bit/B/B 13 U16.webp"
      },
    ]
  },
  {
    id: "Bit-N-001",
    name: "N (Needle)",
    image: "/Bit/N/N 1 B04.webp",
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
        image: "/Bit/N/N 2 B06.webp"
      },
      {
        id: "Bit-N-003",
        name: "BX-08",
        image: "/Bit/N/N 3 B08.webp"
      },
      {
        id: "Bit-N-004",
        name: "BX-14",
        image: "/Bit/N/N 4 B14.webp"
      },
      {
        id: "Bit-N-005",
        name: "BX-21",
        image: "/Bit/N/N 5 B21.webp"
      },
      {
        id: "Bit-N-006",
        name: "UX-12",
        image: "/Bit/N/N 6 U12.webp"
      },
      {
        id: "Bit-N-007",
        name: "Collab",
        image: "/Bit/N/N 7 Col.webp"
      },
      {
        id: "Bit-N-008",
        name: "Collab",
        image: "/Bit/N/N 8 Col.webp"
      },
      {
        id: "Bit-N-009",
        name: "Collab",
        image: "/Bit/N/N 9 Col.webp"
      },
      {
        id: "Bit-N-010",
        name: "G3P",
        image: "/Bit/N/N 10 G3P.webp"
      },
      {
        id: "Bit-N-011",
        name: "UX-00",
        image: "/Bit/N/N 11 U00.webp"
      },
    ]
  },
  {
    id: "Bit-HN-001",
    name: "HN (High Needle)",
    image: "/Bit/HN/HN 1 B13.webp",
    category: "bit",
    type:"defense",
    price: "BX-13",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-HN-002",
        name: "BX-16",
        image: "/Bit/HN/HN 2 B16.webp"
      },
      {
        id: "Bit-HN-003",
        name: "BX-24",
        image: "/Bit/HN/HN 3 B24.webp"
      },
      {
        id: "Bit-HN-004",
        name: "BX-36",
        image: "/Bit/HN/HN 4 B36.webp"
      },
    ]
  },
  {
    id: "Bit-LF-001",
    name: "LF (Low Flat)",
    image: "/Bit/LF/LF 1 B14.webp",
    category: "bit",
    type:"attack",
    price: "BX-14",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-LF-002",
        name: "BX-14",
        image: "/Bit/LF/LF 2 BX14.webp"
      },
      {
        id: "Bit-LF-003",
        name: "BX-14",
        image: "/Bit/LF/LF 3 B14.webp"
      },
      {
        id: "Bit-LF-004",
        name: "BX-21",
        image: "/Bit/LF/LF 4 B21.webp"
      },
      {
        id: "Bit-LF-005",
        name: "UX-05",
        image: "/Bit/LF/LF 5 U05.webp"
      },
      {
        id: "Bit-LF-006",
        name: "Game Package",
        image: "/Bit/LF/LF 6 U00.webp"
      },
      {
        id: "Bit-LF-007",
        name: "CX-05",
        image: "/Bit/LF/LF 7 C05.webp"
      },
      {
        id: "Bit-LF-008",
        name: "UX-00",
        image: "/Bit/LF/LF 8 U00.webp"
      },
    ]
  },
  {
    id: "Bit-P-001",
    name: "P (Point)",
    image: "/Bit/P/P 1 B15.webp",
    category: "bit",
    type:"balance",
    price: "BX-15",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-P-002",
        name: "BX-00",
        image: "/Bit/P/P 2 B00.webp"
      },
      {
        id: "Bit-P-003",
        name: "BX-00",
        image: "/Bit/P/P 3 B00.webp"
      },
      {
        id: "Bit-P-004",
        name: "BX-31",
        image: "/Bit/P/P 4 B31.webp"
      },
      {
        id: "Bit-P-005",
        name: "UX-10",
        image: "/Bit/P/P 5 U10.webp"
      },
      {
        id: "Bit-P-006",
        name: "Collab",
        image: "/Bit/P/P 6 Col.webp"
      },
      {
        id: "Bit-P-007",
        name: "Collab",
        image: "/Bit/P/P 7 Col.webp"
      },
      {
        id: "Bit-P-008",
        name: "Collab",
        image: "/Bit/P/P 8 Col.webp"
      },
    ]
  },
  {
    id: "Bit-O-001",
    name: "O (Orb)",
    image: "/Bit/O/O 1 B16.webp",
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
        image: "/Bit/O/O 2 B27.webp"
      },
      {
        id: "Bit-O-003",
        name: "BX-31",
        image: "/Bit/O/O 3 B31.webp"
      },
      {
        id: "Bit-O-004",
        name: "BX-39",
        image: "/Bit/O/O 4 B39.webp"
      },
      {
        id: "Bit-O-005",
        name: "CX-05",
        image: "/Bit/O/O 5 C05.webp"
      },
    ]
  },
  {
    id: "Bit-R-001",
    name: "R (Rush)",
    image: "/Bit/R/R 1 B20.webp",
    category: "bit",
    type:"attack",
    price: "BX-20",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "10",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-R-002",
        name: "BX-35",
        image: "/Bit/R/R 2 B35.webp"
      },
      {
        id: "Bit-R-003",
        name: "UX-10",
        image: "/Bit/R/R 3 U10.webp"
      },
      {
        id: "Bit-R-004",
        name: "BX-46",
        image: "/Bit/R/R 4 B46.webp"
      },
    ]
  },
  {
    id: "Bit-HT-001",
    name: "HT (High Taper)",
    image: "/Bit/HT/HT 1 B21.webp",
    category: "bit",
    type:"balance",
    price: "BX-21",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-HT-002",
        name: "BX-27",
        image: "/Bit/HT/HT 2 B27.webp"
      },
      {
        id: "Bit-HT-003",
        name: "BX-27",
        image: "/Bit/HT/HT 3 B00.webp"
      },
      {
        id: "Bit-HT-004",
        name: "CX-08",
        image: "/Bit/HT/HT 4 C08.webp"
      },
    ]
  },
  {
    id: "Bit-S-001",
    name: "S (Spike)",
    image: "/Bit/S/S 1 B19.webp",
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
        image: "/Bit/S/S 2 B31.webp"
      },
      {
        id: "Bit-S-003",
        name: "UX-07",
        image: "/Bit/S/S 3 U07.webp"
      },
    ]
  },
  {
    id: "Bit-GF-001",
    name: "GF (Gear Flat)",
    image: "/Bit/GF/GF 1 B23.webp",
    category: "bit",
    type:"attack",
    price: "BX-23",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-GF-002",
        name: "UX-07",
        image: "/Bit/GF/GF 2 U07.webp"
      },
      {
        id: "Bit-GF-003",
        name: "BX-00",
        image: "/Bit/GF/GF 3 B00.webp"
      },
      {
        id: "Bit-GF-004",
        name: "BX-00",
        image: "/Bit/GF/GF 4 B00.webp"
      },
      {
        id: "Bit-GF-005",
        name: "CoroCoro Comic",
        image: "/Bit/GF/GF 5 B00.webp"
      },
      {
        id: "Bit-GF-006",
        name: "UX-15",
        image: "/Bit/GF/GF 6 U15.webp"
      },
    ]
  },
  {
    id: "Bit-GB-001",
    name: "GB (Gear Ball)",
    image: "/Bit/GB/GB 1 B24.webp",
    category: "bit",
    type:"stamina",
    price: "BX-24",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-GB-002",
        name: "BX-24",
        image: "/Bit/GB/GB 2 B24.webp"
      },
      {
        id: "Bit-GB-003",
        name: "BX-24",
        image: "/Bit/GB/GB 3 B24.webp"
      },
      {
        id: "Bit-GB-004",
        name: "BX-36",
        image: "/Bit/GB/GB 4 B36.webp"
      },
      {
        id: "Bit-GB-005",
        name: "UX-12",
        image: "/Bit/GB/GB 5 U12.webp"
      },
    ]
  },
  {
    id: "Bit-GP-001",
    name: "GP (Gear Point)",
    image: "/Bit/GP/GP 1 B26.webp",
    category: "bit",
    type:"balance",
    price: "BX-26",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-GP-002",
        name: "UX-05",
        image: "/Bit/GP/GP 2 U05.webp"
      },
      {
        id: "Bit-GP-003",
        name: "BX-00",
        image: "/Bit/GP/GP 3 B00.webp"
      },
      {
        id: "Bit-GP-004",
        name: "BX-39",
        image: "/Bit/GP/GP 4 B39.webp"
      },
    ]
  },
  {
    id: "Bit-GN-001",
    name: "GN (Gear Needle)",
    image: "/Bit/GN/GN 1 B27.webp",
    category: "bit",
    type:"defense",
    price: "BX-27",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-GN-002",
        name: "UX-06",
        image: "/Bit/GN/GN 2 U06.webp"
      },
      {
        id: "Bit-GN-003",
        name: "BX-00",
        image: "/Bit/GN/GN 3 B00.webp"
      },
      {
        id: "Bit-GN-004",
        name: "DMM Lottery",
        image: "/Bit/GN/GN 4 B00.webp"
      },
      {
        id: "Bit-GN-005",
        name: "DMM Lottery",
        image: "/Bit/GN/GN 5 B00.webp"
      },
    ]
  },
  {
    id: "Bit-A-001",
    name: "A (Accel)",
    image: "/Bit/A/A 1 U01.webp",
    category: "bit",
    type:"attack",
    price: "UX-01",
    specs: {
      "Type": "Attack",
      "Weight": "~3 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-A-002",
        name: "UX-04",
        image: "/Bit/A/A 2 U04.webp"
      },
      {
        id: "Bit-A-003",
        name: "Rare Bey Battle",
        image: "/Bit/A/A 3 U00.webp"
      },
      {
        id: "Bit-A-004",
        name: "UX-00",
        image: "/Bit/A/A 4 U00.webp"
      },
      {
        id: "Bit-A-005",
        name: "Park Limited",
        image: "/Bit/A/A 5 LTD.webp"
      },
      {
        id: "Bit-A-006",
        name: "Park Limited",
        image: "/Bit/A/A 6 LTD.webp"
      },
      {
        id: "Bit-A-007",
        name: "Park Limited",
        image: "/Bit/A/A 7 LTD.webp"
      },
      {
        id: "Bit-A-008",
        name: "Park Limited",
        image: "/Bit/A/A 8 LTD.webp"
      },
      {
        id: "Bit-A-009",
        name: "Park Limited",
        image: "/Bit/A/A 9 LTD.webp"
      },
      {
        id: "Bit-A-010",
        name: "Park Limited",
        image: "/Bit/A/A 10 LTD.webp"
      },
      {
        id: "Bit-A-011",
        name: "Game Package",
        image: "/Bit/A/A 11 C00.webp"
      },
      {
        id: "Bit-A-012",
        name: "Collab",
        image: "/Bit/A/A 12 Col.webp"
      },
      {
        id: "Bit-A-013",
        name: "UX-??",
        image: ""
      },
    ]
  },
  {
    id: "Bit-H-001",
    name: "H (Hexa)",
    image: "/Bit/H/H 1 U02.webp",
    category: "bit",
    type:"balance",
    price: "UX-02",
    specs: {
      "Type": "Balance",
      "Weight": "~3 g",
      "Gears": "16",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-H-002",
        name: "BX-35",
        image: "/Bit/H/H 2 B35.webp"
      },
      {
        id: "Bit-H-003",
        name: "UX-00",
        image: "/Bit/H/H 3 U00.webp"
      },
      {
        id: "Bit-H-004",
        name: "UX-12",
        image: "/Bit/H/H 4 U12.webp"
      },
    ]
  },
  {
    id: "Bit-DB-001",
    name: "DB (Disc Ball)",
    image: "/Bit/DB/DB 1 U03.webp",
    category: "bit",
    type:"stamina",
    price: "UX-03",
    specs: {
      "Type": "Stamina",
      "Weight": "~3 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-DB-002",
        name: "UX-04",
        image: "/Bit/DB/DB 2 U04.webp"
      },
      {
        id: "Bit-DB-003",
        name: "G3 Prize",
        image: "/Bit/DB/DB 3 G3P.webp"
      },
      {
        id: "Bit-DB-004",
        name: "BX-00",
        image: "/Bit/DB/DB 4 B00.webp"
      },
      {
        id: "Bit-DB-005",
        name: "CX-06",
        image: "/Bit/DB/DB 5 C06.webp"
      },
      {
        id: "Bit-DB-006",
        name: "UX-00",
        image: "/Bit/DB/DB 6 U00.webp"
      },
    ]
  },
  {
    id: "Bit-Q-001",
    name: "Q (Quake)",
    image: "/Bit/Q/Q 1 B31.webp",
    category: "bit",
    type:"attack",
    price: "BX-31",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-Q-002",
        name: "BX-31",
        image: "/Bit/Q/Q 2 B31.webp"
      },
      {
        id: "Bit-Q-003",
        name: "BX-31",
        image: "/Bit/Q/Q 3 B31.webp"
      },
      {
        id: "Bit-Q-004",
        name: "CoroCoro Comic",
        image: "/Bit/Q/Q 4 B00.webp"
      },
    ]
  },
  {
    id: "Bit-MN-001",
    name: "MN (Metal Needle)",
    image: "/Bit/MN/MN 1 U05.webp",
    category: "bit",
    type:"defense",
    price: "UX-05",
    specs: {
      "Type": "Defense",
      "Weight": "~3 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-MN-002",
        name: "UX-10",
        image: "/Bit/MN/MN 2 U10.webp"
      },
      {
        id: "Bit-MN-003",
        name: "CX-08",
        image: "/Bit/MN/MN 3 C08.webp"
      },
    ]
  },
  {
    id: "Bit-U-001",
    name: "U (Unite)",
    image: "/Bit/U/U 1 B33.webp",
    category: "bit",
    type:"balance",
    price: "BX-33",
    specs: {
      "Type": "Balacne",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-U-002",
        name: "CX-06",
        image: "/Bit/U/U 2 C06.webp"
      },
      {
        id: "Bit-U-003",
        name: "Collab",
        image: "/Bit/U/U 3 Col.webp"
      },
    ]
  },
  {
    id: "Bit-C-001",
    name: "C (Cyclone)",
    image: "/Bit/C/C 1 B34.webp",
    category: "bit",
    type:"attack",
    price: "BX-34",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-C-002",
        name: "BX-00",
        image: "/Bit/C/C 2 B00.webp"
      },
      {
        id: "Bit-C-003",
        name: "UX-12",
        image: "/Bit/C/C 3 U12.webp"
      },
    ]
  },
  {
    id: "Bit-D-001",
    name: "D (Dot)",
    image: "/Bit/D/D 1 B35.webp",
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
        image: "/Bit/D/D 2 B35.webp"
      },
      {
        id: "Bit-D-003",
        name: "BX-35",
        image: "/Bit/D/D 3 B35.webp"
      },
      {
        id: "Bit-D-004",
        name: "BX-00",
        image: "/Bit/D/D 4 B00.webp"
      },
      {
        id: "Bit-D-005",
        name: "BX-39",
        image: "/Bit/D/D 5 B39.webp"
      },
      {
        id: "Bit-D-006",
        name: "CX-05",
        image: "/Bit/D/D 6 C05.webp"
      },
      {
        id: "Bit-D-007",
        name: "CX-05",
        image: "/Bit/D/D 7 B00.webp"
      },
    ]
  },
  {
    id: "Bit-G-001",
    name: "G (Glide)",
    image: "/Bit/G/G 1 U07.webp",
    category: "bit",
    type:"stamina",
    price: "UX-07",
    specs: {
      "Type": "Stamina",
      "Weight": "~2 g",
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
    image: "/Bit/E/E 1 B36.webp",
    category: "bit",
    type:"balance",
    price: "BX-36",
    specs: {
      "Type": "Balance",
      "Weight": "~3 g",
      "Gears": "12",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-E-002",
        name: "Rare Bey Battle",
        image: "/Bit/E/E 2 B00.webp"
      },
      {
        id: "Bit-E-003",
        name: "UX-12",
        image: "/Bit/E/E 3 U12.webp"
      },
    ]
  },
  {
    id: "Bit-FB-001",
    name: "FB (Free Ball)",
    image: "/Bit/FB/FB 1 U08.webp",
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
    image: "/Bit/BS/BS 1 U10.webp",
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
        image: "/Bit/BS/BS 2 B44.webp"
      },
      {
        id: "Bit-BS-003",
        name: "Rare Bey Battle",
        image: "/Bit/BS/BS 3 U00.webp"
      },
    ]
  },
  {
    id: "Bit-RA-001",
    name: "RA (Rubber Accel)",
    image: "/Bit/RA/RA 1 U10.webp",
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
        image: "/Bit/RA/RA 2 25th.webp"
      },
      {
        id: "Bit-RA-003",
        name: "25th Anniversary",
        image: "/Bit/RA/RA 3 25th.webp"
      },
      {
        id: "Bit-RA-004",
        name: "25th Anniversary",
        image: "/Bit/RA/RA 4 25th.webp"
      }
    ]
  },
  {
    id: "Bit-L-001",
    name: "L (Level)",
    image: "/Bit/L/L 1 U09.webp",
    category: "bit",
    type:"attack",
    price: "UX-09",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
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
        image: "/Bit/L/L 3 U15.webp"
      },
    ]
  },
  {
    id: "Bit-TP-001",
    name: "TP (Trans Point)",
    image: "/Bit/TP/TP 1 B38.webp",
    category: "bit",
    type:"balance",
    price: "BX-38",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High",
      "Gimmick": "Height Change"
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
    image: "/Bit/LR/LR 1 U11.webp",
    category: "bit",
    type:"attack",
    price: "UX-11",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
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
    image: "/Bit/UN/UN 1 U13.webp",
    category: "bit",
    type:"defense",
    price: "UX-13",
    specs: {
      "Type": "Defense",
      "Weight": "~2 g",
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
    image: "/Bit/V/V 1 C01.webp",
    category: "bit",
    type:"attack",
    price: "CX-01",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-V-002",
        name: "CX-04",
        image: "/Bit/V/V 2 C04.webp"
      },
      {
        id: "Bit-V-003",
        name: "G1 Prize",
        image: "/Bit/V/V 3 G1P.webp"
      },
      {
        id: "Bit-V-004",
        name: "G1 Prize",
        image: "/Bit/V/V 4 G1P.webp"
      },
      {
        id: "Bit-V-005",
        name: "G1 Prize",
        image: "/Bit/V/V 5 G1P.webp"
      },
      {
        id: "Bit-V-006",
        name: "Rare Bey Battle",
        image: "/Bit/V/V 6 C00.webp"
      },
      {
        id: "Bit-V-007",
        name: "GP Limited",
        image: ""
      },
    ]
  },
  {
    id: "Bit-LO-001",
    name: "LO (Low Orb)",
    image: "/Bit/LO/LO 1 C02.webp",
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
        id: "Bit-LO-002",
        name: "CX-00",
        image: "/Bit/LO/LO 2 C00.webp"
      },
    ]
  },
  {
    id: "Bit-W-001",
    name: "W (Wedge)",
    image: "/Bit/W/W 1 C03.webp",
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
        image: "/Bit/W/W 2 C04.webp"
      },
      {
        id: "Bit-W-003",
        name: "G3 Prize",
        image: "/Bit/W/W 3 G3P.webp"
      },
    ]
  },
  {
    id: "Bit-K-001",
    name: "K (Kick)",
    image: "/Bit/K/K 1 C05.webp",
    category: "bit",
    type:"balance",
    price: "CX-05",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High"
    },
    bey: [
      {
        id: "Bit-K-002",
        name: "CX-05",
        image: "/Bit/K/K 2 C05.webp"
      },
      {
        id: "Bit-K-003",
        name: "CX-05",
        image: "/Bit/K/K 3 C05.webp"
      },
      {
        id: "K-003",
        name: "CoroCoro Comic",
        image: "/Bit/K/K 4 C00.webp"
      },
    ]
  },
  {
    id: "Bit-Z-001",
    name: "Z (Zap)",
    image: "/Bit/Z/Z 1 U14.webp",
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
    image: "/Bit/GR/GR 1 C06.webp",
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
    image: "/Hybird Part/Tr 1 C07.webp",
    category: "bit",
    type:"attack",
    price: "CX-07",
    specs: {
      "Type": "Attack, Hybrid Part",
      "Weight": "~12 g",
      "Gears": "16",
      "Burst Resistance": "Simple"
    },
    bey: [
      {
        id: "Hybrid-Bit-Tr-002",
        name: "CoroCoro Event",
        image: "/Hybird Part/Tr 2 C00.webp"
      },
    ]
  },
  {
    id: "Bit-WB-001",
    name: "WB (Wall Ball)",
    image: "/Bit/WB/WB 1 C08.webp",
    category: "bit",
    type:"stamina",
    price: "CX-08",
    specs: {
      "Type": "Stamina",
      "Weight": "~3 g",
      "Gears": "16",
      "Burst Resistance": "Low"
    },
    bey: [
      {
        id: "Bit-WB-002",
        name: "CX-08",
        image: "/Bit/WB/WB 2 C08.webp"
      },
      {
        id: "Bit-WB-003",
        name: "CX-08",
        image: "/Bit/WB/WB 3 C08.webp"
      },
    ]
  },
  {
    id: "Bit-UF-001",
    name: "UF (Under Flat)",
    image: "/Bit/UF/UF 1 U15.webp",
    category: "bit",
    type:"attack",
    price: "UX-15",
    specs: {
      "Type": "Attack",
      "Weight": "~2 g",
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
    image: "/Bit/M/M 1 B45.webp",
    category: "bit",
    type:"balance",
    price: "BX-45",
    specs: {
      "Type": "Balance",
      "Weight": "~3 g",
      "Gears": "18",
      "Burst Resistance": "High"
    },
    // bey: [
    //   {
    //     id: "Bit-M-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "Bit-TK-001",
    name: "TK (Trans Kick)",
    image: "/Bit/TK/TK 1 C09.webp",
    category: "bit",
    type:"balance",
    price: "CX-09",
    specs: {
      "Type": "Balance",
      "Weight": "~2 g",
      "Gears": "12",
      "Burst Resistance": "High",
      "Gimmick": "Height Change?"
    },
    // bey: [
    //   {
    //     id: "Bit-TK-002",
    //     name: "",
    //     image: ""
    //   },
    // ]
  },

  // RARE BIT
  {
    id: "Rare-Bit-001",
    name: "F/T/B/N (Bit Set)",
    image: "/Bit/Rare Bit 1 B00.webp",
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
    image: "/Other/BX07/Start-Dash-Set-Box.webp",
    category: "other",
    type: "other",
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
        name: "Dran Sword 3-60 Flat (Special Ver.)",
        image: "/Blade/00Persona/DS 2 B07.webp"
      },
      {
        id: "Lun07-001",
        name: "String Launcher (Blue Ver.)",
        image: "/Other/BX07/Beyblade-X-String-Launcher-Blue-Ver.webp"
      },
      {
        id: "Gip07-0001",
        name: "Launcher Grip (Blue Ver.)",
        image: "/Other/BX07/Beyblade-X-Launcher-Grip-Blue-Ver.webp"
      },
      {
        id: "Sta-0001",
        name: "Xtreme Stadium (Clear & Black Ver.)",
        image: "/Other/BX07/Xtreme-Stadium-BX-07.webp"
      },
    ]
  },
  {
    id: "other-002",
    name: "3on3 Deck Set",
    image: "/Other/BX08/B08.webp",
    category: "other",
    type: "other",
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
        image: "/Blade/00Persona/HS 3 B08.webp"
      },
      {
        id: "B8-002",
        name: "Wizard Arrow 4-60 Needle",
        image: "/Blade/00Persona/WA 3 B08.webp"
      },
      {
        id: "B8-003",
        name: "Knight Shield 4-80 Taper",
        image: "/Blade/00Persona/KS 3 B08.webp"
      },
    ]
  },
  {
    id: "other-003",
    name: "Beybattle Pass",
    image: "/Other/BX09/B09.webp",
    category: "other",
    type: "other",
    price: "BX-09",
    features: [
      "Beybattle Pass",
    ],
  },
  {
    id: "other-004",
    name: "Xtreme Stadium",
    image: "/Other/BX10/B10.webp",
    category: "other",
    type: "other",
    price: "BX-10",
    features: [
      "Xtreme Stadium",
    ],
  },
  {
    id: "other-005",
    name: "Launcher Grip",
    image: "/Other/BX11/Grip Black.webp",
    category: "other",
    type: "other",
    price: "BX-11",
    features: [
      "Launcher Grip (Black Ver.)",
    ],
  },
  {
    id: "other-006",
    name: "3on3 Deck Case",
    image: "/Other/BX12/3o3.webp",
    category: "other",
    type: "other",
    price: "BX-12",
    features: [
      "3on3 Deck Case",
    ],
  },
  {
    id: "other-007",
    name: "Battle Entry Set",
    image: "/Other/BX17/B17.webp",
    category: "other",
    type: "other",
    price: "BX-17",
    features: [
      "Dran Sword 3-60 F (Red Ver.)",
      "Wizard Arrow 4-80 B (Blue Ver.)",
      "Winder Launcher (Red Ver.)",
      "Winder Launcher (Blue Ver.)",
      "Xtreme Stadium (Black Ver.)",
    ],
    pro: [
      {
        id: "B17-001",
        name: "Dran Sword 3-60 Flat (Red Ver.)",
        image: "/Blade/00Persona/DS 4 B17.webp"
      },
      {
        id: "B17-002",
        name: "Wizard Arrow 4-80 Ball (Blue Ver.)",
        image: "/Blade/00Persona/WA 5 B17.webp"
      },
      {
        id: "B17-003",
        name: "Winder Launcher (Red Ver.)",
        image: "/Other/BX17/Luncher Red-Black.webp"
      },
      {
        id: "B17-004",
        name: "Winder Launcher (Blue Ver.)",
        image: "/Other/BX17/Luncher Blue-Black.webp"
      },
      {
        id: "B17-005",
        name: "Xtreme Stadium (Black Ver.)",
        image: "/Other/BX17/Stadium Black Green.webp"
      },
    ]
  },
  {
    id: "other-008",
    name: "String Launcher",
    image: "/Other/BX18/String Black.webp",
    category: "other",
    type: "other",
    price: "BX-18",
    features: [
      "String Launcher",
    ],
  },
  {
    id: "other-009",
    name: "Gear Case",
    image: "/Other/BX25/Case Black.webp",
    category: "other",
    type: "other",
    price: "BX-25",
    features: [
      "Gear Case",
    ],
  },
  {
    id: "other-010",
    name: "String Launcher (White Ver.)",
    image: "/Other/BX28/String White.webp",
    category: "other",
    type: "other",
    price: "BX-28",
    features: [
      "String Launcher (White Ver.)",
    ],
  },
  {
    id: "other-011",
    name: "Custom Grip (White Ver.)",
    image: "/Other/BX29/Grip White.webp",
    category: "other",
    type: "other",
    price: "BX-29",
    features: [
      "Custom Grip (White Ver.)",
    ],
  },
  {
    id: "other-012",
    name: "Custom Grip (Red Ver.)",
    image: "/Other/BX30/Grip Red.webp",
    category: "other",
    type: "other",
    price: "BX-30",
    features: [
      "Custom Grip (Red Ver.)",
    ],
  },
  {
    id: "other-013",
    name: "Wide Xtreme Stadium",
    image: "/Other/BX32/Wide-Xtreme-Stadium.webp",
    category: "other",
    type: "other",
    price: "BX-32",
    features: [
      "Wide Xtreme Stadium",
    ],
  },
  {
    id: "other-014",
    name: "Battle Entry Set U",
    image: "/Other/UX04/U04.webp",
    category: "other",
    type: "other",
    price: "UX-04",
    features: [
      "Dran Buster 1-60 Accel (Special Ver.)",
      "Wizard Rod 5-70 Disc Ball (Special Ver.)",
      "Winder Launcher (White & Black Ver.)",
      "Winder Launcher (Black & Yellow Ver.)",
      "Xtreme Stadium (Special Ver.)",
    ],
    pro: [
      {
        id: "U4-001",
        name: "Dran Buster 1-60 A (Special Ver.)",
        image: "/Blade/00Persona/DB 2 U04.webp"
      },
      {
        id: "U4-002",
        name: "Wizard Rod 5-70 DB (Special Ver.)",
        image: "/Blade/00Persona/WR 2 U04.webp"
      },
      {
        id: "U4-003",
        name: "Winder Launcher (White & Black Ver.)",
        image: "/Other/UX04/Luncher White-Black.webp"
      },
      {
        id: "U4-004",
        name: "Winder Launcher (Black & Yellow Ver.)",
        image: "/Other/UX04/Luncher Black-Yellow.webp"
      },
      {
        id: "U4-005",
        name: "Xtreme Stadium (Special Ver.)",
        image: "/Other/UX04/Stadium White Yellow.webp"
      },
    ]
  },
  {
    id: "other-015",
    name: "Double Xtreme Stadium Set",
    image: "/Other/BX37/B37.webp",
    category: "other",
    type: "other",
    price: "BX-37",
    features: [
      "Double Xtreme Stadium Set",
      "Bear Scratch 5-60 Flat",
      "Winder Launcher (Black×Gold Ver.)",
    ],
    pro: [
      {
        id: "B32-001",
        name: "Bear Scratch 5-60 Flat",
        image: "/Blade/00SubCharacter/BSc 1 B37.webp"
      },
      {
        id: "B17-002",
        name: "Double Xtreme Stadium",
        image: "/Other/BX37/DX Stadium.webp"
      },
      {
        id: "B17-003",
        name: "Winder Launcher (Black×Gold Ver.)",
        image: "/Other/BX37/Luncher Black-Gold.webp"
      },
    ]
  },
  {
    id: "other-016",
    name: "Custom Grip (Black & Green Clear Ver.)",
    image: "/Other/BX00/Grip Black Green.webp",
    category: "other",
    type: "other",
    price: "BX-00",
    features: [
      "Custom Grip (Black & Green Clear Ver.)",
    ],
  },
  {
    id: "other-017",
    name: "Battle Entry Set C",
    image: "/Other/CX04/C04.webp",
    category: "other",
    type: "other",
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
        name: "Dran Brave S 6-60 V (Special Ver.)",
        image: "/Blade/00Persona/DBS 2 C04.webp"
      },
      {
        id: "C4-002",
        name: "Perseus Dark B 6-80 W (Special Ver.)",
        image: "/Blade/00Zodiac - Fox/PDB 2 C04.webp"
      },
      {
        id: "C4-003",
        name: "Winder Launcher (Black & Magenta Ver.)",
        image: "/Other/CX04/Luncher Black-Pink.webp"
      },
      {
        id: "C4-004",
        name: "Winder Launcher (White & Blue Ver.)",
        image: "/Other/CX04/Luncher White-Blue.webp"
      },
      {
        id: "C4-005",
        name: "Xtreme Stadium (Special Ver.)",
        image: "/Other/CX04/Stadium Clear Pink.webp"
      },
    ]
  },
  {
    id: "other-018",
    name: "Winder Launcher L",
    image: "/Other/BX40/L Winder.webp",
    category: "other",
    type: "other",
    price: "BX-40",
    features: [
      "Winder Launcher L",
    ],
  },
  {
    id: "other-019",
    name: "Rubber Custom Grip (Gunmetal Ver.)",
    image: "/Other/BX41/Grip Gunmetal.webp",
    category: "other",
    type: "other",
    price: "BX-41",
    features: [
      "Rubber Custom Grip (Gunmetal Ver.)",
    ],
  },
  {
    id: "other-020",
    name: "Rubber Custom Grip (Blue Ver.)",
    image: "/Other/BX42/Grip Blue.webp",
    category: "other",
    type: "other",
    price: "BX-42",
    features: [
      "Rubber Custom Grip (Blue Ver.)",
    ],
  },
  {
    id: "other-021",
    name: "Gear Case (White Ver.)",
    image: "/Other/BX43/Case White.webp",
    category: "other",
    type: "other",
    price: "BX-43",
    features: [
      "Gear Case (White Ver.)",
    ],
  },
  {
    id: "other-022",
    name: "Battle Entry Set ∞",
    image: "/Other/BX46/BX46 IXS.jpg",
    category: "other",
    type: "other",
    price: "BX-46",
    features: [
      "Infinity Xtreme Stadium",
      "Cobalt Drake (Metal Coat Red) 9-60 Rush",
      "Goat Tackle 7-70 Taper",
      "Winder Launcher (Red & White Ver.)",
      "Winder Launcher (Black & Green Ver.)",
    ],
    pro: [
      {
        id: "C4-001",
        name: "Cobalt Drake (MC Red) 9-60 Rush",
        image: "/Blade/00Pendragon-Goldius/CDk 3 B46.webp"
      },
      {
        id: "C4-002",
        name: "Goat Tackle 7-70 Taper",
        image: "/Blade/00SubCharacter/GTk 1 B46.webp"
      },
      {
        id: "C4-003",
        name: "Winder Launcher (Red & White Ver.)",
        image: "/Other/BX46/Luancher-Red-White-Ver.webp"
      },
      {
        id: "C4-004",
        name: "Winder Launcher (Black & Green Ver.)",
        image: "/Other/BX46/Luancher-Black-Green-Ver.webp"
      },
      {
        id: "C4-005",
        name: "Infinity Xtreme Stadium",
        image: "/Other/BX46/Infinity Stadium.webp"
      },
    ]
  },
  {
    id: "other-023",
    name: "String Luncher L (Red Ver.)",
    image: "/Other/BX47/String L Red.webp",
    category: "other",
    type: "other",
    price: "BX-47",
    features: [
      "String Luncher Left (Red Ver.)",
    ],
  },
  {
    id: "other-024",
    name: "String Luncher (Violet Ver.)",
    image: "/Other/BX00/String Purple.webp",
    category: "other",
    type: "other",
    price: "BX-00 (DMM Lottey)",
    features: [
      "String Luncher (Violet Ver.)",
    ],
  },

  //X-OVER Bakuten Shoot Beyblade
  {
    id: "Blade-X-OBS-001",
    name: "Dranzer Spiral",
    image: "/Blade/X-Collab/DSL-1.webp",
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
        image: "/Blade/X-Collab/DSL-2.webp"
      },
    ]
  },
  {
    id: "Blade-X-OBS-002",
    name: "Driger Slash",
    image: "/Blade/X-Collab/DSH-1.webp",
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
    image: "/Blade/X-Collab/DSD-1.webp",
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
    image: "/Blade/X-Collab/DST-1.webp",
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
    name: "Lightning L-Drago",
    image: "/Blade/X-Collab/LLD-1 Upper.webp",
    category: "x-over",
    type: ["attack"],
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Left",
      "Weight": "~34 g",
      "Stock Combo": "1-60 Flat",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
      "Gimmick": "Same name difference mode (Upper/Rapid)",
    },
    randomVariants: [
      {
        name: "Lightning L-Drago (Upper)",
        image: "/Blade/X-Collab/LLD-1 Upper.webp",
        type: ["attack"]
      },
      {
        name: "Lightning L-Drago (Rapid)",
        image: "/Blade/X-Collab/LLD-1 Rapid.webp",
        type: ["attack"]
      }
    ]
  },
  {
    id: "Blade-X-OMF-003",
    name: "Storm Pegasis",
    image: "/Blade/X-Collab/SPS-1.webp",
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
    image: "/Blade/X-Collab/RLN-1.webp",
    category: "x-over",
    type: "defense",
    price: "BX-00",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~29 g",
      "Stock Combo": "6-80 Gear Needle",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
  },

  //X-OVER Beyblade Burst
  {
    id: "Blade-X-OBB-001",
    name: "Victory Valkyrie",
    image: "/Blade/X-Collab/VVV-1.webp",
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
    image: "/Blade/X-Collab/XXX-1.webp",
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
    image: "/Blade/X-Collab/Star1.webp",
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
    image: "/Blade/X-Collab/Star2.webp",
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
    image: "/Blade/X-Collab/Star3.webp",
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
    image: "/Blade/X-Collab/Star4.webp",
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
    image: "/Blade/X-Collab/Trans1.webp",
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
    image: "/Blade/X-Collab/Trans2.webp",
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
    image: "/Blade/X-Collab/Trans3.webp",
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
    image: "/Blade/X-Collab/Trans4.webp",
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
    image: "/Blade/X-Collab/Marvel1.webp",
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
    image: "/Blade/X-Collab/Marvel2.webp",
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
    image: "/Blade/X-Collab/Marvel3.webp",
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
    image: "/Blade/X-Collab/Marvel4.webp",
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
    image: "/Blade/X-Collab/Jura-1.webp",
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
      "Description": "This Blade is also count as Tyranno Beat.",
    },
  },
  {
    id: "Blade-X-CLB-014",
    name: "Mosasaurus",
    image: "/Blade/X-Collab/Jura-2.webp",
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
    image: "/Blade/X-Collab/Jura-3.webp",
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
      "Description": "This Blade is also count as Tyranno Roar.",
    },
  },
  {
    id: "Blade-X-CLB-016",
    name: "Quetzalcoatlus",
    image: "/Blade/X-Collab/Jura-4.webp",
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
      "Description": "This Blade is also count as Ptera Swing.",
    },
  },

  //troll credits
  {
    id: "CD001",
    name: "Credits? Why you want to know that???",
    image: "https://i.ibb.co/0pcrGh1N/Credit.webp",
    category: "credits",
    type: "credits",
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

// Helper functions to get products (deterministic; do not perform randomization here)

export function getProducts(category?: Product['category']): Product[] {
  return category ? products.filter(product => product.category === category) : products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
