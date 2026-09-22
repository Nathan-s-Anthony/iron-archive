"use client";

export default function Pill({ title }: { title: string }) {
    return (
        <div className="absolute group w-fit h-fit py-2 px-4 left-5  font-sans top-5 text-sm inset-0 bg-background text-primary  rounded-md z-40 ">
            <span title={title} className="uppercase font-sans">{title}</span>
        </div>
    )
}