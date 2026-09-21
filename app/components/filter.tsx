"use client";

import Button from "./button";

export default function Filter() {
    return (
        <div className="w-full ">
            <div className="container">
                <div className="flex relative justify-start">
                    <div className="flex flex-nowrap gap-4 justify-between ">
                        <Button value={"ALL ARTIFACTS"} variant={"tertiary"} className={""} />
                        <Button value={"AIRCRAFTS"} variant={"tertiary"} className={""} />
                        <Button value={"ARMORED"} variant={"tertiary"} className={""} />
                        <Button value={"SHIPS"} variant={"tertiary"} className={"border-r border-primary/30"} />

                    </div>
                    <div className=" w-[1px] ml-4 text-center bg-primary/30 mr-4 block"></div>
                    <div className="flex flex-nowrap justify-start">
                        <Button value={"ALL FACTIONS"} variant={"link"} className={""} />
                        <Button value={"ALLIES"} variant={"link"} className={""} />
                        <Button value={"SOVIET"} variant={"link"} className={""} />
                        <Button value={"AXIS"} variant={"link"} className={"border-r border-primary/30"} />
                        <Button value={"IMPERIAL JAPAN"} variant={"link"} className={"border-r border-primary/30"} />
                    </div>
                </div>
            </div>
        </div>
    )
}