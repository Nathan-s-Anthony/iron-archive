export type CampaignIntroductionTypes = {
  id: string;
  date: string;
  theatre: string;
  location:string;
  objective: string;
  strategicImportance: string;
};

export type CampaignTimelineTypes = {
  id: string;
  title: string;
  date: string;
  description: string;
  image:string;
  type: "introduction" | "operation" | "battle" | "breakthrough" | "outcome";
};

export type CampaignTypes = {
  id: string;
  introduction: CampaignIntroductionTypes;
  timeline: CampaignTimelineTypes[];
};

export type NationTypes={
  name:string;
  designation:string;
  faction:string;
  role:string;
  description:string;
  keyTheatres:NationKeyTheatres[],
  majorCampaigns:NationMajorCampaigns[]
}
export type NationKeyTheatres={
  name:string;
  date:string;
}
export type NationMajorCampaigns={
  name:string;
  date:string;
}
      // name: "Germany",
      // designation: "German Reich",
      // faction: "Axis",
      // role: "Primary Axis power in Europe",
      // description:
      //   "Germany drove the expansion of the European Axis, opening the war with the invasion of Poland before launching campaigns across Western Europe and the Soviet Union.",
      // keyTheatres: ["Western Europe", "Eastern Front", "North Africa", "Italy"],
      // majorCampaigns: [
      //   "Invasion of Poland",
      //   "Fall of France",
      //   "Operation Barbarossa",
      //   "Battle of Stalingrad",
      //   "Normandy",
      //   "Battle of Berlin",
      // ],