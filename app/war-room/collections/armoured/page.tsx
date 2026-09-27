import { collections } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
export default function ArmoredPage() {
  return (
    <div className="container">
      <h1 className="text-primary">Armoured Vehicles</h1>
      <div className="grid grid-cols-3 gap-4">
        {collections.catalog.map((catalogItem) => {
          const nameLower = catalogItem.name.toLowerCase();
          return (
            <div key={`${catalogItem.name}-${catalogItem.faction}`}>
              <div className="diary-paper p-4 w-full   relative archive-modal letter  border border-[#b59e76]  text-[#34302a] shadow-[12px_14px_0_rgba(0,0,0,.18)] "></div>

              <Link href={`/war-room/collections/${nameLower}`}>
                <div className="w-full">
                  <div className="diary-paper p-4 w-full h-150  relative archive-modal letter  border border-[#b59e76]  text-[#34302a] shadow-[12px_14px_0_rgba(0,0,0,.18)] ">
                    <h2 className="text-foreground flex justify-center w-full  text-shadow-2xl text-3xl absolute bottom-8">
                      <span className="font-mono-alt relative">
                        {catalogItem.name}
                      </span>
                      <div
                        className={`group-hover:block transition-all duration-300 hidden w-50 -rotate-3 h-1 bg-background -bottom-1 absolute`}
                      ></div>
                    </h2>
                    <div className="h-120  bg-secondary w-full relative overflow-hidden">
                      {/* <Image
                            className="object-cover group-hover:scale-125 duration-300 transition-all"
                            src={featured.image}
                            alt={featured.imageAlt}
                            fill
                          /> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
