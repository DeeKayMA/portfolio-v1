'use client';
import { useEffect } from "react";

export const Cursor = () => {

    useEffect(() => {
        const glow = document.getElementById("cursor-glow");

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
        <div 
        id="cursor-glow"
        className="
        z0 fixed top-0 left-0 w-[600px] h-[600px] 
        blur-3xl pointer-events-none 
        transition-transform duration-0 
        rounded-full
        opacity-15
        bg-radial from-blue-400/25 from-40% to-sky-400/30"
        />
    )
}