"use client";
import Image from "next/image";
export default function FilterContent({ }) {

    return (

        <div className="container">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-red-500 block">
                    <Image alt="jet" width={500} height={500} src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="bg-red-500 block ">
                    <Image alt="jet" width={500} height={500} src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="bg-red-500 block ">
                    <Image alt="jet" width={500} height={500} src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="bg-red-500 block ">
                    <Image alt="jet" width={500} height={500} src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
            </div>
        </div>
    )
}