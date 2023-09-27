import { Link } from "react-router-dom";
import { SiDiscord, SiInstagram, SiTelegram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function PreFooter() {
  return (
    <div className="lg:py-24 bg-gray-800 text-white py-10 px-4 lg:px-14 flex flex-col lg:flex-row justify-center lg:justify-evenly gap-4">
      <div className="company text-center lg:text-left">
        <h1 className="font-bold text-2xl lg:text-3xl pb-4">
          <Link to="/">Xenium</Link>
        </h1>
        <p className="text-sm lg:text-base">
          At Xenium, We're Shaping the Future
        </p>
        <ul className="flex gap-4 pt-2 lg:justify-start justify-center">
          <li>
            <SiDiscord className=" text-2xl hover:text-indigo-400 cursor-pointer" />
          </li>
          <li>
            <SiTelegram className=" text-2xl hover:text-blue-400 cursor-pointer" />
          </li>
          <li>
            <FaXTwitter className=" text-2xl hover:text-black cursor-pointer" />
          </li>
          <li>
            <SiInstagram className=" text-2xl hover:text-pink-500 cursor-pointer" />
          </li>
        </ul>
      </div>
      <div className="mt-6 lg:mt-0">
        <ul className="uppercase lg:block flex flex-col items-center justify-center">
          <li>
            <a href="#apps">Apps</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="mt-6 lg:mt-0">
        <ul className="uppercase lg:block flex flex-col items-center justify-center">
          <li>
            <a href="#apps">Crypto</a>
          </li>
          <li>
            <a href="#apps">Games</a>
          </li>
          <li>
            <a href="#">FAQS</a>
          </li>
        </ul>
      </div>
      <div className="mt-6 lg:mt-0 text-center lg:text-left">
        <h4 className="pb-2 text-lg">Subscribe Our Newsletter</h4>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-2 py-1 border border-accent outline-none text-white rounded-full"
        />
        <button className="mt-2 lg:mt-4 bg-highlight px-4 py-1 rounded-full text-white">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
