import services from "../styles/services.module.css";

export default function Services() {
  return (
    <div id="services" className=" px-28 h-[100vh] pt-16">
      <h1 className="text-center py-6 font-black bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
        Services
      </h1>
      <p className="py-4 text-center px-20">
        Welcome to Xenium, your one-stop destination for cutting-edge crypto and
        fantasy league solutions. Our expert team is passionate about bringing
        innovation to the world of cryptocurrencies and fantasy sports. Explore
        our range of services:
      </p>
      <div>
        <section className={services.container}>
          {/* <h2>Our Sevices</h2> */}
          <div className={services.row}>
            <div className={services.service}>
              <i className="ri-wallet-fill"></i>
              <h3>Crypto Wallet Development</h3>
              <p>
                Securely store, manage, and transact your cryptocurrencies with
                our custom crypto wallet solutions. We offer user-friendly and
                highly secure wallet development to safeguard your digital
                assets.
              </p>
            </div>
            <div className={services.service}>
              <i className="ri-store-3-line" />
              <h3>Fantasy League Platforms</h3>
              <p>
                Dive into the world of fantasy sports with our state-of-the-art
                fantasy league platforms. Engage your users with immersive
                gameplay, real-time stats, and interactive features.
              </p>
            </div>
            <div className={services.service}>
              <i className="ri-bit-coin-line" />
              <h3>Cryptocurrency Exchanges</h3>
              <p>
                Launch your cryptocurrency exchange platform with ease. Our
                development team can create a robust and user-friendly exchange
                that enables seamless trading.
              </p>
            </div>
            <div className={services.service}>
              <i className="ri-instance-fill" />
              <h3>NFT Marketplace</h3>
              <p>
                Capitalize on the NFT craze by establishing your NFT
                marketplace. We provide end-to-end solutions for minting,
                selling, and trading non-fungible tokens.
              </p>
            </div>
            <div className={services.service}>
              <i className="ri-apps-fill" />
              <h3>Fantasy League Apps</h3>
              <p>
                Take fantasy sports to the next level with our fantasy league
                app development services. We design and develop apps that offer
                an unparalleled user experience.
              </p>
            </div>
            <div className={services.service}>
              <i className="ri-secure-payment-fill"></i>
              <h3>Crypto Payment Solutions</h3>
              <p>
                Enhance your e-commerce or online services with crypto payment
                integration. Our solutions make it easy for customers to pay
                using cryptocurrencies.
              </p>
            </div>
            <div className={services.service}>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
