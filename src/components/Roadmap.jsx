import "../styles/roadmap.css";
import service4 from "../assets/roadmap/blockchain.jpg";
import service6 from "../assets/roadmap/casino.jpg";
import service1 from "../assets/roadmap/cricket.jpg";
import service2 from "../assets/roadmap/fantasy.jpg";
import service3 from "../assets/roadmap/racing-game.jpg";
import service5 from "../assets/roadmap/trading.jpg";

export default function Roadmap() {
  const backgroundStyle = {
    backgroundImage: `url(${service1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle2 = {
    backgroundImage: `url(${service2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${service3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle4 = {
    backgroundImage: `url(${service4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle5 = {
    backgroundImage: `url(${service5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle6 = {
    backgroundImage: `url(${service6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className=" py-10 px-4 md:px-10 lg:px-20 xl:px-64" id="roadmap">
      <div>
        <h1 className="sec-title mt-20">Our Roadmap</h1>
      </div>
      {/* Service 1 */}
      <div className="flex flex-col md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 left-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          1
        </div>
        <div
          className=" border-4 w-[200px] md:w-[600px] h-[200px] md:h-[300px] rounded-full md:mr-8"
          data-aos="zoom-in-right"
          style={backgroundStyle}
        >
          {/* <img
            src={service1}
            className="w-[200px] md:w-[600px] rounded-full"
            alt=""
          /> */}
        </div>
        <div data-aos="fade-down" data-aos-easing="linear">
          <p className="font-black text-xl">
            {" "}
            Cricket Battle Game with Voice Calling and Crypto Wins{" "}
          </p>
          <p className="">
            Engage in thrilling cricket battles like never before with our
            Cricket Battle Game. Challenge opponents with integrated voice
            calling while earning real cryptocurrency rewards for your
            victories.
          </p>
        </div>
      </div>
      {/* Service 2 */}
      <div className="flex flex-col-reverse md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 right-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          2
        </div>
        <div data-aos="fade-down" data-aos-easing="linear">
          <p className="font-black text-xl text-right">
            {" "}
            Fantasy Cricket Game with Crypto Prizes{" "}
          </p>
          <p className="text-right">
            Enter the world of fantasy cricket and put your skills to the test.
            Compete for the chance to win valuable cryptocurrency prizes, making
            every match a rewarding experience.
          </p>
        </div>
        <div
          className=" border-4 w-[200px] md:w-[540px] h-[200px] md:h-[300px] rounded-full md:ml-8"
          data-aos="zoom-in-left"
          style={backgroundStyle2}
        >
          {/* <img
            src={service2}
            className="w-[200px] md:w-[600px] md:h-[320px] rounded-full"
            alt=""
          /> */}
        </div>
      </div>
      {/* Service 3 */}
      <div className="flex flex-col md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 left-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          3
        </div>
        <div
          className="rounded-full border-4 w-[200px] md:w-[540px] h-[200px] md:h-[300px] pt-4 md:mr-8"
          data-aos="zoom-in-down"
          style={backgroundStyle3}
        >
          {/* <img
            src={service3}
            className="w-[280px] md:w-[600px] h-[300px] md:h-[320px] rounded-full"
            alt=""
          /> */}
        </div>
        <div
          className="pt-10 md:pt-0"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <p className="font-black text-xl">
            {" "}
            Racing Game with Battle and Crypto Rewards{" "}
          </p>
          <p className="">
            Get ready for high-speed action in our Racing Game. Win intense
            battles on the track and earn cryptocurrency rewards, reminiscent of
            classic buggy racing games.
          </p>
        </div>
      </div>
      {/* Service 4 */}
      <div className="flex flex-col-reverse md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 right-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          4
        </div>
        <div
          data-aos="fade-down"
          className="md:text-right"
          data-aos-easing="linear"
        >
          <p className="font-black text-xl">
            {" "}
            Blockchain Educator: Your Gateway to Crypto Knowledge{" "}
          </p>
          <p className="">
            Dive into the world of blockchain education with our all-in-one
            platform. Learn about this transformative technology and stay ahead
            in the crypto landscape.
          </p>
        </div>
        <div
          className="rounded-full border-4 w-[200px] md:w-[540px] h-[200px] md:h-[300px]  md:mr-8"
          data-aos="zoom-in-right"
          style={backgroundStyle4}
        >
          {/* <img
            src={service4}
            className="w-[200px] md:w-[600px] rounded-full"
            alt=""
          /> */}
        </div>
      </div>
      {/* Service 5 */}
      <div className="flex flex-col md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 left-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          5
        </div>
        <div
          className="border-4 rounded-full md:ml-8 w-[200px] md:w-[540px] h-[200px] md:h-[300px]"
          data-aos="zoom-in-left"
          style={backgroundStyle5}
        >
          {/* <img
            src={service5}
            className="w-[200px] md:w-[600px] h-[200px] md:h-[320px] bg-cover rounded-full"
            alt=""
          /> */}
        </div>
        <div data-aos="fade-down" data-aos-easing="linear">
          <p className="font-black text-xl text-left">
            {" "}
            Coins Stand: A New Format for Stock Market Tracking{" "}
          </p>
          <p className="text-left">
            Keep track of the stock market with Coins Stand, our innovative app
            offering a fresh format for monitoring stocks. Stay informed and
            make informed investment decisions.
          </p>
        </div>
      </div>
      {/* Service 6 */}
      <div className="flex flex-col-reverse md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 right-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          6
        </div>

        <div
          className=" md:pt-0 text-right"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <p className="font-black text-xl">
            {" "}
            All-in-One Gaming Platform: Poker, Ludo, Snake, and More{" "}
          </p>
          <p className="">
            Experience the ultimate gaming collection in one platform. Enjoy
            classics like Poker, Ludo, Snake, and 3 Patti, all designed for
            endless entertainment.
          </p>
        </div>
        <div
          className="rounded-full border-4 w-[200px] md:w-[540px] h-[200px] md:h-[300px] pt-4 md:mr-8"
          data-aos="zoom-in-down"
          style={backgroundStyle6}
        >
          {/* <img
            src={service6}
            className="w-[260px] md:w-[600px] h-[260px] md:h-[320px] rounded-full"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}
