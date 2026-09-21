"use client";

import { useEffect, useRef, useState } from "react";
import Filter from "./filter";
import FilterContent from "./filterContent";

export default function PageContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                threshold: 1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div className=" block w-full" >
            <div className="container">
                <div id="collections" ref={containerRef} className={` block flex justify-between items-center border-b border-primary/30 `} >
                    <div className={`py-4 flex gap-2 flex-col ${inView ? "animate-slide-in-left" : ""}`}>
                        <span className="text-secondary">THE COLLECTION</span>
                        <h2 className="t-3  font-display text-5xl leading-[.96] tracking-[-.045em] text-[#f3ecdf] lg:text-7xl ">Study the artifacts.<br />Read the <span className="font-sans italic text-quaternary">stories within</span></h2>
                    </div>
                    <div className={`${inView ? "animate-slide-in-right" : ""} flex justify-start flex-grow`}>
                        <p className="text-primary/60 ">Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research.</p>
                    </div>
                </div>
            </div>
            <Filter />
            <FilterContent />
        </div>
    )
}