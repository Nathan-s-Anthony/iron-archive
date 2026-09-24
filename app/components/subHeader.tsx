"use client";

import Link from "next/link";
import Button from "./button";

export default function SubHeader() {
  return (
    <header className="fixed bg-background z-40 border-b border-primary/30 w-full ">
      <div className="flex justify-between items-center p-3 w-full">
        <div>
          {"<-"}
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[.22em] text-secondary"
          >
            THE iron archive
          </Link>
        </div>
        <div className=" text-center font-mono text-xs uppercase tracking-[.22em] text-primary">
          DOSSIER WAR ROOM
        </div>
        <div className="text-end">
          <Button
            value={"Enter War Room"}
            variant={"none"}
            className={
              "text-xs py-3 px-4 border border-secondary text-secondary"
            }
          />
        </div>
      </div>
    </header>
  );
}
