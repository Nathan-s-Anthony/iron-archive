"use client";

import Link from "next/link";

export default function SideNav({ scrolled }: { scrolled: boolean }) {
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
    return (
        <nav className={`fixed right-0 p-2 h-60 flex justify-end shadow-xl items-center w-50 z-60 top-50 ${scrolled ? "animate-side-nav-reveal" : "animate-side-nav-hide"}`}>
            <ul className="w-full flex flex-col gap-2">
                {navList.map((item) => {
                    return (
                        <li key={item.id} className="group">
                            <Link href={`#${item.link}`} className="z-10 duration-300 transition-all group-hover:translate-x-25 ">
                                <div className="flex w-full justify-between items-center gap-6">
                                    <span className="text-primary ">{item.name}</span>
                                    <div className="bg-primary flex items-center justify-center relative w-8 h-8 rounded-full">
                                        <div className="bg-secondary inset-0 w-4 h-4 rounded-full"></div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}