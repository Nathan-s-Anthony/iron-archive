import { CampaignTypes } from "@/app/types/campaignTypes";

export const normandyCampaign: CampaignTypes = {
  id: "normandy",
  introduction: {
    id: "campaign-introduction",
    date: "6 June 1944",
    theatre: "Western Europe",
    location: "49°N · 0°W",
    objective: "Establish an Allied foothold in occupied France",
    strategicImportance:
      "Open a Western Front and create a base for the liberation of Western Europe",
  },
  timeline: [
  {
    id: "preparation",
    title: "The Preparation",
    date: "1943–1944",
    description:
      "The Normandy invasion was the result of months of enormous Allied preparation in Britain. Troops trained for amphibious assaults while ships, landing craft, aircraft, armour and supplies were assembled for Operation Overlord. Allied deception operations also sought to convince German commanders that the main invasion would come at Calais rather than Normandy.",
    type: "introduction",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/British_Sherman_tanks_and_a_6-pdr_anti-tank_gun_in_the_centre_of_Caen%2C_Normandy%2C_10_July_1944._B6924.jpg",
  },

  {
    id: "d-day",
    title: "D-Day — Into the Jaws of Death",
    date: "6 June 1944",
    description:
      "Allied airborne and amphibious forces landed along the Normandy coast across five designated beaches.",
    type: "operation",
    image:
      "https://www.archives.gov/files/research/military/ww2/images/eisenhower-l.jpg",
  },

  {
    id: "beachhead",
    title: "Securing the Beachhead",
    date: "7–12 June 1944",
    description:
      "After the initial landings, Allied forces had to connect the separate beachheads and push inland while German forces attempted to contain the invasion. The Allies captured important positions and began moving toward Cherbourg and Caen, but German resistance prevented the rapid breakout originally hoped for. The campaign quickly became a slow battle of attrition rather than the rapid advance the Allies had envisioned.",
    type: "operation",
    image:
      "https://www.neh.gov/sites/default/files/styles/1000x1000_square/public/2019-06/Into_the_Jaws_of_Death_23-0455M_edit.jpg",
  },

  {
    id: "caen",
    title: "The Battle for Caen",
    date: "June–July 1944",
    description:
      "Caen was an important road and rail hub and one of the principal objectives of the British and Canadian forces. It proved far harder to capture than expected. German formations, including powerful armoured units, concentrated around the city and repeatedly slowed the Allied advance. British and Canadian attacks gradually forced the Germans out of the city during July, but the fighting devastated much of Caen and tied down significant German forces on the eastern side of the Allied front.",
    type: "battle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Operationepsom.jpg",
  },

  {
    id: "bocage",
    title: "The Bocage",
    date: "June–July 1944",
    description:
      "The Normandy bocage was a landscape of small fields divided by thick hedgerows, sunken lanes and embankments. Instead of providing easy terrain for Allied armour, it created a maze of defensive positions that German infantry could exploit. American forces advancing inland often had to fight for individual fields and hedgerows. The terrain slowed movement, restricted visibility and made German ambushes particularly dangerous.",
    type: "battle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bundesarchiv_Bild_101I-738-0276-25A%2C_Villers-Bocage%2C_zerst%C3%B6rter_Cromwell-Panzer.jpg",
  },

  {
    id: "cobra",
    title: "Operation Cobra",
    date: "25 July 1944",
    description:
      "After weeks of slow fighting, the Americans attempted to break out of the bocage near Saint-Lô. Operation Cobra began with a massive aerial bombardment intended to rupture German defensive positions. American infantry then pushed through the opening, allowing armoured and mechanized forces to exploit the breakthrough. The breakthrough transformed the campaign. American forces rapidly advanced toward Avranches, and the fighting began shifting from a confined battle around the Normandy beachhead into a war of movement across France.",
    type: "breakthrough",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Cobra_Coutances.jpg/1920px-Cobra_Coutances.jpg",
  },

  {
    id: "falaise",
    title: "The Falaise Pocket",
    date: "12–21 August 1944",
    description:
      "Following the Allied breakthrough, German forces became increasingly vulnerable to encirclement. American forces pushed from the south while British, Canadian and Polish forces advanced from the north, gradually closing around German formations near Falaise and Chambois. The pocket finally closed around 21 August. Large numbers of German troops were killed or captured and enormous quantities of vehicles and equipment were abandoned or destroyed. Some German forces nevertheless managed to escape through the narrowing gap.",
    type: "battle",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Chambois1.jpg/1920px-Chambois1.jpg",
  },

 {
    id: "liberation",
    title: "The Road to Paris",
    date: "August 1944",
    description:
      "The collapse of German resistance in Normandy opened the way for the Allied advance across northern France. German forces began withdrawing toward the Seine while Allied armies moved rapidly eastward. On 25 August 1944, Paris was liberated, marking the symbolic culmination of the Normandy campaign and the beginning of the next phase of the Allied advance toward Germany.",
    type: "outcome",
    image:
      "https://broaden-horizons.fr/wp-content/uploads/2025/09/American-troops-on-the-champs-elysee-29-august-1944-scaled.jpg.avif",
  },
]
};

export const nations = [
    {
      id:"germany",
      name: "Germany",
      designation: "German Reich",
      faction: "Axis",
      image:"/nationsFlags/",
      role: "Primary Axis power in Europe",
      description:
        "Germany drove the expansion of the European Axis, opening the war with the invasion of Poland before launching campaigns across Western Europe and the Soviet Union.",
      keyTheatres: ["Western Europe", "Eastern Front", "North Africa", "Italy"],
      majorCampaigns: [
        "Invasion of Poland",
        "Fall of France",
        "Operation Barbarossa",
        "Battle of Stalingrad",
        "Normandy",
        "Battle of Berlin",
      ],
    },

    {
        id:"britian",
      name: "United Kingdom",
      designation: "British Empire",
       image:"/nationsFlags/",
      faction: "Allied",
      role: "Principal Allied power in Western Europe",
      description:
        "Britain remained at war with Germany after the fall of France and became a central base for Allied operations in Europe, North Africa, and the Atlantic.",
      keyTheatres: [
        "Western Europe",
        "North Africa",
        "Atlantic",
        "Mediterranean",
        "Southeast Asia",
      ],
      majorCampaigns: [
        "Battle of Britain",
        "North African Campaign",
        "Italian Campaign",
        "Normandy",
        "Burma Campaign",
      ],
    },

    {
      id:"sovietUnion",
      name: "Soviet Union",
      designation: "Union of Soviet Socialist Republics",
       image:"/nationsFlags/",
      faction: "Allied",
      role: "Principal Allied power on the Eastern Front",
      description:
        "The Soviet Union bore the main land war against Germany in the east after the German invasion of June 1941, eventually driving German forces back toward Berlin.",
      keyTheatres: ["Eastern Front", "Arctic", "Eastern Europe"],
      majorCampaigns: [
        "Operation Barbarossa",
        "Battle of Moscow",
        "Battle of Stalingrad",
        "Battle of Kursk",
        "Operation Bagration",
        "Battle of Berlin",
      ],
    },

    {
      id:"usa",
      name: "United States",
      designation: "United States of America",
       image:"/nationsFlags/",
      faction: "Allied",
      role: "Principal Allied industrial and military power",
      description:
        "The United States entered the war in December 1941 and subsequently fought major campaigns across Europe, North Africa, and the Pacific while supplying enormous quantities of equipment and material to the Allied war effort.",
      keyTheatres: [
        "Western Europe",
        "North Africa",
        "Pacific",
        "Mediterranean",
      ],
      majorCampaigns: [
        "North African Campaign",
        "Sicily",
        "Normandy",
        "Operation Market Garden",
        "Battle of the Bulge",
        "Pacific Campaign",
      ],
    },

    {
      id:"japan",
      name: "Japan",
      designation: "Empire of Japan",
       image:"/nationsFlags/",
      faction: "Axis",
      role: "Principal Axis power in Asia and the Pacific",
      description:
        "Japan expanded rapidly across East and Southeast Asia and the Pacific, bringing the United States directly into the wider war following the attack on Pearl Harbor.",
      keyTheatres: [
        "China",
        "Southeast Asia",
        "Central Pacific",
        "South Pacific",
      ],
      majorCampaigns: [
        "Second Sino-Japanese War",
        "Pearl Harbor",
        "Malaya",
        "Midway",
        "Guadalcanal",
        "Iwo Jima",
        "Okinawa",
      ],
    },

    {
      id:"italy",
      name: "Italy",
      designation: "Kingdom of Italy",
       image:"/nationsFlags/",
      faction: "Axis → Allied",
      role: "Major Axis power in the Mediterranean",
      description:
        "Italy entered the war alongside Germany and conducted operations across the Mediterranean and North Africa before surrendering to the Allies in September 1943. German forces subsequently occupied much of northern Italy.",
      keyTheatres: ["North Africa", "Mediterranean", "Balkans", "Italy"],
      majorCampaigns: [
        "North African Campaign",
        "East African Campaign",
        "Sicily",
        "Italian Campaign",
        "Monte Cassino",
      ],
    },

    {
      id:"china",
      name: "China",
      designation: "Republic of China",
       image:"/nationsFlags/",
      faction: "Allied",
      role: "Principal Allied power in East Asia",
      description:
        "China had already been fighting Japan for years before the wider world war began and maintained a prolonged conflict against Japanese forces across China.",
      keyTheatres: ["China", "Burma", "Southeast Asia"],
      majorCampaigns: [
        "Second Sino-Japanese War",
        "Battle of Wuhan",
        "Changsha",
        "Burma Campaign",
        "Chinese counteroffensives",
      ],
    },

    {
      id:"france",
      name: "France",
      designation: "French Republic / Free France",
       image:"/nationsFlags/",
      faction: "Allied",
      
      role: "Major European Allied power",
      description:
        "France was defeated and occupied in 1940, but French forces continued the war through Free France, resistance movements, colonial forces, and the eventual liberation of French territory.",
      keyTheatres: ["Western Europe", "North Africa", "Mediterranean"],
      majorCampaigns: [
        "Battle of France",
        "Free French Campaigns",
        "North Africa",
        "Normandy",
        "Liberation of France",
      ],
    },
  ];