import skills from "../data/skillsData";

function Skills() {
    return (
        // Matches your main midnight background (#0b111e)
        <div id="skills" className="bg-[#0b111e] px-6 py-20 md:px-16 lg:px-24 flex flex-col items-center justify-center min-h-screen text-white font-sans">

            {/* Header Section */}
            <header className="text-center space-y-2 mb-16">
                <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-bold">
                    Abilities
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Technical Skills
                </h1>
                <div className="w-12 h-1 bg-linear-to-r from-[#00f2fe] to-[#7036e3] mx-auto rounded-full mt-4"></div>
            </header>

            {/* Responsive Grid System */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#111c2e]/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00f2fe]/40 hover:shadow-lg hover:shadow-[#00f2fe]/5"
                    >
                        {/* Soft ambient corner glow on hover */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-[#00f2fe]/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Skill Icon Frame */}
                        <div className="w-14 h-14 rounded-xl bg-[#0b111e]/80 border border-slate-800/80 flex items-center justify-center p-2.5 mb-5 group-hover:scale-105 group-hover:border-[#00f2fe]/30 transition-all duration-300">
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Skill Name */}
                        <h2 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#00f2fe] transition-colors">
                            {skill.name}
                        </h2>

                        {/* Including Details / Sub-skills */}
                        <p className="text-sm text-slate-400 leading-relaxed font-light">
                            {skill.including.join(", ")}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Skills;