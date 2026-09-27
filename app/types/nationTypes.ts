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