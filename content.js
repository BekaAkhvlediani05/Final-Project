export const navListContent = [
  { name: "all", id: 1 },
  { name: "Pistols", id: 2 },
  { name: "Shotguns", id: 3 },
  { name: "Rifles", id: 4 },
  { name: "SMGs", id: 5 },
  { name: "Sniper Rifles", id: 6 },
  { name: "Machine Guns", id: 7 },
  { name: "Ammunition", id: 8 },
  { name: "Accessories", id: 9 }
];

export const productsContent = {
  2: [  // Pistols
    { id: 101, name: "Glock 17", price: "$500", image: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/1303005.json?$Prod_PLPThumb$https://example.com/images/glock17.jpg" },
    { id: 102, name: "Sig Sauer P320", price: "$600", image: "https://www.sigsauer.com/media/catalog/product/cache/2f7933e2ff16f0ec074a16ab6b6195f2/p/3/p320-m17-left-web-21.jpg" },
    { id: 103, name: "Beretta 92FS", price: "$550", image: "https://0isznc85bj26dve98q0gl0q.blob.core.windows.net/hybris/images/700Wx700H/92FS_main001.png" },
    { id: 104, name: "Smith & Wesson M&P 9", price: "$570", image: "https://www.smith-wesson.com/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-c7gr8wg3cg%2Fproducts%2F209%2Fimages%2F2002%2F12437-mp-OnWhite-Left__07453.1675178438.1280.1280.png%3Fc%3D1&w=3840&q=90" },
    { id: 105, name: "CZ 75 SP-01", price: "$650", image: "https://www.caliber.ge/storage/productImage/DkOPtWj5kSgokhm.jpg" }
  ],
  3: [  // Shotguns (Minimal data)
    { id: 201, name: "Remington 870", price: "$400", image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Remington_870_12ga.jpg" },
    { id: 202, name: "Mossberg 500", price: "$350", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mossberg_500.jpg" }
  ],
  4: [  // Rifles
    { id: 301, name: "AK-47", price: "$800", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/AK-47_-_for_the_better.jpg" },
    { id: 302, name: "M1 Garand", price: "$1200", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/M1Garand.png" },
    { id: 303, name: "Springfield M1903", price: "$1000", image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Springfield_M1903.jpg" },
    { id: 304, name: "Colt LE6920", price: "$950", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Colt_LE6920_M4_carbine.jpg" },
    { id: 305, name: "FN FAL", price: "$1100", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/FN_FAL.jpg" }
  ],
  5: [  // SMGs (Minimal data)
    { id: 401, name: "Heckler & Koch MP5", price: "$1200", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/HK_MP5.jpg" },
    { id: 402, name: "Uzi Pro", price: "$1100", image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Uzi_Pro.jpg" }
  ],
  6: [  // Sniper Rifles (Minimal data)
    { id: 501, name: "Remington 700", price: "$1300", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Remington_700_ADL.jpg" },
    { id: 502, name: "Barrett M82", price: "$5000", image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Barrett_M82A1.jpg" }
  ],
  7: [  // Machine Guns (Minimal data)
    { id: 601, name: "M249 SAW", price: "$2500", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/M249_SAW.jpg" },
    { id: 602, name: "M60 Machine Gun", price: "$2200", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/M60_machine_gun.jpg" }
  ],
  8: [  // Ammunition (Minimal data)
    { id: 701, name: "5.56×45mm NATO", price: "$0.50/round", image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/5.56x45mm_NATO_ammunition.jpg" },
    { id: 702, name: "7.62×39mm", price: "$0.70/round", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/7.62x39mm_Round.jpg" }
  ],
  9: [  // Accessories (Minimal data)
    { id: 801, name: "Tactical Flashlight", price: "$30", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Tactical_flashlight.jpg" },
    { id: 802, name: "Vertical Foregrip", price: "$40", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Vertical_foregrip.jpg" }
  ]
};
