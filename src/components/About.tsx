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
          I first started programming in college, and ever since have tried to learn as much as I can. In terms of technically what I'm up to, I'm working on Specialist Match, a platform to make it easier for patients to find and contact doctors in their area (more to come on this, very early stages). In terms of the future, I'm interested in fullstack/frontend developement, and really enjoy tackling interesting problems through software. I also love collaborating and learning from others, so if you'd want to work on something together, please reach out!
        </div>
      </div>
    </section>
  );
};

export default About