'use client'

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"


// 

type ProjectCardProps = {
    name: string
    description: string
    links: { [key: string]: string }
    tools: string[]
    img: string

  }

export function ProjectCard({ name, description, links, tools, img }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const linkSVG = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    const arrowUpRightSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isHovered ? '' : 'transition-all duration-100 ease-in-out group-hover/project:-translate-y-1 group-hover/project:translate-x-1'}`}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>

    


    return (
    <div className=" flex flex-col-reverse lg:flex-row gap-4  group/project" 
    role="link"
    tabIndex={0}
    onClick={() => {
        //Tries to open the live link, if not available it opens the GitHub link
        // If both are not available, it does nothing
        const url = links["Live"] || links["GitHub"]
        if (!url) return;
        window.open(url, "_blank")
        }}>
        {/* Left Content */}
        <div className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            {/* Need Image */}
            <Image src={img} alt={`${name} screenshot`} width={200} height={48} className="rounded w-full border-2"/>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4 w-full lg:w-3/4">

            {/* Project Name */}
            <a><h3 className={`font-medium text-stone-50 ${isHovered ? '' : 'group-hover/project:text-amber-400 '}`}><span className="flex flex-row items-center gap-1">{name}{(links["Live"] || links["GitHub"]) && arrowUpRightSVG}</span></h3></a>
            {/* Need to add is hovered to arrow icon and move it to top right  */}

            {/* Project Description */}
            <p className="text-md ">{description}</p>

            {/* Project Links */}
            {(links["GitHub"])&& 
            <div className="flex flex-row gap-2 items-center text-stone-50 ">
                        <a
                        href={links["GitHub"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // prevent parent click
                        onMouseEnter={() => setIsHovered(true)} // When the mouse enters the link
                        onMouseLeave={() => setIsHovered(false)} // When the mouse leaves the link
                        className="flex flex-row gap-1 items-center lg:text-sm font-medium hover:text-amber-400 transition-all duration-100 ease-in-out "
                    >
                        <span className="transition-colors">{linkSVG}</span>
                        <p>GitHub</p>
                    </a>
            </div>
            }
        

            {/* Tools */}
            <div className="flex flex-row gap-2 flex-wrap">
                {tools.map((tool) => (
                    <Badge key={tool} className=" rounded font-normal text-sm text-amber-400/80 bg-amber-400/10">{tool}</Badge>
                ))}
            </div>
            
        </div>
        
        
    </div>
    )
    
  }