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
      {/* <Banner /> */}
      {/* Navbar-section */}
      <Navbar />
      {/* Hero-section */}
      <Hero />
      {/* Roadmap-section */}
      <div className="bg-[#ffffff]">
        <Roadmap />
      </div>
      {/* Token-section */}
      <div className="bg-[#ffffff]">
        <Token />
      </div>
      {/* Services-section */}
      <div className="bg-[#ffffff]">
        <Services />
      </div>
      {/* Sale-section */}
      <div className="bg-[#ffffff]">
        <Sale />
      </div>
      {/* Contact-section */}
      <div className="bg-[#ffffff]">
        <Contact />
      </div>
      {/* Join-section */}
      <div className="bg-[#ffffff]">
        <Join />
      </div>
      {/* Pre-footer-section */}
      <PreFooter />
      {/* footer-section */}
      <Footer />
    </div>
  );
}
