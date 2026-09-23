"use client";

import { useRef, useState, useEffect } from "react";
import { useNavigationEvents } from "../providers/navigationProvider";

export default function Headings({
  invertColor,
  topHeading,
  mainHeadingFirstPart,
  mainHeadingHighlightedPart,
  mainHeadingHighlightedPart2,
  description,
  readExtra,
}: {
  topHeading: string;
  mainHeadingFirstPart: string;
  mainHeadingHighlightedPart: string;
  mainHeadingHighlightedPart2?: string;
  description: string;
  invertColor?: boolean;
  readExtra?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setInView, inView } = useNavigationEvents();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={containerRef}
      className="grid lg:grid-cols-2  items-center mb-6 mt-4"
    >
      <div
        className={`${invertColor ? "text-background" : "text-primary"} flex gap-2 flex-col ${inView ? "animate-slide-in-left" : ""}`}
      >
        <span className={` ${invertColor ? "text-inherit" : "text-primary"}`}>
          {topHeading}
        </span>
        <h2
          className={`font-display text-5xl leading-[.96] tracking-[-.045em]  lg:text-7xl ${invertColor ? "text-inherit" : "text-primary"} `}
        >
          {mainHeadingFirstPart}.
          {!readExtra ? (
            <span>
              <br />
              Read the
            </span>
          ) : (
            ""
          )}
          <span
            className={`font-sans ${invertColor ? "text-inherit" : "text-quaternary"} italic `}
          >
            {mainHeadingHighlightedPart} {mainHeadingHighlightedPart2}
          </span>
        </h2>
      </div>
      <div
        className={`${inView ? "animate-slide-in-right" : ""} flex justify-end `}
      >
        <p
          className={`${invertColor ? "text-inherit" : "text-primary/60"} lg:max-w-2/3 lg:mx-auto`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
