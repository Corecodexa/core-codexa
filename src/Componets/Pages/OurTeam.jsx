import React from "react";
import TeamMember from "../Team/Team";
import { FaLightbulb, FaHandshake, FaUsers } from "react-icons/fa";
import FooterHome from "./Home/Home1/FooterHome/FooterHome";

// teamData.js (or define this inside Team.js if preferred)
const team = [
  {
    name: "Usama Joiya (C.E.O)",
    role: "Full Stack Web & App Developer",
    image: "/images-team/usama.jpg",
    bio: "Usama drives innovation with expertise in full-stack development, building secure, scalable, and modern applications.",
    socials: {
      facebook: "https://facebook.com/usama",
      twitter: "https://twitter.com/usama",
      linkedin: "https://linkedin.com/in/usama",
      instagram: "https://instagram.com/usama",
    },
  },
  {
    name: "Rashid Ghafoor",
    role: "Full-Stack Developer",
    image: "/images-team/rashidg.jpg",
    bio: "Rashid delivers full-stack web apps using Java, Python, and Node.js with modern UI frameworks like React and Angular.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Rashid Hussain",
    role: "Software Developer",
    image: "/images-team/rashid.jpg",
    bio: "Rashid builds robust backend systems with Django, specializing in scalable architectures and secure APIs.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Usman Akhtar",
    role: "MERN Stack Developer",
    image: "/images-team/usman.jpg",
    bio: "Usman delivers full-stack solutions using MongoDB, Express, React, and Node.js with a focus on performance.",
    socials: {
      facebook: "https://facebook.com/usman",
      twitter: "https://twitter.com/usman",
      linkedin: "https://linkedin.com/in/usman",
      instagram: "https://instagram.com/usman",
    },
  },
  {
    name: "Zeshan Yousaf",
    role: "Mean Stack Developer",
    image: "/images-team/zeeshanYousaf.jpg",
    bio: "Zeshan crafts dynamic web apps with Angular and Node.js, ensuring responsive design and seamless user experience.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "M. Zeeshan Baqir",
    role: "Python (Django) Developer",
    image: "/images-team/zesshan.jpg",
    bio: "Zeeshan builds secure backend systems with Django, focusing on clean architecture and scalable API design.",
    socials: {
      facebook: "https://facebook.com/zeeshan",
      twitter: "https://twitter.com/zeeshan",
      linkedin: "https://linkedin.com/in/zeeshan",
      instagram: "https://instagram.com/zeeshan",
    },
  },
  {
    name: "Areeba Asghar",
    role: "Frontend Web Developer",
    image: "/images-team/areeba.jpg",
    bio: "Areeba creates sleek, responsive interfaces with modern frontend tech, enhancing user experience and design.",
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
    bio: "Nimra develops intelligent ML solutions, turning complex data into actionable insights through smart algorithms.",
    socials: {
      facebook: "https://facebook.com/nimra",
      twitter: "https://twitter.com/nimra",
      linkedin: "https://linkedin.com/in/nimra",
      instagram: "https://instagram.com/nimra",
    },
  },
  {
    name: "Sana Anum",
    role: "App Developer",
    image: "/images-team/sanaAnum.jpg",
    bio: "Sana builds responsive, user-friendly mobile apps with an eye for detail, performance, and clean functionality.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Mahnoor Mughal",
    role: "WordPress Developer",
    image: "/images-team/mahnoor.jpg",
    bio: "Mahnoor builds SEO-optimized, user-friendly WordPress sites that combine design appeal with smooth performance.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Ayesha Shoaib",
    role: "WordPress Developer",
    image: "/images-team/ayeshaShoaib.jpg",
    bio: "Ayesha builds custom WordPress sites, e-commerce stores, and dashboards with a focus on UX and performance.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  // {
  //   name: "Harris Shehzad",
  //   role: "WordPress Developer",
  //   image: "/images-team/harrisShehzad.jpg",
  //   bio: "Harris merges his expertise in trading and development to create efficient and data-driven digital platforms.",
  //   socials: {
  //     facebook: "https://facebook.com/mahnoor",
  //     twitter: "https://twitter.com/mahnoor",
  //     linkedin: "https://linkedin.com/in/mahnoor",
  //     instagram: "https://instagram.com/mahnoor",
  //   },
  // },
  {
    name: "Aurang Zaib",
    role: "SEO",
    image: "/images-team/aurangzeb.jpg",
    bio: "Aurang boosts online presence through advanced SEO, driving traffic, visibility, and high search rankings.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Arooba Naveed",
    role: "Digital Marketing Specialist",
    image: "/images-team/aroobaNaveed.jpg",
    bio: "Arooba drives online growth through smart marketing, SEO, and lead generation strategies tailored to business goals.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Mubashir Khan",
    role: "UI/UX Designer",
    image: "/images-team/mubashir.jpg",
    bio: "Mubashir designs intuitive interfaces and user journeys that blend visual appeal with seamless functionality.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Sadia Nadeem",
    role: "Graphic Designer",
    image: "/images-team/sadiaNadeem.jpg",
    bio: "Sadia creates visually compelling designs using Photoshop, Illustrator, and Canva, elevating brands with style.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Harris Shehzad",
    role: "Forex Trading",
    image: "/images-team/harrisShehzad.jpg",
    bio: "Harris merges his expertise in trading and development to create efficient and data-driven digital platforms.",
    socials: {
      facebook: "https://facebook.com/mahnoor",
      twitter: "https://twitter.com/mahnoor",
      linkedin: "https://linkedin.com/in/mahnoor",
      instagram: "https://instagram.com/mahnoor",
    },
  },
  {
    name: "Haseeb Abbasi",
    role: "Business Developer",
    image: "/images-team/haseeb.jpg",
    bio: "Haseeb accelerates business growth by forging strong client relationships and expanding strategic opportunities.",
    socials: {
      facebook: "https://facebook.com/haseeb",
      twitter: "https://twitter.com/haseeb",
      linkedin: "https://linkedin.com/in/haseeb",
      instagram: "https://instagram.com/haseeb",
    },
  },
];

// Inside values array
const values = [
  {
    icon: <FaLightbulb className="text-3xl text-[#405E98]" />,
    title: "Innovation",
    desc: "We thrive on innovation and deliver future-ready solutions.",
  },
  {
    icon: <FaHandshake className="text-3xl text-[#405E98]" />,
    title: "Integrity",
    desc: "We believe in transparency, honesty, and accountability.",
  },
  {
    icon: <FaUsers className="text-3xl text-[#405E98]" />,
    title: "Teamwork",
    desc: "We work together to bring out the best in every project.",
  },
];

const Team = () => {
  return (
    <>
      <div className="p-6 md:p-12 bg-[#f9f9f9] min-h-screen">
        {/* Intro Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#405E98] mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-lg">
            We’re a passionate group of developers, designers, and
            strategists...
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#405E98] mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-gray-700 mb-6">
            We're always looking for talented individuals...
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#405E98] hover:bg-[#6c86c2] text-white px-6 py-3 rounded-full transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
      <FooterHome />
    </>
  );
};

export default Team;
