import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import Story from "@/components/Story";
import Team from "@/components/Team";
// import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <Services />
        <TrackRecord />
        <Story />
        <Team />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
