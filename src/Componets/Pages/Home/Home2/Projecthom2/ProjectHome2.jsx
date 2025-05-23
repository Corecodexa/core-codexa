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
    backgroundImage: Bg3,
  },
];

const itSolutions = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg5,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
];

const digitalSolutions = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg2,
  },
];

const appDevelopment = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
];

const ProjectHome2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderCards = () => {
    // const cardClass = "bg-white p-4 rounded-lg shadow-lg flex items-center justify-center text-center";

    switch (selectedCategory) {
      case 'IT Solutions':
        return (
          <div className='flex flex-wrap font-ui-sans-serif justify-center gap-6'>
            {itSolutions.map((project) => (
              <motion.div
                key={project.id}
                className={`relative w-[30%] h-[20rem] bg-cover bg-center bg-no-repeat rounded-lg`}
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                <div className='absolute inset-0 bg-[#214b6e] bg-opacity-70 rounded-lg'></div>
                <div className='relative text-justify py-20 px-3'>
                  <h3 className='text-sm md:text-lg font-semibold  mb-2 text-center'>
                    {project.title}
                  </h3>
                  <p className=' text-sm md:text-base'>{project.para}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'Digital Solutions':
        return (
          <div className='flex flex-wrap justify-center gap-6'>
            {digitalSolutions.map((project) => (
              <motion.div
                key={project.id}
                className={`relative w-[30%] h-[20rem] bg-cover bg-center bg-no-repeat rounded-lg`}
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                <div className='absolute inset-0 bg-[#214b6e] bg-opacity-70 rounded-lg'></div>
                <div className='relative text-justify py-20 px-3'>
                  <h3 className='text-sm md:text-lg font-semibold  mb-2 text-center'>
                    {project.title}
                  </h3>
                  <p className=' text-sm md:text-base'>{project.para}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'App Development':
        return (
          <div className='flex flex-wrap justify-center gap-6'>
            {appDevelopment.map((project) => (
              <motion.div
                key={project.id}
                className={`relative w-[30%] h-[20rem] bg-cover bg-center bg-no-repeat rounded-lg`}
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                <div className='absolute inset-0 bg-[#214b6e] bg-opacity-70 rounded-lg'></div>
                <div className='relative text-justify py-20 px-3'>
                  <h3 className='text-sm md:text-lg font-semibold  mb-2 text-center'>
                    {project.title}
                  </h3>
                  <p className=' text-sm md:text-base'>{project.para}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return (
          <div className='lg:grid grid-cols-3 justify-around gap-8'>
            {allProjects.map((project) => (
              <div key={project.id} className='w-full p-4'>
                <Link to={project.link}>
                  <motion.div
                    className={`relative w-full h-[20rem] bg-cover bg-center bg-no-repeat rounded-lg`}
                    style={{
                      backgroundImage: `url(${project.backgroundImage})`,
                    }}
                  >
                    <div className='absolute inset-0 bg-[#18354b] bg-opacity-70 rounded-lg text-white'></div>
                    <div className='relative py-20 px-3 text-justify text-white'>
                      <h3 className='text-sm md:text-lg font-semibold  mb-2 text-center'>
                        {project.title}
                      </h3>
                      <p className=' text-sm md:text-base'>{project.para}</p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section id='project' className='py-16 px-4 pb md:px-10'>
      <div className='container mx-auto'>
        <div className='text-center mb-12 space-y-4'>
          <h6 className='text-lg '>Featured Works</h6>
          <h2 className='text-3xl md:text-4xl font-bold '>Latest Study Case</h2>
          <nav>
            <ul className='flex flex-wrap justify-center gap-4'>
              <li
                className='px-4 py-2 cursor-pointer'
                onClick={() => setSelectedCategory('All Projects')}
              >
                <Link to='#' className=''>
                  All Projects
                </Link>
              </li>
              <li className='px-4 py-2 cursor-pointer'>
                <Link to='#' className=''>
                  IT Solutions
                </Link>
              </li>
              <li className='px-4 py-2 cursor-pointer'>
                <Link to='#' className=''>
                  Digital Solutions
                </Link>
              </li>
              <li className='px-4 py-2 cursor-pointer'>
                <Link to='#' className=''>
                  App Development
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className='cards-container w-[95%] mx-auto font-serif'
          data-aos='fade-right'
        >
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default ProjectHome2;
