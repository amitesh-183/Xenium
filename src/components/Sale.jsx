import { useEffect } from "react";
// import AOS from "aos";
import serv1 from "../assets/services/sale.png";
import serv2 from "../assets/services/rupee.png";
import serv3 from "../assets/services/refresh.png";

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
    <div className="py-4">
      <div className=" mx-4 md:mx-20 px-4 md:px-10 lg:px-20 rounded-xl py-8 md:py-10 ">
        <div data-aos="flip-left">
          <h1 className="sec-title text-center">Pre-Sale</h1>
          <div className="gap-6 flex justify-evenly">
            <div className="text-center flex flex-col justify-center items-center md:text-left py-1 px-4 bg-opacity-40 rounded">
              <img src={serv1} width={80} alt="" />
              <p className="text-3xl md:text-4xl font-semibold">Pre-sale</p>
              <p className="font-medium text-accent text-xl md:text-2xl text-shadow">
                1 rupees
              </p>
            </div>
            <div className="text-center flex flex-col justify-center items-center md:text-left py-1 px-4 bg-opacity-40 rounded">
              <img src={serv2} width={80} alt="" />
              <p className="text-3xl md:text-4xl font-semibold">
                Exchange listing Price
              </p>
              <p className="font-medium text-accent text-xl md:text-2xl text-shadow">
                1.30 Paisa
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center py-1 px-4 bg-opacity-40 rounded">
              <img src={serv3} width={80} alt="" />
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
