import Apps from "../components/Apps";
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

export default function Home() {
  return (
    <div>
      <Top />
      {/* <Banner /> */}
      {/* Navbar-section */}
      <Navbar />
      {/* Hero-section */}
      <Hero />
      {/* Token-section */}
      <Token />
      {/* Roadmap-section */}
      <Roadmap />
      {/* Apps-section */}
      <Apps />
      {/* Services-section */}
      <Services />
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
