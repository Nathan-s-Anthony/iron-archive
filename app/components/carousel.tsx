"use client";
import Image from "next/image";
import { collections } from "../data/data";
export default function Carousel() {
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
      {collections.carousel.map((collection, id) => {
        return (
          <div className={`w-full h-full`} key={id}>
            <Image
              className="w-full object-cover opacity-75 grayscale-20"
              alt={collection.imageAlt}
              src={collection.image}
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
                {collections.carousel.map((collection, id) => {
                  return (
                    <div
                      className={`w-full flex justify-between h-full`}
                      key={id}
                    >
                      <span
                        className={`font-mono-alt ${id === 0 ? "active-carousel-text" : ""}`}
                      >
                        {collection.name}
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
            {stats.map((collection) => {
              return (
                <div
                  className="bottom-0 left-0  border-r border-primary/30 relative 0 right-0 flex flex-col gap-2 "
                  key={collection.id}
                ></div>
              );
            })}
            <div className="container lg:py-0">
              <div className=" grid lg:grid-cols-4 items-stretch grid-cols-1 justify-stretch ">
                {stats.map((collection, id) => {
                  return (
                    <div
                      className={`${id === 0 ? "lg:px-0 px-4" : "px-4"} ${id === 3 ? "" : "lg:border-r"} w-full py-6  h-30   border-primary/30`}
                      key={id}
                    >
                      <span className="font-sans uppercase text-2xl text-[#f3ecdf]">
                        {collection.value}
                      </span>
                      <h4 className="font-mono-alt font-medium uppercase text-primary/60  text-lg">
                        {collection.name}
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
