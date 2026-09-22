import Header from "./components/header";
import Hero from "./components/hero";
import PageContent from "./components/content";
import { NavigationEventsProvider } from "./providers/navigationProvider";

export default function Home() {
  return (
    <NavigationEventsProvider>
      <div>
        <Header />
        <div>
          <Hero />
        </div>
        <PageContent />
      </div>
    </NavigationEventsProvider>
  );
}
