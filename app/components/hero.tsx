"use client";
import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  const stats = [
    {
      id: 0,
      title: "World Wars",
      value: 2,
    },
    {
      id: 0,
      title: "World Wars",
      value: 2,
    },
    {
      id: 0,
      title: "World Wars",
      value: 2,
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="w-screen relative h-250 overflow-hidden">
        <div className="absolute bg-background/85 z-10 block w-full h-full"></div>
        <Image
          width={1200}
          height={300}
          className="w-full object-cover h-full"
          alt="r"
          src={"https://images.unsplash.com/photo-1695120972968-21ffead317fb"}
        />
        <div className="text-primary w-full flex  items-center h-full absolute top-0 lg:top-50 left-0 z-20">
          <div className="container">
            <div>
              test
              <div>
                <div className="">test</div>
              </div>
              <div className="test">test</div>
            </div>
            <div className="">
              <div className=" max-w-200 flex flex-col gap-4">
                <span className="uppercase font-mono-alt text-xl text-secondary">
                  featured Artifact 01
                </span>
                <h1 className="">
                  Machines that{" "}
                  <span className="text-secondary font-sans text-italics">
                    changed the sky
                  </span>
                </h1>
                <p className="leading-tight w-[80%]">
                  A living field guide to the aircraft and armoured vehicles
                  that shaped twentieth-century conflict—studied as engineering,
                  remembered as history.
                </p>
                <div className="flex gap-6">
                  <Button
                    onClick={() => router.push("#collections")}
                    variant="primary"
                    value="Explore Collection"
                    className={""}
                  />
                  <Button
                    variant="secondary"
                    value="Next Artifact"
                    className={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-primary w-full flex  items-center absolute bottom-40 left-0 z-20">
          <div className="border-t border-primary/30 w-full">
            <div className="grid grid-cols-"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
