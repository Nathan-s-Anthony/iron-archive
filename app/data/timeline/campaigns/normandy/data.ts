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
      "The Allies assembled troops, landing craft, aircraft, armour and supplies across southern England while preparing the largest amphibious operation in history.",
    type: "introduction",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "d-day",
    title: "D-Day",
    date: "6 June 1944",
    description:
      "Allied airborne and amphibious forces landed along the Normandy coast across five designated beaches.",
    type: "operation",
    image:
      "https://images.unsplash.com/photo-1505753065532-68713e211a3d?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "beachhead",
    title: "Securing the Beachhead",
    date: "7–12 June 1944",
    description:
      "Allied forces expanded and connected the landing areas while German forces attempted to contain the invasion.",
    type: "operation",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "caen",
    title: "The Battle for Caen",
    date: "June–July 1944",
    description:
      "British and Canadian forces fought for Caen while German armoured formations resisted the Allied advance.",
    type: "battle",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "bocage",
    title: "The Bocage",
    date: "June–July 1944",
    description:
      "The dense hedgerows and enclosed fields of Normandy slowed the Allied advance and created difficult defensive terrain.",
    type: "battle",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "cobra",
    title: "Operation Cobra",
    date: "25 July 1944",
    description:
      "The American breakout from the Normandy bridgehead opened the way for a rapid Allied advance across France.",
    type: "breakthrough",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "falaise",
    title: "The Falaise Pocket",
    date: "12–21 August 1944",
    description:
      "German forces became increasingly surrounded as Allied armies converged around the Falaise area.",
    type: "battle",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },

  {
    id: "liberation",
    title: "The Road to Paris",
    date: "August 1944",
    description:
      "The German withdrawal accelerated as Allied forces moved eastward and Paris was liberated.",
    type: "outcome",
    image:
      "https://images.unsplash.com/photo-1654424931721-01f8487cf5f1?auto=format&fit=crop&w=1600&q=85",
  },
]
};