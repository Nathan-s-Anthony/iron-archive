"use client";

import { useEffect, useRef, useState } from "react";
import Filter from "./filter";
import FilterContent from "./filterContent";
import Image from "next/image";
import Pill from "./pill";

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
                <div id="collections" data-nav-section ref={containerRef} className={` block flex justify-between items-center border-b border-primary/30 `} >
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
            <div className="">
                <div className=" block w-full " >
                    <div className="container">
                        <div id="nations" data-nav-section ref={containerRef} className={` block flex justify-between items-center border-b border-primary/30 `} >
                            <div className={`py-4 flex gap-2 flex-col ${inView ? "animate-slide-in-left" : ""}`}>
                                <span className="text-secondary">THE NATIONS</span>
                                <h2 className="t-3  font-display text-5xl leading-[.96] tracking-[-.045em] text-[#f3ecdf] lg:text-7xl ">Study the Nations.<br />Read the <span className="font-sans italic text-quaternary">stratgies and more within</span></h2>
                            </div>
                            <div className={`${inView ? "animate-slide-in-right" : ""} flex justify-start flex-grow`}>
                                <p className="text-primary/60 ">Filter across theaters, technologies, and factions. Each entry is a starting point for deeper research.</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="text-primary mb-8 mt-8 font-mono-alt ">Major Nations</h4>
                            <p className=" font-mono">These Nations were at the forefront of the wars. View how these nations changed warfare and tactics. View what each nation focused on and prirotize </p>
                        </div>
                        <div className="p-8 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 gap-6 lg:grid-rows-3 ">
                            <div className=" h-100 relative">
                                <Pill title={"Allied"} />
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/usa.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <Pill title={"Allied"} />
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/britian.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <Pill title={"Axis"} />
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/italy.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className="h-100 relative">
                                <Pill title={"Axis"} />

                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/germany.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/sovietUnion.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100  relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/japan.jpg" className="object-cover" alt="USA" fill />
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="">Minor Nations</h4>
                            <p className=" font-mono">Minor nations  that did not play a major role in the outcome of the war but they contributed in other meaningful ways</p>
                        </div>
                        <div className="p-8 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 gap-6 lg:grid-rows-2 ">
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/usa.jpg" className="object-cover" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/britian.jpg" className="object-cover group-hover:scale-125" alt="USA" fill />
                            </div>
                            <div className=" h-100 relative">
                                <div className="absolute group inset-0 bg-background/50 z-30 cursor-pointer"></div>
                                <Image src="/nationsFlags/italy.jpg" className="object-cover" alt="USA" fill />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="operations" data-nav-section className=" p-8 min-h-250 bg-secondary">
                    <div className="container">
                        <h4 className="text-background text-5xl ">Operations Room</h4>
                        <p className="text-background">Explore famous campaigns and how they panned out.</p>
                    </div>

                </div>
                <div id="timelines" data-nav-section className=" p-8 min-h-250 bg-secondary">
                    <div className="container">
                        <h4 className="text-background text-5xl ">Operations Room</h4>
                        <p className="text-background">Explore famous campaigns and how they panned out.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}