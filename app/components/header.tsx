"use client";

import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const navList = [
        {
            id: 0,
            name: "Collections",
            link: "collections"
        },
        {
            id: 1,
            name: "Nations",
            link: "nations",
        },
        {
            id: 2,
            name: "Battles",
            link: "battle-map"
        },
        {
            id: 3,
            name: "Timelines",
            link: "timelines",
        },

        {
            id: 4,
            name: "about",
            link: "about",
        }
    ]
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${scrolled ? "animate-header-hide" : "animate-header-reveal"} transition-all duration-300 fixed z-40 border-b border-primary/30 top-0 left-0 right-0`}>
            <nav className="container">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center relative">
                            <Link href="/" className="uppercase text-secondary  font-mono text-xl font-sans font-bold"> iron archive</Link>
                        </div>
                        <div className="flex">
                            <div className="block w-full ">
                                <div className="text-primary flex items-center gap-2 text-sm">
                                    <span className="text-sm ">Current Iron Era:</span>
                                    <span className="text-sm bg-secondary px-3 py-1 rounded-xl text-background ">WW2</span>
                                </div>
                            </div>
                            <div className="block w-full">
                                <div className="text-primary flex items-center gap-2 text-sm">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <ul className="flex justify-center gap-4 ">
                            {navList.map((item) => {
                                return (
                                    <li key={item.id}><Link href={`#${item.link}`} className="uppercase text-primary">{item.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="text-end self-center">
                        <Button className="border border-1 hover:bg-primary/30" variant="secondary" value="Search Archive" />
                    </div>
                </div>
            </nav>
        </header>
    )
}