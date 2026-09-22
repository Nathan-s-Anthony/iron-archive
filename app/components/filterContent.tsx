"use client";
import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function FilterContent({ }) {

    const router = useRouter();
    return (

        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 px-4 lg:p-8">
                {/* <Image className="col-span-1" alt="jet"src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" /> */}
                <div className="lg:w-full  w-full lg:h-130  h-100   relative ">
                    <div className="absolute group w-fit h-fit py-2 px-4 left-5  font-sans top-5 text-sm inset-0 bg-background text-primary  rounded-md z-40 ">
                        <span title="aircraft" className="uppercase font-sans">Aircraft</span>
                    </div>
                    <div className="absolute group inset-0  z-30 cursor-pointer"></div>
                    <Image alt="jet" className="object-cover group-hover:scale-150" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="lg:w-full lg:h-130 relative">
                    <div className="absolute group w-fit h-fit py-2 px-4 left-5  font-sans top-5 text-sm inset-0 bg-background text-primary  rounded-md z-40 ">
                        <span title="aircraft" className="uppercase font-sans">Aircraft</span>
                    </div>
                    <div className="absolute inset-0 bg-background/30 z-10"></div>
                    <div className="absolute group w-fit h-fit py-2 px-4 left-5  font-sans top-5 text-sm inset-0 bg-background text-primary  rounded-md z-40 ">
                        <span title="aircraft" className="uppercase font-sans">Aircraft</span>
                    </div>
                    <Image alt="jet" className="object-cover" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="lg:w-full lg:h-130 relative">
                    <div className="w-50 h-50  block z-40 absolute bottom-5 left-5">
                        <h3 className="text-xl font-sans text-primary/60">Supermarine Spitfire</h3>
                    </div>
                    <div className="absolute group w-fit h-fit py-2 px-4 left-5  font-sans top-5 text-sm inset-0 bg-background text-primary  rounded-md z-40 ">
                        <span title="aircraft" className="uppercase font-sans">Aircraft</span>
                    </div>
                    <div className="absolute inset-0 bg-background/30 z-10"></div>
                    <Image alt="jet" className="object-cover" fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" />
                </div>
                <div className="lg:w-full lg:h-130 relative flex items-center justify-center">
                    <Link href={"/collections"} className="text-secondary font-mono-alt">View Entire Collection</Link>
                    {/* <Button value="View the entire Collection" onClick={() => router.push("/operations")} variant={"secondary"} className={""} /> */}
                    {/* <div className="absolute group w-fit h-fit py-2 px-4 left-5  font-sans top-5 text-sm inset-0 bg-background text-primary  rounded-md z-40 ">
                        <span title="aircraft" className="uppercase font-sans">Aircraft</span>
                    </div>
                    <div className="absolute inset-0 bg-background/30 z-10"></div>
                    <Image alt="jet" className="object-cover " fill src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85" /> */}
                </div>
            </div>
        </div>
    )
}