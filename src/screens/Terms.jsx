import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="py-20 px-20 mt-20">
        <h1 className=" font-black text-5xl ">Terms of Use</h1>
        <p className=" py-8 text-xl text-gray-200">
          These terms of use govern your use of our website and its services. By
          using our website, you accept these terms of use in full.
        </p>
        <h1 className=" font-black text-5xl ">Eligibility</h1>
        <p className="py-8 text-xl text-gray-200">
          You must be at least 18 years old to use our services. By using our
          services, you represent and warrant that you are at least 18 years old
          and have the legal capacity to enter into a binding contract.
        </p>
        <h1 className=" font-black text-5xl ">Use of Services</h1>
        <p className="py-8 text-xl text-gray-200">
          You may use our services for lawful purposes only. You may not use our
          services in any way that is unlawful, fraudulent, or harmful to
          others.
        </p>
        <h1 className=" font-black text-5xl ">User Content</h1>
        <p className=" py-8 text-xl text-gray-200">
          You are responsible for any content that you upload, post, or
          otherwise make available through our services. You represent and
          warrant that you have all necessary rights to upload, post, or
          otherwise make available such content and that such content does not
          infringe the rights of any third party.
        </p>
        <p className=" pb-8 text-xl text-gray-200">
          We reserve the right to remove any content that we determine, in our
          sole discretion, to be inappropriate or in violation of these terms of
          use.
        </p>
        <h1 className=" font-black text-5xl ">Intellectual Property</h1>
        <p className=" py-8 text-xl text-gray-200">
          Our website and its content are protected by intellectual property
          laws. You may not reproduce, distribute, or otherwise use any content
          on our website without our prior written consent.
        </p>
        <h1 className=" font-black text-5xl ">Limitation of Liability</h1>
        <p className=" py-8 text-xl text-gray-200">
          To the maximum extent permitted by law, we will not be liable for any
          loss or damage arising from your use of our services, whether direct,
          indirect, incidental, or consequential.
        </p>
        <h1 className=" font-black text-5xl ">Changes to these Terms of Use</h1>
        <p className=" py-8 text-xl text-gray-200">
          We may update these terms of use from time to time. We will notify you
          of any changes by posting the new terms of use on this page. Your
          continued use of our services after any changes to these terms of use
          constitutes your acceptance of the new terms of use.
        </p>
        <h1 className=" font-black text-5xl ">Governing Law</h1>
        <p className=" py-8 text-xl text-gray-200">
          These terms of use are governed by the laws of the jurisdiction in
          which our company is located. Any disputes arising from or relating to
          these terms of use will be subject to the exclusive jurisdiction of
          the courts of that jurisdiction.
        </p>
        <p className=" pb-8 text-xl text-gray-200">
          This is just a sample terms of use and it is important to tailor it to
          the specific needs of your website and its users. It is also important
          to ensure that it complies with applicable laws and regulations.
        </p>
      </div>
      <Footer />
    </>
  );
}
