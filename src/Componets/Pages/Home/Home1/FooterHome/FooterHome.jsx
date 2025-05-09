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
  return (
    <>
      <section className="py-12 md:px-6 px-4 font-ui-sans-serif bg-[#1e293b] text-[#f1f5f9]">
        <div className="container mx-auto rounded-lg p-6 border border-[#38bdf8] bg-[#0f172a]">
          <div className="flex flex-wrap -mx-4">
            {/* About Us Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-about">
                <div className="flex-shrink-0 w-20 h-12">
                  <Link to="/">
                    <img src="/logo.png" alt="Sky innovation logo" />
                  </Link>
                </div>
                <p className="text-sm mt-4 text-slate-300">
                  We offer a range of cutting-edge web development and software
                  solutions tailored to meet the specific needs of our clients.
                </p>
                <ul className="flex mt-4 space-x-4 text-slate-300">
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    <FaFacebookF />
                  </Link>
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    <FaTwitter />
                  </Link>
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    <FaLinkedinIn />
                  </Link>
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    <FaYoutube />
                  </Link>
                </ul>
              </div>
            </div>

            {/* Company Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4 text-[#38bdf8]">
                  Company
                </h5>
                <ul className="flex flex-col gap-2 text-slate-300">
                  <Link to="/about" className="hover:text-[#0ea5e9] transition">
                    About Us
                  </Link>
                  <Link
                    to="/project"
                    className="hover:text-[#0ea5e9] transition"
                  >
                    Latest Project
                  </Link>
                  <Link
                    to="/services"
                    className="hover:text-[#0ea5e9] transition"
                  >
                    IT Solutions
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-[#0ea5e9] transition"
                  >
                    Contact Us
                  </Link>
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4 text-[#38bdf8]">
                  Services
                </h5>
                <ul className="flex flex-col gap-2 text-slate-300">
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    IT Strategy
                  </Link>
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    Network Services
                  </Link>
                  <Link to="/" className="hover:text-[#0ea5e9] transition">
                    Software Audits
                  </Link>
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4 text-[#38bdf8]">
                  Contact Info
                </h5>
                <ul className="mb-4 flex flex-col gap-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#38bdf8] mt-1" />
                    <p className="font-semibold">Goheer Town, Bahawalpur</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaEnvelope className="text-[#38bdf8] mt-1" />
                    <div>
                      <p className="font-semibold text-base">Email</p>
                      <a
                        href="mailto:Corecodexa@gmail.com"
                        className="text-sm text-slate-400 hover:text-[#0ea5e9] transition"
                      >
                        Corecodexa@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaPhone className="text-[#38bdf8] mt-1" />
                    <div>
                      <p className="font-semibold text-base">Phone</p>
                      <p className="text-sm text-slate-400">+92 301 6981096</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-7 bg-[#1e293b] text-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <p>
              © 2025 - All Rights Reserved -{" "}
              <span className="font-semibold">CoreCodexa</span>
            </p>
            <ul className="flex space-x-4">
              <Link
                to="/terms-condition"
                className="hover:text-[#0ea5e9] transition"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:text-[#0ea5e9] transition"
              >
                Privacy Policy
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
