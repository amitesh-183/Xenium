import { useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarClass = `bg-black shadow text-white fixed z-50 top-0 mx-auto w-full px-4 py-4 md:px-20 
  `;

  return (
    <div id="home relative">
      <nav className={navbarClass}>
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="font-bold text-3xl">
              <Link to="/">Xenium</Link>
            </h1>
          </div>
          <div className="md:flex hidden">
            <ul className="nav flex gap-8 uppercase">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="md:flex hidden">
            <button className="hover:bg-highlight border-accent hover:border-highlight">
              Join Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-highlight p-2 rounded-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden w-full">
            {" "}
            {/* Adjust max-width here */}
            <ul className="nav flex justify-center items-center flex-col gap-4 text-center uppercase mt-4">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <button className="bg-highlight text-white py-2 px-4 rounded-full">
                  Join Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
