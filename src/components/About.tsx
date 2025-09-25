'use client'
import React, { useRef, useEffect } from 'react';
import { useScroll } from '@/common/ScrollContext';

const About = () => {
  const ref = useRef<HTMLElement>(null!);
  const { registerSection } = useScroll();
  
  useEffect(() => {
    registerSection('about-me', ref);
  }, [registerSection]);

  return (
    <section ref={ref} id="about-me">
      <div className="About flex flex-col justify-center items-center bg-medium-gray dark:bg-dark-button">
        <div className="Heading--head text-navy-text dark:text-white pt-8 pb-4">
          About Me
        </div>
        <div className="About-desc text-navy-text dark:text-white pb-8 px-10 sm:px-20 lg:px-64">
          <p className='About-description'>I first started programming in college, and ever since have tried to learn as much as I can. In terms of the future, I'm interested in fullstack/frontend development, and really enjoy tackling interesting software problems. This past summer, I worked at Amazon as a Software Development Engineer Intern and developed a LLM-based query helper (see my resume below for more on this) while learning a lot about different AWS technologies. However, I am always trying to gain more backend development experience through personal projects/self teaching, so reach out if you have any advice or resources you'd recommend. I also love collaborating/working with others so if you'd want to work on something together, please reach out! Outside of programming, I love to exercise, play music, and have started reading more too so please contact me with any recommendations or drop a message in the Guest Book!</p>
        </div>
      </div>
    </section>
  );
};

export default About