"use client";
import Image from "next/image";
import Button from "./button";
export default function Hero() {

    const specimens = [
        { name: 'Supermarine Spitfire', designation: 'Mk. IXc · 1942', faction: 'Allied', era: '1939—45', type: 'Aircraft', detail: 'Single-seat fighter · 1,000+ hp', image: 'https://images.unsplash.com/photo-1693916064465-8036ac1a0756?auto=format&fit=crop&w=1400&q=85', imageAlt: 'Historic aircraft displayed inside a museum', tone: 'from-[#182529]/80 via-transparent' },
        { name: 'M4 Sherman', designation: 'M4A3 · 1942', faction: 'Allied', era: '1939—45', type: 'Armoured', detail: 'Medium tank · 75 mm M3 gun', image: 'https://images.unsplash.com/photo-1779565292206-49a9b5716ad6?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Weathered military tank track and armour', tone: 'from-[#293425]/80 via-transparent' },
        { name: 'Panzerkampfwagen IV', designation: 'Ausf. H · 1943', faction: 'Axis', era: '1939—45', type: 'Armoured', detail: 'Medium tank · 75 mm KwK 40', image: 'https://images.unsplash.com/photo-1695120972968-21ffead317fb?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Armoured vehicle on outdoor display', tone: 'from-[#3a3220]/80 via-transparent' },
        { name: 'Yakovlev Yak-3', designation: 'Series 2 · 1944', faction: 'Soviet', era: '1939—45', type: 'Aircraft', detail: 'Low-altitude fighter · Klimov V-12', image: 'https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Vintage jet aircraft displayed in a hangar', tone: 'from-[#17242b]/80 via-transparent' },
    ]
    return (
        <div className="overflow-hidden w-screen">
            <div className="absolute bg-background/80 z-10 block w-full h-full"></div>
            <div className="w-full relative h-screen block ">
                <div className="text-primary w-full flex items-center  absolute left-0 z-20 h-screen">
                    <div className="container">
                        <div className="flex flex-col gap-6">
                            <div className=" max-w-200">
                                <h1 className="">Machines that changed the sky.</h1>
                                <p>A living field guide to the aircraft and armoured vehicles that shaped twentieth-century conflict—studied as engineering, remembered as history.</p>
                            </div>
                            <div className="flex gap-6">
                                <Button variant="primary" value="Explore Collection" />
                                <Button variant="secondary" value="Next Artifact" />
                            </div>
                        </div>
                    </div>
                </div>
                <Image fill className="object-cover overflow-hidden" alt="r" src={"https://images.unsplash.com/photo-1695120972968-21ffead317fb?auto=format&fit=crop&w=1200&q=85"} />
            </div>
        </div>
    )
}