import React from "react";
import TeamMember from "../Team/Team";
import { FaLightbulb, FaHandshake, FaUsers } from "react-icons/fa";

// teamData.js (or define this inside Team.js if preferred)
const team = [
  {
    name: "Usama Joiya (C.E.O)",
    role: "Full Stack Web & App Developer",
    image: "/images-team/usama.jpg",
    bio: "Usama leads the company with a strong background in full stack development, focusing on robust and scalable applications.",
    socials: {
      facebook: "https://facebook.com/usama",
      twitter: "https://twitter.com/usama",
      linkedin: "https://linkedin.com/in/usama",
      instagram: "https://instagram.com/usama",
    },
  },
  {
    name: "Haseeb Abbasi",
    role: "Business Developer",
    image: "/images-team/haseeb.jpg",
    bio: "Haseeb specializes in business growth and client relationship management to drive company success.",
    socials: {
      facebook: "https://facebook.com/haseeb",
      twitter: "https://twitter.com/haseeb",
      linkedin: "https://linkedin.com/in/haseeb",
      instagram: "https://instagram.com/haseeb",
    },
  },
  {
    name: "M. Zeeshan Baqir",
    role: "Python (Django) Developer",
    image: "/images-team/zesshan.jpg",
    bio: "Zeeshan is a backend expert, building secure APIs and systems using Django and Python best practices.",
    socials: {
      facebook: "https://facebook.com/zeeshan",
      twitter: "https://twitter.com/zeeshan",
      linkedin: "https://linkedin.com/in/zeeshan",
      instagram: "https://instagram.com/zeeshan",
    },
  },
  {
    name: "Usman Akhtar",
    role: "MERN Stack Developer",
    image: "/images-team/usman.jpg",
    bio: "Usman develops modern full-stack apps using MongoDB, Express, React, and Node.js.",
    socials: {
      facebook: "https://facebook.com/usman",
      twitter: "https://twitter.com/usman",
      linkedin: "https://linkedin.com/in/usman",
      instagram: "https://instagram.com/usman",
    },
  },
  {
    name: "Areeba Asghar",
    role: "Frontend Web Developer",
    image: "/images-team/areeba.jpg",
    bio: "Areeba crafts beautiful and responsive user interfaces using modern frontend technologies.",
    socials: {
      facebook: "https://facebook.com/areeba",
      twitter: "https://twitter.com/areeba",
      linkedin: "https://linkedin.com/in/areeba",
      instagram: "https://instagram.com/areeba",
    },
  },
  {
    name: "Nimra Hannan",
    role: "Machine Learning Developer",
    image: "/images-team/nimra.jpg",
    bio: "Nimra builds intelligent ML models and works on data-driven solutions for real-world problems.",
    socials: {
      facebook: "https://facebook.com/nimra",
      twitter: "https://twitter.com/nimra",
      linkedin: "https://linkedin.com/in/nimra",
      instagram: "https://instagram.com/nimra",
    },
  },
  {
    name: "Mahnoor Mughal",
    role: "WordPress Developer",
    image: "/images-team/mahnoor.jpg",
    bio: "Mahnoor specializes in creating custom WordPress websites that are user-friendly and SEO-optimized.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
];

const values = [
  {
    icon: <FaLightbulb className="text-3xl text-[#e1651f]" />,
    title: "Innovation",
    desc: "We thrive on innovation and deliver future-ready solutions.",
  },
  {
    icon: <FaHandshake className="text-3xl text-[#e1651f]" />,
    title: "Integrity",
    desc: "We believe in transparency, honesty, and accountability.",
  },
  {
    icon: <FaUsers className="text-3xl text-[#e1651f]" />,
    title: "Teamwork",
    desc: "We work together to bring out the best in every project.",
  },
];

const Team = () => {
  return (
    <div className="p-6 md:p-12 bg-[#f9f9f9] min-h-screen">
      {/* Intro Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0c1824] mb-4">
          Meet Our Team
        </h1>
        <p className="text-gray-600 text-lg">
          We’re a passionate group of developers, designers, and strategists
          dedicated to delivering top-notch digital solutions tailored to your
          needs.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {values.map((val, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all"
          >
            <div className="mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold text-[#0c1824] mb-2">
              {val.title}
            </h3>
            <p className="text-sm text-gray-600">{val.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {team.map((item, index) => (
          <TeamMember
            key={index}
            name={item.name}
            role={item.role}
            bio={item.bio}
            image={item.image}
            socials={item.socials}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e1651f] mb-4">
          Want to Work With Us?
        </h2>
        <p className="text-gray-700 mb-6">
          We're always looking for talented individuals to join our dynamic
          team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#e1651f] hover:bg-[#c65417] text-white px-6 py-3 rounded-full transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Team;
