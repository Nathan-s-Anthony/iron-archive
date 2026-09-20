"use client";

export default function Button({ value, variant }: { value: string, variant: "primary" | "secondary" }) {
    return (
        <button className={`${variant} font-mono uppercase  text-primary border-primary border px-4 py-4`}>{value}</button>
    )
}