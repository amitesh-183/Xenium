import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="px-4 pt-20 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
          Terms of Use
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          These terms of use govern your use of our website and its services. By
          using our website, you accept these terms of use in full.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          Eligibility
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          You must be at least 18 years old to use our services. By using our
          services, you represent and warrant that you are at least 18 years old
          and have the legal capacity to enter into a binding contract.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          Use of Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          You may use our services for lawful purposes only. You may not use our
          services in any way that is unlawful, fraudulent, or harmful to
          others.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          User Content
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
          You are responsible for any content that you upload, post, or
          otherwise make available through our services. You represent and
          warrant that you have all necessary rights to upload, post, or
          otherwise make available such content and that such content does not
          infringe the rights of any third party.
        </p>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          We reserve the right to remove any content that we determine, in our
          sole discretion, to be inappropriate or in violation of these terms of
          use.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          Intellectual Property
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Our website and its content are protected by intellectual property
          laws. You may not reproduce, distribute, or otherwise use any content
          on our website without our prior written consent.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          Limitation of Liability
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          To the maximum extent permitted by law, we will not be liable for any
          loss or damage arising from your use of our services, whether direct,
          indirect, incidental, or consequential.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          Changes to these Terms of Use
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          We may update these terms of use from time to time. We will notify you
          of any changes by posting the new terms of use on this page. Your
          continued use of our services after any changes to these terms of use
          constitutes your acceptance of the new terms of use.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
          Governing Law
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
          These terms of use are governed by the laws of the jurisdiction in
          which our company is located. Any disputes arising from or relating to
          these terms of use will be subject to the exclusive jurisdiction of
          the courts of that jurisdiction.
        </p>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">
          This is just a sample terms of use, and it is important to tailor it
          to the specific needs of your website and its users. It is also
          important to ensure that it complies with applicable laws and
          regulations.
        </p>
      </div>
      <Footer />
    </>
  );
}
