import Header from "./components/header";
import Hero from "./components/hero";
import PageContent from "./components/content";
import { NavigationEventsProvider } from "./providers/navigationProvider";
import GSAPCarousel from "./components/gsap/carousel";
import Footer from "./components/footer";
import Modal from "./components/modal/modal";

export default function Home() {
  return (
    <div>
      <Header />
      <GSAPCarousel />
      <PageContent />
      <Modal />
    </div>
  );
}
