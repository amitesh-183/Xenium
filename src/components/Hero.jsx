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
    <div className="hero-container mt-20 overflow-hidden relative">
      {/* Video background */}
      {/* <video
        autoPlay
        loop
        muted
        className="fixed hidden md:flex inset-0 md:w-full object-contain -z-10"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Content */}
      <div className=" mx-auto py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-screen-lg mx-auto text-center sticky"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mt-24">
            Pre-Sale Exclusive <br /> Grab Your Tokens at Just 1 Rupee!
          </h2>
          <p className="hidden md:block text-lg py-5 px-20">
            Are you ready to dive into the future of cryptocurrencies?
            Don&apos;t miss our exclusive pre-sale offer where you can secure
            our revolutionary tokens for just 1 Rupee each!
          </p>

          <button className="bg-highlight text-white text-base md:text-xl px-6 mt-4 md:px-10 md:py-4 rounded-lg shadow-md hover:bg-highlight-dark transition duration-300">
            Get Tokens Now
          </button>
          {/* <div
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
          </div> */}
          {/* <div className="flex justify-center text-2xl md:text-3xl pt-8 md:pt-16 animate-bounce">
            <BsChevronDoubleDown />
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly gap-4 py-8 mt-10">
          <div className=" bg-cyan-500 border-black bg-opacity-5 border shadow-md shadow-dkBg rounded-xl w-[80%] md:w-[24rem] flex flex-col items-center gap-4 h-[12rem] py-6 px-4">
            <h3 className=" text-2xl font-semibold underline">
              Lowest Price Ever
            </h3>
            <p className="text-lg text-center">
              At just 1 Rupee, our pre-sale price is an incredible deal you
              won't find elsewhere.
            </p>
          </div>
          <div className=" bg-cyan-500 border-black bg-opacity-5 border shadow-md shadow-dkBg rounded-xl w-[80%] md:w-[24rem] flex flex-col items-center gap-4 h-[12rem] py-6 px-4">
            <h3 className=" text-2xl font-semibold underline">Early Access</h3>
            <p className=" text-lg text-center">
              Enjoy exclusive benefits and be among the first to experience our
              innovative apps.
            </p>
          </div>
          <div className=" bg-cyan-500 border-black bg-opacity-5 border shadow-md shadow-dkBg rounded-xl w-[80%] md:w-[24rem] flex flex-col items-center gap-4 h-[12rem] py-6 px-4">
            <h3 className=" text-2xl font-semibold underline">
              Exclusive Bonuses
            </h3>
            <p className=" text-lg text-center">
              Pre-sale participants will enjoy additional benefits, Cryptos and
              bonuses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
