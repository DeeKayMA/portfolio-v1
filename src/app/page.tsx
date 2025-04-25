'use client'

// import { Inter } from "next/font/google";
import { ProjectCard } from "@/components/projectCard/projectCard";
import {ExperienceCard} from "@/components/experienceCard/experienceCard";
import { CertificateCard } from "@/components/certificateCard/certificateCard";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  const projectListItem = "list-none lg:p-4 group-hover/list:opacity-40 hover:opacity-100 hover:bg-slate-800/50 border border-slate-800/0 hover:border-slate-800/50 hover:border-t-slate-700/50 hover:shadow-sm hover:shadow-slate-950/10 transition-all duration-300 ease-in-out rounded mb-12"
  const experienceListItem = "list-none lg:p-4 group-hover/xp:opacity-40 hover:opacity-100 hover:bg-slate-800/50 border border-slate-800/0 hover:border-slate-800/50 hover:border-t-slate-700/50 hover:shadow-sm hover:shadow-slate-950/10 transition-all duration-300 ease-in-out rounded mb-12"
  const educationListItem = "list-none lg:p-4 group-hover/edu:opacity-40 hover:opacity-100 hover:bg-slate-800/50 border border-slate-800/0 hover:border-slate-800/50 hover:border-t-slate-700/50 hover:shadow-sm hover:shadow-slate-950/10 transition-all duration-300 ease-in-out rounded mb-12"
  const sectionTitle = " lg:hidden text-xl font-semibold lg:text-md lg:font-medium lg:p-4 py-4 mb-4 sticky top-0 -mx-6 px-6 md:-mx-16 md:px-16 backdrop-blur-md text-slate-200 z-10"
  const footerAnchor = "text-slate-200 hover:text-teal-400 cursor-pointer"
  
  return (
    <div className="z-0 bg-slate-900 text-slate-400 flex flex-col lg:flex-row lg:min-h-screen m-0 py-12 px-6 md:py-16 md:px-16 lg:p-24 lg:gap-4 gap-16" >
    {/* This is the navigation part of the page */}
    <aside aria-label="Sidebar navigation" className="lg:w-[45%] flex flex-col lg:justify-between sticky lg:top-24 gap-4 max-h-[calc(100vh-12rem)]">
      <header className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold text-slate-200">Diquan Kerr</h1>
        <h2 className="text-lg font-medium text-slate-200">Front End Engineer</h2>
        <p className="lg:max-w-[61.8%]">Crafting user-first digital experiences for the modern web.</p>
        <Navbar/>
      </header>
        
      <section aria-label="Social links">
       <ul className="flex flex-row gap-6 lg:gap-4 mt-4 lg:mt-0">
        <li>
          <a href="https://github.com/DeeKayMA" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/diquankerr" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </li>
        {/* <li>
          <a href="https://x.com/Dquan028" aria-label="X" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
        </li> */}
        <li>
          <a href="mailto:diquankerr@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </li>
       </ul>
      </section>
    </aside>

    {/* This is the main part of the page */}
    <main className=" z-1 lg:w-[55%] flex flex-col gap-24 lg:gap-40">
      {/* ABOUT */}
      <section aria-label="About me" id="about" className="lg:px-4">
        <h2 className="-mx-6 px-6 md:-mx-16 md:px-16 backdrop-blur-md lg:hidden text-xl font-semibold py-4 mb-4 sticky top-0 text-slate-200 z-10">About</h2>
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
        <ul className="group/xp">
          <li className={experienceListItem}>
              <ExperienceCard
                role="Product Manager"
                company="BT"
                year="2022 - Present"
                description="Collaborated with dev teams to define and prioritise features, delivering full-stack solutions. As a side project, I built a landing page for BT's Capture the Flag initiative using HTML, CSS, and JavaScript."
                tools={["HTML", "CSS", "Javascript"]}
                link="https://bt.com"
                />
            </li>
          <li className={experienceListItem}>
            <ExperienceCard
              role="Front End Developer"
              company="Freelance"
              year="2020 - Present"
              description="Developed custom-coded WordPress forms and responsive landing pages tailored to client specs."
              tools={["HTML", "CSS", "Javascript"]}
              link="https://www.moonweb.co"
              />
          </li>
        </ul>
        
      </section>

      {/* EDUCATION */}
      <section aria-label="Education" id="education">
        <h2 className={sectionTitle}>Education</h2>
        <ul className="group/edu">
          <li className={educationListItem}>
            <CertificateCard
              certificate="Front End Engineer Career Path"
              company="Codecademy"
              year="2025"
              description="Codecademy’s Front-End Engineer Career Path — covered HTML, CSS, JavaScript, React, Redux, Git, and web design fundamentals to build responsive, interactive web applications."
              link="https://www.codecademy.com"
              />
          </li>
          <li className={educationListItem}>
            <CertificateCard
              certificate="User Experience Design Essentials" 
              company="Udemy"
              year="2021"
              description="Completed the 'User Experience Design Essentials — Adobe XD UI UX Design' course on Udemy, learning to design and prototype user interfaces using Adobe XD.​"
              link="https://www.udemy.com/certificate/UC-f6c0bb85-bf27-4957-9d75-72cfc9f437c1/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email"
              />
          </li>
         
        </ul>

      </section>

      <footer className="lg:px-4">
        <p>The interface was crafted in <a className={footerAnchor} href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> and built in <a className={footerAnchor} href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> using <a className={footerAnchor} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>. Styling and subtle animations, powered by <a className={footerAnchor} href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>, bring it to life, while seamless deployment is handled through <a className={footerAnchor} href="https://vercel.com/" target="_blank" rel="noopener noreferrer"  >Vercel</a>. The versatile <a className={footerAnchor} target="_blank" href="https://rsms.me/inter/" rel="noopener noreferrer">Inter</a> typeface complements the clean, modern aesthetic.</p>
      </footer>
    </main>
    </div>
  );
}
