import { useEffect } from "react";
// import AOS from "aos";

export default function Sale() {
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

  return (
    <div className="bg-pre py-10 md:py-20">
      <div className="text-shadow bg-slate-300 bg-opacity-40 mx-4 md:mx-20 px-4 md:px-10 lg:px-20 rounded-xl py-8 md:py-10 shadow-black shadow-lg">
        <div data-aos="flip-left">
          <h1 className="sec-title text-highlight text-center">Pre-Sale</h1>
          <div className="text-center md:text-left flex flex-col md:flex-row gap-6 justify-center">
            <div className="text-center md:text-left py-1 px-4 bg-opacity-40 rounded">
              <p className="text-3xl md:text-4xl font-semibold">Pre-sale</p>
              <p className="font-medium text-accent text-xl md:text-2xl text-shadow">
                1 rupees
              </p>
            </div>
            <div className="text-center md:text-left py-1 px-4 bg-opacity-40 rounded">
              <p className="text-3xl md:text-4xl font-semibold">
                Exchange listing Price
              </p>
              <p className="font-medium text-accent text-xl md:text-2xl text-shadow">
                1.30 Paisa
              </p>
            </div>
            <div className="text-center md:text-left py-1 px-4 bg-opacity-40 rounded">
              <p className="text-3xl md:text-4xl font-semibold">Buy-back</p>
              <p className="font-medium text-accent text-xl md:text-2xl text-shadow">
                0.80 Paisa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
