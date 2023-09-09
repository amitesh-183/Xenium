import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="py-20 px-20 mt-20">
        <h1 className=" font-black ">Privacy Policy</h1>
        <p className=" py-8 text-xl text-gray-200">
          This privacy policy outlines how our website collects, uses, and
          protects your personal information when you use our services.
        </p>
        <h1 className=" font-black ">Information Collection and Use</h1>
        <p className=" py-4 text-xl text-gray-200">
          When you use our services, we may collect information about you in the
          following ways:
        </p>
        <ul className="py-4 ps-6 list-disc">
          <li>
            <h2 className="font-black text-2xl">
              Information you provide to us:
            </h2>
            <p className=" py-4 text-xl text-gray-200">
              We collect information that you provide to us when you create an
              account, participate in our fantasy league or use our crypto
              services. This may include your name, email address, and payment
              information.
            </p>
          </li>
          <li>
            <h2 className="font-black text-2xl">
              Information we collect automatically:
            </h2>
            <p className=" py-4 text-xl text-gray-200">
              We may automatically collect certain information about your use of
              our services, such as your IP address, device information, and
              browsing behavior.
            </p>
          </li>
        </ul>
        <p className="pb-8 text-xl text-gray-200">
          We use this information to provide and improve our services,
          personalize your experience, and communicate with you about our
          products and services.
        </p>
        <h1 className=" font-black ">Information Sharing</h1>
        <p className=" py-8 text-xl text-gray-200">
          We do not sell or share your personal information with third parties
          for their marketing purposes. We may share your information with
          third-party service providers who help us operate our business and
          provide our services to you. These service providers are required to
          protect your information and use it only for the purposes for which it
          was shared.
        </p>
        <h1 className=" font-black ">Security</h1>
        <p className=" py-8 text-xl text-gray-200">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or method of electronic storage is 100%
          secure. Therefore, we cannot guarantee the absolute security of your
          personal information.{" "}
        </p>
        <h1 className=" font-black ">Changes to this Privacy Policy</h1>
        <p className=" py-8 text-xl text-gray-200">
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page. You
          are advised to review this privacy policy periodically for any
          changes.
        </p>
        <h1 className=" font-black ">Contact Us</h1>
        <p className=" py-4 text-xl text-gray-200">
          If you have any questions about this privacy policy or our practices,
          please contact us at
          [support@ourwebsite.com](mailto:support@ourwebsite.com).
        </p>
        <p className=" py-4 text-xl text-gray-200">
          This is just a sample privacy policy and it is important to tailor it
          to the specific needs of your website and its users. It is also
          important to ensure that it complies with applicable laws and
          regulations.
        </p>
      </div>
      <Footer />
    </>
  );
}
