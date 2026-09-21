"use client";

import { useEffect, useRef, useState } from "react";

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
        <div className="h-150 block w-full flex items-center" >
            <div className="container">
                <div ref={containerRef} className={` block flex justify-between items-center`} >
                    <div className={`${inView ? "animate-slide-in-left" : ""}`}>
                        <span className="text-secondary">THE COLLECTION</span>
                        <h2 className="t-3  font-display text-5xl leading-[.96] tracking-[-.045em] text-[#f3ecdf] lg:text-7xl">Study the objects.<br />Read the <span className="font-sans italic text-quaternary">stories within</span></h2>
                    </div>
                    <div className={`${inView ? "animate-slide-in-right" : ""} flex justify-start flex-grow`}>
                        <p className="text-primary/60 ">Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}