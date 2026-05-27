import { useState, useEffect } from "react";

function Nav() {
    const [activeSection, setActiveSection] = useState("home");

    // This modern scroll-spy automatically highlights the current navigation item as you scroll down the page!
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "contact"];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-primary/70 backdrop-blur-md border-b border-surface/50 text-white px-4 sm:px-6 md:px-20 py-3 transition-all">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">

                {/* Brand Logo with Premium Text-Gradient Dot */}
                <h2 className="text-lg sm:text-xl font-black tracking-wider cursor-pointer hover:opacity-90 transition-opacity shrink-0">
                    Hengly<span className="text-secondary">.</span>
                </h2>

                {/* Main Menu Links - Now scales responsive fonts and padding */}
                <ul className="flex items-center gap-0.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-slate-300 overflow-x-auto no-scrollbar">
                    {[
                        { id: "home", label: "Home" },
                        { id: "about", label: "About" },
                        { id: "skills", label: "Skills" },
                        { id: "projects", label: "Projects" },
                        { id: "contact", label: "Contact" }
                    ].map((item) => (
                        <li key={item.id} className="shrink-0">
                            <a
                                href={`#${item.id}`}
                                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 inline-block relative cursor-pointer
                                    ${activeSection === item.id
                                        ? "text-secondary bg-surface/60 font-bold"
                                        : "hover:text-white hover:bg-surface/20"
                                    }`}
                            >
                                {item.label}

                                {/* Sleek underline glow accent for the active section */}
                                {activeSection === item.id && (
                                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-linear-to-r from-secondary to-accent rounded-full animate-fade-in" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Call-to-Action Mini Button */}
                <div className="hidden sm:block shrink-0">
                    <a
                        href="#about"
                        className="px-3 md:px-5 py-2 border border-secondary/30 text-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-secondary/10 hover:border-secondary transition-all cursor-pointer"
                    >
                        Let's Talk
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Nav;