"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { normandyCampaign } from "@/app/data/timeline/campaigns/normandy/data";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export default function CampaginTimeline() {
  const campaignsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const introduction = document.querySelector("#introduction");

      if (!introduction) return;

      const letter = introduction.querySelector<HTMLElement>(".letter");

      const objectivesContainer = introduction.querySelector<HTMLElement>(
        ".objectives-container",
      );

      if (!letter || !objectivesContainer) return;
      const objectivesTitles =
        gsap.utils.toArray<HTMLElement>(".objective-title");
      const objectivesImages =
        gsap.utils.toArray<HTMLElement>(".objective-image");
      const objectivesDesc =
        objectivesContainer.querySelector<HTMLElement>(".objective-desc");
      const objectives = gsap.utils.toArray<HTMLElement>(".objectives");
      const totalContentHeight = objectivesContainer.scrollHeight;

      const letterHeight = window.innerHeight * 0.8;

      const scrollDistance = totalContentHeight - letterHeight;
      const contentHeight = objectivesContainer.scrollHeight;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: introduction,
          start: "center center",
          // end: `+=${2500 + scrollDistance}`,
          end: `+=500`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // --------------------------------
      // 1. Open the letter
      // --------------------------------

      timeline.fromTo(
        letter,
        {
          height: 200,
          duration: 1,
          ease: "power3.inOut",
        },
        {
          height: "auto",
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        },
      );
      // --------------------------------
      // 2. Scroll through the contents
      // --------------------------------

      timeline.fromTo(
        objectives,
        {
          y: 300,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "none",
        },
        1,
      );
      objectives.forEach((objective) => {
        const title = objective.querySelector<HTMLElement>(".objective-title");
        const desc = objective.querySelector<HTMLElement>(".objective-desc");
        const image = objective.querySelector<HTMLElement>(".objective-image");

        if (!title || !desc || !image) return;

        const objectiveTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: objective,
            start: "center center",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        });

        objectiveTimeline
          .fromTo(
            image,
            {
              x: -110,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
          )
          .fromTo(
            title,
            {
              x: 110,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "<",
          )
          .fromTo(
            desc,
            {
              x: 110,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "<0.15",
          );
      });
    },
    {
      scope: campaignsContainer,
    },
  );

  return (
    <section className="" id="introduction" ref={campaignsContainer}>
      <div className="container">
        <div className="flex flex-col justify-end py-6 items-center">
          <span className="text-primary/60 mb-0 mt-0">Introduction</span>
          <h1 className="text-primary text-center">Normandy Campaign</h1>
          <p className="max-w-xl mt-6 mb-6 text-center">
            A comprehensive field dossier covering the major campaigns and
            theatres of the Second World War, from the opening offensives of
            1939 to the final campaigns of 1945.
          </p>
        </div>
        <div className="min-h-200 ">
          <article className="diary-paper letter relative   border border-[#b59e76] p-7 text-[#34302a] shadow-[12px_14px_0_rgba(0,0,0,.18)] lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.13em] text-[#8c3c32]">
                  FRANCE 49°N · 0°W
                </p>
                {/* <p className="mt-1 font-display text-xl italic">SECURE NORMANDY</p> */}
              </div>
              <span className="border border-[#8c3c32]/50 px-2 py-1 font-mono text-xs uppercase tracking-[.12em] text-[#8c3c32]">
                CONFIDENTIAL
              </span>
            </div>
            <blockquote className="mt-8 font-display text-3xl leading-[1.25]">
              INVASION OF NORMANDY
            </blockquote>
            <p className="mt-8 border-t border-[#6b5738]/25 pt-3 font-mono text-[9px] uppercase tracking-[.1em] text-[#6b5738]">
              It is time to prepare for the greatest campaign of our time.
            </p>
            <div className="flex absolute bottom-5 left-0 right-0 items-end justify-center">
              {" "}
              {normandyCampaign.timeline.length - 1 && (
                <div className="relative flex w-full items-center justify-end gap-4">
                  <button className="absolute left-1/2 -translate-x-1/2 border hover:bg-[#8c3c32]/80 hover:text-primary border-[#8c3c32]/50 px-2 py-1 font-mono text-sm uppercase tracking-[.12em] text-[#8c3c32]">
                    OPEN LETTER
                  </button>

                  <div className="flex gap-4 mr-4">
                    <button className="border hover:bg-[#8c3c32]/80 hover:text-primary border-[#8c3c32]/50 px-2 py-1 font-mono text-sm uppercase tracking-[.12em] text-[#8c3c32]">
                      READ MORE
                    </button>

                    <button className="border hover:bg-[#8c3c32]/80 hover:text-primary border-[#8c3c32]/50 px-2 py-1 font-mono text-sm uppercase tracking-[.12em] text-[#8c3c32]">
                      VIEW ALL CAMPAIGNS
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="objectives-container   overflow-hidden">
              {normandyCampaign.timeline.map((timeline) => {
                return (
                  <div key={timeline.id}>
                    <div className=" grid grid-cols-2 objectives gap-4 p-6   h-120 mt-10 justify-center">
                      <div className="relative ">
                        <Image
                          src={timeline.image}
                          className="objective-image"
                          alt={timeline.title}
                          fill
                        />
                      </div>
                      <div className="max-w-2xl col-start-2 flex flex-col gap-4 ">
                        <h2 className="text-foreground objective-title">
                          {timeline.title}
                        </h2>
                        <p className="text-foreground objective-desc">
                          {" "}
                          {timeline.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
