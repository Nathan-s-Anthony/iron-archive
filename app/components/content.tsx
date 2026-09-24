"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { campaigns } from "../data/data";
import NormandyTimeline from "./gsap/timelines/campaign/normandy";
import CampaginTimeline from "./gsap/timelines/campaignTimeline";

gsap.registerPlugin(ScrollTrigger);
export default function PageContent() {
  const campaignsContainer = useRef<HTMLDivElement>(null);
  const campaignResearch = [
    {
      allied: {
        name: "Allied Expeditionary Force",
        troops: "1.53m troops landed by late August",
        armour: "c. 4,000 tanks & self-propelled guns",
        air: "c. 11,000 aircraft committed",
      },
      axis: {
        name: "German forces in Normandy",
        troops: "c. 380,000 troops in the theatre",
        armour: "c. 1,500 tanks & assault guns",
        air: "Limited operational air support",
      },
      diary: {
        date: "07 June 1944",
        byline: "Private diary, 50th (Northumbrian) Division",
        text: "The fields are smaller than any map allows for. Every hedge seems to have a story and every lane ends in smoke.",
        note: "Transcribed excerpt · personal field notebook",
      },
    },
    {
      allied: {
        name: "Soviet Red Army",
        troops: "c. 1.9m personnel in the salient",
        armour: "c. 5,000 tanks & assault guns",
        air: "c. 2,900 aircraft",
      },
      axis: {
        name: "German Army Group Centre & South",
        troops: "c. 780,000 personnel",
        armour: "c. 2,700 tanks & assault guns",
        air: "c. 2,000 aircraft",
      },
      diary: {
        date: "10 July 1943",
        byline: "Red Army field notebook, Central Front",
        text: "The ground shook at first light. We had waited for this attack; still, the sound of it arriving was another thing entirely.",
        note: "Translated excerpt · field notebook",
      },
    },
    {
      allied: {
        name: "British Eighth Army",
        troops: "c. 195,000 personnel",
        armour: "c. 1,000 tanks",
        air: "Desert Air Force support",
      },
      axis: {
        name: "Panzerarmee Afrika",
        troops: "c. 116,000 personnel",
        armour: "c. 500 tanks",
        air: "Constrained by fuel and supply",
      },
      diary: {
        date: "24 October 1942",
        byline: "Commonwealth infantryman, field diary",
        text: "The night was full of dust and noise. We moved by compass, by whispered orders, and by the flashes ahead.",
        note: "Transcribed excerpt · private collection",
      },
    },
  ];
  useGSAP(
    () => {
      const normandy = document.querySelector("#normandy");

      if (!normandy) return;
      const image = normandy.querySelector(".campaign-image");
      const title = normandy.querySelector(".campaign-title");
      const summary = normandy.querySelector(".campaign-summary");
      const imageVeil = normandy.querySelector(".campaign-image-veil");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: normandy,
          start: "center center",
          end: "+=500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      timeline
        // Open the card
        .to(normandy, {
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power3.inOut",
        })

        // Expand image
        .to(
          image,
          {
            scale: 1.35,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            duration: 1,
            ease: "power3.inOut",
          },
          "<",
        )
        .to(
          imageVeil,
          {
            x: 0,
            scale: 1.35,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            duration: 1,
            ease: "power3.inOut",
          },
          "<",
        )

        // Reveal title
        .fromTo(
          title,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
        )

        // Reveal description
        .fromTo(
          summary,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
        );
    },
    {
      scope: campaignsContainer,
    },
  );
  return (
    <>
      <div className="">
        <div className="container">
          <div className="flex flex-col justify-end   py-6 items-center">
            <span className="text-primary/60 mb-0 mt-0">1939-45</span>
            <h1 className="text-primary text-center">Campaign Dossier</h1>
            <p className="max-w-xl mt-6 mb-6 text-center">
              A comprehensive field dossier covering the major campaigns and
              theatres of the Second World War, from the opening offensives of
              1939 to the final campaigns of 1945.
            </p>
          </div>
        </div>
        <div className="flex w-full gap-4 justify-around flex-wrap items-center">
          {campaigns.map((campaign) => {
            return (
              <div className="flex relative justify-between" key={campaign.id}>
                <div className="relative w-80  z-60 h-80 lg:w-120 lg:h-100">
                  <div className="absolute bottom-0 p-6 z-50 text-primary/80">
                    <h4 className="text-primary/90 text-shadow-xl font-sans font-medium text-3xl ">
                      {campaign.name}
                    </h4>
                    <span className="text-inherit text-shadow-xl">
                      {campaign.theatre}
                    </span>
                    <span className="text-inherit text-shadow-xl">
                      {campaign.note}
                    </span>
                    <span className="text-inherit text-shadow-xl">
                      {campaign.scale}
                    </span>
                  </div>
                  <div className=" campaign-image-veil image-veil-3 z-40 absolute inset-0" />
                  <Image
                    alt={campaign.name}
                    fill
                    className="mb-4 campaign-image object-cover  rounded-md "
                    src={campaign.image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CampaginTimeline />
    </>
  );
}
