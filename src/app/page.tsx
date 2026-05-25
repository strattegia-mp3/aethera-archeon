import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Location from "../components/sections/Location";
import Footer from "../components/Footer";
import WhatsAppFAB from "../components/ui/WhatsAppFAB";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
