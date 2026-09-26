"use client";

import CampaginTimeline from "./campaignTimeline";
import NationTimeline from "./nationTimeline";

export default function TimelinePage() {
  return (
    <div>
      <CampaginTimeline />
      <div id="nations-container">
        <div className="container">
          <div className="flex flex-col justify-end py-6 items-center">
            <span className="text-primary/60 mb-0 mt-0">Introduction</span>
            <h1 className="text-primary text-center nations-heading">
              Normandy Campaign
            </h1>
            <p className="max-w-xl mt-6 mb-6 text-center">
              A comprehensive field dossier covering the major campaigns and
              theatres of the Second World War, from the opening offensives of
              1939 to the final campaigns of 1945.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
