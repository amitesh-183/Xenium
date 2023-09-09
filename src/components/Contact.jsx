import contact from "../assets/contact.webp";

import form from "../styles/form.module.css";

export default function Contact() {
  return (
    <div id="contact" className="h-[100vh] pt-16">
      <h1 className="text-center py-16 font-black bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
        Contact
      </h1>
      <div className="flex justify-between px-32">
        <div>
          <img src={contact} className=" rounded-md" width="600" alt="" />
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
          <div>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email-address"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}
