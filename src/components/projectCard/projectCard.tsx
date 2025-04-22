import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const linkSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>


type ProjectCardProps = {
    name: string
    description: string
    links: { [key: string]: string }
    tools: string[]

  }

export function ProjectCard({ name, description, links, tools }: ProjectCardProps) {



    return (
    <a className="flex flex-row gap-4 p-4" href={links["Live"]} target="_blank" rel="noopener noreferrer">
        {/* Left Content */}
        <div>
            {/* Need Image */}
            <p>Image</p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4">

            {/* Project Name */}
            <h3 className="font-medium">{name} ↗</h3>

            {/* Project Description */}
            <p className="text-sm text-muted-foreground">{description}</p>

            {/* Project Links */}
            <div className="flex flex-row gap-8">
                {Object.entries(links).map(([key, value]) => (
                    <div className="flex flex-row gap-2">
                       {linkSVG}
                        <a
                        key={key}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                    >
                        {key}
                    </a>
                    </div>
                    
                    ))}

            </div>

            {/* Tools */}
            <div className="flex flex-row gap-2">
                {tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-sm">{tool}</Badge>
                ))}
            </div>
            
        </div>
        
        
    </a>
    )
    
  }