import { useEffect, useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

// NEW: Sub-component that handles the endless type & delete loop
function TypewriterEffect({ words }) {
    const [wordIndex, setWordIndex] = useState(0);
    const count = useMotionValue(0);

    // Calculates the substring based on the motion value count
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => words[wordIndex].slice(0, latest));

    useEffect(() => {
        // Controls the typing speed (based on word length)
        const controls = animate(count, words[wordIndex].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                // Short pause after finishing typing, then reverse (delete)
                setTimeout(() => {
                    animate(count, 0, {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        onComplete: () => {
                            // Cycle to the next word once deleted
                            setWordIndex((prev) => (prev + 1) % words.length);
                        }
                    });
                }, 1500); // 1.5s delay before starting to delete
            }
        });

        return () => controls.stop();
    }, [wordIndex, count, words]);

    return (
        <span className="relative">
            {/* The dynamically typing text */}
            <motion.span>{displayText}</motion.span>

            {/* Blinking keyboard cursor */}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[1.1em] bg-[#00f2fe] ml-1 align-middle translate-y-[-2px]"
            />
        </span>
    );
}

function HeroSection() {
    // List of roles you want to loop through, just like in the video
    const roles = ["FullStack Developer", "Web Developer", "UI/UX Designer", "Pentester"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
        },
    };

    return (
        <div id="home" className="animate-fade-in flex flex-col md:flex-row items-center justify-center gap-16 min-h-screen px-6 md:px-20 text-white font-sans selection:bg-[#00f2fe]/30 overflow-hidden">

            {/* Left Column: Text Content and Action Buttons */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl space-y-6 z-10"
            >
                <header className="space-y-3">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-black tracking-tight text-slate-100"
                    >
                        Hi, I'm{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2fe] via-[#4facfe] to-[#9b51e0]">
                            Sok Hengly
                        </span>
                    </motion.h2>

                    {/* UPDATED: Integrated the custom multi-word typewriter component */}
                    <motion.h3
                        variants={itemVariants}
                        className="text-lg md:text-xl font-bold uppercase tracking-widest text-[#00f2fe] min-h-[1.75rem]"
                    >
                        <TypewriterEffect words={roles} />
                    </motion.h3>
                </header>

                <motion.p
                    variants={itemVariants}
                    className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal"
                >
                    Hi, I'm Sok Hengly, an Information Technology graduate from RUPP specializing in full-stack development.
                    I build responsive, dynamic web applications using React, Node.js, and Tailwind CSS, while integrating
                    security practices gained from practical penetration testing. I am passionate about writing clean code,
                    designing databases, and solving complex technical challenges across the entire development lifecycle.
                </motion.p>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
                    <motion.button
                        whileHover={{ scale: 1.03, filter: 'brightness(1.15)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-linear-to-r from-[#00f2fe] to-indigo-700 font-bold rounded-full shadow-lg shadow-[#00f2fe]/10 cursor-pointer"
                    >
                        Contact Me
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 242, 254, 0.1)', borderColor: '#00f2fe' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 border border-[#00f2fe]/40 text-[#00f2fe] font-semibold rounded-full cursor-pointer"
                    >
                        View Projects
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Right Column: Profile Image */}
            <motion.div variants={imageVariants} initial="hidden" animate="visible" className="relative flex justify-center items-center">
                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-72 h-72 md:w-85 md:h-85 rounded-full bg-linear-to-tr from-[#00f2fe]/20 to-[#9b51e0]/20 blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-slate-700 bg-[#0b111e] shadow-2xl"
                >
                    <img className="w-full h-full object-cover brightness-95 contrast-105 mix-blend-lighten" src="/hengly_free.png" alt="Sok Hengly Profile" />
                </motion.div>
            </motion.div>

        </div>
    );
}

export default HeroSection;