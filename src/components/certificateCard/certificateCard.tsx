
type CertificateCardProps = {
    certificate: string
    company: string
    description: string
    link: string
    year: string

  }

export function CertificateCard({ certificate, company, description, link, year }: CertificateCardProps) {
    const arrowUpRightSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-100 ease-in-out group-hover/education:-translate-y-1 group-hover/education:translate-x-1`}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>

    


    return (
    <a className=" flex flex-col lg:flex-row gap-2 lg:gap-4  group/education" 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    role="link"
        >
        {/* Left Content */}
        <div className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            {/* Need Year */}
            {year}
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4 w-full lg:w-3/4">

            {/* education Name */}
            <h3 className={`font-medium flex-wrap text-stone-50 group-hover/education:text-amber-400 flex flex-row items-center gap-1`}>{certificate}<span className="text-2xl px-1">·</span>{company}{(link) && arrowUpRightSVG}</h3>

            {/* education Description */}
            <p className="text-md">{description}</p>
            
        </div>
        
        
    </a>
    )
    
  }