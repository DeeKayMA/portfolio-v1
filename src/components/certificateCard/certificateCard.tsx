import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState } from "react"


// 

type CertificateCardProps = {
    certificate: string
    company: string
    description: string
    year: string
    link: string

  }

export function CertificateCard({ certificate, company, year, description, link }: CertificateCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const router = useRouter()
    const linkSVG = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>


    


    return (
    <div className=" flex flex-col-reverse lg:flex-row gap-10 lg:gap-4 ">
        {/* Left Content */}
        <div className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/4">{year}</div>

        {/* Right Content */}
        <div className="flex flex-col gap-4 w-full lg:w-3/4">

            {/* Experience Title */}
            <h3 className={`font-medium text-slate-200`}>{certificate} · {company}</h3>

            {/* Experience Description */}
            <p className="text-sm">{description}</p>

            <div className="flex flex-row gap-2 items-center text-slate-200 ">
                <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-1 items-center text-sm hover:text-teal-400 transition-all duration-100 ease-in-out "
                >
                <span className="transition-colors">{linkSVG}</span>
                <p>Certificate</p>
                </a>
            </div>
            
        </div>
        
        
    </div>
    )
    
  }