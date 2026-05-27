import { motion } from 'framer-motion';
import projects from "../data/projectsData";

function Project() {
    // Parent grid variant to manage stagger delays for incoming child cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Smooth wave effect as cards reveal
            },
        },
    };

    // Card entry animation setup
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40 // Starts a bit lower down for a classic slide-up reveal
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        },
    };

    return (
        <div id="projects" className="bg-[#0b111e] px-6 py-20 md:px-16 lg:px-24 flex flex-col items-center justify-center min-h-screen text-white font-sans overflow-hidden">

            {/* Section Header with smooth fade-in up */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center space-y-2 mb-16"
            >
                <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-bold">
                    Portfolio
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    My Projects
                </h1>
                <div className="w-12 h-1 bg-linear-to-r from-[#00f2fe] to-[#7036e3] mx-auto rounded-full mt-4"></div>
            </motion.header>

            {/* UPDATED: Converted to motion.div for staggered card entry */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} // Triggers just before coming fully onto the screen
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
            >
                {projects.map((project, index) => (
                    /* UPDATED: Converted to motion.div */
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="group bg-[#111c2e]/40 backdrop-blur-md border border-slate-800/60 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-[#00f2fe]/5"
                    >
                        {/* Project Image Frame with Zoom Effect */}
                        <div className="w-full h-48 overflow-hidden bg-slate-900 border-b border-slate-800/50 relative">
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Card Content Wrapper */}
                        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                            <div className="space-y-2">
                                {/* Project Title */}
                                <h2 className="text-xl font-bold text-white group-hover:text-[#00f2fe] transition-colors line-clamp-2">
                                    {project.name}
                                </h2>

                                {/* Technology Badges */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.technology.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] font-mono font-medium px-2 py-0.5 bg-slate-800/80 text-slate-300 border border-slate-700/50 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons Frame */}
                            <div className="flex items-center gap-3 pt-2">
                                {/* Repository Button */}
                                {project.repository !== undefined && project.repository !== "" ? (
                                    <motion.a
                                        whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.repository}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 bg-linear-to-r from-[#00f2fe] to-[#7036e3] text-white font-bold text-xs rounded-lg transition-all cursor-pointer block"
                                    >
                                        Repository
                                    </motion.a>
                                ) : null}

                                {/* Demo Button */}
                                {project.demo !== undefined && project.demo !== "" ? (
                                    <motion.a
                                        whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 242, 254, 0.1)' }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 border border-[#00f2fe]/30 text-[#00f2fe] font-semibold text-xs rounded-lg transition-all cursor-pointer block"
                                    >
                                        Live Demo
                                    </motion.a>
                                ) : null}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
}

export default Project;