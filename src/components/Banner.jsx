import React from "react";

export default function Banner() {
  return (
    <div>
      <section
        className=" fixed top-[0] font-black text-xl py-2 text-center text-highlight z-50 w-[100vw] bg-accent tracking-widest text-shadow"
        direction="left"
      >
        Pre-Sale Offer : Pre-Sale ₹1 | Buy Back 0.8 Paisa | Exchange listing
        Price 1.30 Paisa
      </section>

      <div class="info">
        <div class="info__icon"></div>
        <div class="info__title">lorem ipsum dolor sit amet</div>
        <div class="info__close"></div>
      </div>
    </div>
  );
}
