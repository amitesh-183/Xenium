import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function Top() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Calculate the scroll position from the top
      const scrollY = window.scrollY;

      // You may need to adjust this threshold depending on your layout
      const scrollThreshold = 200; // Adjust as needed

      // Determine whether to show the "Top" button
      if (scrollY > scrollThreshold) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div className=" relative">
      <div
        className={`fixed z-50 right-4 bottom-12 duration-300 ease-in-out font-black text-xl bg-highlight rounded-full hover:bg-red-500
      px-6 py-6 ${showTopButton ? "block" : "hidden"}
      sm:right-4 sm:bottom-4 sm:px-4 sm:py-4
      md:right-8 md:bottom-8 md:px-5 md:py-5
      lg:right-10 lg:bottom-10 lg:px-6 lg:py-6
      xl:right-12 xl:bottom-12 xl:px-7 xl:py-7`}
        onClick={scrollToTop}
      >
        <BsArrowUp />
      </div>
    </div>
  );
}
