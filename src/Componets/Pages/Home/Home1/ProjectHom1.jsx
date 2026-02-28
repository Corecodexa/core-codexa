import React, { useEffect } from 'react';
import work1 from '../../../images/work-1.jpg';
import work2 from '../../../images/work-2.jpg';
import work3 from '../../../images/work-3.jpg';
import work4 from '../../../images/work-4.jpg';
import work5 from '../../../images/work-5.jpg';
import work6 from '../../../images/work-6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ShimmerButton from '../../../Button/ShimmerButton';

const projectData = [
  { image: work1, title: 'Insurance IT Solutions', link: '#' },
  { image: work2, title: 'IT Services', link: '#' },
  { image: work3, title: 'Business Intelligence', link: '#' },
  { image: work4, title: 'IT Consulting', link: '#' },
  { image: work5, title: 'Managed Analytics', link: '#' },
  { image: work6, title: 'Data Security', link: '#' },
];

const ProjectHom1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id='project' className='py-16 lg:px-10 font-ui-sans-serif bg-[#f9fafb]'>
      <div className='container mx-auto px-4'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h6 className='text-lg font-medium text-[#405E98] tracking-wide uppercase'>Featured Works</h6>
          <h2 className='text-4xl lg:text-5xl font-bold text-[#0f172a] mt-2'>Case Studies</h2>
        </div>

        {/* Projects Grid */}
        <div className='flex flex-wrap -mx-4' data-aos='fade-up'>
          {projectData.map((project, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
              <div className='relative group overflow-hidden rounded-xl shadow-lg cursor-pointer'>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-auto rounded-xl transform transition-transform duration-500 group-hover:scale-105'
                />

                {/* Gradient Overlay on Hover */}
                <div className='absolute inset-0 rounded-xl bg-gradient-to-t from-[#0c1824]/80 to-[#405E98]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
                  <div className='text-center text-white px-4'>
                    <h3 className='text-2xl font-semibold mb-2 transition-colors duration-500'>
                      <a href={project.link} className='hover:underline'>
                        {project.title}
                      </a>
                    </h3>
                    <a href={project.link} className='text-lg font-medium underline transition-colors duration-500'>
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className='text-center mt-12'>
          <Link to='/project'>
            <ShimmerButton text={'View All Projects'} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectHom1;