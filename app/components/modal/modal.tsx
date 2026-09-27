"use client";

import { useModal } from "../../providers/modelProvider";
import ModalArchiveTemplate from "./templates/modalArchive";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export default function Modal() {
  const modalRef = useRef<HTMLDivElement>(null);

  const { closeModal, openModal, modal } = useModal();

  if (modal !== "archive" || !modalRef.current) return;

  const openAnimation = () => {
    if (!modalRef.current) return;
    gsap.fromTo(
      modalRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotate: -2,
      },
      {
        opacity: 1,
        scale: 1.03,
        y: 0,
        rotate: 0,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(modalRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "back.out(1.5)",
          });
        },
      },
    );
  };

  const closeAnimation = () => {
    if (!modalRef.current) {
      closeModal();
      return;
    }

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.85,
      y: 40,
      rotate: 2,
      duration: 0.35,
      ease: "power3.in",
      onComplete: closeModal,
    });
  };
  return (
    <div
      ref={modalRef}
      id="modal"
      className="fixed right-0 left-0 mx-auto top-20 block w-2/3 h-180 z-60 bg-red-500"
    >
      <div className="diary-paper archive-modal letter relative  h-full border border-[#b59e76] p-7 text-[#34302a] shadow-[12px_14px_0_rgba(0,0,0,.18)] lg:p-10">
        <button
          onClick={closeAnimation}
          className="text-[#8c3c32]  border-[#8c3c32] border flex items-center absolute right-10 top-5 justify-center text-center  rounded-full"
        >
          <span className="">X</span>
        </button>
        <div className="flex justify-between mt-15">
          <span className="border w-fit h-fit border-[#8c3c32]/50 px-2 py-1 font-mono text-xs uppercase tracking-[.12em] text-[#8c3c32]">
            CONFIDENTIAL
          </span>
          <blockquote className="w-full mt-12 text-center font-sans text-3xl leading-[1.25]">
            ARCHIVE SEARCH
          </blockquote>
          <p className="font-mono text-nowrap text-xs uppercase tracking-[.13em] text-[#8c3c32]">
            48°N · 20°W
          </p>
          {/* <p className="mt-1 font-display text-xl italic">SECURE NORMANDY</p> */}
        </div>
        <div className="">
          <div className="grid grid-cols-2 justify-between">
            <div className="">
              <h6 className="text-[#8c3c32] mt-4 py-2 underline underline-offset-5  font-mono-alt">
                Search Artifacts
              </h6>
              <div className="bg-blue-500">test</div>
            </div>
            <div>
              <h6 className="text-[#8c3c32]  py-2 mt-4 underline underline-offset-5  font-mono-alt">
                Search Tags
              </h6>
              <div className="tags flex">
                <div className="px-4 py-2 text-[#8c3c32]  border border-[#8c3c32]">
                  <span className="text-sm cursor-pointer">ARMORED</span>
                </div>
              </div>
            </div>
          </div>
          <form className="w-full mt-4">
            <input className="rounded-md py-2 bg-primary/60 w-full border- border-[#8c3c32] " />
          </form>
          <div className="min-h-full rounded-bottom-r-md rounded-bottom-l-md  border border-[#8c3c32]">
            Results section
          </div>
        </div>
      </div>
    </div>
  );
  // return <div>{modal === "archive" && <ModalArchiveTemplate />}</div>;
}
