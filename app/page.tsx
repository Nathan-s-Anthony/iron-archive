import { Content } from "next/font/google";
import Header from "./components/header";
import Hero from "./components/hero";
import PageContent from "./components/content";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <PageContent />
    </div>
  );
}
