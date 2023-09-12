import React, { useEffect } from "react";
import join from "../assets/join.webp";
import AOS from "aos";
const backgroundStyle = {
  backgroundImage: `url(${join})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Join() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Specify the duration of the animation (in milliseconds)
      offset: 200, // Offset (in pixels) from the bottom of the viewport to trigger the animation
    });
  }, []);
  return (
    <div
      id="join"
      className="relative h-[40vh] overflow-hidden text-white"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full"
        data-aos="fade-up"
      >
        <h1 className="sec-title text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 text-shadow">
          Join Our Community
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center mb-6 text-shadow">
          Become a part of our vibrant community and unlock exclusive benefits.
        </p>
        <div className="join-buttons flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Join Now
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
