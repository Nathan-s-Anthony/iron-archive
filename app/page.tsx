import Header from "./components/header";
import Hero from "./components/hero";
import PageContent from "./components/content";
import { NavigationEventsProvider } from "./providers/navigationProvider";
import GSAPCarousel from "./components/gsap/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <GSAPCarousel />
      <PageContent />
    </div>
  );
}
