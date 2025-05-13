import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const socialIconClasses =
  "transition-all duration-200 transform hover:scale-125 hover:text-[#405E98]";

const TeamMember = ({ name, role, bio, image, socials }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center border border-[#405E98] rounded-3xl overflow-hidden shadow-xl mb-10 bg-white hover:shadow-2xl transition-shadow duration-300 group"
    >
      {/* Left: Image */}
      <div className="md:w-1/3 w-full h-[22rem] overflow-hidden relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Right: Details */}
      <div className="md:w-2/3 w-full p-6 text-[#0c1824] flex flex-col justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[#405E98]">
            {name?.split(",")[0]}
          </h2>
          <h3 className="text-2xl font-bold text-[#405E98]">
            {name?.split(",")[1]}
          </h3>

          <h3 className="text-lg font-semibold text-[#6c86c2] mb-2">{role}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{bio}</p>
        </div>

        <div className="flex space-x-5 mt-4 text-[#6c86c2] text-lg">
          {socials?.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClasses}
              title="Facebook"
            >
              <FaFacebookF />
            </a>
          )}
          {socials?.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClasses}
              title="Twitter"
            >
              <FaXTwitter />
            </a>
          )}
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClasses}
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          )}
          {socials?.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClasses}
              title="Instagram"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
