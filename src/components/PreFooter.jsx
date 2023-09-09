import { Link } from "react-router-dom";
import { SiDiscord, SiTelegram } from "react-icons/si";

export default function PreFooter() {
  return (
    <div>
      <div className=" py-10 px-14 flex justify-evenly">
        <div className="company">
          <div>
            <h1 className=" font-bold text-3xl pb-4">
              <Link to="/">Xenium</Link>
            </h1>
            <p>At Xenium, We're Shaping the Future</p>
          </div>
          <ul className=" flex gap-8 py-6 pt-2 justify-start">
            <li>
              <SiDiscord />
              {/* Discord */}
            </li>
            <li>
              <SiTelegram />
              {/* Telegram */}
            </li>
          </ul>
        </div>
        <div>
          <ul className=" uppercase">
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
        <div>
          <ul className=" uppercase">
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
        <div className="flex flex-col justify-center items-center">
          <div>
            <h4 className="pb-4">Subscribe Our Newsletter</h4>
          </div>
          <div className="pb-5">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className=" px-4 py-1 border border-accent outline-none text-white bg-black rounded-full"
            />
          </div>
          <div>
            <button className=" me-5 bg-highlight">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
