'use client'
import React from "react";
import { useScroll } from "@/common/ScrollContext";

const Hero = () => {
  const { scrollToSection } = useScroll();
  return(
    <div className="Hero">
        <div className="p-5 lg:p-10 xl:p-20 flex flex-col lg:flex-row bg-white dark:bg-light-navy">
            <div className="Hero-description flex flex-col lg:w-2/3 px-12 lg:px-20">
              <h1 className="text-navy-text dark:text-white Heading--head pb-4 lg:pb-0">Hi! I'm Chase.</h1>
              <div className="Heading--sub text-base lg:text-desc text-navy-text dark:text-white">
                <p className="Hero-description">I'm currently a graduate student at UVA studying Data Science and I have a Bachelor's degree in Computer Science. I'm into weightlifing, playing guitar, and like to code! Thanks for stopping by my site! Feel free to check out my blog posts since I'm trying to upload a new one every so often, and leave a message in the guestbook!</p>
              </div>
            </div>
            <div className="Nav-buttons flex flex-col pt-10 lg:pt-0 lg:w-1/3 px-10 lg:pr-20">
              <div className="pb-2 w-full">
                <button 
                  className="Button Button--light dark:Button--dark w-full"
                  onClick={() => scrollToSection('about-me')}
                >
                  About Me
                </button>
              </div>
              <div className="py-2">
                <button 
                  className="Button Button--light dark:Button--dark w-full"
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </button>
              </div>
              <div className="pt-2">
                <button 
                  className="Button Button--light dark:Button--dark w-full"
                  onClick={() => scrollToSection('contact-me')}
                >
                  Contact Me
                </button>
              </div>
            </div>
        </div>

    </div>
  );
};

export default Hero