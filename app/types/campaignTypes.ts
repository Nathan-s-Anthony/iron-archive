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