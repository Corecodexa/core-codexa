import TeamMember from "../Team/Team";
import { FaLightbulb, FaHandshake, FaUsers } from "react-icons/fa";
import FooterHome from "./Home/Home1/FooterHome/FooterHome";
import team from "../data/team";

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
