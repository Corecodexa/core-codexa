import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useNavigate } from "react-router";

const team = [
  {
    name: "Usama Joiya (C.E.O)",
    role: "Full Stack Web & App Developer",
    image: "/images-team/usama.jpg",
  },
  {
    name: "Haseeb Abbasi",
    role: "Business Developer",
    image: "/images-team/haseeb.jpg",
  },
  {
    name: "M. Zeeshan Baqir",
    role: "Python (Django) Developer",
    image: "/images-team/zesshan.jpg",
  },
  {
    name: "Usman Akhtar",
    role: "MERN Stack Developer",
    image: "/images-team/usman.jpg",
  },
  {
    name: "Areeba Asghar",
    role: "Frontend Web Developer",
    image: "/images-team/areeba.jpg",
  },
  {
    name: "Nimra Hannan",
    role: "Machine Learning Developer",
    image: "/images-team/nimra.jpg",
  },
  {
    name: "Mahnoor Mughal",
    role: "WordPress Developer",
    image: "/images-team/mahnoor.jpg",
  },
  {
    name: "Ayesha Shoaib",
    role: "WordPress Specialist",
    image: "/images-team/ayeshaShoaib.jpg",
  },
  {
    name: "Harris Shehzad",
    role: "Creative WordPress Developer",
    image: "/images-team/harrisShehzad.jpg",
  },
  {
    name: "Rashid Ghafoor",
    role: "Versatile Full-Stack Developer",
    image: "/images-team/rashidg.jpg",
  },
  {
    name: "Rashid Hussain",
    role: "Skilled Software Developer",
    image: "/images-team/rashid.jpg",
  },
  {
    name: "Zeshan Yousaf",
    role: "MEAN Stack Pro",
    image: "/images-team/zeeshanYousaf.jpg",
  },
  {
    name: "Sana Anum",
    role: "Mobile App Developer",
    image: "/images-team/sanaAnum.jpg",
  },
  {
    name: "Aurang Zaib",
    role: "SEO Strategist",
    image: "/images-team/aurangzeb.jpg",
  },
  {
    name: "Arooba Naveed",
    role: "Digital Marketing Expert",
    image: "/images-team/aroobaNaveed.jpg",
  },
  {
    name: "Mubashir Khan",
    role: "Creative UI/UX Designer",
    image: "/images-team/Mubashir.jpg",
  },
  {
    name: "Sadia Nadeem",
    role: "Visual Graphic Designer",
    image: "/images-team/sadiaNadeem.jpg",
  },
  {
    name: "Harris Shehzad",
    role: "Forex Trading Specialist",
    image: "/images-team/harrisShehzad.jpg",
  },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ member, click }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-tr from-[#405E98] to-[#1a1a2e] cursor-pointer shadow-lg"
      onClick={click}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white p-4 shadow-xl"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-[#405E98] shadow-md"
          style={{ transform: "translateZ(50px)" }}
        />
        <h3
          className="text-center mt-4 text-xl font-bold text-[#1a1a2e]"
          style={{ transform: "translateZ(40px)" }}
        >
          {member.name}
        </h3>
        <p
          className="text-center text-[#405E98] font-medium"
          style={{ transform: "translateZ(30px)" }}
        >
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

const TeamShowcase = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/our-team");
  };
  return (
    <div className="min-h-fit bg-[linear-gradient(135deg,#405E98,#1a1a2e)] px-6 py-16 text-white max-w-[1536px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-sm">
          Meet Our Creative Team
        </h2>
        <p className="mt-4 text-lg text-[#dbe4ff] max-w-2xl mx-auto">
          A passionate group of designers and developers driven to build
          beautiful and functional experiences. Get to know the people behind
          our success.
        </p>
        <div className="w-24 h-1 mx-auto mt-4 bg-[#dbe4ff] rounded-full"></div>
      </div>

      {/* Team Cards */}
      <div className="grid gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {team.map((member, index) => (
          <TiltCard key={index} member={member} click={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default TeamShowcase;
