import SubHeader from "../components/subHeader";

export default function WarRoomLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="min-h-full ">
      <SubHeader />
      {children}
    </main>
  );
}
