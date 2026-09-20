import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="h-200 block w-full">
        <div>
          <span>THE COLLECTION</span>
          <h2>Explore all artifacts from different</h2>
        </div>
      </div>
    </div>
  );
}
