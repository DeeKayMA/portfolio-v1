'use client'
import Image from "next/image";
// import { Inter } from "next/font/google";
import { ProjectCard } from "@/components/projectCard/projectCard";
import {ExperienceCard} from "@/components/experienceCard/experienceCard";
import { CertificateCard } from "@/components/certificateCard/certificateCard";

export default function Home() {
  const projectListItem = "list-none lg:p-4 group-hover/list:opacity-50 hover:opacity-100 hover:bg-slate-800/50 border border-slate-800/0 hover:border-slate-800/50 hover:border-t-slate-700/50 hover:shadow-sm hover:shadow-slate-950/10 transition-all duration-300 ease-in-out rounded mb-12"
  const experienceListItem = "list-none lg:p-4 border border-slate-800/0 transition-all duration-300 ease-in-out rounded mb-12"
  const sectionTitle = "lg:p-4 py-4 mb-4 sticky top-0 bg-slate-900 text-slate-200 font-semibold z-10"
  return (
    <div className="bg-slate-900 text-slate-400 flex flex-col lg:flex-row lg:min-h-screen m-0 py-12 px-6 md:py-16 md:px-12 lg:p-24 lg:gap-4 gap-16" >
    {/* This is the navigation part of the page */}
    <aside aria-label="Sidebar navigation" className="lg:w-[45%] flex flex-col lg:justify-between sticky lg:top-24 gap-4 max-h-[calc(100vh-12rem)]">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-slate-200">Diquan Kerr</h1>
        <h2 className="text-lg font-medium text-slate-200">Front End Engineer</h2>
        <p>Crafting user-first digital experiences for the modern web.</p>

        <nav aria-label="Primary navigation menu inpage links" className="mt-16 lg:block hidden"> 
          <ul className="flex flex-col gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
      </header>
        
      
      <section aria-label="Social links">
       <ul className="flex flex-row">
        <li><a href="https://github.com/DeeKayMA" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/diquankerr" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://x.com/Dquan028" aria-label="X" target="_blank" rel="noopener noreferrer">X</a></li>
        <li><a href="mailto:diquankerr@gmail.com" aria-label="Gmail" target="_blank" rel="noopener noreferrer">Gmail</a></li>
       </ul>
      </section>
    </aside>

    {/* This is the main part of the page */}
    <main className="lg:w-[55%] flex flex-col gap-24">
      {/* ABOUT */}
      <section aria-label="About me" id="about" className="lg:px-4">
        <h2 className=" lg:hidden py-4 mb-4 sticky top-0 bg-slate-900 text-slate-200 font-semibold z-10">About</h2>
        <p>Hi, I’m <a href="https://linkedin.com/in/diquankerr" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-400 cursor-pointer">
          Diquan</a>. I began my career as a product manager, but customising WordPress sites in my spare time sparked a genuine passion for UX and front-end development. That interest quickly grew into a hands-on experience with HTML, CSS, JavaScript, React, and Next.js—fuelling my drive to build thoughtful, user-focused solutions. Today, I’m focused on growing as a front-end engineer, combining technical skills with product insight to create meaningful digital experiences.</p>
      </section>
      {/* PROJECTS */}
      <section aria-label="Projetcs" id="projects" >
        <h2 className={sectionTitle}>Projects</h2>
        <ul className="group/list">
          {/* Pokétrumps Project */}
          <li className={projectListItem}>
              <ProjectCard
              name="Pokétrumps (TBC)"
              description="A fun little card game using the Pokémon API. Search, create your own Pokémon, and battle in a Top Trumps-style showdown."
              links={{
                // "Live": "https://redditmicro.netlify.app",
                // "GitHub": "https://github.com/DeeKayMA/reddit_micro"
              }}
              tools={["Next.js", "Tailwind CSS", "Pokémon API", "Vercel"]}
              img="/images/placeholder-image.jpg"
            />
            </li>
          {/* Reddit Micro Project */}
          <li className={projectListItem}>
            <ProjectCard
            name="Reddit Micro"
            description="A minimalist Reddit client that lets users browse, search, and view posts and comments in a simplified interface."
            links={{
              "Live": "https://redditmicro.netlify.app",
              "GitHub": "https://github.com/DeeKayMA/reddit_micro"
            }}
            tools={["React", "CSS", "Reddit API", "Netlify"]}
            img="/images/Reddit Micro Screenshot.png"
          />
          </li>
          {/* Jamming Project */}
          <li className={projectListItem}>
            <ProjectCard
            name="Jamming"
            description="Search songs, vibe out, and build your own Spotify playlist."
            links={{
              // "Live": "https://github.com/DeeKayMA/jamming",
              "GitHub": "https://github.com/DeeKayMA/jamming"
            }}
            tools={["React", "CSS", "Spotify API", "Netlify"]}
            img="/images/placeholder-image.jpg"
          />
          </li>
          {/* Portfolio V1 Project */}
          <li className={projectListItem}>
            <ProjectCard
            name="Portfolio"
            description="My V1.0 portfolio buit with Next.js and Tailwind CSS."
            links={{
              "Live": "https://diquan.net",
              "GitHub": "https://github.com/DeeKayMA/portfolio-v1"
            }}
            tools={["Next.js", "Tailwind CSS", "ShadCN", "Vercel"]}
            img="/images/placeholder-image.jpg"
          />
          </li>
        </ul>
        
      </section>
      {/* EXPERIENCE */}
      <section aria-label="Experience" id="experience">
        <h2 className={sectionTitle}>Experience</h2>
        <ul>
          <li className={experienceListItem}>
            <ExperienceCard
              role="Front End Developer"
              company="Freelance"
              year="2020 - Present"
              description="Developed custom-coded WordPress forms and responsive landing pages tailored to client specs."
              tools={["HTML", "CSS", "Javascript"]}
              />
          </li>
          <li className={experienceListItem}>
            <ExperienceCard
              role="Product Manager"
              company="BT"
              year="2022 - Present"
              description="Collaborated with dev teams to define and prioritise features, delivering full-stack solutions. As a side project, built a landing page for BT's Capture the Flag proejct using HTML, CSS, and JavaScript."
              tools={["HTML", "CSS", "Javascript"]}
              />
          </li>
        </ul>
        
      </section>
      {/* EDUCATION */}
      <section aria-label="Experience" id="experience">
        <h2 className={sectionTitle}>Education</h2>
        <ul>
          <li className={experienceListItem}>
            <CertificateCard
              certificate="Front End Developer"
              company="Freelance"
              year="2020 - Present"
              description="Developed custom-coded WordPress forms and responsive landing pages tailored to client specs."
              link="www.codecademy.com"
              />
          </li>
        </ul>
      </section>
      <footer className="lg:px-4">
        <p>The interface was crafted in Figma and built in Visual Studio Code using Next.js. Styling and subtle animations, powered by Tailwind CSS, bring it to life, while seamless deployment is handled through Vercel. The versatile Inter typeface complements the clean, modern aesthetic.</p>
      </footer>
    </main>
    </div>
  );
}
