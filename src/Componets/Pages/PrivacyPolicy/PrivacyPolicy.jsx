import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <section className="py-12 md:px-6 px-4 font-ui-sans-serif text-[#1a1a2e]">
        <div className="container mx-auto rounded-lg p-6 border border-[#405E98] bg-white shadow-2xl">
          <div className="flex flex-wrap -mx-4">
            {/* About Us Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-about">
                <div className="flex-shrink-0 w-14 h-16">
                  <Link to="/">
                    <img src="/logo1.png" alt="CoreCodexa logo" />
                  </Link>
                </div>
                <p className="text-sm text-[#1a1a2e]">
                  We offer a range of cutting-edge web development and software
                  solutions tailored to meet the specific needs of our clients.
                </p>
                <ul className="flex mt-4 space-x-4 text-[#405E98]">
                  <Link to="/" className="hover:text-[#2e4374]">
                    <FaFacebookF />
                  </Link>
                  <Link to="/" className="hover:text-[#2e4374]">
                    <FaTwitter />
                  </Link>
                  <Link to="/" className="hover:text-[#2e4374]">
                    <FaLinkedinIn />
                  </Link>
                  <Link to="/" className="hover:text-[#2e4374]">
                    <FaYoutube />
                  </Link>
                </ul>
              </div>
            </div>

            {/* Privacy Policy Content Section */}
            <div className="lg:w-3/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4 text-[#405E98]">
                Privacy Policy
              </h2>
              <p className="text-sm mb-4 text-[#1a1a2e]">
                At <strong>CoreCodexa</strong>, we are committed to protecting
                your privacy. This Privacy Policy outlines how we collect, use,
                and protect your personal information when you visit our website
                or use our services.
              </p>
              <h3 className="font-semibold text-[#2e4374]">
                Information We Collect
              </h3>
              <p className="text-sm mb-4 text-[#1a1a2e]">
                We collect personal information when you contact us, subscribe
                to our newsletter, or use our services. This may include your
                name, email address, and other relevant details.
              </p>
              <h3 className="font-semibold text-[#2e4374]">
                How We Use Your Information
              </h3>
              <p className="text-sm mb-4 text-[#1a1a2e]">
                We use your personal information to respond to your inquiries,
                provide services, and send marketing communications if you have
                opted to receive them.
              </p>
              <h3 className="font-semibold text-[#2e4374]">Data Protection</h3>
              <p className="text-sm mb-4 text-[#1a1a2e]">
                We implement security measures to safeguard your personal
                information from unauthorized access or disclosure. However, no
                method of transmission over the Internet is 100% secure.
              </p>
              <h3 className="font-semibold text-[#2e4374]">Your Rights</h3>
              <p className="text-sm mb-4 text-[#1a1a2e]">
                You have the right to access, correct, or delete your personal
                information. If you wish to exercise these rights, please
                contact us at{" "}
                <a
                  href="mailto:Corecodexa@gmail.com"
                  className="text-[#405E98] underline"
                >
                  Corecodexa@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
