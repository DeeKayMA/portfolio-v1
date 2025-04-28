import { Badge } from "@/components/ui/badge"

type teckStackCardProps = {
    techstack: string[]
  }


export const TechStackCard = ({ techstack }: teckStackCardProps) => {
    return (
        <div className="flex flex-row gap-2 flex-wrap">
                {techstack.map((tech) => (
                    <Badge key={tech} className=" rounded font-normal text-sm text-amber-400/80 bg-amber-400/10">{tech}</Badge>
                ))}
        </div>
    )
}