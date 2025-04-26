'use client';
import { useEffect } from "react";

export const Cursor = () => {

    useEffect(() => {
        const glow = document.getElementById("custom-cursor");

        const handleMouseMove = (e: MouseEvent) => {
            if (glow) {
                // glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                glow.style.transform = `translate(${e.clientX - glow.offsetWidth / 2}px, ${e.clientY - glow.offsetHeight / 2}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    
    }, []);


    return(
        // <div 
        // id="cursor-glow"
        // className="
        //     z-0 fixed top-0 left-0 w-[600px] h-[600px] 
        //     blur-[200px] pointer-events-none 
        //     transition-transform duration-500 ease-out 
        //     rounded-full
        //     opacity-20
        //     bg-radial from-amber-400/30 from-30% to-orange-400/25
        // "
        // // bg-radial from-amber-400/30 from-30% to-orange-400/25
        // />
        <div 
        id="custom-cursor"
        className="
            fixed top-0 left-0 w-4 h-4 
            bg-stone-200 
            rounded-full 
            pointer-events-none 
            mix-blend-difference 
            z-50
            transition-transform duration-150 ease-out
        "
        />
        
    )
}