import type { Product } from "./types"

// Mock data for our cyber-themed library products
export const products: Product[] = [
  // BLADES
  {
    id: "blade-001",
    name: "Dran Sword",
    image: "https://i.ibb.co/V039c69d/1-DS-1.webp",
    category: "blade",
    type:"attack",
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
        id: "DS-001",
        name: "BX-07",
        image: "https://i.ibb.co/Fkdd5MxY/1-DS-07.webp"
      },
      {
        id: "DS-002",
        name: "BX-14",
        image: "https://i.ibb.co/9mKYmtjN/1-DS-14.webp"
      },
      {
        id: "DS-003",
        name: "BX-17",
        image: "https://i.ibb.co/Y4fQhv0w/1-DS-17.webp"
      },
      {
        id: "DS-0001",
        name: "BX-00",
        image: "https://i.ibb.co/dwZgVHzD/1-DS-zz.webp"
      },
      {
        id: "DS-0002",
        name: "UX-00",
        image: "https://i.ibb.co/9HYsbxFW/DS-zzz.webp"
      }
    ],
  },
  {
    id: "blade-002",
    name: "Hells Scythe",
    image: "https://i.ibb.co/84Ycf6Dg/2-HS-1.webp",
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
        id: "HS-001",
        name: "BX-08",
        image: "https://i.ibb.co/jkfwRDHh/2-HS-08.webp"
      },
      {
        id: "HS-002",
        name: "BX-14",
        image: "https://i.ibb.co/5gqmCqw1/2-HS-14.webp"
      },
      {
        id: "HS-0001",
        name: "BX-00",
        image: "https://i.ibb.co/fVLbW10W/HC-z.webp"
      },
      {
        id: "HS-0002",
        name: "BX-00",
        image: "https://i.ibb.co/prXssDzt/HS-zz.webp"
      },
    ]
  },
  {
    id: "blade-003",
    name: "Wizard Arrow",
    image: "https://i.ibb.co/Tqrz34Jq/3-WA-1.webp",
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
        id: "WA-001",
        name: "BX-05",
        image: "https://i.ibb.co/jZqxtV71/3-WA-05.webp"
      },
      {
        id: "WA-002",
        name: "BX-08",
        image: "https://i.ibb.co/xtTKsL9M/3-WA-08.webp"
      },
      {
        id: "WA-003",
        name: "BX-14",
        image: "https://i.ibb.co/WpDg7vPP/3-WA-14.webp"
      },
      {
        id: "WA-004",
        name: "BX-17",
        image: "https://i.ibb.co/GfV55FNc/3-WA-17.webp"
      },
      {
        id: "WA-005",
        name: "BX-21",
        image: "https://i.ibb.co/qYvktQVz/3-WA-21.webp"
      },
      {
        id: "WA-006",
        name: "BX-24",
        image: "https://i.ibb.co/Z6pkLZmq/3-WA-24.webp"
      },
    ]
  },
  {
    id: "blade-004",
    name: "Knight Shield",
    image: "https://i.ibb.co/2rLXNq7/4-KS-1.webp",
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
        id: "KS-001",
        name: "BX-06",
        image: "https://i.ibb.co/dxMdhR6/4-KS-06.webp"
      },
      {
        id: "KS-002",
        name: "BX-08",
        image: "https://i.ibb.co/4nV7W119/4-ks-08.webp"
      },
      {
        id: "KS-003",
        name: "BX-14",
        image: "https://i.ibb.co/pv8Tm0QY/4-KS-14.webp"
      },
      {
        id: "KS-004",
        name: "BX-20",
        image: "https://i.ibb.co/bgLRNNwG/4-KS-20.webp"
      },
      {
        id: "KS-0001",
        name: "G3 Prize",
        image: "https://i.ibb.co/dwwtRMyH/D3-B365-D0-C0-A7-4017-B3-CB-56-DB70-DBD645-Photoroom.png"
      },
    ]
  },
  {
    id: "blade-005",
    name: "Knight Lance",
    image: "https://i.ibb.co/0VngNWrL/KL-1.webp",
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
        id: "KL-001",
        name: "BX-21",
        image: "https://i.ibb.co/pjCZ3D0m/KL-21.webp"
      },
      {
        id: "KL-002",
        name: "BX-24",
        image: "https://i.ibb.co/B5XNrQ1F/KL-24.webp"
      },
    ]
  },
  {
    id: "blade-006",
    name: "Shark Edge",
    image: "https://i.ibb.co/HprcywWn/SE-1.webp",
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
        id: "SE-001",
        name: "BX-14",
        image: "https://i.ibb.co/tMx6D7TK/SE-14.webp"
      },
      {
        id: "SE-002",
        name: "BX-20",
        image: "https://i.ibb.co/CpdYTj4k/SE-20.webp"
      },
      {
        id: "SE-003",
        name: "BX-31",
        image: "https://i.ibb.co/KpnLX0tv/SE-31.webp"
      },
      {
        id: "SE-000",
        name: "BX-00",
        image: "https://i.ibb.co/Fb9MF1jp/SE-00.webp"
      },
    ]
  },
  {
    id: "blade-007",
    name: "Leon Claw",
    image: "https://i.ibb.co/Z1wzg0g4/LC-1.webp",
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
        id: "LC-001",
        name: "BX-24",
        image: "https://i.ibb.co/Jf7hf9t/LC-24.webp"
      },
      {
        id: "LC-002",
        name: "UX-12",
        image: "https://i.ibb.co/WpFDFVSF/LC-12-u.webp"
      },
      {
        id: "LC-0001",
        name: "BX-00",
        image: "https://i.ibb.co/FLdK4gxw/LC-zz.webp"
      },
    ]
  },
  {
    id: "blade-008",
    name: "Viper Tail",
    image: "https://i.ibb.co/GQLDqhTQ/VT-1.webp",
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
        id: "VT-001",
        name: "BX-16",
        image: "https://i.ibb.co/5WVvcLj8/VT-16-1.webp"
      },
      {
        id: "VT-002",
        name: "BX-16",
        image: "https://i.ibb.co/v4d0JKt2/VT-16-2.webp"
      },
      {
        id: "VT-003",
        name: "BX-24",
        image: "https://i.ibb.co/3bCdkTn/VT-24.webp"
      },
      {
        id: "VT-004",
        name: "BX-35",
        image: "https://i.ibb.co/TBvmf3gb/VT-35.webp"
      },
    ]
  },
  {
    id: "blade-009",
    name: "Rhino Horn",
    image: "https://i.ibb.co/sd595ZMt/RH-1.webp",
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
        id: "RH-001",
        name: "BX-31",
        image: "https://i.ibb.co/gNKQ63M/RH-31.webp"
      },
    ]
  },
  {
    id: "blade-010",
    name: "Dran Dagger",
    image: "https://i.ibb.co/6JntR43R/DD-1.webp",
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
        id: "DD-001",
        name: "BX-31",
        image: "https://i.ibb.co/Wv3wmLNM/DD-31.webp"
      },
      {
        id: "DD-0001",
        name: "UX-00",
        image: "https://i.ibb.co/v6Nzm88Q/DD-zz.webp"
      },
      {
        id: "DD-0002",
        name: "BX-00",
        image: "https://i.ibb.co/cXxDncy8/DD-zzz.webp"
      },
    ]
  },
  {
    id: "blade-011",
    name: "Hells Chain",
    image: "https://i.ibb.co/7xcKZhXb/HC-1.webp",
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
        id: "HC-001",
        name: "BX-31",
        image: "https://i.ibb.co/XZdb9ygB/HC31.webp"
      },
      {
        id: "HC-0001",
        name: "BX-00",
        image: "https://i.ibb.co/PZQjCffM/HC-zz.webp"
      },
    ]
  },
  {
    id: "blade-012",
    name: "Phoenix Wing",
    image: "https://i.ibb.co/LdT8Bq9j/PW-1.webp",
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
        id: "PW-001",
        name: "BX-35",
        image: "https://i.ibb.co/mFHM2f5j/PW-35.webp"
      },
      {
        id: "PW-0001",
        name: "BX-00",
        image: "https://i.ibb.co/TqM9Qw42/PW-zz.png"
      },
      {
        id: "PW-0002",
        name: "BX-00",
        image: "https://i.ibb.co/Xf0JSjYX/PW-zzz.png"
      },
    ]
  },
  {
    id: "blade-013",
    name: "Wyvern Gale",
    image: "https://i.ibb.co/WvHRHYP7/WG-1.webp",
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
        id: "WG-001",
        name: "BX-24",
        image: "https://i.ibb.co/zhXbk09h/WG-24.webp"
      },
      {
        id: "WG-002",
        name: "UX-07",
        image: "https://i.ibb.co/7x4jgpQG/WG-7-u.webp"
      },
      {
        id: "WG-003",
        name: "UX-12",
        image: "https://i.ibb.co/35NQhrNJ/WG-12-u.png"
      },
    ]
  },
  {
    id: "blade-014",
    name: "Unicorn Sting",
    image: "https://i.ibb.co/Cppmvdrm/US-1.webp",
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
        id: "US-001",
        name: "BX-35",
        image: "https://i.ibb.co/G4wJjtdc/US-35.webp"
      },
    ]
  },
  {
    id: "blade-015",
    name: "Sphinx Cowl",
    image: "https://i.ibb.co/B2yRDBXx/PC-1.webp",
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
        id: "PC-001",
        name: "BX-27",
        image: "https://i.ibb.co/ppqQ64x/PC-27-1.webp"
      },
      {
        id: "PC-002",
        name: "BX-27",
        image: "https://i.ibb.co/992hXhWY/PC-27-2.webp"
      },
      {
        id: "PC-003",
        name: "UX-07",
        image: "https://i.ibb.co/6JWY8XHk/PC-07-u.webp"
      },
    ]
  },
  {
    id: "blade-016",
    name: "Dran Buster",
    image: "https://i.ibb.co/TMB6k6HP/DB-1.webp",
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
        id: "DB-001",
        name: "UX-04",
        image: "https://i.ibb.co/MkggbxSx/DB-04-u.webp"
      },
      {
        id: "DB-0001",
        name: "UX-00",
        image: "https://i.ibb.co/mrnVpspr/DB-z.webp"
      },
      {
        id: "DB-0002",
        name: "UX-00",
        image: "https://i.ibb.co/yFTRQHyT/DB-zz.webp"
      },
      {
        id: "DB-0003",
        name: "UX-00",
        image: "https://i.ibb.co/ZRcyhgyQ/DB-zzz.webp"
      },
    ]
  },
  {
    id: "blade-017",
    name: "Hells Hammer",
    image: "https://i.ibb.co/ch8XJLxd/HH-1.webp",
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
        id: "HH-001",
        name: "UX-10",
        image: "https://i.ibb.co/4w5mB7K7/HH-10-u.webp"
      },
    ]
  },
  {
    id: "blade-018",
    name: "Wizard Rod",
    image: "https://i.ibb.co/23NBMXh2/WR-1.webp",
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
        id: "WR-001",
        name: "UX-04",
        image: "https://i.ibb.co/606W65x8/WR-4-u.webp"
      },
      {
        id: "WR-002",
        name: "BX-35",
        image: "https://i.ibb.co/G39CDJyF/WR-35.webp"
      },
      {
        id: "WR-0001",
        name: "G3 Prize",
        image: "https://i.ibb.co/Gv3R62WZ/WR-z.webp"
      },
    ]
  },
  {
    id: "blade-019",
    name: "Tyranno Beat",
    image: "https://i.ibb.co/b9s1FkT/TB-1.webp",
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
        id: "TB-001",
        name: "BX-31",
        image: "https://i.ibb.co/ns4gsVyC/TB-31.webp"
      },
      {
        id: "TB-002",
        name: "UX-10",
        image: "https://i.ibb.co/4ZM68V04/TB-10-u.webp"
      },
    ]
  },
  {
    id: "blade-020",
    name: "Shinobi Shadow",
    image: "https://i.ibb.co/gMgh7Yw8/SS-1.webp",
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
        id: "SS-001",
        name: "UX-05",
        image: "https://i.ibb.co/NgCj5pKS/SS-5-u1.webp"
      },
      {
        id: "SS-002",
        name: "UX-05",
        image: "https://i.ibb.co/zVztHb0n/SS-5-u2.webp"
      },
      {
        id: "SS-003",
        name: "UX-12",
        image: "https://i.ibb.co/LDK7XDQ4/SS-12-u.webp"
      },
    ]
  },
  {
    id: "blade-021",
    name: "Weiss Tiger",
    image: "https://i.ibb.co/M5ZggzDx/media.png",
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
    //     id: "SS-001",
    //     name: "UX-05",
    //     image: "https://i.ibb.co/NgCj5pKS/SS-5-u1.webp"
    //   },
    // ]
  },
  {
    id: "blade-022",
    name: "Cobalt Dragoon",
    image: "https://i.ibb.co/v4tnhcHD/CD-1.webp",
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
        id: "SS-0001",
        name: "BX-00",
        image: "https://i.ibb.co/rRjGqVpv/CD-z.webp"
      },
    ]
  },
  {
    id: "blade-023",
    name: "Black Shell",
    image: "https://i.ibb.co/fdkhGKy9/BS-1.png",
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
        id: "SS-001",
        name: "BX-35",
        image: "https://i.ibb.co/tp7dXdN4/BS-35.png"
      },
    ]
  },
  {
    id: "blade-024",
    name: "Leon Crest",
    image: "https://i.ibb.co/Yq8hdT7/media.png",
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
        id: "LCr-001",
        name: "CX-05",
        image: "https://i.ibb.co/3yN6qJLW/LC-5-c.webp"
      },
    ]
  },
  {
    id: "blade-025",
    name: "Phoenix Rudder",
    image: "https://i.ibb.co/N6hdR5VJ/PR-1.webp",
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
        id: "SS-001",
        name: "CX-05",
        image: "https://i.ibb.co/s93SHXbp/PR-5-c.webp"
      },
    ]
  },
  {
    id: "blade-026",
    name: "Whale Wave",
    image: "https://i.ibb.co/tM8fYvcS/WW-1.webp",
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
        id: "SS-001",
        name: "BX-36",
        image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
      },
      {
        id: "SS-002",
        name: "BX-36",
        image: "https://i.ibb.co/tk5hsSw/WW-36-1.webp"
      },
      {
        id: "SS-003",
        name: "CX-05",
        image: "https://i.ibb.co/NdDLMxvR/WW-5-c.webp"
      },
    ]
  },
  {
    id: "blade-027",
    name: "Bear Scratch",
    image: "https://i.ibb.co/fmvksfJ/BS-1.png",
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
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-028",
    name: "Silver Wolf",
    image: "https://i.ibb.co/23SHSRbd/SW-1.webp",
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
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-029",
    name: "Samurai Saber",
    image: "https://i.ibb.co/9HyRVc5X/SaS-1.webp",
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
        id: "SS-001",
        name: "UX-00",
        image: "https://i.ibb.co/TqbZhBVT/itggboz9ofne1-Photoroom.png"
      },
    ]
  },
  {
    id: "blade-030",
    name: "Knight Mail",
    image: "https://i.ibb.co/6cJYNhZH/KM-1.webp",
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
    // bey: [
    //   {
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-031",
    name: "Ptera Swing",
    image: "https://i.ibb.co/CKHCPyk5/PS-1.webp",
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
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-032",
    name: "Crimson Garuda",
    image: "https://i.ibb.co/TMZD736k/CG-1.webp",
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
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-033",
    name: "Impact Drake",
    image: "https://i.ibb.co/tT2GHnBW/ID-1.png",
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
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-034",
    name: "Ghost Circle",
    image: "https://i.ibb.co/MzCyP0C/GC-1.png",
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
        id: "GC-001",
        name: "UX-12",
        image: "https://i.ibb.co/Z61hpcgT/GC-12-u.png"
      },
    ]
  },
  {
    id: "blade-035",
    name: "Golem Rock",
    image: "https://i.ibb.co/03WW4cw/GR-1.webp",
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
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-036",
    name: "Shleter Drake",
    image: "https://i.ibb.co/BHjdn4rh/latest-41101-Photoroom.webp",
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
        id: "SD-001",
        name: "BX-39",
        image: "https://i.ibb.co/B5y70nNv/SD-39-1.png"
      },
      {
        id: "SD-001",
        name: "BX-39",
        image: "https://i.ibb.co/S7RCqT0K/SD-39-2.png"
      },
    ]
  },
  {
    id: "blade-037",
    name: "Dran Brave S",
    image: "https://i.ibb.co/wVzVsM8/DBS-1.webp",
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
    bey: [
      {
        id: "DBS-001",
        name: "CX-04",
        image: "https://i.ibb.co/8gzdrSXx/DBS-4-c.webp"
      },
    ]
  },
  {
    id: "blade-038",
    name: "Wizard Arc R",
    image: "https://i.ibb.co/7Jxb2bbS/WAR-1.webp",
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
    // bey: [
    //   {
    //     id: "SS-001",
    //     name: "BX-36",
    //     image: "https://i.ibb.co/jk69tQ85/WW-36-2.webp"
    //   },
    // ]
  },
  {
    id: "blade-039",
    name: "Perseus Dark B",
    image: "https://i.ibb.co/sJwT5YbW/PDB-1.webp",
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
    bey: [
      {
        id: "DBS-001",
        name: "CX-04",
        image: "https://i.ibb.co/B2XwZhLj/PDB-4-c.webp"
      },
      {
        id: "DBS-0001",
        name: "G3 Prize",
        image: "https://i.ibb.co/v4Rq8jqw/PDB-3.png"
      },
    ]
  },
  {
    id: "blade-040",
    name: "Hells Reaper T",
    image: "https://i.ibb.co/XZd94Nrb/HR-1.webp",
    category: "blade",
    type:"balance",
    price: "CX-05",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~? g",
      "Stock Combo": "4-70 Kick",
      "Assist Blade": "Turn",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "DBS-001",
        name: "CX-05 (Hells Arc T)",
        image: "https://i.ibb.co/wFvzNHLw/HA-5-c.webp"
      },
    ]
  },
  {
    id: "blade-041",
    name: "Rhino Reaper C",
    image: "https://i.ibb.co/zVHV9KMF/RR-1.webp",
    category: "blade",
    type:"defense",
    price: "CX-05",
    specs: {
      "Type": "Defense",
      "Spin": "Right",
      "Weight": "~? g",
      "Stock Combo": "4-55 Dot",
      "Assist Blade": "Charge",
      "Product Line": "CX",
    },
    // bey: [
    //   {
    //     id: "DBS-001",
    //     name: "CX-05",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "blade-042",
    name: "Scorpio Spear",
    image: "https://i.ibb.co/1fMqT8g5/SSp-1.png",
    category: "blade",
    type:"balance",
    price: "UX-14",
    specs: {
      "Type": "Balance",
      "Spin": "Right",
      "Weight": "~? g",
      "Stock Combo": "0-70 Zap",
      "Product Line": "UX",
    },
    // bey: [
    //   {
    //     id: "DBS-001",
    //     name: "CX-05",
    //     image: ""
    //   },
    // ]
  },
  {
    id: "blade-043",
    name: "Fox Brush J",
    image: "https://i.ibb.co/LDHdzXVt/FB-01.png",
    category: "blade",
    type:"attack",
    price: "CX-06",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~? g",
      "Stock Combo": "9-70 Gear Rush",
      "Assist Blade": "Jaggy",
      "Product Line": "CX",
    },
    bey: [
      {
        id: "FBJ-001",
        name: "CX-06",
        image: "https://i.ibb.co/N6QSyByy/FB-02.png"
      },
      {
        id: "FBJ-002",
        name: "CX-06",
        image: "https://i.ibb.co/zVm8tq61/FB-03.png"
      },
    ]
  },

  //RARE BLADE
  {
    id: "blade-R001",
    name: "Coblat Drake",
    image: "https://i.ibb.co/jvWK5Hg7/CDr-1.webp",
    category: "blade",
    type:"attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~38 g",
      "Stock Combo": "4-60 Flat",
      "Product Line": "BX",
    },
    bey: [
      {
        id: "CDr-001",
        name: "BX-00",
        image: "https://i.ibb.co/wFCZGcRP/CDr-2.webp"
      },
    ]
  },
  {
    id: "blade-R002",
    name: "Phoenix Feather",
    image: "https://i.ibb.co/DfsGJmbg/ibnyvistf2vgtapdbdp8.webp",
    category: "blade",
    type:"attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "3-60 Flat",
      "Product Line": "BX",
    },
    bey: [
      {
        id: "PF-001",
        name: "UX-12",
        image: "https://i.ibb.co/ZQbJ786/PF-12-u.webp"
      },
      {
        id: "PF-002",
        name: "BX-00",
        image: "https://i.ibb.co/M5RDnJg7/jaqz1iwsmqsamgenxevg.webp"
      },
    ]
  },
  {
    id: "blade-R003",
    name: "Aero Pegasus",
    image: "https://i.ibb.co/NnKtn3H9/media.webp",
    category: "blade",
    type:"attack",
    price: "UX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~38 g",
      "Stock Combo": "3-70 Accel",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "PF-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/ZQbJ786/PF-12-u.webp"
    //   },
    // ]
  },
  {
    id: "blade-R004",
    name: "Shinobi Knife",
    image: "https://i.ibb.co/DDP0GMys/SK-1.webp",
    category: "blade",
    type:"attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "4-60 Low Flat",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "PF-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/ZQbJ786/PF-12-u.webp"
    //   },
    // ]
  },
  {
    id: "blade-R005",
    name: "Mammoth Tusk",
    image: "https://i.ibb.co/WNBC3bSK/MT-1.webp",
    category: "blade",
    type:"balance",
    price: "BX-00",
    specs: {
      "Type": "Balacne",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "2-80 Elevate",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "PF-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/ZQbJ786/PF-12-u.webp"
    //   },
    // ]
  },
  {
    id: "blade-R006",
    name: "Croc Crunch",
    image: "https://i.ibb.co/k2RJsZdK/CC-1.webp",
    category: "blade",
    type:"attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~33 g",
      "Stock Combo": "2-60 Quake",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "PF-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/ZQbJ786/PF-12-u.webp"
    //   },
    // ]
  },
  {
    id: "blade-R007",
    name: "Samurai Steel",
    image: "https://i.ibb.co/356zg5NW/Samurai-Steel-5-70-GF-Photoroom.png",
    category: "blade",
    type:"attack",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Right",
      "Weight": "~30 g",
      "Stock Combo": "5-70 Gear Flat",
      "Product Line": "BX",
    },
    // bey: [
    //   {
    //     id: "PF-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/ZQbJ786/PF-12-u.webp"
    //   },
    // ]
  },

  

  // RATCHETS
  {
    id: "ratchet-070",
    name: "0-70 (UX-14)",
    image: "https://i.ibb.co/Nd0n4gGS/0-70-1.png",
    category: "ratchet",
    price: "0-70",
    features: [
      "0 Contact Points",
      "High : 7.0 mm",
      "Weight: ~7 g",
    ],
    // bey: [
    //   {
    //     id: "080-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/GfbS7kcB/0-80-2.png"
    //   },
    // ]
  },
  {
    id: "ratchet-080",
    name: "0-80 (UX-12)",
    image: "https://i.ibb.co/NdLGgxZH/0-80-1.webp",
    category: "ratchet",
    price: "0-80",
    features: [
      "0 Contact Points",
      "High : 8.0 mm",
      "Weight: ~7 g",
    ],
    bey: [
      {
        id: "080-001",
        name: "UX-12",
        image: "https://i.ibb.co/GfbS7kcB/0-80-2.png"
      },
      {
        id: "080-002",
        name: "UX-12",
        image: "https://i.ibb.co/jPhfNTnk/0-80-3.png"
      },
      {
        id: "080-003",
        name: "CX-06",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-160",
    name: "1-60 (UX-01)",
    image: "https://i.ibb.co/tw7hh4yB/1-60-1.webp",
    category: "ratchet",
    price: "1-60",
    features: [
      "1 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6 g",
    ],
    bey: [
      {
        id: "160-001",
        name: "UX-04",
        image: "https://i.ibb.co/CpxFDtt3/1-60-2.png"
      },
      {
        id: "160-002",
        name: "BX-31",
        image: "https://i.ibb.co/Swqf7Z6F/1-60-3.png"
      },
      {
        id: "160-003",
        name: "BX-35",
        image: "https://i.ibb.co/pBy5qg1T/1-60-4.png"
      },
      {
        id: "160-004",
        name: "BX-00",
        image: "https://i.ibb.co/zT5d3WbV/1-60-5.png"
      },
      {
        id: "160-005",
        name: "UX-10",
        image: "https://i.ibb.co/GQdQdtT2/1-60-6.png"
      },
      {
        id: "160-006",
        name: "UX-13",
        image: "https://i.ibb.co/0pYWN3xG/1-60-7.png"
      },
    ]
  },
  {
    id: "ratchet-180",
    name: "1-80 (UX-05)",
    image: "https://i.ibb.co/spCg2bk7/1-80-1.webp",
    category: "ratchet",
    price: "1-80",
    features: [
      "1 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6.5 g",
    ],
    bey: [
      {
        id: "180-001",
        name: "UX-07",
        image: "https://i.ibb.co/XxcWTf79/1-80-2.png"
      },
    ]
  },
  {
    id: "ratchet-260",
    name: "2-60 (BX-34)",
    image: "https://i.ibb.co/rRJRfZ36/2-60-1.webp",
    category: "ratchet",
    price: "2-60",
    features: [
      "2 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6.2 g",
    ],
    bey: [
      {
        id: "260-001",
        name: "BX-00",
        image: "https://i.ibb.co/1Fhfzfz/2-60-2.png"
      },
      {
        id: "260-002",
        name: "UX-07",
        image: "https://i.ibb.co/XfNsS1zv/2-60-3.png"
      },
      {
        id: "260-003",
        name: "UX-12",
        image: "https://i.ibb.co/GfHHrQM0/2-60-4.png"
      },
      {
        //croc
        id: "260-004",
        name: "BX-00",
        image: "https://i.ibb.co/qYTNYYSz/2-60-5.png"
      },
      {
        id: "260-005",
        name: "CX-06",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-270",
    name: "2-70 (UX-09)",
    image: "https://i.ibb.co/1YzPdgJm/Ratchet2-70.webp",
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
        id: "270-001",
        name: "UX-00",
        image: ""
      },
    ]
  },
  {
    id: "ratchet-280",
    name: "2-80 (BX-00)",
    image: "https://i.ibb.co/21tK9Mpq/Ratchet2-80.webp",
    category: "ratchet",
    price: "2-80",
    features: [
      "2 Contact Points",
      "High : 8.0 mm",
      "Weight: ~6.9 g",
    ],
    bey: [
      {
        id: "280-001",
        name: "BX-00",
        image: "https://i.ibb.co/0jry8ppx/media.png"
      },
    ]
  },
  {
    id: "ratchet-360",
    name: "3-60 (BX-01)",
    image: "https://i.ibb.co/Xf1hg983/3-60-1.webp",
    category: "ratchet",
    price: "3-60",
    features: [
      "3 Contact Points",
      "High : 6.0 mm",
      "Weight: ~6.4 g",
    ],
    bey: [
      {
        id: "360-001",
        name: "BX-07",
        image: "https://i.ibb.co/J9r1YNR/3-60-1.png"
      },
      {
        id: "360-002",
        name: "BX-14",
        image: "https://i.ibb.co/rNdjr43/3-60-2.png"
      },
      {
        id: "360-003",
        name: "BX-14",
        image: "https://i.ibb.co/7N0bXzFr/3-60-3.png"
      },
      {
        id: "360-004",
        name: "BX-17",
        image: "https://i.ibb.co/BVsyK0sb/3-60-4.png"
      },
      {
        id: "360-005",
        name: "BX-21",
        image: "https://i.ibb.co/ynt4qYHS/3-60-5.png"
      },
      {
        id: "360-006",
        name: "BX-24",
        image: "https://i.ibb.co/7N0bXzFr/3-60-3.png"
      },
      {
        id: "360-007",
        name: "BX-31",
        image: "https://i.ibb.co/svCgMksk/3-60-7.png"
      },
      {
        id: "360-008",
        name: "BX-33",
        image: "https://i.ibb.co/h12TXFBm/3-60-8.png"
      },
      {
        id: "360-009",
        name: "BX-39",
        image: "https://i.ibb.co/MxcNXNN7/3-60-9.png"
      },
      {
        id: "360-010",
        name: "Collab",
        image: "https://i.ibb.co/67gtgFKR/3-60-10.png"
      },
      {
        id: "360-011",
        name: "Collab",
        image: "https://i.ibb.co/HTMns1hd/3-60-11.png"
      },
      {
        id: "360-012",
        name: "Collab",
        image: "https://i.ibb.co/qM37TDP8/3-60-12.png"
      },
    ]
  },
  {
    id: "ratchet-370",
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
        id: "370-001",
        name: "UX-05",
        image: "https://i.ibb.co/Y4M92mFR/3-70-2.png"
      },
      {
        id: "370-002",
        name: "UX-00",
        image: "https://i.ibb.co/jvbznFxJ/3-70-3.png"
      },
      {
        id: "370-003",
        name: "BX-35",
        image: "https://i.ibb.co/PvWPHLLB/3-70-4.png"
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
    // bey: [
    //   {
    //     id: "760-001",
    //     name: "BX-00",
    //     image: ""
    //   },
    // ]
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
        id: "A-002",
        name: "UX-12",
        image: "https://i.ibb.co/1GGz3c5t/H-3.png"
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
        image: ""
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
        image: ""
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
    // bey: [
    //   {
    //     id: "BS-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
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
    // bey: [
    //   {
    //     id: "RA-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
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
    // bey: [
    //   {
    //     id: "LO-001",
    //     name: "UX-12",
    //     image: "https://i.ibb.co/0zXcZ2F/E-2.png"
    //   },
    // ]
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
        id: "DS-001",
        name: "Dran Sword (Special Ver.)",
        image: "https://i.ibb.co/Fkdd5MxY/1-DS-07.webp"
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
        image: "https://i.ibb.co/jkfwRDHh/2-HS-08.webp"
      },
      {
        id: "B8-002",
        name: "Wizard Arrow 4-60 Needle",
        image: "https://i.ibb.co/xtTKsL9M/3-WA-08.webp"
      },
      {
        id: "B8-003",
        name: "Knight Shield 4-80 Taper",
        image: "https://i.ibb.co/4nV7W119/4-ks-08.webp"
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
        image: "https://i.ibb.co/Y4fQhv0w/1-DS-17.webp"
      },
      {
        id: "B17-002",
        name: "WizardArrow 4-80 Ball (Blue Ver.)",
        image: "https://i.ibb.co/GfV55FNc/3-WA-17.webp"
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
        image: "https://i.ibb.co/MkggbxSx/DB-04-u.webp"
      },
      {
        id: "U4-002",
        name: "WizardRod 5-70 DB (Special Ver.)",
        image: "https://i.ibb.co/606W65x8/WR-4-u.webp"
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
        image: "https://i.ibb.co/fmvksfJ/BS-1.png"
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
        image: "https://i.ibb.co/8gzdrSXx/DBS-4-c.webp"
      },
      {
        id: "C4-002",
        name: "PerseusDark B 6-80 W (Special Ver.)",
        image: "https://i.ibb.co/B2XwZhLj/PDB-4-c.webp"
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
    image: "https://i.ibb.co/bRdy8HVg/DSL-1.png",
    category: "x-over",
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
        id: "DSL-001",
        name: "BX-00",
        image: "https://i.ibb.co/spS54y8Y/DSL-2.png"
      },
    ]
  },
  {
    id: "OBS-002",
    name: "Driger Slash",
    image: "https://i.ibb.co/v4417p0Y/DSH-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/3YfdwtpF/DSD-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/VpBZPP0x/Dragoon-Storm-4-60-RA-Photoroom.png",
    category: "x-over",
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
    image: "https://i.ibb.co/RT98SSpJ/LDU-1.png",
    category: "x-over",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Left",
      "Weight": "~34 g",
      "Stock Combo": "1-60 Flat",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
  },
  {
    id: "OMF-002",
    name: "Lightning L-Drago (Rapid)",
    image: "https://i.ibb.co/HDHpCtKQ/LDR-1.png",
    category: "x-over",
    price: "BX-00",
    specs: {
      "Type": "Attack",
      "Spin": "Left",
      "Weight": "~33 g",
      "Stock Combo": "1-60 Flat",
      "Product Line": "BX",
      "Original Generation": "Metal Fight Beyblade",
    },
  },
  {
    id: "OMF-003",
    name: "Storm Pegasis",
    image: "https://i.ibb.co/chFyzmBp/SPS-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/7dhDTs6x/VVV-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/N2dYzCMF/XXX-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/xt5XFNmB/Star-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/YBLNbpPz/Star-2.png",
    category: "x-over",
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
    image: "https://i.ibb.co/tw6gBm7m/Star-3.png",
    category: "x-over",
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
    image: "https://i.ibb.co/PvKBPGkW/Star-4.png",
    category: "x-over",
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
    image: "https://i.ibb.co/Y73vktvM/Trans-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/RkqM7vxy/Trans-2.png",
    category: "x-over",
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
    image: "https://i.ibb.co/LDVzqRmx/Trans-3.png",
    category: "x-over",
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
    image: "https://i.ibb.co/DPtYzN5H/Trans-4.png",
    category: "x-over",
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
    image: "https://i.ibb.co/MxMtTnfP/Mar-1.png",
    category: "x-over",
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
    image: "https://i.ibb.co/21sTGQHc/Mar-2.png",
    category: "x-over",
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
    image: "https://i.ibb.co/GQk0VkpR/Mar-3.png",
    category: "x-over",
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
    image: "https://i.ibb.co/vvqbjP3f/Mar-4.png",
    category: "x-over",
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
];

// Helper functions to get products
export function getProducts(category?: 'blade' | 'ratchet' | 'bit' | 'other' | 'X-Over'): Product[] {
  if (category) {
    return products.filter(product => product.category === category);
  }
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
