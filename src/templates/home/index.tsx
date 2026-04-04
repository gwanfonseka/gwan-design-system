import Navbar from "./navbar";
import Hero from "./hero";
import ComponentIntelligence from "./component-intelligence";
import ProductionFlow from "./production-flow";
import CollectiveEvolution from "./collective-evolution";
import FrameworkRoadmap from "./framework-roadmap";
import Founder from "./founder";
import Contact from "./contact";
import Footer from "../shared/footer";

const HomeTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ComponentIntelligence />
      <ProductionFlow />
      <CollectiveEvolution />
      <FrameworkRoadmap />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
