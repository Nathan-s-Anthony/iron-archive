"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export default function NationTimeline() {
  const campaignsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const nationsContainer = document.querySelector("#nations-container");

      if (!nationsContainer) return;

      const nationHeading = nationsContainer.querySelector(".nation-heading");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: nationsContainer,
          start: "center center",
          // end: `+=${2500 + scrollDistance}`,
          end: `+=900`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

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
      scope: campaignsContainer,
    },
  );

  return (
    <section className="" id="nations-container">
      <div className="container">test</div>
    </section>
  );
}
