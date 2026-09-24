"use client";
import { BattleMap } from "battleforge";
export default function BattleViewer() {
  return (
    <BattleMap
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
