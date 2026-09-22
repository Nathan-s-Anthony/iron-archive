"use client";

import { useEffect, useRef, useState } from "react";
import Filter from "./filter";
import FilterContent from "./filterContent";
import Image from "next/image";
import Pill from "./pill";
import Headings from "./headings";
import Panel from "./panel";

export default function PageContent() {
  return (
    <div className=" block w-full">
      <div className="container">
        <div
          id="catalogue"
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
          {/* <div className={`py-4 flex gap-2 flex-col ${inView ? "animate-slide-in-left" : ""}`}>
                        <span className="text-secondary">THE COLLECTION</span>
                        <h2 className="t-3  font-display text-5xl leading-[.96] tracking-[-.045em] text-[#f3ecdf] lg:text-7xl ">Study the artifacts.<br />Read the <span className="font-sans italic text-quaternary">stories within</span></h2>
                    </div>
                    <div className={`${inView ? "animate-slide-in-right" : ""} flex justify-start flex-grow`}>
                        <p className="text-primary/60 ">Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research.</p>
                    </div> */}
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
              className={`  flex justify-between items-center border-b border-primary/30 `}
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
              <p className=" font-mono">
                These Nations were at the forefront of the wars. View how these
                nations changed warfare and tactics. View what each nation
                focused on and prirotize{" "}
              </p>
            </div>
            <div className="lg:px-8 grid  grid-cols-2 grid-rows-2 lg:grid-cols-4 gap-6 lg:grid-rows-2 ">
              <div className=" h-60 lg:h-100 relative">
                <Pill title={"Allied"} />
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
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
            <div className="lg:p-8  mt-8">
              <h4 className="mb-4 mt-4">Minor Nations</h4>
              <p className=" font-mono">
                Minor nations that did not play a major role in the outcome of
                the war but they contributed in other meaningful ways
              </p>
            </div>
            <div className="lg:px-8   grid grid-cols-2 grid-rows-1 lg:grid-cols-4 gap-6 lg:grid-rows-1">
              <div className=" h-60 lg:h-100 relative">
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/usa.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 lg:h-100 relative">
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/britian.jpg"
                  className="object-cover group-hover:scale-125"
                  alt="USA"
                  fill
                />
              </div>
              <div className=" h-60 lg:h-100 relative">
                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                <Image
                  src="/nationsFlags/italy.jpg"
                  className="object-cover"
                  alt="USA"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="campaigns"
          data-nav-section
          className=" p-8 min-h-250 bg-secondary"
        >
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
            <div className="border-background border-b">
              <Panel />
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
      </div>
    </div>
  );
}
