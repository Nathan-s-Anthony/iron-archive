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

  const stats = [
    {
      id: 0,
      name: "World Wars",
      value: "02",
    },
    {
      id: 1,
      name: "Total Artifacts",
      value: "141",
    },
    {
      id: 2,
      name: "Nations ",
      value: "18",
    },
    {
      id: 3,
      name: "Chronogoical Span",
      value: "1939—45",
    },
  ];
  return (
    <div>
      {items.map((item, id) => {
        return (
          <div className={`w-full h-full`} key={id}>
            <Image
              className="w-full object-cover opacity-75 grayscale-20"
              alt={item.imageAlt}
              src={item.image}
              fill
            />
          </div>
        );
      })}

      <div className="">
        <div className="absolute right-0 text-primary items-center lg:h-fit  lg:right-20  top-0 lg:top-50  z-20">
          <div className="container">
            <nav
              className={`absolute right-0 p-2 h-60 flex justify-end z-50 items-center w-70  top-20`}
            >
              <ul className="w-full flex flex-col gap-2">
                {items.map((item, id) => {
                  return (
                    <div
                      className={`w-full flex justify-between h-full`}
                      key={id}
                    >
                      <span
                        className={`font-mono-alt ${id === 0 ? "active-carousel-text" : ""}`}
                      >
                        {item.name}
                      </span>
                      <div className="bg-primary rounded-full w-5 h-5"></div>
                    </div>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 items-center justify-center z-40 left-0 right-0">
          <div className="grid grid-cols-1 border-t border-b border-primary/30">
            {stats.map((item) => {
              return (
                <div
                  className="bottom-0 left-0  border-r border-primary/30 relative 0 right-0 flex flex-col gap-2 "
                  key={item.id}
                ></div>
              );
            })}
            <div className="container lg:py-0">
              <div className=" grid lg:grid-cols-4 items-stretch grid-cols-1 justify-stretch ">
                {stats.map((item, id) => {
                  return (
                    <div
                      className={`${id === 0 ? "lg:px-0 px-4" : "px-4"} ${id === 3 ? "" : "lg:border-r"} w-full py-6  h-30   border-primary/30`}
                      key={id}
                    >
                      <span className="font-sans uppercase text-2xl text-[#f3ecdf]">
                        {item.value}
                      </span>
                      <h4 className="font-mono-alt font-medium uppercase text-primary/60  text-lg">
                        {item.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
