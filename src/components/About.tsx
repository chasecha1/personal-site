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
          <p className='About-description'>I first started programming in college, and ever since have tried to learn as much as I can. In terms of the future, I'm interested in fullstack/frontend developement, and really enjoy tackling interesting software problems. I am currently trying to gain more backend developement experience through personal projects/self teaching, so reach out if you have any advice or resources you'd reccomend. I also love collaborating/working with others so if you'd want to work on something together, please reach out! Other than that, I've just recently built this site and have now started working on Specialist Match, a platform to make it easier for patients to find and contact doctors in their area (more to come on this, very early stages right now). Outside of programming, I love to exercise, play music, and have started reading more too so please contact me with any reccomendations or drop a message in the Guest Book!</p>
        </div>
      </div>
    </section>
  );
};

export default About