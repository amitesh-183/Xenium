import { BsChevronDoubleDown } from "react-icons/bs";

export default function Hero() {
  const scrollDownABit = () => {
    window.scrollBy({
      top: 800, // Adjust this value to control how much you want to scroll down
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-hero-pattern hero-bg lg:py-36 py-36 bg-cover bg-center bg-fixed">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Unleash the Power of Apps <br />
            Join our community & experience <br /> the best in app services.
          </h2>
          <p className="text-gray-200 text-lg md:text-xl mb-8 px-4 md:px-4">
            Our platform offers a wide range of app services to meet your every
            need. Whether you’re looking to join a fantasy league, trade crypto,
            or explore other exciting options, we’ve got you covered. Our
            user-friendly interface and top-notch security measures ensure a
            seamless and safe experience. Join our community today and discover
            the power of our app services.
          </p>
          <div className="flex md:flex-row items-center justify-center gap-4">
            <button className="bg-highlight text-white text-lg md:text-xl px-6 py-3 md:px-10 md:py-4 rounded-lg shadow-md hover:bg-highlight-dark transition duration-300">
              Join Now
            </button>
            <button
              className="text-gray-500 text-lg md:text-xl px-6 py-3 md:px-10 md:py-4 rounded-lg border border-gray-500 hover:border-transparent hover:bg-gray-800 hover:text-white transition duration-300 mt-2 md:mt-0"
              onClick={scrollDownABit}
            >
              Learn More
            </button>
          </div>
          <div className="flex justify-center text-3xl pt-8 md:pt-16 animate-bounce">
            <BsChevronDoubleDown />
          </div>
        </div>
      </div>
    </div>
  );
}
