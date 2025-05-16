'use client';

import { useState, useEffect } from "react";

export const Navbar = () => {
    const aTagClass = "flex items-center cursor-pointer"
    const span1Class = "bg-stone-400 w-6 mr-2 h-[0.5px] transition-all duration-200 ease-in-out"
    const span2Class = "uppercase text-xs font-semibold tracking-widest "


    const [activeSection, setActiveSection] = useState<string | null>("about");

    useEffect(() => {
        const sectionIds = ["about", "projects", "experience", "education", "techstack"];
        const handleScroll = () => {
            // const scrollPosition = window.scrollY + window.innerHeight * 0.4;
            // const scrollPosition = window.scrollY + window.innerHeight/2; 

            const scrollPosition = window.scrollY + window.innerHeight * 0.7; 
        
            // const scrollPosition = window.scrollY + 100;
            let found = false;

            for (const sectionId of sectionIds) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sectionId);
                        found = true;
                        break;
                    }
                }
            }

            // if (!found && window.scrollY < 200) {
            //     setActiveSection("about");
            // }

            if (!found || window.scrollY < 200) {
                setActiveSection("about");
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    } , []);

    useEffect(() => {
        console.log("Active section:", activeSection);
      }, [activeSection]);

    return(
        <nav aria-label="Primary navigation menu inpage links" className="mt-12 lg:block hidden"> 
          <ul className="flex flex-col gap-8">
            {/* About Nav Button */}
            <li className="w-fit">
              <a href="#root" className={`group/aboutbtn ${aTagClass}`} aria-label="About">
                <span className={`
                    ${span1Class}
                    group-hover/aboutbtn:h-px 
                    group-hover/aboutbtn:bg-stone-200 
                    group-hover/aboutbtn:w-24
                    ${activeSection === 'about' ? '!h-px !bg-stone-50 !w-24' : ''}
                `}></span>
                <span className={`
                    ${span2Class} 
                    group-hover/aboutbtn:font-bold 
                    group-hover/aboutbtn:text-stone-50
                    ${activeSection === 'about' ? '!font-bold !text-stone-50' : ''} 
                `}>About</span>
              </a>
            </li>
            
            {/* Projects Nav Button */}
    
            <li className="w-fit">
              <a href="#projects" className={`group/projectsbtn ${aTagClass}`} aria-label="projects">
                <span className={`
                    ${span1Class}
                    group-hover/projectsbtn:h-px 
                    group-hover/projectsbtn:bg-stone-200 
                    group-hover/projectsbtn:w-24
                    ${activeSection === 'projects' ? '!h-px !bg-stone-200 !w-24' : ''}
                `}></span>
                <span className={`
                    ${span2Class} 
                    group-hover/projectsbtn:font-bold 
                    group-hover/projectsbtn:text-stone-50
                    ${activeSection === 'projects' ? '!font-bold !text-stone-50' : ''} 
                `}>Projects</span>
              </a>
            </li>

            {/* Experience Nav Button */}
        
            <li className="w-fit">
              <a href="#experience" className={`group/exbtn ${aTagClass}`} aria-label="Experience">
                <span className={`
                    ${span1Class}
                    group-hover/exbtn:h-px 
                    group-hover/exbtn:bg-stone-200 
                    group-hover/exbtn:w-24
                    ${activeSection === 'experience' ? '!h-px !bg-stone-200 !w-24' : ''}
                `}></span>
                <span className={`
                    ${span2Class} 
                    group-hover/exbtn:font-bold 
                    group-hover/exbtn:text-stone-50 
                    ${activeSection === 'experience' ? '!font-bold !text-stone-50' : ''}
                `}>Experience</span>
              </a>
            </li>

            {/* Education Nav Button */}

            <li className="w-fit">
              <a href="#education" className={`group/edubtn ${aTagClass}`} aria-label="Education">
                <span className={`
                    ${span1Class}
                    group-hover/edubtn:h-px 
                    group-hover/edubtn:bg-stone-200 
                    group-hover/edubtn:w-24
                    ${activeSection === 'education' ? '!h-px !bg-stone-200 !w-24' : ''}
                `}></span>
                <span className={`
                    ${span2Class} 
                    group-hover/edubtn:font-bold 
                    group-hover/edubtn:text-stone-50
                    ${activeSection === 'education' ? '!font-bold !text-stone-50' : ''}
                `}>Education</span>
              </a>
            </li>
            {/* Tech Stack Nav Button */}

            <li className="w-fit">
              <a href="#techstack" className={`group/techbtn ${aTagClass}`} aria-label="Tech Stack">
                <span className={`
                    ${span1Class}
                    group-hover/techbtn:h-px 
                    group-hover/techbtn:bg-stone-200 
                    group-hover/techbtn:w-24
                    ${activeSection === 'techstack' ? '!h-px !bg-stone-200 !w-24' : ''}
                `}></span>
                <span className={`
                    ${span2Class} 
                    group-hover/techbtn:font-bold 
                    group-hover/techbtn:text-stone-50
                    ${activeSection === 'techstack' ? '!font-bold !text-stone-50' : ''}
                `}>Tech Stack</span>
              </a>
            </li>
          </ul>
        </nav>
    )
};