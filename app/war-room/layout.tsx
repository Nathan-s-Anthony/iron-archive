"use client";
import { usePathname } from "next/navigation";
import Header from "../components/header";

export default function WarRoomLayout({ children }: LayoutProps<"/">) {
  const pathName = usePathname();
  const checkHome = pathName !== "/" ? "mt-18" : "";
  return (
    <main className={`min-h-full ${checkHome}`}>
      <Header />
      {children}
    </main>
  );
}
