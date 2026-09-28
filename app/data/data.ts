import { Collections } from "../types/collections";
  export const navList = [
    {
      id: 0,
      name: "Collections",
      link: "/war-room/collections",
    },
    {
      id: 1,
      name: "Historical Battle Timeline",
      link: "/war-room/battle-forge",
    },
  ];
  export const campaigns = [
    {
      id: "kursk",
      year: "JUL—AUG 1943",
      name: "Battle of Kursk",
      theatre: "Eastern Front",
      location: "51°N · 37°E",
      scale: "6,000 armoured vehicles · Citadel",
      image:"https://images.unsplash.com/photo-1630719003242-cc15a7244d16?auto=format&fit=crop&w=1600&q=85",
      summary:
        "The largest armoured clash in history ended the last major German offensive in the east.",
      allied:
        "Absorb the attack in depth, then counter-offensive into the salient.",
      axis: "Pinch off the Kursk salient from north and south.",
      note: "Opposing arrows meet across layered Soviet defensive belts.",
      paths: [
        {
          d: "M504 110 C462 150 440 185 437 240 S445 295 415 335",
          color: "#8c3c32",
          label: "9th Army",
          x: 455,
          y: 163,
        },
        {
          d: "M572 385 C505 363 470 339 438 293 S400 253 354 240",
          color: "#8c3c32",
          label: "4th Panzer Army",
          x: 488,
          y: 347,
        },
        {
          d: "M245 320 C292 294 334 280 380 260 S420 230 440 205",
          color: "#b99050",
          label: "Steppe Front",
          x: 290,
          y: 288,
        },
        {
          d: "M225 165 C295 172 345 189 393 213",
          color: "#b99050",
          label: "Central Front",
          x: 273,
          y: 155,
        },
      ],
    },
    {
      id: "normandy",
      year: "JUN—AUG 1944",
      name: "Normandy Campaign",
      theatre: "Western Europe",
      location: "49°N · 0°W",
      scale: "156,000 troops landed · D-Day",
       image:"https://images.unsplash.com/photo-1780334687874-c4f6129075fb?auto=format&fit=crop&w=1600&q=85",
      summary:
        "A foothold on the French coast widened into a breakout that pulled the western front eastward.",
      allied: "Establish and expand a lodgement from the Channel ports.",
      axis: "Contain the beachhead before Allied matériel could mass.",
      note: "The map traces the advance from the landing sectors toward the Falaise pocket.",
      paths: [
        {
          d: "M176 174 C245 206 276 216 342 245 S452 300 529 285",
          color: "#355d78",
          label: "US 1st Army",
          x: 310,
          y: 215,
        },
        {
          d: "M173 250 C250 260 300 310 365 331 S477 355 545 325",
          color: "#b99050",
          label: "British / Canadian",
          x: 298,
          y: 325,
        },
        {
          d: "M590 145 C530 182 500 220 475 270 S420 330 365 334",
          color: "#8c3c32",
          label: "German 7th Army",
          x: 488,
          y: 201,
        },
      ],
    },
    {
      id: "elalamein",
      year: "OCT—NOV 1942",
      name: "Second El Alamein",
      theatre: "North Africa",
      location: "30°N · 28°E",
      scale: "195,000 men · Lightfoot",
      image:"https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
      summary:
        "At a narrow desert corridor, Allied forces broke the Axis line and began the westward retreat.",
      allied:
        "Open lanes through minefields, commit armour, and force a retreat.",
      axis: "Hold a thin defensive line between coast and Qattara Depression.",
      note: "The sea defines the northern edge; movement concentrates on the narrow passable corridor.",
      paths: [
        {
          d: "M130 160 C220 166 310 180 390 213 S515 254 605 255",
          color: "#b99050",
          label: "Eighth Army",
          x: 305,
          y: 159,
        },
        {
          d: "M600 310 C510 307 435 300 357 272 S250 234 172 228",
          color: "#8c3c32",
          label: "Panzerarmee Afrika",
          x: 420,
          y: 321,
        },
        {
          d: "M185 337 C285 323 355 319 450 335",
          color: "#a6a275",
          label: "Qattara Depression",
          x: 305,
          y: 357,
        },
      ],
    },
  ];

 export const collections: Collections = {
  name: "collections",
  catalogFeatured:[
     {
      type: "Aircrafts",
      image:
        "https://images.unsplash.com/photo-1561323578-dde5e688b4b7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0",
      imageAlt: "Historic aircraft displayed inside a museum",
    },

    {
      type: "Armoured-vehicles",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f6/A_British_Sherman_tank_advancing_near_Catania%2C_Sicily%2C_4_August_1943._NA5522.jpg",
      imageAlt: "Weathered military tank track and armour",

    },

  ],
 catalog: [
    // ─────────────────────────────
    // UNITED STATES
    // ─────────────────────────────

    {
      
      name: "M4 Sherman",
      designation: "M4A3 · 1942",
      faction: "Allied",
      era: "1939—45",
      type: "Medium Tank",
      detail: "Medium tank · 75 mm M3 gun",
      front: [
        "North Africa",
        "Italy",
        "Normandy",
        "Western Front",
        "Pacific"
      ],

      manufactured: 50000,
      armament: "75 mm M3 · .50 cal M2 · 2× .30 cal",
      crew: 5,
      weight: "30–38 tonnes",
      topSpeed: "38 km/h",
      summary:
        "The M4 Sherman became the principal American medium tank of the war. It served across almost every major Allied front and was supplied extensively to Britain, the Soviet Union and other Allied forces.",
    },
    {
      name: "M3 Stuart",
      designation: "M3 · 1941",
      faction: "Allied",
      era: "1939—45",
      type: "Light Tank",
      detail: "Reconnaissance tank · 37 mm gun",

      front: [
        "North Africa",
        "Burma",
        "Italy",
        "Pacific",
        "Eastern Front"
      ],

      manufactured: 13859,
      armament: "37 mm M6 · 3× .30 cal machine guns",
      crew: 4,
      weight: "12.9 tonnes",
      topSpeed: "58 km/h",

      summary:
        "The M3 Stuart was a fast and reliable light tank used extensively for reconnaissance and exploitation. Thousands were also supplied to Allied partners through Lend-Lease.",
    },

    {
      name: "M26 Pershing",
      designation: "M26 · 1945",
      faction: "Allied",
      era: "1939—45",
      type: "Heavy / Medium Tank",
      detail: "90 mm gun · Heavy breakthrough tank",

      front: [
        "Western Front"
      ],

      manufactured: 2202,
      armament: "90 mm M3 · .50 cal M2 · 2× .30 cal",
      crew: 5,
      weight: "41.7 tonnes",
      topSpeed: "40 km/h",

      summary:
        "The M26 Pershing was introduced late in the European war to provide American armoured units with a tank capable of confronting heavily armoured German vehicles.",
    },

    // ─────────────────────────────
    // BRITAIN / COMMONWEALTH
    // ─────────────────────────────

    {
      name: "Churchill",
      designation: "A22 · 1941",
      faction: "Allied",
      era: "1939—45",
      type: "Infantry Tank",
      detail: "Heavy infantry tank · 6-pounder",

      front: [
        "North Africa",
        "Italy",
        "Normandy",
        "Western Front",
        "Eastern Front"
      ],

      manufactured: 5640,
      armament: "6-pounder · 2× 7.92 mm BESA",
      crew: 5,
      weight: "39 tonnes",
      topSpeed: "25 km/h",

      summary:
        "The Churchill was heavily armoured and exceptionally capable over difficult terrain. Specialized versions were adapted for engineering, bridge-laying and flamethrowing duties.",
    },

    {
      name: "Cromwell",
      designation: "Cruiser Mk VIII · 1943",
      faction: "Allied",
      era: "1939—45",
      type: "Cruiser Tank",
      detail: "Fast cruiser tank · 75 mm gun",

      front: [
        "Normandy",
        "Western Front",
        "Italy"
      ],

      manufactured: 4016,
      armament: "75 mm gun · 2× 7.92 mm BESA",
      crew: 5,
      weight: "27.6 tonnes",
      topSpeed: "64 km/h",

      summary:
        "The Cromwell was one of Britain's principal cruiser tanks in Normandy. Its high speed and mobility made it particularly useful for exploitation and reconnaissance.",
    },

    {
      name: "Matilda II",
      designation: "A12 · 1939",
      faction: "Allied",
      era: "1939—45",
      type: "Infantry Tank",
      detail: "Heavy armour · 2-pounder",

      front: [
        "France",
        "North Africa",
        "Pacific",
        "Eastern Front"
      ],

      manufactured: 2987,
      armament: "2-pounder · 7.92 mm BESA",
      crew: 4,
      weight: "26.9 tonnes",
      topSpeed: "24 km/h",

      summary:
        "The Matilda II gained a reputation for its exceptionally thick armour early in the war. It saw extensive service in North Africa and was also supplied to the Soviet Union.",
    },

    // ─────────────────────────────
    // SOVIET UNION
    // ─────────────────────────────

    {
      name: "T-34/76",
      designation: "Model 1943 · 1943",
      faction: "Soviet",
      era: "1939—45",
      type: "Medium Tank",
      detail: "76.2 mm gun · Sloped armour",

      front: [
        "Eastern Front"
      ],

      manufactured: 35467,
      armament: "76.2 mm F-34 · 2× 7.62 mm DT",
      crew: 4,
      weight: "26.5 tonnes",
      topSpeed: "53 km/h",

      summary:
        "The T-34 combined sloped armour, mobility and firepower in a design that could be produced in enormous numbers. It formed the backbone of Soviet armoured forces during the first half of the war.",
    },

    {
      name: "T-34/85",
      designation: "Model 1944 · 1944",
      faction: "Soviet",
      era: "1939—45",
      type: "Medium Tank",
      detail: "85 mm gun · Five-man crew",

      front: [
        "Eastern Front",
        "Poland",
        "Germany"
      ],

      manufactured: 50000,
      armament: "85 mm ZiS-S-53 · 2× 7.62 mm DT",
      crew: 5,
      weight: "32 tonnes",
      topSpeed: "55 km/h",

      summary:
        "The T-34/85 upgraded the original T-34 with a larger turret, a more powerful 85 mm gun and improved crew arrangements. It spearheaded Soviet armoured advances into Eastern Europe and Germany.",
    },

    {
      name: "KV-1",
      designation: "Kliment Voroshilov · 1939",
      faction: "Soviet",
      era: "1939—45",
      type: "Heavy Tank",
      detail: "Heavy armour · 76.2 mm gun",

      front: [
        "Eastern Front",
        "Leningrad",
        "Moscow",
        "Stalingrad"
      ],

      manufactured: 4790,
      armament: "76.2 mm F-34 · 3× 7.62 mm DT",
      crew: 5,
      weight: "45 tonnes",
      topSpeed: "35 km/h",

      summary:
        "The KV-1 was among the heaviest Soviet tanks when Germany invaded in 1941. Its armour could initially resist many German anti-tank weapons, although its mobility and turret layout limited its effectiveness as the war progressed.",
    },

    // ─────────────────────────────
    // GERMANY
    // ─────────────────────────────

    {
      name: "Panzerkampfwagen IV",
      designation: "Ausf. H · 1943",
      faction: "Axis",
      era: "1939—45",
      type: "Medium Tank",
      detail: "75 mm KwK 40 · Main German medium tank",

      front: [
        "Poland",
        "France",
        "North Africa",
        "Eastern Front",
        "Italy",
        "Normandy"
      ],

      manufactured: 13522,
      armament: "75 mm KwK 40 L/48 · 2× MG34",
      crew: 5,
      weight: "25 tonnes",
      topSpeed: "38 km/h",

      summary:
        "The Panzer IV became the mainstay of German armoured formations. Continuous upgrades kept the design in frontline service from the opening campaigns through the final battles of 1945.",
    },

    {
      name: "Panther",
      designation: "Panzer V · 1943",
      faction: "Axis",
      era: "1939—45",
      type: "Medium Tank",
      detail: "75 mm KwK 42 · Sloped armour",

      front: [
        "Eastern Front",
        "Italy",
        "Normandy",
        "Western Front"
      ],

      manufactured: 3694,
      armament: "75 mm KwK 42 L/70 · 2× MG34",
      crew: 5,
      weight: "44 tonnes",
      topSpeed: "55 km/h",

      summary:
        "Developed partly in response to the T-34, the Panther combined powerful firepower with heavily sloped frontal armour. It first saw major combat at Kursk in 1943.",
    },

    {
      name: "Tiger I",
      designation: "Panzer VI · 1942",
      faction: "Axis",
      era: "1939—45",
      type: "Heavy Tank",
      detail: "88 mm KwK 36 · Heavy armour",

      front: [
        "Leningrad",
        "North Africa",
        "Eastern Front",
        "Normandy",
        "Western Front"
      ],

      manufactured: 1347,
      armament: "88 mm KwK 36 L/56 · 2× MG34",
      crew: 5,
      weight: "56 tonnes",
      topSpeed: "38 km/h",

      summary:
        "The Tiger I combined thick armour with the powerful 88 mm gun. It was deployed in small numbers compared with German medium tanks and became one of the most recognizable armoured vehicles of the war.",
    },

    {
      name: "Tiger II",
      designation: "Panzer VI Ausf. B · 1944",
      faction: "Axis",
      era: "1939—45",
      type: "Heavy Tank",
      detail: "88 mm KwK 43 · 69.8 tonnes",

      front: [
        "Eastern Front",
        "Normandy",
        "Western Front"
      ],

      manufactured: 489,
      armament: "88 mm KwK 43 L/71 · 2× MG34",
      crew: 5,
      weight: "69.8 tonnes",
      topSpeed: "41 km/h",

      summary:
        "The Tiger II was Germany's most heavily protected operational tank. Its long 88 mm gun gave it formidable anti-armour capability, although its enormous weight and mechanical complexity limited its practicality.",
    },

    // ─────────────────────────────
    // JAPAN
    // ─────────────────────────────

    {
      name: "Type 95 Ha-Go",
      designation: "Type 95 · 1935",
      faction: "Japan",
      era: "1939—45",
      type: "Light Tank",
      detail: "37 mm gun · Japanese mainstay",

      front: [
        "China",
        "Burma",
        "Malaya",
        "Philippines",
        "Pacific"
      ],

      manufactured: 2300,
      armament: "37 mm Type 94 · 2× 7.7 mm Type 97",
      crew: 3,
      weight: "7.4 tonnes",
      topSpeed: "45 km/h",

      summary:
        "The Ha-Go was Japan's most numerous tank of the war. It remained in frontline service throughout the conflict, fighting from China and Southeast Asia to the Pacific islands.",
    },

    {
      name: "Type 97 Chi-Ha",
      designation: "Type 97 · 1937",
      faction: "Japan",
      era: "1939—45",
      type: "Medium Tank",
      detail: "57 mm gun · Main Japanese medium tank",

      front: [
        "China",
        "Burma",
        "Malaya",
        "Philippines",
        "Pacific"
      ],

      manufactured: 2092,
      armament: "57 mm Type 97 or 47 mm Type 1 · MGs",
      crew: 4,
      weight: "15 tonnes",
      topSpeed: "38 km/h",

      summary:
        "The Chi-Ha was Japan's principal medium tank during the early and middle years of the war. Later Shinhoto variants received a more capable 47 mm gun to improve their anti-tank performance.",
    },

    {
      name: "Type 2 Ka-Mi",
      designation: "Type 2 · 1942",
      faction: "Japan",
      era: "1939—45",
      type: "Amphibious Tank",
      detail: "Amphibious · 37 mm gun",

      front: [
        "Pacific",
        "Solomon Islands",
        "Mariana Islands",
        "Marshall Islands"
      ],

      manufactured: 184,
      armament: "37 mm Type 1 · 2× 7.7 mm Type 97",
      crew: 5,
      weight: "12 tonnes",
      topSpeed: "37 km/h",

      summary:
        "The Ka-Mi was designed for amphibious operations and could swim using detachable flotation equipment. It was employed by Japanese naval landing forces during Pacific island campaigns.",
    },

    // ─────────────────────────────
    // OTHER ALLIED VEHICLES
    // ─────────────────────────────

    {
      name: "M3 Lee",
      designation: "M3 Medium · 1941",
      faction: "Allied",
      era: "1939—45",
      type: "Medium Tank",
      detail: "75 mm hull gun · 37 mm turret",

      front: [
        "North Africa",
        "Burma",
        "Eastern Front"
      ],

      manufactured: 6258,
      armament: "75 mm M2/M3 · 37 mm M5 · MGs",
      crew: 6,
      weight: "27.2 tonnes",
      topSpeed: "42 km/h",

      summary:
        "The M3 Lee was an interim American medium tank whose unusual two-gun arrangement reflected the need for a powerful 75 mm weapon before the Sherman entered widespread service.",
    },

    {
      name: "M3 Half-track",
      designation: "M3 · 1941",
      faction: "Allied",
      era: "1939—45",
      type: "Armoured Personnel Carrier",
      detail: "Half-track · Infantry transport",

      front: [
        "North Africa",
        "Italy",
        "Normandy",
        "Western Front",
        "Pacific"
      ],

      manufactured: 41000,
      armament: ".50 cal M2 · optional .30 cal MG",
      crew: 3,
      weight: "9 tonnes",
      topSpeed: "72 km/h",
      summary:
        "The M3 half-track provided mechanized infantry with protected mobility and became one of the defining Allied transport vehicles of the war.",
    },
  ],
  carousel: [
    {
      name: "Supermarine Spitfire",
      designation: "Mk. IXc · 1942",
      faction: "Allied",
      era: "1939—45",
      type: "Aircraft",
      detail: "Single-seat fighter · 1,000+ hp",
      image:
        "https://images.unsplash.com/photo-1693916064465-8036ac1a0756?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Historic aircraft displayed inside a museum",
      tone: "from-[#182529]/80 via-transparent",
    },

    {
      name: "M4 Sherman",
      designation: "M4A3 · 1942",
      faction: "Allied",
      era: "1939—45",
      type: "Armoured",
      detail: "Medium tank · 75 mm M3 gun",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f6/A_British_Sherman_tank_advancing_near_Catania%2C_Sicily%2C_4_August_1943._NA5522.jpg",
      imageAlt: "Weathered military tank track and armour",
      tone: "from-[#293425]/80 via-transparent",
    },

    {
      name: "Panzerkampfwagen IV",
      designation: "Ausf. H · 1943",
      faction: "Axis",
      era: "1939—45",
      type: "Armoured",
      detail: "Medium tank · 75 mm KwK 40",
      image:
        "https://images.unsplash.com/photo-1695120972968-21ffead317fb?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Armoured vehicle on outdoor display",
      tone: "from-[#3a3220]/80 via-transparent",
    },

    {
      name: "Yakovlev Yak-3",
      designation: "Series 2 · 1944",
      faction: "Soviet",
      era: "1939—45",
      type: "Aircraft",
      detail: "Low-altitude fighter · Klimov V-12",
      image:
        "https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Vintage fighter aircraft displayed in a hangar",
      tone: "from-[#17242b]/80 via-transparent",
    },
  ],
};
//   const campaigns: Campaign[] = [
//   { id: 'normandy', year: 'JUN—AUG 1944', name: 'Normandy Campaign', theatre: 'Western Europe', location: '49°N · 0°W', scale: '156,000 troops landed · D-Day', summary: 'A foothold on the French coast widened into a breakout that pulled the western front eastward.', allied: 'Establish and expand a lodgement from the Channel ports.', axis: 'Contain the beachhead before Allied matériel could mass.', note: 'The map traces the advance from the landing sectors toward the Falaise pocket.', paths: [{ d: 'M176 174 C245 206 276 216 342 245 S452 300 529 285', color: '#355d78', label: 'US 1st Army', x: 310, y: 215 }, { d: 'M173 250 C250 260 300 310 365 331 S477 355 545 325', color: '#b99050', label: 'British / Canadian', x: 298, y: 325 }, { d: 'M590 145 C530 182 500 220 475 270 S420 330 365 334', color: '#8c3c32', label: 'German 7th Army', x: 488, y: 201 }] },
//   { id: 'kursk', year: 'JUL—AUG 1943', name: 'Battle of Kursk', theatre: 'Eastern Front', location: '51°N · 37°E', scale: '6,000 armoured vehicles · Citadel', summary: 'The largest armoured clash in history ended the last major German offensive in the east.', allied: 'Absorb the attack in depth, then counter-offensive into the salient.', axis: 'Pinch off the Kursk salient from north and south.', note: 'Opposing arrows meet across layered Soviet defensive belts.', paths: [{ d: 'M504 110 C462 150 440 185 437 240 S445 295 415 335', color: '#8c3c32', label: '9th Army', x: 455, y: 163 }, { d: 'M572 385 C505 363 470 339 438 293 S400 253 354 240', color: '#8c3c32', label: '4th Panzer Army', x: 488, y: 347 }, { d: 'M245 320 C292 294 334 280 380 260 S420 230 440 205', color: '#b99050', label: 'Steppe Front', x: 290, y: 288 }, { d: 'M225 165 C295 172 345 189 393 213', color: '#b99050', label: 'Central Front', x: 273, y: 155 }] },
//   { id: 'elalamein', year: 'OCT—NOV 1942', name: 'Second El Alamein', theatre: 'North Africa', location: '30°N · 28°E', scale: '195,000 men · Lightfoot', summary: 'At a narrow desert corridor, Allied forces broke the Axis line and began the westward retreat.', allied: 'Open lanes through minefields, commit armour, and force a retreat.', axis: 'Hold a thin defensive line between coast and Qattara Depression.', note: 'The sea defines the northern edge; movement concentrates on the narrow passable corridor.', paths: [{ d: 'M130 160 C220 166 310 180 390 213 S515 254 605 255', color: '#b99050', label: 'Eighth Army', x: 305, y: 159 }, { d: 'M600 310 C510 307 435 300 357 272 S250 234 172 228', color: '#8c3c32', label: 'Panzerarmee Afrika', x: 420, y: 321 }, { d: 'M185 337 C285 323 355 319 450 335', color: '#a6a275', label: 'Qattara Depression', x: 305, y: 357 }] },
// ]

// const cassinoCampaign: Campaign = {
//   id: 'cassino', year: 'JAN—MAY 1944', name: 'Battle of Monte Cassino', theatre: 'Italian Campaign', location: '41°N · 14°E', scale: 'Four assaults · Gustav Line', summary: 'A hard-fought Allied attempt to breach the Gustav Line and open the road to Rome, constrained by mountains, rivers, weather, and fortified ground.', allied: 'Break the Gustav Line and secure the Liri valley approach to Rome.', axis: 'Hold the Cassino position and preserve the defensive depth of the Gustav Line.', note: 'Simulation uses the February 1944 operational situation around Cassino and the Rapido–Gari crossings.', paths: [{ d: 'M155 370 C250 335 308 294 395 276 S555 225 690 170', color: '#b99050', label: 'II Corps advance', x: 374, y: 276 }, { d: 'M720 165 C650 216 590 260 515 295 S402 344 330 375', color: '#8c3c32', label: 'German defensive response', x: 588, y: 255 }] }

// const dossierDetails = [
//   { kicker: 'The liberation of France', title: 'Normandy: a foothold becomes a front', lede: 'On 6 June 1944, Allied armies crossed the Channel into German-occupied France. The landings were only the opening act; the decisive work was the difficult expansion of a bridgehead through Norman hedgerows.', context: 'Operation Overlord joined air, sea, and land power on a scale unprecedented in the west. Its immediate purpose was to establish a sustainable lodgement; its larger purpose was to restore a western front in Europe.', outcome: 'The campaign secured a permanent Allied front in western Europe and set the conditions for the liberation of Paris later that August.', cost: 'The campaign exacted grave losses from military forces and civilians across the region.', images: ['https://images.unsplash.com/photo-1780334687874-c4f6129075fb?auto=format&fit=crop&w=1600&q=85', 'https://images.unsplash.com/photo-1630161861535-b39e5635da68?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1763911393054-2844455bdc76?auto=format&fit=crop&w=1200&q=85'], phases: [['06 JUN', 'The landings', 'Airborne troops and assault waves secured the five beaches under intense local resistance.'], ['JUN—JUL', 'The bocage struggle', 'Dense hedgerows fragmented the battlefield and slowed the Allied advance.'], ['AUG', 'Breakout', 'Operation Cobra ruptured the German position and the Falaise pocket sealed the campaign.']] },
//   { kicker: 'The armoured turning point', title: 'Kursk: the salient that held', lede: 'In July 1943, German forces attacked the Kursk salient from north and south. Soviet defenses were deeply prepared, and the failure of the offensive transferred strategic momentum decisively eastward.', context: 'Operation Citadel was intended to eliminate a vast Soviet bulge and regain the initiative after Stalingrad. Soviet intelligence and preparation transformed the salient into a layered defensive system.', outcome: 'Kursk ended Germany’s final major strategic offensive on the Eastern Front and began a sustained Soviet advance westward.', cost: 'Both armies committed immense forces; the battle’s scale made it a landmark of industrial warfare.', images: ['https://images.unsplash.com/photo-1630719003242-cc15a7244d16?auto=format&fit=crop&w=1600&q=85', 'https://images.unsplash.com/photo-1617977249154-bb5dedbc9be8?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1770571975897-98dc2797d959?auto=format&fit=crop&w=1200&q=85'], phases: [['05 JUL', 'Citadel opens', 'German armoured forces advanced into minefields, anti-tank belts, and prepared positions.'], ['12 JUL', 'Prokhorovka', 'A chaotic armoured engagement became emblematic of the wider battle.'], ['AUG', 'Counter-offensive', 'Soviet forces moved onto the offensive at Orel and Belgorod–Kharkiv.']] },
//   { kicker: 'The desert line', title: 'El Alamein: no room to retreat', lede: 'Between the Mediterranean coast and the Qattara Depression, the Axis defensive line was narrow enough to be held—and difficult enough to break. In late 1942, the Eighth Army did break it.', context: 'For Britain and its Commonwealth allies, the battle was a chance to arrest the Axis advance toward Egypt and the Suez Canal. The terrain limited maneuver and concentrated the contest along a fixed corridor.', outcome: 'The victory changed the balance in North Africa and opened the way for Allied operations westward into Libya and Tunisia.', cost: 'The campaign inflicted heavy casualties and demanded vast logistical effort across a hostile environment.', images: ['https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85', 'https://images.unsplash.com/photo-1649621323296-e99b85a5fd6e?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1541339246244-261d72e381b7?auto=format&fit=crop&w=1200&q=85'], phases: [['23 OCT', 'Lightfoot begins', 'Infantry began clearing lanes through minefields so armoured formations could exploit the breach.'], ['02 NOV', 'Supercharge', 'The offensive intensified against depleted Axis positions and constrained reserves.'], ['04 NOV', 'Withdrawal', 'Axis forces began a retreat westward, ending the immediate threat to Egypt.']] },
// ]

// const campaignResearch = [
//   { allied: { name: 'Allied Expeditionary Force', troops: '1.53m troops landed by late August', armour: 'c. 4,000 tanks & self-propelled guns', air: 'c. 11,000 aircraft committed' }, axis: { name: 'German forces in Normandy', troops: 'c. 380,000 troops in the theatre', armour: 'c. 1,500 tanks & assault guns', air: 'Limited operational air support' }, diary: { date: '07 June 1944', byline: 'Private diary, 50th (Northumbrian) Division', text: 'The fields are smaller than any map allows for. Every hedge seems to have a story and every lane ends in smoke.', note: 'Transcribed excerpt · personal field notebook' } },
//   { allied: { name: 'Soviet Red Army', troops: 'c. 1.9m personnel in the salient', armour: 'c. 5,000 tanks & assault guns', air: 'c. 2,900 aircraft' }, axis: { name: 'German Army Group Centre & South', troops: 'c. 780,000 personnel', armour: 'c. 2,700 tanks & assault guns', air: 'c. 2,000 aircraft' }, diary: { date: '10 July 1943', byline: 'Red Army field notebook, Central Front', text: 'The ground shook at first light. We had waited for this attack; still, the sound of it arriving was another thing entirely.', note: 'Translated excerpt · field notebook' } },
//   { allied: { name: 'British Eighth Army', troops: 'c. 195,000 personnel', armour: 'c. 1,000 tanks', air: 'Desert Air Force support' }, axis: { name: 'Panzerarmee Afrika', troops: 'c. 116,000 personnel', armour: 'c. 500 tanks', air: 'Constrained by fuel and supply' }, diary: { date: '24 October 1942', byline: 'Commonwealth infantryman, field diary', text: 'The night was full of dust and noise. We moved by compass, by whispered orders, and by the flashes ahead.', note: 'Transcribed excerpt · private collection' } },
// ]