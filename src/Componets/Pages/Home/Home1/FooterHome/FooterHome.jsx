import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterHome = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="py-12 md:px-6 px-4 font-ui-sans-serif bg-gradient-to-br from-[#e9efff] to-[#d6e0f7] text-[#1f2e57]">
        <div className="container mx-auto rounded-xl p-6 bg-white border border-[#b1c5ec] shadow-md">
          <div className="flex flex-wrap -mx-4">
            {/* About Us Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <div>
                <div className="w-16 h-12 mb-4">
                  <Link to="/">
                    <img
                      src="/logo1.png"
                      alt="corecodexa logo"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <p className="text-sm text-[#4a5e84]">
                  We offer tailored web development and software solutions
                  designed to drive your business forward.
                </p>
                <ul className="flex mt-4 space-x-4 text-[#405E98]">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
                    (Icon, i) => (
                      <li key={i}>
                        <Link
                          to="/"
                          className="hover:text-[#2c3f70] transition-transform transform hover:scale-110"
                          aria-label={Icon.name}
                        >
                          <Icon size={18} />
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Company Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h5 className="text-lg font-semibold mb-4 text-[#405E98]">
                Company
              </h5>
              <ul className="space-y-2 text-[#4a5e84] w-fit">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#2c3f70] transition "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project"
                    className="hover:text-[#2c3f70] transition"
                  >
                    Latest Project
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#2c3f70] transition"
                  >
                    IT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#2c3f70] transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
              <h5 className="text-lg font-semibold mb-4 text-[#405E98]">
                Services
              </h5>
              <ul className="space-y-2 text-[#4a5e84]">
                <li>
                  <Link to="/" className="hover:text-[#2c3f70] transition">
                    IT Strategy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#2c3f70] transition">
                    Network Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#2c3f70] transition">
                    Software Audits
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h5 className="text-lg font-semibold mb-4 text-[#405E98]">
                Contact Info
              </h5>
              <ul className="space-y-4 text-[#4a5e84] text-sm">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#405E98] mt-1" />
                  <span className="font-semibold">Goheer Town, Bahawalpur</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-[#405E98] mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:Corecodexa@gmail.com"
                      className="text-[#2c3f70] hover:text-[#405E98] transition"
                    >
                      Corecodexa@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="text-[#405E98] mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-[#2c3f70]">+92 301 6981096</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-6 bg-[#d6e0f7] text-[#405E98] text-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <p>
            © {currentYear} - All Rights Reserved -{" "}
            <span className="font-semibold">CoreCodexa</span>
          </p>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/terms-condition"
                className="hover:text-[#2c3f70] transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#2c3f70] transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
