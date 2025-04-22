import Image from "next/image";

const sectionPadding = ""

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen m-0 py-12 px-6 md:py-16 md:px-12 lg:p-24 gap-4" >
    {/* This is the navigation part of the page */}
    <aside aria-label="Sidebar navigation" className="lg:w-1/2 flex flex-col lg:justify-between sticky lg:top-24">
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
    <main className="lg:w-1/2">
      <section aria-label="About me">
        <p>Hi, I’m Diquan. I began my career as a product manager, but customising WordPress sites in my spare time sparked a genuine passion for UX and front-end development. That interest quickly grew into a hands-on experience with HTML, CSS, JavaScript, React, and Next.js—fuelling my drive to build thoughtful, user-focused solutions. Today, I’m focused on growing as a front-end engineer, combining technical skills with product insight to create meaningful digital experiences.</p>
      </section>
      <section aria-label="Projetcs">
        <h2>Projects</h2>
      </section>
      <section aria-label="Experience">
        <h2>Experience</h2>
      </section>
      <footer>
        <p>The interface was crafted in Figma and built in Visual Studio Code using Next.js. Styling and subtle animations, powered by Tailwind CSS, bring it to life, while seamless deployment is handled through Vercel. The versatile Inter typeface complements the clean, modern aesthetic.</p>
      </footer>
    </main>
    </div>
  );
}
