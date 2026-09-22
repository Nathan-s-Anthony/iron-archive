"use client";

export default function Button({ value, variant, className, onClick }: { value: string, variant: "primary" | "secondary" | "tertiary" | "link", className: string, onClick?: () => void }) {
    return (
        <button onClick={onClick} className={` ${className} ${variant} font-mono uppercase  `}>{value}</button>
    )
}