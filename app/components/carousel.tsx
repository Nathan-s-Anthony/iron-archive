"use client";
import Image from "next/image";
export default function Carousel() {
  const items = [
    {
      name: "Supermarine Spitfire",
      designation: "Mk. IXc · 1942",
      faction: "Allied",
      era: "1939—45",
      type: "Aircraft",
      detail: "Single-seat fighter · 1,000+ hp",
      image:
        "https://images.unsplash.com/photo-1693916064465-8036ac1a0756?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Historic aircraft displayed inside a museum",
      tone: "from-[#182529]/80 via-transparent",
    },
    {
      name: "M4 Sherman",
      designation: "M4A3 · 1942",
      faction: "Allied",
      era: "1939—45",
      type: "Armoured",
      detail: "Medium tank · 75 mm M3 gun",
      image:
        "https://images.unsplash.com/photo-1779565292206-49a9b5716ad6?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Weathered military tank track and armour",
      tone: "from-[#293425]/80 via-transparent",
    },
    {
      name: "Panzerkampfwagen IV",
      designation: "Ausf. H · 1943",
      faction: "Axis",
      era: "1939—45",
      type: "Armoured",
      detail: "Medium tank · 75 mm KwK 40",
      image:
        "https://images.unsplash.com/photo-1695120972968-21ffead317fb?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Armoured vehicle on outdoor display",
      tone: "from-[#3a3220]/80 via-transparent",
    },
    {
      name: "Yakovlev Yak-3",
      designation: "Series 2 · 1944",
      faction: "Soviet",
      era: "1939—45",
      type: "Aircraft",
      detail: "Low-altitude fighter · Klimov V-12",
      image:
        "https://images.unsplash.com/photo-1782034419865-535c50b9695a?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Vintage jet aircraft displayed in a hangar",
      tone: "from-[#17242b]/80 via-transparent",
    },
  ];
  return (
    <div className=" ">
      {items.map((item, id) => {
        return (
          <div className={`w-full snap-x h-full`} key={id}>
            <Image
              className="w-full object-cover  opacity-75 grayscale-20"
              alt={item.imageAlt}
              src={item.image}
              fill
            />
          </div>
        );
      })}
    </div>
  );
}
