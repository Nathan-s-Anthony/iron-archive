"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export default function NationTimeline() {
  const nationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const nationsContainer = document.querySelector("#nations");

      if (!nationsContainer) return;

      const nationHeading = nationsContainer.querySelector(".nation-heading");
      const nationSubHeading =
        nationsContainer.querySelector(".nation-subHeading");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: nationsContainer,
          markers: true,
          start: "top top",

          // end: `+=${2500 + scrollDistance}`,
          end: `+=900`,
          toggleActions: "play none none reverse",
        },
      });
      timeline.fromTo(
        nationHeading,
        {
          y: 300,
          duration: 1,
          ease: "power3.inOut",
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        },
      );
      timeline.fromTo(
        nationSubHeading,
        {
          y: 300,
          duration: 1,
          ease: "power3.inOut",
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        },
      );

      // --------------------------------
      // 1. Open the letter
      // --------------------------------

      // timeline.fromTo(
      //   letter,
      //   {
      //     height: 200,
      //     duration: 1,
      //     ease: "power3.inOut",
      //   },
      //   {
      //     height: "auto",
      //     opacity: 1,
      //     duration: 1,
      //     stagger: 0.08,
      //     ease: "power3.out",
      //   },
      // );
      // --------------------------------
      // 2. Scroll through the contents
      // --------------------------------

      // objectives.forEach((objective) => {
      //   const title = objective.querySelector<HTMLElement>(".objective-title");
      //   const desc = objective.querySelector<HTMLElement>(".objective-desc");
      //   const image = objective.querySelector<HTMLElement>(".objective-image");

      //   if (!title || !desc || !image) return;

      //   const objectiveTimeline = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: objective,
      //       start: "center center",
      //       end: "center center",
      //       toggleActions: "play none none reverse",
      //     },
      //   });

      //   objectiveTimeline
      //     .fromTo(
      //       image,
      //       {
      //         x: -110,
      //         opacity: 0,
      //       },
      //       {
      //         x: 0,
      //         opacity: 1,
      //         duration: 0.6,
      //         ease: "power3.out",
      //       },
      //     )
      //     .fromTo(
      //       title,
      //       {
      //         x: 110,
      //         opacity: 0,
      //       },
      //       {
      //         x: 0,
      //         opacity: 1,
      //         duration: 0.6,
      //         ease: "power3.out",
      //       },
      //       "<",
      //     )
      //     .fromTo(
      //       desc,
      //       {
      //         x: 110,
      //         opacity: 0,
      //       },
      //       {
      //         x: 0,
      //         opacity: 1,
      //         duration: 0.6,
      //         ease: "power3.out",
      //       },
      //       "<0.15",
      //     );
      // });
    },
    {
      scope: nationsContainer,
    },
  );

  return (
    <div>
      <section ref={nationsContainer} className="h-400" id="nations">
        <div className="container">
          <div className="flex flex-col justify-end py-6 items-center">
            <span className="text-primary/60 mb-0 mt-0">Introduction</span>
            <h1 className="text-primary text-center nation-heading">
              Normandy Campaign
            </h1>
            <p className="max-w-xl mt-6 mb-6 text-center nation-subHeading">
              A comprehensive field dossier covering the major campaigns and
              theatres of the Second World War, from the opening offensives of
              1939 to the final campaigns of 1945.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
