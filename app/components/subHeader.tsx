"use client";

import Link from "next/link";

export default function SubHeader() {
  return (
    <header className="fixed bg-background z-40 border-b border-primary/30 w-full ">
      <div className="flex justify-between items-center w-full">
        <div className="">
          {"<-"}
          <Link
            href="/"
            className="uppercase text-secondary  text-shadow-xl  font-mono-alt  tracking-tight"
          >
            THE iron archive
          </Link>
        </div>
        <div className=" text-center font-mono text-xs uppercase tracking-[.22em] text-primary">
          DOSSIER WAR ROOM
        </div>
        <div className="text-end">
          <button className=" font-mono-alt uppercase border-secondary border text-secondary">
            Enter war room
          </button>
          {/* <Button
            value={"Enter War Room"}
            variant={"none"}
            className={
              "text-xs py-3 px-4 border border-secondary text-secondary"
            }
          /> */}
        </div>
      </div>
    </header>
  );
}
