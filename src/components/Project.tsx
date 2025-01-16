'use client'
import React, { useRef, useEffect } from 'react';
import { useScroll } from '@/common/ScrollContext';
import Image from "next/image";
import { ProjectsProfile } from '../../types/entities';
import { urlFor } from '@/sanity/sanityImage';
import { PortableText } from "next-sanity";

type ProjectProps = {
  projects: ProjectsProfile[]
}

const Project = ({projects} :ProjectProps) => {
  const ref = useRef<HTMLElement>(null!);
    const { registerSection } = useScroll();
    
    useEffect(() => {
      registerSection('projects', ref);
    }, [registerSection]);

  const projectList = projects

  return (
    <section ref={ref} id="projects">
      <div className="Projects bg-white dark:bg-light-navy flex flex-col justify-center items-center">
        <div className="Title Heading--head text-navy-text dark:text-white pt-8 pb-4">
          Projects
        </div>
        <div className="Card-containers flex flex-col lg:flex-row justify-center pb-8 px-2 lg:px-8 text-navy-text dark:text-white">
          {projectList && projectList.map((project: ProjectsProfile) => (
            <div className="Project-Card shadow-brand-box dark:shadow-brand-box-navy pb-4 lg:pb-0 mb-8 lg:mb-2 mx-4 lg:w-1/3" key={project._id}>
              <div className="Media pb-4 flex justify-center">
                <Image
                  src={urlFor(project.mainImage).width(480).height(275).url()}
                  alt={'Project image'}
                  width={480}
                  height={275}
                />
              </div>
              <div className="Card-bottom flex flex-col items-center">
                <div className="Title text-lg lg:text-desc justify-center pb-2">
                  <a href={project.link} className="Link--secondary" target="_blank" rel="noopener noreferrer">{project.title}</a>
                </div>
                <div className="description mx-8 pb-4">
                  <PortableText value={project.description}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project