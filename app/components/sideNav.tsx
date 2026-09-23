"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useNavigationEvents } from "../providers/navigationProvider";

export default function SideNav({ scrolled }: { scrolled: boolean }) {
  const { activeSection, inView } = useNavigationEvents();
  console.log(activeSection, "active section");

  const navList = [
    {
      id: 0,
      name: "Collections",
      link: "collections",
    },
    {
      id: 1,
      name: "Nations",
      link: "nations",
    },

    {
      id: 2,
      name: "Campaigns",
      link: "campaigns",
    },
    {
      id: 3,
      name: "Timelines",
      link: "timelines",
    },

    {
      id: 4,
      name: "Maps",
      link: "battle-maps",
    },
  ];

  return (
    <nav
      className={` fixed right-5 p-2 h-60 flex justify-end  z-50 items-center w-45  top-50 ${
        !scrolled
          ? "animate-side-nav-reveal"
          : "animate-side-nav-hide opacity-0"
      }}`}
    >
      <ul className="w-full flex flex-col gap-2">
        {navList.map((item) => (
          <li key={item.id} className="group">
            <Link href={`#${item.link}`} className="block w-full py-2">
              <div className="flex justify-end gap-4 items-center">
                <span
                  className={`${activeSection === item.link ? "animate-active-link text-secondary" : ""} text-primary  text-shadow-lg text-end  relative `}
                >
                  {item.name}
                  <div
                    className={`block absolute bg-secondary h-0.5 w-10 bottom-2.5 -right-18 ${activeSection === item.link ? "animate-active-link" : "opacity-0"}`}
                  ></div>
                </span>
                <div className="bg-primary flex items-center justify-center relative  z-60 w-7 h-7 rounded-full">
                  <div
                    className={`${navList.length - 1 === item.id ? "" : " shadow-xl absolute w-[1px] h-8 bg-primary/30 block -bottom-6 z-10"} `}
                  ></div>
                  <div
                    className={` ${
                      activeSection === item.link
                        ? "block opacity-100 animate-thumb-reveal"
                        : "hidden opacity-0 scale-0 "
                    } bg-secondary  inset-0 w-4 h-4 shadow-xl rounded-full `}
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
