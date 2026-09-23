"use client";
import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Pill from "./pill";
export default function FilterContent({}) {
  const router = useRouter();
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 px-4 lg:p-8">
        <div className="lg:w-full  w-full lg:h-130  group  h-100  overflow-hidden  relative ">
          <div className="left-5 top-5">
            <Pill title={"aircraft"} />
          </div>
          <div className="flex left-5  absolute bottom-5 w-full z-40">
            <div className="">
              <h4 className="text-primary ">Supermarine Spitfire</h4>
              <p></p>
            </div>
          </div>
          <Image
            alt="jet"
            className="object-cover group-hover:scale-115 cursor-pointer transition-all duration-300"
            fill
            title="jet"
            src="https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85"
          />
        </div>
      </div>
    </div>
  );
}
