import join from "../assets/join.webp";
export default function Join() {
  return (
    <div id="join" className="h-[100vh] relative text-black">
      <img
        src={join}
        className=" absolute -z-40 h-[80vh] w-[100vw] filter-join"
        alt=""
      />
      <h1 className="text-center py-6 font-black bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
        Join Our Community
      </h1>
      <div className="mt-80 text-center text-shadow text-white font-bold text-2xl">
        <p>
          Become a part of our vibrant community and unlock exclusive benefits.
        </p>
        <div className="join-buttons text-white py-6">
          <button className=" me-5 bg-highlight">Join Now</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
