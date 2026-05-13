/* ============================================================================
   APP.JSX – Root Application Component
   ============================================================================
   Assembles all sections into the single-page portfolio layout.
   Import order matches the visual scroll order on the page.
   ============================================================================ */


import Hero from "./components/Hero";
import Experience from "./components/Experience";
import VideoGallery from "./components/VideoGallery";
import Footer from "./components/Footer";
import CardsStack from "./components/CardsStack";
import experienceData from "./data/experienceData";

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <CardsStack>
        {/* Card 1: Hero */}
        <div className="w-full min-h-screen">
          <Hero />
        </div>

        {/* Cards 2 to 5: Individual Experience Roles */}
        {experienceData.map((item, index) => (
          <Experience key={item.id} item={item} showHeader={index === 0} />
        ))}

        {/* Card 6: Projects (VideoGallery) */}
        <div className="w-full min-h-screen bg-bg-primary flex flex-col">
          <VideoGallery />
        </div>
      </CardsStack>

      {/* Footer is now a normal element below the stacked cards */}
      <div className="w-full bg-bg-primary">
        <Footer />
      </div>
    </div>
  );
}
