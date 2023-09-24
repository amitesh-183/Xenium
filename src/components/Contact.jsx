import React from "react";
import contact from "../assets/contact.webp";
import form from "../styles/form.module.css";

export default function Contact() {
  return (
    <div id="contact" className="py-12 lg:py-24">
      <h1 className="sec-title text-center">Contact</h1>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-36">
        <div className="mb-6 lg:mb-0">
          <img src={contact} className="rounded-md" width="600" alt="" />
        </div>
        <form className={form.form}>
          <span className={form.title}>Subscribe to our newsletter.</span>
          <p className={form.description}>
            Stay in the loop with the latest updates, exclusive offers, and
            exciting news from Xenium by subscribing to our newsletter. Join our
            community of forward-thinkers and be the first to know about the
            newest developments, upcoming app releases, and valuable insights.
            Our newsletter is your direct gateway to a world of innovation and
            convenience. Don't miss out—subscribe today and be part of the
            future!
          </p>
          <div className="flex flex-col lg:flex-row items-center">
            <input
              className="mb-4 lg:mb-0 lg:mr-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email-address"
            />
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 ease-in-out"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
