function HeroSection() {
    return (
        // Changed bg to #030712 (Tailwind's ultra-modern deep zinc/gray-950 dark mode base)
        <div id="home" className="flex flex-col md:flex-row items-center justify-center gap-16 min-h-screen px-6 md:px-20 text-white font-sans selection:bg-[#00f2fe]/30">

            {/* Left Column: Text Content and Action Buttons */}
            <div className="max-w-xl space-y-6">
                <header className="space-y-3">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-100">
                        Hi, I'm{' '}
                        {/* Upgraded gradient to an electric cyan-blue to vivid purple mix */}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2fe] via-[#4facfe] to-[#9b51e0]">
                            Sok Hengly
                        </span>
                    </h2>
                    {/* Modern tech tracking-wide subtitle */}
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-[#00f2fe]">
                        FullStack Developer
                    </h3>
                </header>

                {/* Smoother text readability using a premium zinc-400 tone */}
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
                    Hi, I'm Sok Hengly, an Information Technology graduate from RUPP specializing in full-stack development.
                    I build responsive, dynamic web applications using React, Node.js, and Tailwind CSS, while integrating
                    security practices gained from practical penetration testing. I am passionate about writing clean code,
                    designing databases, and solving complex technical challenges across the entire development lifecycle.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                    {/* Modern Contact Me Button: Fades cleanly into the deep #030712 surface */}
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 bg-linear-to-r from-[#00f2fe] to-indigo-700  font-bold rounded-full hover:brightness-120 transition-all shadow-lg shadow-[#00f2fe]/10 active:scale-98 cursor-pointer">
                        Contact Me
                    </button>

                    {/* Modern View Projects Button: Clean, glowing outline with low-opacity backdrop hover */}
                    <button
                        onClick={() => {
                            document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 border border-[#00f2fe]/40 text-[#00f2fe] font-semibold rounded-full hover:bg-[#00f2fe]/10 hover:border-[#00f2fe] transition-all active:scale-98 cursor-pointer">
                        View Projects
                    </button>
                </div>
            </div>

            {/* Right Column: Profile Image with Modern Cyber Glow Effect */}
            <div className="relative flex justify-center items-center">
                {/* Enhanced Backdrop Blur Glow: Combines cyan and purple for a studio lighting look */}
                <div className="absolute w-72 h-72 md:w-85 md:h-85 rounded-full bg-linear-to-tr from-[#00f2fe]/20 to-[#9b51e0]/20 blur-3xl animate-pulse duration-4000"></div>

                {/* Image Wrapper Container with a subtle modern border stroke */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-slate-700 bg-[#0b111e] shadow-2xl">
                    <img
                        className="w-full h-full object-cover brightness-95 contrast-105 mix-blend-lighten"
                        src="/hengly_free.png"
                        alt="Sok Hengly Profile"
                    />
                </div>
            </div>

        </div>
    );
}

export default HeroSection;