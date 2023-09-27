import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="message-container  sticky top-16 lg:top-[8.9vh] font-black text-base text-center text-highlight z-[999] w-[100vw] bg-white tracking-widest">
          <div className="message flex justify-between items-center px-6">
            <p className="ms-0 md:ms-96">
              Pre-Sale Offer : Pre-Sale ₹1 | Buy Back 0.8 Paisa | Exchange
              listing Price 1.30 Paisa
            </p>
            <button className="bg-transparent" onClick={handleClose}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
