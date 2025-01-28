'use client'
import React, { useRef, useEffect } from "react";
import { useScroll } from "@/common/ScrollContext";

const ContactMe = () => {
  const ref = useRef<HTMLElement>(null!);
  const { registerSection } = useScroll();
    
  useEffect(() => {
    registerSection('contact-me', ref);
  }, [registerSection]);

  return (
    <section ref={ref} id="contact-me">
      <div className="Contact-Me flex flex-col justify-center items-center bg-medium-gray dark:bg-dark-button text-navy-text dark:text-white">
        <div className="Heading--head pt-8 pb-4">
          Contact Me
        </div>
        <div className="Contact-links pb-8">
          <div className="Email pb-2">
            <a href="mailto:chasecha312@gmail.com" className="Link--secondary" target="_blank" rel="noopener noreferrer">Email: chasecha312@gmail.com</a>
          </div>
          <div className="LinkedIn py-2">
            <a href="https://www.linkedin.com/in/chase-cha/" className="Link--secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="GitHub py-2">
            <a href="https://github.com/chasecha1" className="Link--secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="Resume pt-2">
            <a href="/Chase_Cha_resume.pdf" className="Link--secondary" target="_blank" rel="noopener noreferrer">View my Resume</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactMe;