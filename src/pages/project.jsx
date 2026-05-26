import projects from "../data/projectsData";

function Project() {
    return (
        // Matches your main midnight background (#0b111e)
        <div id="projects" className="bg-[#0b111e] px-6 py-20 md:px-16 lg:px-24 flex flex-col items-center justify-center min-h-screen text-white font-sans">

            {/* Section Header */}
            <header className="text-center space-y-2 mb-16">
                <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-bold">
                    Portfolio
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    My Projects
                </h1>
                <div className="w-12 h-1 bg-linear-to-r from-[#00f2fe] to-[#7036e3] mx-auto rounded-full mt-4"></div>
            </header>

            {/* Responsive Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
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
                                {/* Repository Button (Conditional rendering if link exists) */}
                                {project.repository !== undefined && project.repository !== "" ? (
                                    <a
                                        href={project.repository}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 bg-linear-to-r from-[#00f2fe] to-[#7036e3] text-white font-bold text-xs rounded-lg hover:brightness-110 transition-all cursor-pointer"
                                    >
                                        Repository
                                    </a>
                                ) : null}

                                {/* Demo Button (Conditional rendering if link exists) */}
                                {project.demo !== undefined && project.demo !== "" ? (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 border border-[#00f2fe]/30 text-[#00f2fe] font-semibold text-xs rounded-lg hover:bg-[#00f2fe]/10 hover:border-[#00f2fe] transition-all cursor-pointer"
                                    >
                                        Live Demo
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Project;