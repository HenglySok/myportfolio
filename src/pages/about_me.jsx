import { motion } from 'framer-motion';

function AboutMe() {
    // Left Column: Smooth cinematic slide-in from the left
    const imageVariants = {
        hidden: { opacity: 0, x: -60, scale: 0.92 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1] // Custom ultra-smooth ease-out
            }
        }
    };

    // Right Column: Parent Orchestrator that commands children when scrolled into view
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each text element (seconds)
                delayChildren: 0.05
            }
        }
    };

    // Individual Text Elements: Clean vertical lift with fade
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    };

    return (
        <div id="about" className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 min-h-screen px-6 md:px-16 lg:px-24 py-16 text-white font-sans overflow-hidden">

            {/* Left Side: Profile Image Frame */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
                className="relative shrink-0"
            >
                {/* Cyber Glow Ambient Backdrop - Infinite Breathing Loop */}
                <motion.div
                    animate={{
                        scale: [1, 1.06, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-linear-to-tr from-[#00f2fe]/15 to-[#7036e3]/15 rounded-2xl blur-3xl"
                ></motion.div>

                <img
                    className="relative w-full max-w-[320px] md:max-w-[380px] h-auto rounded-2xl object-cover border border-slate-800 shadow-2xl"
                    src="/hengly.png"
                    alt="Sok Hengly Profile"
                />
            </motion.div>

            {/* Right Side: Content & Details */}
            {/* The parent handles 'initial' and 'whileInView', projecting it to all motion children */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Triggers when text wrapper enters 20%
                className="max-w-2xl flex flex-col space-y-5"
            >
                {/* Header (Title & Subtitle) */}
                <motion.header variants={itemVariants} className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-bold">
                        Biography
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        About Me
                    </h2>
                    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#00f2fe] to-[#7036e3]">
                        Who Am I?
                    </h3>
                </motion.header>

                {/* Paragraph Description */}
                <motion.p variants={itemVariants} className="text-slate-400 text-base leading-relaxed">
                    Computer Science Graduate with specialized training in Cybersecurity, passionate about bridging the gap between robust software engineering and proactive security operations. Experienced in full-stack development, cross-platform mobile application design, and network vulnerability assessments. A detail-oriented professional dedicated to building secure, scalable applications and streamlining IT infrastructure.
                </motion.p>

                {/* Info Grid Section */}
                <motion.article
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-slate-800/60"
                >
                    <ul className="space-y-2.5 text-sm md:text-base text-slate-300">
                        <li><strong className="text-white font-medium">Name:</strong> Sok Hengly</li>
                        <li><strong className="text-white font-medium">Age:</strong> 23</li>
                        <li><strong className="text-white font-medium">Phone:</strong> 010 61 2992</li>
                    </ul>
                    <ul className="space-y-2.5 text-sm md:text-base text-slate-300">
                        <li><strong className="text-white font-medium">Email:</strong> sokhenglystudent@gmail.com</li>
                        <li><strong className="text-white font-medium">Education:</strong> RUPP - Information Technology</li>
                        <li><strong className="text-white font-medium">Location:</strong> Phnom Penh, Cambodia</li>
                    </ul>
                </motion.article>

                {/* Modern Action Buttons */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 pt-6">
                    {/* Primary CV Button */}
                    <motion.button
                        whileHover={{ scale: 1.03, filter: 'brightness(1.15)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open("https://drive.usercontent.google.com/download?id=137H16Z2gBp__IO-en1yJpb5265vMFlJK&export=download&authuser=0&confirm=t&uuid=c24de31e-4c85-4a42-b874-3e141f355da1&at=ALBwUgkQttHNbF4Kzc9CHVdfZ0c6:1779819256245", "_blank")}
                        className="px-7 py-3 bg-linear-to-r from-[#00f2fe] to-[#7036e3] text-white font-bold text-sm rounded-full shadow-lg shadow-[#00f2fe]/10 cursor-pointer transition-shadow duration-300"
                    >
                        Download CV
                    </motion.button>

                    {/* Secondary Contact Button */}
                    <motion.button
                        whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 242, 254, 0.08)', borderColor: '#00f2fe' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 border border-[#00f2fe]/40 rounded-full cursor-pointer transition-all duration-300"
                    >
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#00f2fe] font-semibold">
                            Contact Me
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>

        </div>
    );
}

export default AboutMe;