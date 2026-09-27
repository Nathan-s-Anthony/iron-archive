"use client";

import { useRef } from "react";
import CampaginTimeline from "./campaignTimeline";
import NationTimeline from "./nationTimeline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  nations,
  normandyCampaign,
} from "@/app/data/timeline/campaigns/normandy/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
export default function TimelinePage() {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useGSAP(
    () => {
      const introduction =
        container.current?.querySelector<HTMLElement>("#introduction");
      const nation = container.current?.querySelector<HTMLElement>("#nation");
      const letter = container.current?.querySelector<HTMLElement>(".letter");
      const objectiveContainer = document.querySelector("#objective-container");

      const objectives = gsap.utils.toArray<HTMLElement>(".objectives");
      const nations = gsap.utils.toArray<HTMLElement>(".nations");

      if (
        !introduction ||
        !letter ||
        !objectiveContainer ||
        !nation ||
        !nations
      )
        return;

      // --------------------------------
      // 1. LETTER OPENING
      // --------------------------------

      gsap.set(letter, {
        height: 200,
        overflow: "hidden",
      });

      // Temporarily allow the letter to reveal its natural height
      gsap.set(letter, {
        height: "auto",
      });

      const letterHeight = letter.scrollHeight;

      const objContainerHeight = objectiveContainer.scrollHeight;

      // Put it back at the collapsed height
      gsap.set(letter, {
        height: 200,
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: introduction,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      introTimeline.to(letter, {
        height: letterHeight + objContainerHeight + 100,
        duration: 1,
        ease: "power3.out",
      });

      // --------------------------------
      // 2. OBJECTIVE ANIMATIONS
      // --------------------------------

      objectives.forEach((objective) => {
        const image = objective.querySelector<HTMLElement>(".objective-image");

        const title = objective.querySelector<HTMLElement>(".objective-title");

        const desc = objective.querySelector<HTMLElement>(".objective-desc");

        if (!image || !title || !desc) return;

        gsap.set([image, title, desc], {
          opacity: 0,
        });

        const objectiveTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: objective,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        objectiveTimeline
          .fromTo(
            image,
            {
              x: -100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
            },
          )
          .fromTo(
            title,
            {
              x: 100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
            },
            "<",
          )
          .fromTo(
            desc,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.35",
          );
      });

      nations.forEach((nation) => {
        const image = nation.querySelector<HTMLElement>(".nation-image");

        const title = nation.querySelector<HTMLElement>(".nation-title");

        const desc = nation.querySelector<HTMLElement>(".nation-desc");

        if (!image || !title || !desc) return;

        gsap.set([image, title, desc], {
          opacity: 0,
        });

        const nationTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: nation,
            pin: true,
            anticipatePin: 1,
            start: "top top",
            toggleActions: "play none none reverse",
          },
        });

        nationTimeline
          .fromTo(
            image,
            {
              y: 100,
              scale: 0.95,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              scale: 1,
              ease: "power3.out",
            },
          )
          .fromTo(
            title,
            {
              y: 100,
              opacity: 0,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scale: 1.12,
            },
            "<",
          )
          .fromTo(
            desc,
            {
              y: 100,
              opacity: 0,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              scale: 1.12,
            },
            "-=0.35",
          );
      });
    },
    {
      scope: container,
    },
  );

  return (
    <div ref={container} className="">
      <section id="introduction">
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
        </div>
        <div className="container">
          <div className="letter-wrapper letter relative  diary-paper">
            <article className="letter">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[.13em] text-[#8c3c32]">
                    FRANCE 49°N · 0°W
                  </p>
                </div>
                <span className="border border-[#8c3c32]/50 absolute right-5 top-3 px-2 py-1 font-mono text-xs uppercase tracking-[.12em] text-[#8c3c32]">
                  CONFIDENTIAL
                </span>
              </div>
              <blockquote className="mt-8 font-sans text-4xl text-center leading-[1.25]">
                INVASION OF NORMANDY
              </blockquote>
              <p className="mt-8 border-t border-[#6b5738]/25 pt-3 font-mono text-[9px] uppercase tracking-[.1em] text-[#6b5738]">
                It is time to prepare for the greatest campaign of our time.
              </p>
              <div className="flex absolute bottom-5 left-0 right-0 items-end justify-center">
                {" "}
                {normandyCampaign.timeline.length - 1 && (
                  <div className="relative flex w-full items-center justify-end gap-4">
                    {/* <button className="absolute left-1/2 -translate-x-1/2 border hover:bg-[#8c3c32]/80 hover:text-primary border-[#8c3c32]/50 px-2 py-1 font-mono text-sm uppercase tracking-[.12em] text-[#8c3c32]">
                    OPEN LETTER
                  </button> */}
                    <div className="flex gap-4 mr-4">
                      <button
                        onClick={() => router.push("/campaigns")}
                        className="border hover:bg-[#8c3c32]/80 hover:text-primary border-[#8c3c32]/50 px-2 py-1 font-mono text-sm uppercase tracking-[.12em] text-[#8c3c32]"
                      >
                        VIEW ALL CAMPAIGNS
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="objectives">
        <div
          id="objective-container"
          className="objectives-container container"
        >
          {normandyCampaign.timeline.map((timeline) => {
            return (
              <div key={timeline.id} className="mb-10 ">
                <div className=" grid grid-cols-2 objectives gap-2 p-6 h-100  justify-center">
                  <div className="relative  lg:h-100 lg:w-full ">
                    <figure className=" z-60">
                      <Image
                        src={timeline.image}
                        className="objective-image object-cover"
                        alt={timeline.title}
                        fill
                      />
                      <figcaption className="z-60 text-shadow-2xl text-sm absolute -bottom-8  w-full">
                        <span>Source:</span>
                        <a
                          className="text-shadow-2xl text-sm text-[#8c3c32]"
                          href="https://broaden-horizons.fr"
                        >
                          Broaden Horizons
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="max-w-2xl col-start-2 flex flex-col gap-4 ">
                    <h2 className="text-foreground text-shadow-2xl objective-title">
                      {timeline.title}
                    </h2>
                    <p className="text-foreground text-shadow-2xl objective-desc">
                      {" "}
                      {timeline.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="nation" className="mt-8">
        <div className="container">
          <div className="flex flex-col justify-end py-6 items-center">
            <span className="text-primary/60 mb-0 mt-0">Nations</span>
            <h1 className="text-primary text-center text-shadow-2xl">
              Major Nations
            </h1>
            <p className="max-w-xl mt-6 mb-6 text-center text-shadow-2xl">
              A comprehensive field dossier covering the major campaigns and
              theatres of the Second World War, from the opening offensives of
              1939 to the final campaigns of 1945.
            </p>
          </div>
        </div>
        <div className=" ">
          {nations.map((nation, id) => {
            return (
              <div
                className="h-screen w-full relative  overflow-hidden nations"
                key={`${nation.faction}-${id}`}
              >
                <div className="image-veil-4 z-70 absolute inset-0 " />
                <div className=" flex flex-col z-60 h-full w-full">
                  <Image
                    className="absolute nation-image w-full h-full object-cover"
                    alt={nation.name}
                    width={400}
                    height={400}
                    src={`${nation.image}${nation.id}.jpg`}
                  />
                  <div className="absolute  z-80 inset-0 flex items-center justify-center gap-4 flex-col">
                    <h2 className="nation-title text-primary text-shadow-2xl  font-mono-alt text-7xl">
                      {nation.name}
                    </h2>
                    <p className="max-w-2xl nation-desc text-shadow-2xl text-primary/80 text-xl">
                      {nation.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="battle-forge">
        <div className="">
          <h2 className="text-primary">BATTLE FORGE</h2>
        </div>
      </section>
    </div>
  );
}
