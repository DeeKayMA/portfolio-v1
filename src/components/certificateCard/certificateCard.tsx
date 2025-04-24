'use client'


import { useRouter } from "next/navigation"
import { useState } from "react"


// 

type CertificateCardProps = {
    certificate: string
    company: string
    description: string
    link: string
    year: string

  }

export function CertificateCard({ certificate, company, description, link, year }: CertificateCardProps) {
    const router = useRouter()
    const arrowUpRightSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-100 ease-in-out group-hover/project:-translate-y-1 group-hover/project:translate-x-1`}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>

    


    return (
    <div className=" flex flex-col-reverse lg:flex-row gap-10 lg:gap-4 cursor-pointer group/project" 
    onClick={() => {
        if (!link) return;
        window.open(link, "_blank")
        }}>
        {/* Left Content */}
        <div className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            {/* Need Year */}
            {year}
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4 w-full lg:w-3/4">

            {/* Project Name */}
            <a><h3 className={`font-medium text-slate-200 group-hover/project:text-teal-400 `}><span className="flex flex-row items-center gap-1">{certificate} · {company}{(link) && arrowUpRightSVG}</span></h3></a>

            {/* Project Description */}
            <p className="text-sm">{description}</p>
            
        </div>
        
        
    </div>
    )
    
  }