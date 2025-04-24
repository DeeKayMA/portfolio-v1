import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState } from "react"


// 

type ExperienceCardProps = {
    role: string
    company: string
    description: string
    year: string
    // links: { [key: string]: string }
    tools: string[]

  }

export function ExperienceCard({ role, company, year, description, tools }: ExperienceCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const router = useRouter()

    


    return (
    <div className=" flex flex-col lg:flex-row gap-2 lg:gap-4 ">
        {/* Left Content */}
        <div className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/4">{year}</div>

        {/* Right Content */}
        <div className="flex flex-col gap-4 w-full lg:w-3/4">

            {/* Experience Title */}
            <h3 className={`font-medium text-slate-200 flex flex-row items-center gap-1`}>{role}<span className="text-2xl px-1">·</span>{company}</h3>
            {/* Need to add is hovered to arrow icon and move it to top right  */}

            {/* Experience Description */}
            <p className="text-sm">{description}</p>

            {/* Tools */}
            <div className="flex flex-row gap-2">
                {tools.map((tool) => (
                    <Badge key={tool} variant="outline" className=" rounded font-normal text-sm text-teal-400 bg-teal-400/10">{tool}</Badge>
                ))}
            </div>
            
        </div>
        
        
    </div>
    )
    
  }