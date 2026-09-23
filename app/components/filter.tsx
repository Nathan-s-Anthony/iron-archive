"use client";

import Button from "./button";

export default function Filter() {
  return (
    <div className="w-full ">
      <div className="container">
        <div className="flex relative flex-wrap justify-start ">
          <div className=" gap-4 flex justify-between flex-wrap">
            <Button
              value={"ALL ARTIFACTS"}
              variant={"tertiary"}
              className={"bg-secondary text-background"}
            />
            <Button value={"AIRCRAFTS"} variant={"tertiary"} className={""} />
            <Button value={"ARMORED"} variant={"tertiary"} className={""} />
            <Button
              value={"SHIPS"}
              variant={"tertiary"}
              className={"border-r border-primary/30"}
            />
          </div>
          <div className=" w-px ml-3 text-center bg-primary/30 mr-3 block"></div>
          <div className=" justify-start flex gap-4">
            <Button
              value={"ALL FACTIONS"}
              variant={"link"}
              className={"px-1"}
            />
            <Button value={"ALLIES"} variant={"link"} className={"px-1"} />
            <Button value={"SOVIET"} variant={"link"} className={"px-1"} />
            <Button
              value={"AXIS"}
              variant={"link"}
              className={"border-r border-primary/30 px-1"}
            />
            <Button
              value={"IMPERIAL JAPAN"}
              variant={"link"}
              className={"border-r border-primary/30 px-1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
