"use client";

import Link from "next/link";
import Button from "./button";

export default function Header() {


    const navList = [
        {
            id: 0,
            name: "Collection",
            link: "collections"
        },
        {
            id: 1,
            name: "Battle map",
            link: "battle-map"
        },
        {
            id: 2,
            name: "Timelines",
            link: "timelines",
        },
        {
            id: 3,
            name: "about",
            link: "about",
        }
    ]
    return (
        <header className="fixed z-40 top-0 left-0 right-0">
            <nav className="container">
                <div className="grid grid-cols-3 ">
                    <div className="flex items-center">
                        <Link href="/" className="uppercase text-secondary font-mono text-lg ">The iron archive</Link>
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
                    <div className="text-end">
                        <Button variant="secondary" value="Search Archive" />
                    </div>
                </div>
            </nav>
        </header>
    )
}