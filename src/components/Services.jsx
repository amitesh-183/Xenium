import React, { useEffect } from "react";
import services from "../styles/services.module.css";
// import AOS from "aos";
export default function Services() {
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
    <div id="services" className="py-12 lg:pt-24">
      <h1 className="sec-title">Services</h1>
      <p
        className=" pb-10 text-center text-2xl px-4 lg:px-80"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        Welcome to Xenium, your one-stop destination for cutting-edge crypto and
        fantasy league solutions. Our expert team is passionate about bringing
        innovation to the world of cryptocurrencies and fantasy sports. Explore
        our range of services:
      </p>
      <div>
        <section className={services.container}>
          <div className={services.row}>
            <div className={services.service} data-aos="flip-up">
              <i className="ri-gamepad-fill"></i>
              <h3>Crypto Gaming</h3>
              <p>
                Dive into the world of crypto gaming with our immersive apps.
                Engage in intense cricket battles, challenge your skills in
                fantasy cricket, and experience high-speed racing while earning
                valuable cryptocurrency rewards.
              </p>
            </div>
            <div className={services.service} data-aos="flip-down">
              <i className="ri-graduation-cap-fill"></i>
              <h3>Blockchain Education</h3>
              <p>
                Stay informed and ahead of the curve with our comprehensive
                blockchain education platform. Discover the transformative
                potential of blockchain technology and unlock new possibilities
                in the digital landscape.
              </p>
            </div>
            <div className={services.service} data-aos="flip-up">
              <i className="ri-bit-coin-line" />
              <h3>Cryptocurrency Exchanges</h3>
              <p>
                Launch your cryptocurrency exchange platform with ease. Our
                development team can create a robust and user-friendly exchange
                that enables seamless trading.
              </p>
            </div>
            <div className={services.service} data-aos="flip-down">
              <i className="ri-instance-fill" />
              <h3>NFT Marketplace</h3>
              <p>
                Capitalize on the NFT craze by establishing your NFT
                marketplace. We provide end-to-end solutions for minting,
                selling, and trading non-fungible tokens.
              </p>
            </div>
            <div className={services.service} data-aos="flip-up">
              <i className="ri-apps-fill" />
              <h3>Fantasy League Apps</h3>
              <p>
                Take fantasy sports to the next level with our fantasy league
                app development services. We design and develop apps that offer
                an unparalleled user experience.
              </p>
            </div>
            <div className={services.service} data-aos="flip-down">
              <i className="ri-funds-box-fill"></i>
              <h3>Stock Market Tracking</h3>
              <p>
                Keep your finger on the pulse of the financial world with Coins
                Stand, our innovative stock market app. Monitor stock prices,
                track market trends, and make informed investment decisions.
              </p>
            </div>
            {/* <div className={services.service}>
              <i className="ri-hand-coin-line" />
              <h3>Blockchain Development</h3>
              <p>
                Leverage the power of blockchain technology for transparency and
                security. Our blockchain development services cover smart
                contract development and more.
              </p>
            </div>
            <div className={services.service}>
              <i className="ri-user-5-fill" />
              <h3>Crypto Consultation</h3>
              <p>
                Need guidance in the complex world of cryptocurrencies? Our
                experts provide consultation services to help you navigate
                crypto investments and projects.
              </p>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
