"use client";

export default function Button({ value, variant, className }: { value: string, variant: "primary" | "secondary", className: string }) {
    return (
        <button className={` ${className} ${variant} font-mono uppercase  `}>{value}</button>
    )
}