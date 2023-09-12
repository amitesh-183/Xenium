import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="px-4 pt-32 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          This privacy policy outlines how our website collects, uses, and
          protects your personal information when you use our services.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4">
          Information Collection and Use
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
          When you use our services, we may collect information about you in the
          following ways:
        </p>
        <ul className="mb-6 pl-4 list-disc">
          <li>
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">
              Information you provide to us:
            </h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
              We collect information that you provide to us when you create an
              account, participate in our fantasy league, or use our crypto
              services. This may include your name, email address, and payment
              information.
            </p>
          </li>
          <li>
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">
              Information we collect automatically:
            </h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
              We may automatically collect certain information about your use of
              our services, such as your IP address, device information, and
              browsing behavior.
            </p>
          </li>
        </ul>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          We use this information to provide and improve our services,
          personalize your experience, and communicate with you about our
          products and services.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4">
          Information Sharing
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          We do not sell or share your personal information with third parties
          for their marketing purposes. We may share your information with
          third-party service providers who help us operate our business and
          provide our services to you. These service providers are required to
          protect your information and use it only for the purposes for which it
          was shared.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4">
          Security
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or method of electronic storage is 100%
          secure. Therefore, we cannot guarantee the absolute security of your
          personal information.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4">
          Changes to this Privacy Policy
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page. You
          are advised to review this privacy policy periodically for any
          changes.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
          If you have any questions about this privacy policy or our practices,
          please contact us at{" "}
          <a
            href="mailto:support@ourwebsite.com"
            className="text-highlight hover:underline"
          >
            support@xenium.com
          </a>
          .
        </p>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
          This is just a sample privacy policy, and it is important to tailor it
          to the specific needs of your website and its users. It is also
          important to ensure that it complies with applicable laws and
          regulations.
        </p>
      </div>
      <Footer />
    </>
  );
}
