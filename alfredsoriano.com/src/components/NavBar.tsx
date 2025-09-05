import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle.tsx";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        }    
    
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className = {cn("flex w-full  z-40 transition-all duration-300",
                                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                                : "py-5")}
        >
            
            <div className = "container flex items-center">
                <a className = "text-xl font-bold text-primary flex items-center" href="#home">
                    <span className = "relative z-10">
                        <span className = "text-glow text-primary-foreground"> Alfred Soriano </span>
                        Developer Portfolio
                    </span>
                </a>

                {/* Desktop NavBar */}
                <div className = "hidden md:flex items-center space-x-8 ml-auto">
                    {navItems.map((item, key) => (
                        <a key={key} 
                           href={item.href} 
                           className = "text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                        
                    ))}
                </div>
                <div className = "hidden md:flex items-center ml-4">
                    <ThemeToggle />
                </div>

                
                {/* Mobile NavBar */}
                <button onClick = {() => setIsMenuOpen((prev) => !prev)}
                        className = "md:hidden p-2 text-foreground z-50 ml-auto"
                        aria-label = {isMenuOpen ? "Close Menu" : "Open Menu"}> 
                    {isMenuOpen ? <X size = {24} /> : <Menu size = {24}/>} 
                </button>

                <div className = {cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" 
                           : "opacity-0 pointer-events-none"
                )}>
                    <div className = "flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} 
                               href={item.href} 
                               className = "text-foreground/80 hover:text-primary transition-colors duration-300"
                               onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav> 
    );
};