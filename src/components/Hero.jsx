import React, { useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import vid from "../assets/herovbg.mp4";
import "aos/dist/aos.css";
// import AOS from "aos";

export default function Hero() {
  // useEffect(() => {
  //   // Define different AOS options for smaller screens
  //   const aosOptions =
  //     window.innerWidth < 768
  //       ? {
  //           duration: 500, // Adjust the duration for smaller screens
  //           offset: 0, // Adjust the offset for smaller screens
  //         }
  //       : {
  //           duration: 1000, // Default duration
  //           offset: 200, // Default offset
  //         };

  //   AOS.init(aosOptions);
  // }, []);

  const scrollDownABit = () => {
    window.scrollBy({
      top: 800, // Adjust this value to control how much you want to scroll down
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-container lg:py-40 py-24 overflow-hidden relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="fixed hidden md:flex inset-0 md:w-full object-contain -z-10"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-screen-lg mx-auto text-center sticky"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-6">
            Unleash the Power of Apps <br />
            Join our community & experience <br /> the best in app services.
          </h2>
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <button className="bg-highlight text-white text-base md:text-xl px-6 py-3 md:px-10 md:py-4 rounded-lg shadow-md hover:bg-highlight-dark transition duration-300">
              Join Now
            </button>
            <button
              className="text-gray-500 text-base md:text-xl px-6 py-3 md:px-10 md:py-4 rounded-lg border border-gray-500 hover:border-transparent hover:bg-gray-800 hover:text-white transition duration-300 mt-2 md:mt-0"
              onClick={scrollDownABit}
            >
              Learn More
            </button>
          </div>
          <div className="flex justify-center text-2xl md:text-3xl pt-8 md:pt-16 animate-bounce">
            <BsChevronDoubleDown />
          </div>
        </div>
      </div>
    </div>
  );
}
