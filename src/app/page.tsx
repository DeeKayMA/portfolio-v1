import Image from "next/image";
// import { Inter } from "next/font/google";
import { ProjectCard } from "@/components/projectCard/projectCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen m-0 py-12 px-6 md:py-16 md:px-12 lg:p-24 lg:gap-4 gap-16" >
    {/* This is the navigation part of the page */}
    <aside aria-label="Sidebar navigation" className="lg:w-1/2 flex flex-col lg:justify-between sticky lg:top-24 gap-4 max-h-[calc(100vh-12rem)]">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Diquan Kerr</h1>
        <h2 className="text-lg font-medium">Front End Engineer</h2>
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
        <li><a href="https://github.com/DeeKayMA" aria-label="GitHub">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yourname" aria-label="LinkedIn">LinkedIn</a></li>
        <li><a href="https://github.com/DeeKayMA" aria-label="X">X</a></li>
        <li><a href="https://linkedin.com/in/yourname" aria-label="Gmail">Gmail</a></li>
       </ul>
      </section>
    </aside>

    {/* This is the main part of the page */}
    <main className="lg:w-1/2 flex flex-col gap-24">
      <section aria-label="About me" id="about">
        <h2 className="my-4 lg:hidden">About</h2>
        <p>Hi, I’m Diquan. I began my career as a product manager, but customising WordPress sites in my spare time sparked a genuine passion for UX and front-end development. That interest quickly grew into a hands-on experience with HTML, CSS, JavaScript, React, and Next.js—fuelling my drive to build thoughtful, user-focused solutions. Today, I’m focused on growing as a front-end engineer, combining technical skills with product insight to create meaningful digital experiences.</p>
      </section>
      <section aria-label="Projetcs" id="projects">
        <h2 className="my-4 lg:hidden">Projects</h2>
        <ProjectCard
          name="Reddit Micro"
          description="A minimalist Reddit client that lets users browse, search, and view posts and comments in a simplified interface."
          links={{
            "Live": "https://redditmicro.netlify.app",
            "GitHub": "https://github.com/DeeKayMA/reddit_micro"
          }}
          tools={["React", "CSS", "Reddit API", "Netlify"]}
        />
      </section>
      <section aria-label="Experience" id="experience">
        <h2 className="my-4 lg:hidden">Experience</h2>
      </section>
      <footer>
        <p>The interface was crafted in Figma and built in Visual Studio Code using Next.js. Styling and subtle animations, powered by Tailwind CSS, bring it to life, while seamless deployment is handled through Vercel. The versatile Inter typeface complements the clean, modern aesthetic.</p>
      </footer>
    </main>
    </div>
  );
}
