"use client";

import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import Button from "../button";

const sections = [
  {
    name: "Supermarine Spitfire",
    designation: "Mk. IXc · 1942",
    faction: "Allied",
    era: "1939—45",
    type: "Aircraft",
    detail: "Single-seat fighter · 1,000+ hp",
    image:
      "https://images.unsplash.com/photo-1693916064465-8036ac1a0756?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Historic aircraft displayed inside a museum",
  },
  {
    name: "M4 Sherman",
    designation: "M4A3 · 1942",
    faction: "Allied",
    era: "1939—45",
    type: "Armoured",
    detail: "Medium tank · 75 mm M3 gun",
    image:
      "https://images.unsplash.com/photo-1779565292206-49a9b5716ad6?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Weathered military tank track and armour",
  },
  {
    name: "Panzerkampfwagen IV",
    designation: "Ausf. H · 1943",
    faction: "Axis",
    era: "1939—45",
    type: "Armoured",
    detail: "Medium tank · 75 mm KwK 40",
    image:
      "https://images.unsplash.com/photo-1695120972968-21ffead317fb?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Armoured vehicle on outdoor display",
  },
  {
    name: "Yakovlev Yak-3",
    designation: "Series 2 · 1944",
    faction: "Soviet",
    era: "1939—45",
    type: "Aircraft",
    detail: "Low-altitude fighter · Klimov V-12",
    image:
      "https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Vintage jet aircraft displayed in a hangar",
  },
];

export default function GSAPCarousel() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = useRef(0);
  const autoplay = useRef<gsap.core.Tween | null>(null);
  const pausedRef = useRef(false);

  useGSAP(
    () => {
      if (!track.current || !container.current) return;

      const slides = gsap.utils.toArray<HTMLElement>(track.current.children);

      const slideWidth = window.innerWidth;

      gsap.set(track.current, {
        x: 0,
      });

      /*
       * Get the text elements for a slide
       */
      const getSlideElements = (index: number) => {
        const slide = slides[index];

        if (!slide) return [];

        const content = slide.querySelector(".slide-content");

        if (!content) return [];

        return [
          content.querySelector(".slide-faction"),
          content.querySelector(".slide-title"),
          content.querySelector(".slide-designation"),
          content.querySelector(".slide-meta"),
        ].filter(Boolean);
      };

      /*
       * Hide a slide's text
       */
      const hideSlideContent = (index: number) => {
        const elements = getSlideElements(index);

        gsap.set(elements, {
          x: -110,
          opacity: 0,
        });
      };

      /*
       * Reveal a slide's text
       */
      const revealSlideContent = (index: number) => {
        const elements = getSlideElements(index);

        gsap.fromTo(
          elements,
          {
            x: -110,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      };

      /*
       * Hide all slide text initially
       */
      slides.forEach((_, index) => {
        hideSlideContent(index);
      });

      /*
       * First slide reveals immediately on load
       */
      revealSlideContent(0);

      /*
       * Move to a specific slide
       */
      const goToSlide = (index: number) => {
        const nextIndex = Math.max(0, Math.min(index, slides.length - 1));

        const previousIndex = currentSlide.current;

        /*
         * Hide the current slide immediately
         */
        hideSlideContent(previousIndex);

        /*
         * Make sure the incoming slide is hidden
         */
        hideSlideContent(nextIndex);

        currentSlide.current = nextIndex;

        gsap.to(track.current, {
          x: -nextIndex * slideWidth,
          duration: 1,
          ease: "power3.inOut",
          overwrite: true,

          /*
           * The slide has now become active.
           * Reveal its content.
           */
          onComplete: () => {
            revealSlideContent(nextIndex);
          },
        });
      };

      /*
       * Forward
       */
      const handleForward = () => {
        const next =
          currentSlide.current >= slides.length - 1
            ? 0
            : currentSlide.current + 1;

        goToSlide(next);

        /*
         * Restart the autoplay countdown
         */
        autoplay.current?.restart();
      };

      /*
       * Backward
       */
      const handleBackward = () => {
        const previous =
          currentSlide.current <= 0
            ? slides.length - 1
            : currentSlide.current - 1;

        goToSlide(previous);

        /*
         * Restart the autoplay countdown
         */
        autoplay.current?.restart();
      };

      /*
       * Pause / Resume
       */
      const handlePause = () => {
        const nextPaused = !pausedRef.current;

        pausedRef.current = nextPaused;
        setIsPaused(nextPaused);

        if (nextPaused) {
          autoplay.current?.pause();
        } else {
          autoplay.current?.resume();
        }
      };

      /*
       * Autoplay
       *
       * 5 seconds between slides
       */
      autoplay.current = gsap.to(
        {},
        {
          duration: 5,
          repeat: -1,

          onRepeat: () => {
            if (pausedRef.current) return;

            const next =
              currentSlide.current >= slides.length - 1
                ? 0
                : currentSlide.current + 1;

            goToSlide(next);
          },
        },
      );

      /*
       * Connect buttons
       */
      const buttons = container.current.querySelectorAll(
        "[data-carousel-control]",
      );

      buttons.forEach((button) => {
        const control = button.getAttribute("data-carousel-control");

        if (control === "forward") {
          button.addEventListener("click", handleForward);
        }

        if (control === "backward") {
          button.addEventListener("click", handleBackward);
        }

        if (control === "pause") {
          button.addEventListener("click", handlePause);
        }
      });

      /*
       * Cleanup
       */
      return () => {
        autoplay.current?.kill();

        buttons.forEach((button) => {
          const control = button.getAttribute("data-carousel-control");

          if (control === "forward") {
            button.removeEventListener("click", handleForward);
          }

          if (control === "backward") {
            button.removeEventListener("click", handleBackward);
          }

          if (control === "pause") {
            button.removeEventListener("click", handlePause);
          }
        });
      };
    },
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className="relative h-235 overflow-hidden">
      <div ref={track} className="flex h-full w-max">
        {sections.map((section, index) => (
          <div
            key={section.name}
            className="relative flex h-235 w-screen shrink-0 items-center justify-center"
          >
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              priority={index === 0}
              className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-20"
            />

            <div className="image-veil absolute inset-0" />
            <div className="image-veil-2 absolute inset-0" />
            <div className="container relative z-10 flex h-250 w-full flex-col justify-between">
              <div className="slide-content flex h-2/3 flex-col gap-4 justify-end">
                <span className="slide-faction font-mono-alt text-sm uppercase tracking-widest text-secondary">
                  {section.faction}
                </span>
                <h2 className="slide-title text-shadow-xl font-sans text-primary font-medium lg:text-8xl">
                  {section.name}
                </h2>
                <div className="max-w-2xl">
                  <p className="slide-designation text-xl text-shadow-xl leading-tight">
                    A living field guide to the aircraft and armoured vehicles
                    that shaped twentieth-century conflict—studied as
                    engineering, remembered as history.
                  </p>
                  <div className="slide-meta mt-6 flex gap-6 text-sm uppercase tracking-wider text-primary">
                    <span className="border border-secondary bg-none px-4 py-2">
                      {section.era}
                    </span>
                    <span className="border border-secondary bg-none px-4 py-2">
                      {section.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
