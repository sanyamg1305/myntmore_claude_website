import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import WhoWeHelp from "./components/WhoWeHelp";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BenefitsMarquee from "./components/BenefitsMarquee";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <WhoWeHelp />
      <Services />
      <HowItWorks />
      <BenefitsMarquee />
      <Results />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
