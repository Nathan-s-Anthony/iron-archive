"use client";

import { useModal } from "../../providers/modelProvider";
import ModalArchiveTemplate from "./templates/modalArchive";

export default function Modal() {
  const { modal } = useModal();
  return <div>{modal === "archive" && <ModalArchiveTemplate />}</div>;
}
