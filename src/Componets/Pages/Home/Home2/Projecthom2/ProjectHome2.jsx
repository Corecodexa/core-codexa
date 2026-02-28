import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Bg1 from './../../../../images/project1.png';
import Bg2 from './../../../../images/projects-2.png';
import Bg3 from './../../../../images/projects-3.png';
import Bg5 from './../../../../images/projects-5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allProjects = [
  {
    id: 1,
    title: 'Clikkle',
    para: 'Clikkle Web is an innovative web application designed to streamline user interactions with a focus on simplicity and efficiency. Built with a responsive and intuitive UI,',
    link: 'https://clikkle.com/',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'School Management System',
    para: 'School management web application designed to streamline administrative tasks, enhance communication, and improve the overall efficiency of educational institutions.',
    link: 'https://schcube.com/',
    backgroundImage: Bg2,
  },
  {
    id: 3,
    title: 'Advocate Iron Tech',
    para: 'Advocate Iron Tech is a professional website developed to serve legal practitioners and law firms, offering a modern platform that streamlines client management, case tracking, and legal documentation.',
    link: 'https://example.com/',
    backgroundImage: Bg3,
  },
];

const itSolutions = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Custom solutions tailored to your business requirements with efficiency and reliability.',
    backgroundImage: Bg5,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Custom solutions tailored to your business requirements with efficiency and reliability.',
    backgroundImage: Bg1,
  },
];

const digitalSolutions = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Tailored digital solutions designed to enhance user experience and workflow.',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Tailored digital solutions designed to enhance user experience and workflow.',
    backgroundImage: Bg2,
  },
];

const appDevelopment = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Robust app development services with cutting-edge technology for all platforms.',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Robust app development services with cutting-edge technology for all platforms.',
    backgroundImage: Bg1,
  },
];

const categories = ['All Projects', 'IT Solutions', 'Digital Solutions', 'App Development'];

const ProjectHome2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderCards = (projects) => (
    <div className='flex flex-wrap justify-center gap-6'>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className='relative w-full sm:w-[48%] lg:w-[30%] h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg group'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Image */}
          <div
            className='absolute inset-0 bg-cover bg-center transition-transform duration-500'
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          ></div>

          {/* Black Opacity Overlay */}
          <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl'></div>

          {/* Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
            <h3 className='text-lg md:text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              {project.title}
            </h3>
            <p className='text-sm md:text-base text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              {project.para}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const getProjectsByCategory = () => {
    switch (selectedCategory) {
      case 'IT Solutions':
        return renderCards(itSolutions);
      case 'Digital Solutions':
        return renderCards(digitalSolutions);
      case 'App Development':
        return renderCards(appDevelopment);
      default:
        return renderCards(allProjects);
    }
  };

  return (
    <section id='project' className='py-16 px-4 md:px-10 font-ui-sans-serif bg-[#f9fafb]'>
      <div className='container mx-auto'>
        {/* Heading */}
        <div className='text-center mb-12 space-y-4'>
          <h6 className='text-lg font-semibold text-[#405E98] uppercase'>Featured Works</h6>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0f172a]'>Latest Case Studies</h2>
        </div>

        {/* Categories */}
        <nav className='flex justify-center gap-4 mb-12 flex-wrap'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#405E98] to-[#0c1824] text-white shadow-lg'
                  : 'bg-white text-[#405E98] border border-[#405E98] hover:bg-gradient-to-r hover:from-[#405E98] hover:to-[#0c1824] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Projects */}
        <div data-aos='fade-up'>{getProjectsByCategory()}</div>
      </div>
    </section>
  );
};

export default ProjectHome2;