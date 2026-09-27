"use client";

import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";
import SideNav from "./sideNav";
import { useModal } from "../providers/modelProvider";
import Modal from "./modal/modal";
import { navList } from "../data/data";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledSideNav, setScrolledSideNav] = useState(false);
  const { modal, openModal, closeModal } = useModal();
  const [searchQuery, setSearchQuery] = useState("");
  const pathName = usePathname();
  const router = useRouter();
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
  const onSubmit = (formData: FormData) => {
    const searchQuery = formData.get("search-query") as string;
    if (searchQuery) {
      setSearchQuery(searchQuery);
      console.log("current query", searchQuery);
    }
    // const password = formData.get("password") as string;
    // try {
    //   const response = await loginUser({
    //     email,
    //     password,
    //   }).unwrap();

    //   console.log(response);
    //   if (response.user) {
    //     setIsAuthenticated(true);
    //     router.replace("/dashboard/overview");
    //     console.log(response.message, isAuthenticated);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <>
      <header
        className={`${scrolled ? "animate-header-hide" : "animate-header-reveal"} ${pathName === "/" ? "lg:h-25" : "lg:h-18 bg-background"} lg:block hidden transition-all duration-300 fixed z-100 border-b border-primary/30 top-0 left-0  right-0`}
      >
        <nav className="container">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 group  items-center cursor-pointer">
              {pathName !== "/" && (
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 group-hover:-translate-x-2 transition-all duration-300 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              )}
              <div className="gap-2 flex flex-col">
                {pathName === "/" ? (
                  <Link
                    href="/"
                    className="uppercase text-secondary  text-shadow-xl  font-mono-alt  tracking-tight"
                  >
                    THE iron archive
                  </Link>
                ) : (
                  <span
                    onClick={() => router.back()}
                    className="uppercase text-secondary  text-shadow-xl  font-mono-alt  tracking-tight"
                  >
                    The iron archive
                  </span>
                )}
                {pathName === "/" && (
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-secondary  text-shadow-xl  font-mono-alt  text-xs tracking-tight">
                      Iron Era
                    </span>
                    <span className=" uppercase text-foreground  text-shadow-xl  font-mono text-xs tracking-widest rounded-md px-2 py-1  bg-secondary  ">
                      WW2
                    </span>
                  </div>
                )}
              </div>
            </div>

            {pathName !== "/" && (
              <div>
                <h4 className="uppercase  text-shadow-xl font-mono leading-tight text-sm">
                  WAR ROOM
                </h4>
              </div>
            )}
            {pathName !== "/" && (
              <div>
                <h4 className="uppercase text-secondary   font-mono-alt text-shadow-xl leading-tight text-xs">
                  {"/"}
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

            {pathName === "/" && (
              <form
                id="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(new FormData(e.currentTarget));
                }}
                className=" relative"
              >
                <input
                  name="search-query"
                  id="search-query"
                  className="bg-none text-primary  text-shadow-2xl shadow-2xl  border-primary border px-4 py-2 rounded-md"
                  placeholder="Search Archive..."
                />
                <div className="fixed left-0 right-0 top-25 h-full">
                  <div className="container">{searchQuery}</div>
                </div>
              </form>
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
