import Apps from "../components/Sale";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import PreFooter from "../components/PreFooter";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Token from "../components/Token";
import Top from "../components/Top";
import Sale from "../components/Sale";

export default function Home() {
  return (
    <div>
      <Top />
      <Banner />
      {/* Navbar-section */}
      <Navbar />
      {/* Hero-section */}
      <Hero />
      {/* Token-section */}
      <Token />
      {/* Roadmap-section */}
      <Roadmap />
      {/* Services-section */}
      <Services />
      {/* Sale-section */}
      <Sale />
      {/* Contact-section */}
      <Contact />
      {/* Join-section */}
      <Join />
      {/* Pre-footer-section */}
      <PreFooter />
      {/* footer-section */}
      <Footer />
    </div>
  );
}
