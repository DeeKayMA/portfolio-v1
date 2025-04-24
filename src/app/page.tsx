'use client'
import Image from "next/image";
// import { Inter } from "next/font/google";
import { ProjectCard } from "@/components/projectCard/projectCard";

export default function Home() {
  const projectListItem = "lg:p-4 group-hover/list:opacity-50 hover:opacity-100 hover:bg-slate-800/50 border border-slate-800/0 hover:border-slate-800/50 hover:border-t-slate-700/50 hover:shadow-sm hover:shadow-slate-950/10 transition-all duration-300 ease-in-out rounded mb-12"

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
        <h2 className="py-4 lg:hidden sticky top-0 bg-white z-10">About</h2>
        <p>Hi, I’m <a href="https://linkedin.com/in/diquankerr" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-400 cursor-pointer">
          Diquan</a>. I began my career as a product manager, but customising WordPress sites in my spare time sparked a genuine passion for UX and front-end development. That interest quickly grew into a hands-on experience with HTML, CSS, JavaScript, React, and Next.js—fuelling my drive to build thoughtful, user-focused solutions. Today, I’m focused on growing as a front-end engineer, combining technical skills with product insight to create meaningful digital experiences.</p>
      </section>
      {/* PROJECTS */}
      <section aria-label="Projetcs" id="projects" >
        <h2 className="py-4 lg:hidden sticky top-0 bg-white z-10">Projects</h2>
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
              tools={["Next.js", "Tailwind", "Pokémon API", "Vercel"]}
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
            description="A minimalist Reddit client that lets users browse, search, and view posts and comments in a simplified interface."
            links={{
              // "Live": "https://github.com/DeeKayMA/jamming",
              "GitHub": "https://github.com/DeeKayMA/jamming"
            }}
            tools={["React", "CSS", "Spotify API", "Netlify"]}
            img="/images/placeholder-image.jpg"
          />
          </li>
        </ul>
        
      </section>
      {/* EXPERIENCE */}
      <section aria-label="Experience" id="experience" className="lg:px-4">
        <h2 className="my-4 lg:hidden sticky top-0 bg-white z-10">Experience</h2>
        <p>Product Manager - BT </p>
        <p>Wordpress Developer - Freelance <br/> Developed custom-coded WordPress forms and responsive landing pages tailored to client specs.</p>
      </section>
      {/* EDUCATION */}
      <section aria-label="Experience" id="experience" className="lg:px-4">
        <h2 className="my-4 lg:hidden sticky top-0 bg-white z-10">Education</h2>
        <p>Front End Engineering - Codecademy </p>
        <p>UX/UI Design - Udemy </p>
      </section>
      <footer className="lg:px-4">
        <p>The interface was crafted in Figma and built in Visual Studio Code using Next.js. Styling and subtle animations, powered by Tailwind CSS, bring it to life, while seamless deployment is handled through Vercel. The versatile Inter typeface complements the clean, modern aesthetic.</p>
      </footer>
    </main>
    </div>
  );
}
