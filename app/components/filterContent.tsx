"use client";
import Image from "next/image";
export default function FilterContent({ }) {

    return (

        <div className="container">
            <div className="grid grid-cols-2 grid-rows-2">
                {/* <Image className="col-span-1" alt="jet"src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" /> */}
                <div className="lg:w-full  lg:h-130  relative">
                    <div className="absolute inset-0 bg-background/50 z-10"></div>
                    <Image alt="jet" className="object-cover" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="lg:w-full lg:h-130 relative">
                    <div className="absolute inset-0 bg-background/50 z-10"></div>
                    <Image alt="jet" className="object-cover" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="lg:w-full lg:h-130 relative">
                    <div className="absolute inset-0 bg-background/50 z-10"></div>
                    <Image alt="jet" className="object-cover" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="lg:w-full lg:h-130 relative">
                    <div className="absolute inset-0 bg-background/50 z-10"></div>
                    <Image alt="jet" className="object-cover" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
            </div>
        </div>
    )
}