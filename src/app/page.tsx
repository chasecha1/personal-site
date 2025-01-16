import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import ContactMe from "@/components/Contact";
import { ScrollProvider } from "@/common/ScrollContext";
import { getProjects } from "@/api/projectsApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Chase Cha",
  description: "A personal portfolio site built with Next.js, Typescript, and Tailwind",
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Head>
          <title>Home | Chase Cha</title>
      </Head>
      <div className="bg-white dark:deep-navy">
        <ScrollProvider>
          <Hero/>
          <About/>
          <Project projects={projects}/>
          <ContactMe/>
        </ScrollProvider>
      </div>
    </>
  );
}
