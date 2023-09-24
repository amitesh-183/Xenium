import "../styles/roadmap.css";
import service4 from "../assets/roadmap/blockchain.jpg";
import service6 from "../assets/roadmap/casino.jpg";
import service1 from "../assets/roadmap/cricket.jpg";
import service2 from "../assets/roadmap/fantasy.jpg";
import service3 from "../assets/roadmap/racing-game.jpg";
import service5 from "../assets/roadmap/trading.jpg";

export default function Roadmap() {
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
          className=" border-4 rounded-full md:mr-8"
          data-aos="zoom-in-right"
        >
          <img
            src={service1}
            className="w-[200px] md:w-[600px] rounded-full"
            alt=""
          />
        </div>
        <div data-aos="fade-down" data-aos-easing="linear">
          <p className="font-black text-xl"> Fantasy League App </p>
          <p className="">
            Get ready for an immersive sports experience! Our upcoming Fantasy
            League App will allow you to create your dream team and compete with
            others in your favorite sports. Stay tuned for exciting leagues,
            player stats, and more.
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
          <p className="font-black text-xl text-right"> Crypto Trading App </p>
          <p className="text-right">
            The world of cryptocurrency is at your fingertips. We are working on
            a Crypto Trading App that will enable you to trade and invest in
            cryptocurrencies effortlessly. Stay updated with real-time market
            data and make informed investment decisions.
          </p>
        </div>
        <div className=" border-4 rounded-full md:ml-8" data-aos="zoom-in-left">
          <img
            src={service2}
            className="w-[200px] md:w-[600px] h-[260px] rounded-full"
            alt=""
          />
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
          className=" bg-cover h-[268px] pt-4 md:mr-8"
          data-aos="zoom-in-down"
        >
          <img
            src={service3}
            className="w-[600px] md:w-[600px] h-[270px] rounded-full"
            alt=""
          />
        </div>
        <div
          className="pt-10 md:pt-0"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <p className="font-black text-xl"> Ludo App </p>
          <p className="">
            Bringing classic board gaming into the digital age! Our Ludo App
            will provide hours of fun and entertainment. Play with friends and
            family, challenge opponents online, and enjoy a modern twist on a
            beloved game.
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
          className="text-right"
          data-aos-easing="linear"
        >
          <p className="font-black text-xl"> Fantasy League App </p>
          <p className="">
            Get ready for an immersive sports experience! Our upcoming Fantasy
            League App will allow you to create your dream team and compete with
            others in your favorite sports. Stay tuned for exciting leagues,
            player stats, and more.
          </p>
        </div>
        <div className="  md:mr-8" data-aos="zoom-in-right">
          <img
            src={service4}
            className="w-[200px] md:w-[600px] rounded-full"
            alt=""
          />
        </div>
      </div>
      {/* Service 5 */}
      <div className="flex flex-col-reverse md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 left-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          5
        </div>
        <div className="border-4 rounded-full md:ml-8" data-aos="zoom-in-left">
          <img
            src={service5}
            className="w-[200px] md:w-[600px] h-[250px] bg-cover rounded-full"
            alt=""
          />
        </div>
        <div data-aos="fade-down" data-aos-easing="linear">
          <p className="font-black text-xl text-left"> Crypto Trading App </p>
          <p className="text-left">
            The world of cryptocurrency is at your fingertips. We are working on
            a Crypto Trading App that will enable you to trade and invest in
            cryptocurrencies effortlessly. Stay updated with real-time market
            data and make informed investment decisions.
          </p>
        </div>
      </div>
      {/* Service 6 */}
      <div className="flex flex-col md:flex-row relative justify-center items-center gap-8 my-8 md:my-16">
        <div
          className="absolute top-0 right-0 rounded-full border-2 border-highlight px-2"
          data-aos="zoom-in-up"
        >
          6
        </div>

        <div
          className="pt-10 md:pt-0 text-right"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <p className="font-black text-xl"> Ludo App </p>
          <p className="">
            Bringing classic board gaming into the digital age! Our Ludo App
            will provide hours of fun and entertainment. Play with friends and
            family, challenge opponents online, and enjoy a modern twist on a
            beloved game.
          </p>
        </div>
        <div className=" h-[268px] pt-4 md:mr-8" data-aos="zoom-in-down">
          <img
            src={service6}
            className="w-[260px] md:w-[600px] h-[270px] rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
