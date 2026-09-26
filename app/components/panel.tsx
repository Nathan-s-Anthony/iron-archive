"use client";

import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import { CampaignTypes } from "../types/campaignTypes";
export default function Panel({ campaigns }: { campaigns: CampaignTypes[] }) {
  const router = useRouter();
  const [activeCampaign, setActiveCampaign] = useState({
    campaign: "normandy",
    id: 0,
  });

  const handleActiveCampaign = (campaign: string, id: number) => {
    setActiveCampaign({
      campaign: campaign,
      id: id,
    });
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex justify-between gap-6">
        <div className="flex-1">
          {campaigns.map((item, id) => {
            return (
              <div
                onClick={() => handleActiveCampaign(item.id, id)}
                className={`p-6 cursor-pointer  border border-foreground/90 transition-all duration-300 text-shadow-xl ${activeCampaign.campaign === item.id ? "bg-foreground/90 shadow-xl" : "bg-none"}`}
                key={item.id}
              >
                <span className="text-primary font-mono-alt text-sm text-shadow-xl">
                  {item.introduction.theatre}
                </span>
                <h6 className="text-primary text-2xl font-sans  text-shadow-xl font-medium">
                  {item.introduction.theatre}
                </h6>
                <p className="text-xs mt-2 font-mono-alt text-shadow-xl">
                  {item.introduction.theatre}
                </p>
              </div>
            );
          })}
        </div>
        <div className="relative overflow-hidden border h-100  border-[#172024]/20 bg-[#d8cfb9] p-3 shadow-xl">
          <div className="absolute bottom-5 right-5 bg-[#172024] px-2 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-[#eae2d2]">
            Schematic map / not to scale
          </div>
        </div>
        <div className="flex-1 border-l border-foreground/30">
          <div className="p-4">
            <h5>
              {campaigns
                .filter((campaign) =>
                  campaign.id.includes(activeCampaign.campaign),
                )
                .map((campaign) => (
                  <div key={campaign.id}>
                    <div>
                      <span className="text-tertiary text-sm">
                        SELECTED CAMPAIGN
                      </span>
                      <h4 className="font-sans font-medium text-foreground text-shadow-xl">
                        test{" "}
                      </h4>
                      <span className="text-xs font-mono-alt text-foreground/80">
                        49°N · 0°W · 156,000 troops landed · D-Day
                      </span>
                    </div>
                  </div>
                ))}
            </h5>
          </div>
        </div>
      </div>
      <Button
        value={"OPEN BATTLE ROOM"}
        variant={"secondary"}
        className={"border border-primary justify-end"}
        onClick={() => router.push("/war-room/battle-forge")}
      />
    </div>
  );
}
