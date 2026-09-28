"use client";
import { BattleMap } from "battle-timeline-simulator";
import "battle-timeline-simulator/dist/index.css";
export default function BattleViewer() {
  return (
    <BattleMap
      height={220}
      API_KEY={process.env.NEXT_PUBLIC_MAPTILER_KEY}
      workerUrl={"/maplibre/maplibre-gl-worker.mjs"}
      classes={{
        classHeading: "simulator",
        classPara: "2xl ",
        classSimlulatorMenu: {
          classConfigure: "",
        },
      }}
    />
  );
}
