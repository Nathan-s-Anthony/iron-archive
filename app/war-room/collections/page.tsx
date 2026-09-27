import { collections } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
export default function CollectionsPage() {
  return (
    <div className="">
      <div className="container relative">
        <div className="">
          <div className=" grid max-w-7xl mx-auto grid-cols-2 gap-4 ">
            {collections.catalogFeatured.map((featured, id) => {
              const catType = featured.type.toLowerCase();
              return (
                <div
                  className="group w-full cursor-pointer"
                  key={`${featured.type}-${id}`}
                >
                  <Link href={`/war-room/collections/${catType}`}>
                    <div className="w-full">
                      <div className="diary-paper p-4 w-full h-150  relative archive-modal letter  border border-[#b59e76]  text-[#34302a] shadow-[12px_14px_0_rgba(0,0,0,.18)] ">
                        <h2 className="text-foreground flex justify-center w-full  text-shadow-2xl text-3xl absolute bottom-8">
                          <span className="font-mono-alt relative">
                            {featured.type}
                          </span>
                          <div
                            className={`group-hover:block transition-all duration-300 hidden w-50 -rotate-3 h-1 bg-background -bottom-1 absolute`}
                          ></div>
                        </h2>
                        <div className="h-120 w-full relative overflow-hidden">
                          <Image
                            className="object-cover group-hover:scale-125 duration-300 transition-all"
                            src={featured.image}
                            alt={featured.imageAlt}
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
