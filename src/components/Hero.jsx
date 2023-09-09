import heroImg from "../assets/herobg.webp";

export default function Hero() {
  return (
    <div className="">
      <div className=" h-[110vh] pt-16 hero-bg w-full pb-32 flex justify-between items-center gap-20 px-20">
        <div className="cathy-text text-center">
          <h2 className=" text-6xl font-black py-6 px-18">
            Unleash the Power of Apps Join our community and experience the best
            in app services.
          </h2>
          <p className="pb-8 text-gray-200 text-xl px-20">
            Our platform offers a wide range of app services to meet your every
            need. Whether you’re looking to join a fantasy league, trade crypto,
            or explore other exciting options, we’ve got you covered. Our
            user-friendly interface and top-notch security measures ensure a
            seamless and safe experience. Join our community today and discover
            the power of our app services.
          </p>
          <button className=" me-5 bg-highlight">Join Now</button>
          <button>Learn More</button>
        </div>
        {/* <div className="w-[50%]">
          <img src={heroImg} className=" w-[560px] ml-24 rounded" alt="Tech" />
        </div> */}
      </div>
    </div>
  );
}
