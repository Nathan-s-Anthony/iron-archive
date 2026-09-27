export default function CollectionsPage() {
  return (
    <div className="mt-25">
      <div className="container relative ">
        <div className="diary-paper  w-full h-250 archive-modal letter  border border-[#b59e76] p-7 text-[#34302a] shadow-[12px_14px_0_rgba(0,0,0,.18)] lg:p-10"></div>
        <div className="flex absolute top-20  left-0 right-0 mx-auto  justify-between ">
          <blockquote className="w-full mt-12 text-center font-sans text-3xl leading-[1.25]">
            ARCHIVE SEARCH
          </blockquote>
          {/* <p className="font-mono text-nowrap text-xs uppercase tracking-[.13em] text-[#8c3c32]">
            48°N · 20°W
          </p> */}
          {/* <p className="mt-1 font-display text-xl italic">SECURE NORMANDY</p> */}
        </div>
        <div className=" absolute top-20 left-0 w-full flex justify-around">
          <span className="border -rotate-4 w-fit h-fit border-[#8c3c32]/50 px-2 py-1 font-mono text-xs uppercase tracking-[.12em] text-[#8c3c32]">
            ARCHIVE SEARCH
          </span>
          <span className="border w-fit rotate-4 h-fit border-[#8c3c32]/50 px-2 py-1 font-mono text-xs uppercase tracking-[.12em] text-[#8c3c32]">
            CONFIDENTIAL
          </span>
        </div>
      </div>
    </div>
  );
}
