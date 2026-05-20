import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import WhoWeHelp from "./components/WhoWeHelp";
import Industries from "./components/Industries";
import Services from "./components/Services";
import SystemFlow from "./components/SystemFlow";
import BenefitsMarquee from "./components/BenefitsMarquee";
import Testimonials from "./components/Testimonials";
import Promise from "./components/Promise";
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
      <Industries />
      <Services />
      <SystemFlow />
      <BenefitsMarquee />
      <Testimonials />
      <Promise />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
