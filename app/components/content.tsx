"use client";

import Filter from "./filter";
import FilterContent from "./filterContent";
import Image from "next/image";
import Pill from "./pill";
import Headings from "./headings";
import Panel from "./panel";
import { BattleMap } from "battleforge";
export default function PageContent() {
  const campaigns = [
    {
      id: "normandy",
      year: "JUN—AUG 1944",
      name: "Normandy Campaign",
      theatre: "Western Europe",
      location: "49°N · 0°W",
      scale: "156,000 troops landed · D-Day",
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
      id: "kursk",
      year: "JUL—AUG 1943",
      name: "Battle of Kursk",
      theatre: "Eastern Front",
      location: "51°N · 37°E",
      scale: "6,000 armoured vehicles · Citadel",
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
      id: "elalamein",
      year: "OCT—NOV 1942",
      name: "Second El Alamein",
      theatre: "North Africa",
      location: "30°N · 28°E",
      scale: "195,000 men · Lightfoot",
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

  return (
    <div className=" block w-full">
      <div className="container">
        <div
          id="collections"
          data-nav-section-start
          data-nav-section
          className={` flex justify-between items-center border-b border-primary/30 `}
        >
          <Headings
            topHeading={"THE COLLECTION"}
            mainHeadingFirstPart={"Study the artifacts"}
            mainHeadingHighlightedPart={"stories within"}
            description={
              "Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research."
            }
          />
        </div>
      </div>
      <Filter />
      <FilterContent />
      <div className="">
        <div className=" block w-full ">
          <div className="container">
            <div
              id="nations"
              data-nav-section
              className={`flex justify-between items-center border-b border-primary/30`}
            >
              <Headings
                topHeading={"THE NATIONS"}
                mainHeadingFirstPart={"Study the nations"}
                mainHeadingHighlightedPart={"stratgies and"}
                mainHeadingHighlightedPart2={"more within"}
                description={
                  "Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research."
                }
              />
            </div>
            <div className="lg:p-8 mt-8">
              <h4 className="text-primary  mb-4 mt-4 font-mono-alt ">
                Major Nations
              </h4>
              <p className="font-mono">
                These Nations were at the forefront of the wars. View how these
                nations changed warfare and tactics. View what each nation
                focused on and prirotize{" "}
              </p>
            </div>
            <div className="lg:px-8 grid grid-cols-2  lg:grid-cols-4 gap-6  ">
              <div className=" group h-60 lg:h-100 relative">
                <Pill title={"Allied"} />
                <div className="absolute group-hover:scale-115 inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/usa.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 w-full lg:h-100 relative">
                <Pill title={"Allied"} />
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/britian.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 lg:h-100 relative">
                <Pill title={"Axis"} />
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/italy.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 lg:h-100 relative">
                <Pill title={"Axis"} />
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/germany.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 lg:h-100 relative">
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/sovietUnion.jpg"
                  className="object-cover object-top"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 lg:h-100 relative">
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/japan.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div id="campaigns" data-nav-section className=" bg-secondary">
          <div className="container">
            <Headings
              readExtra
              invertColor
              topHeading={"OPERATIONAL HISTORY / OPERATIONS ROOM"}
              mainHeadingFirstPart={"Battles are not points"}
              mainHeadingHighlightedPart={"They are"}
              mainHeadingHighlightedPart2={"movements"}
              description={
                "Read the push and counter-push: objectives, formations, and the terrain that governed every decision."
              }
            />
            <div className="">
              <Panel campaigns={campaigns} />
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container">
            <Headings
              readExtra
              invertColor
              topHeading={"NAVIGATE HISTORY"}
              mainHeadingFirstPart={"Battles are not points"}
              mainHeadingHighlightedPart={"They are"}
              mainHeadingHighlightedPart2={"movements"}
              description={""}
            />
          </div>
        </div>
        {/* <ScrollSmoothing /> */}
        <BattleMap
          API_KEY={process.env.NEXT_PUBLIC_MAPTILER_KEY}
          workerUrl={"/maplibre/maplibre-gl-worker.mjs"}
        />
      </div>
    </div>
  );
}
