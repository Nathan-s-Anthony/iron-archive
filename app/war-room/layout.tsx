import Header from "../components/header";

export default function WarRoomLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="min-h-full">
      <Header />
      {children}
    </main>
  );
}
