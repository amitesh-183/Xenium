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
    <div
      className={`fixed z-50 right-0 bottom-12 hover:bg-red-500 duration-300 ease-in-out font-black text-xl bg-highlight px-6 mr-10 mb-6 py-6 rounded-full ${
        showTopButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <BsArrowUp />
    </div>
  );
}
