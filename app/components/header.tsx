"use client";

import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";
import SideNav from "./sideNav";
import { useModal } from "../providers/modelProvider";
import Modal from "./modal/modal";
import { navList } from "../data/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledSideNav, setScrolledSideNav] = useState(false);
  const { modal, openModal, closeModal } = useModal();
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 200);
    };
    const handleScrollSideNav = () => {
      setScrolledSideNav(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSideNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSideNav);
    };
  }, []);

  return (
    <>
      <header
        className={`${scrolled ? "animate-header-hide" : "animate-header-reveal"} lg:block hidden transition-all duration-300 fixed z-40 border-b border-primary/30 top-0 left-0 lg:h-25 right-0`}
      >
        <nav className="container">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {pathName !== "/" && <div className="bg-red-500">test</div>}
              <Link
                href="/"
                className="uppercase text-secondary  text-shadow-xl  font-mono-alt  tracking-tight"
              >
                THE iron archive
              </Link>
            </div>
            {pathName !== "/" && (
              <div>
                <h4 className="uppercase font-mono-alt text-sm">
                  {pathName.split("/")[2]} ROOM
                </h4>
              </div>
            )}
            {pathName === "/" && (
              <ul className="flex justify-center gap-4">
                {navList.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={`${item.link}`}
                        className="uppercase relative  block w-fit text-primary"
                      >
                        {item.name}
                        {item.id === 1 && (
                          <div className="absolute top-0 -right-9 z-10">
                            <div className=" relative flex h-6 items-center bg-secondary px-2 text-foreground shadow-sm">
                              <span className="text-[10px] font-mono-alt font-bold tracking-widest">
                                AI
                              </span>
                              <span className="absolute -right-1 top-0 h-full w-1" />
                            </div>
                          </div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {pathName !== "/war-room/collections" && (
              <button
                onClick={() => openModal("archive")}
                className="text-primary border shadow-xl uppercase border-primary/80  text-shadow-xl  font-mono-alt tracking-widest"
              >
                Search archive
              </button>
            )}
          </div>

          {/* <div className="grid grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center relative">
                <Link
                  href="/"
                  className="uppercase text-secondary  text-xl font-sans font-bold"
                >
                  THE iron archive
                </Link>
              </div>
              <div className="flex flex-col">
                <div className="block w-full ">
                  <div className="text-primary flex items-center gap-2 text-sm">
                    <span className="text-sm ">Current Iron Era:</span>
                    <span className="text-sm bg-secondary px-3 py-1 rounded-xl text-background ">
                      WW2
                    </span>
                  </div>
                </div>
                <div className="block w-full">
                  <div className="text-primary flex items-center gap-2 text-sm"></div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <ul className="flex justify-center gap-4 ">
                {navList.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={`${item.link}`}
                        className="uppercase text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="text-end self-center">
              <Button
                className="border  hover:bg-primary/30"
                variant="secondary"
                value="Search Archive"
              />
            </div>
          </div> */}
        </nav>
      </header>
      {/* <SideNav scrolled={scrolledSideNav} /> */}
    </>
  );
}
