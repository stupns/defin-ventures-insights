import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import Team from "@/components/Team";
// import Insights from "@/components/Insights";
import FAQ from "@/components/Question.tsx";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <Services />
        <TrackRecord />
        <Team />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
