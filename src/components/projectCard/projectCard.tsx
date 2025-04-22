import { Badge } from "@/components/ui/badge"

type ProjectCardProps = {
    name: string
    description: string
    liveLink: string
    githubLink: string
    tools: string[]

  }

export function ProjectCard({ name, description, liveLink, githubLink, tools }: ProjectCardProps) {



    return (
    <div className="flex flex-row">
        <div>
            {/* Need Image */}
        </div>
        <div className="flex flex-col gap-4">
            {/* Project Name */}
            <h3 className="font-medium">{name} ↗</h3>

            {/* Project Description */}
            <p className="text-sm text-muted-foreground">{description}</p>

            {/* Project Links */}
            <div className="flex flex-row gap-4">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-sm ">Live</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-sm ">GitHub</a>
            </div>

            {/* Tools */}
            <div className="flex flex-row gap-2">
                {tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-sm">{tool}</Badge>
                ))}
            </div>
            
        </div>
        
        
    </div>
    )
    
  }