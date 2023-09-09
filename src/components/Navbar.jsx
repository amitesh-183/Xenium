import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="home">
      <div className=" bg-black fixed z-50 top-0 left-0 w-full flex justify-between items-center px-20 py-4">
        <div className="logo">
          <h1 className=" font-bold text-3xl">
            <Link to="/">Xenium</Link>
          </h1>
        </div>
        <ul className="nav flex gap-8 uppercase">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#apps">Apps</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <button className=" bg-highlight">Join Now</button>
      </div>
    </div>
  );
}
