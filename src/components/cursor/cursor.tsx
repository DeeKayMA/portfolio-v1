'use client';
import { useEffect } from "react";

export const Cursor = () => {

    useEffect(() => {
        const dot = document.getElementById("custom-cursor");

        const handleMouseMove = (e: MouseEvent) => {
            if (dot) {
                // Set the position of the dot to follow the mouse cursor
                // The offsetWidth and offsetHeight are used to center the dot on the cursor
                dot.style.transform = `translate(${e.clientX - dot.offsetWidth / 2}px, ${e.clientY - dot.offsetHeight / 2}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    
    }, []);


    return(
        <div 
        id="custom-cursor"
        data-testid="custom-cursor"
        className="
            fixed top-0 left-0 w-4 h-4 
            bg-stone-50 
            rounded-full 
            pointer-events-none 
            mix-blend-difference 
            z-50
            transition-transform duration-150 ease-out
            hidden
            lg:block
        "
        />
        
    )
}