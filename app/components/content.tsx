"use client";

import { useEffect, useRef, useState } from "react";
import Filter from "./filter";
import FilterContent from "./filterContent";
import Image from "next/image";

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
            <div className="min-h-250">
                <div className=" block w-full " >
                    <div className="container">
                        <div id="nations" ref={containerRef} className={` block flex justify-between items-center border-b border-primary/30 `} >
                            <div className={`py-4 flex gap-2 flex-col ${inView ? "animate-slide-in-left" : ""}`}>
                                <span className="text-secondary">THE NATIONS</span>
                                <h2 className="t-3  font-display text-5xl leading-[.96] tracking-[-.045em] text-[#f3ecdf] lg:text-7xl ">Study the Nations.<br />Read the <span className="font-sans italic text-quaternary">stratgies and more within</span></h2>
                            </div>
                            <div className={`${inView ? "animate-slide-in-right" : ""} flex justify-start flex-grow`}>
                                <p className="text-primary/60 ">Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research.</p>
                            </div>
                        </div>
                        <h3 className="p-8 text-primary mb-8 mt-8 text-5xl font-mono-alt ">Major Nations</h3>
                        <div className="p-8 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 gap-6 lg:grid-rows-3 ">
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/usa.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>

                                <Image src="/nationsFlags/britian.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>

                                <Image src="/nationsFlags/italy.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100  relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/japan.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/sovietUnion.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className="h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/germany.jpg" className="object-cover" alt="USA" fill />
                            </div>
                        </div>
                        <h3 className="p-8 text-primary mb-8 mt-8 text-5xl font-mono-alt ">Minor Nations</h3>
                        <div className="p-8 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 gap-6 grid-rows-3 ">
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/usa.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>

                                <Image src="/nationsFlags/britian.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>

                                <Image src="/nationsFlags/italy.jpg" className="object-cover" alt="USA" fill />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}