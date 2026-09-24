
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