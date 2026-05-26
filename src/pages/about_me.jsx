import { href } from "react-router-dom";

function AboutMe() {
    return (
        // Matches your main midnight background (#0b111e)
        <div id="about" className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 min-h-screen px-6 md:px-16 lg:px-24 py-16 text-white font-sans">

            {/* Left Side: Profile Image Frame */}
            <div className="relative shrink-0">
                {/* Subtle behind-the-image ambient light */}
                <div className="absolute inset-0 bg-linear-to-tr from-[#00f2fe]/10 to-[#7036e3]/10 rounded-2xl blur-2xl"></div>

                <img
                    className="relative w-full max-w-[320px] md:max-w-[380px] h-auto rounded-2xl object-cover border border-slate-800 shadow-2xl"
                    src="/public/hengly.png"
                    alt="Sok Hengly Profile"
                />
            </div>

            {/* Right Side: Content & Details */}
            <div className="max-w-2xl flex flex-col space-y-5">
                <header className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-bold">
                        Biography
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        About Me
                    </h2>
                    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#00f2fe] to-[#7036e3]">
                        Who Am I?
                    </h3>
                </header>

                <p className="text-slate-400 text-base leading-relaxed">
                    Computer Science Graduate with specialized training in Cybersecurity, passionate about bridging the gap between robust software engineering and proactive security operations. Experienced in full-stack development, cross-platform mobile application design, and network vulnerability assessments. A detail-oriented professional dedicated to building secure, scalable applications and streamlining IT infrastructure.
                </p>

                {/* Info Grid Section */}
                <article className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-slate-800/60">
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
                </article>

                {/* Modern Action Buttons */}
                <div className="flex items-center gap-4 pt-6">
                    {/* Modern Gradient Button */}
                    <button
                        onClick={() => window.open("https://drive.usercontent.google.com/download?id=137H16Z2gBp__IO-en1yJpb5265vMFlJK&export=download&authuser=0&confirm=t&uuid=c24de31e-4c85-4a42-b874-3e141f355da1&at=ALBwUgkQttHNbF4Kzc9CHVdfZ0c6:1779819256245", "_blank")}
                        className="px-7 py-3 bg-linear-to-r from-[#00f2fe] to-[#7036e3] text-white font-bold text-sm rounded-full hover:brightness-110 shadow-lg shadow-[#00f2fe]/10 transition-all active:scale-98 cursor-pointer"
                    >
                        Download CV
                    </button>

                    {/* Modern Outline Button fading into background on right */}
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 border border-[#00f2fe]/40 text-[#00f2fe] font-semibold rounded-full hover:bg-[#00f2fe]/10 hover:border-[#00f2fe] transition-all active:scale-98 cursor-pointer">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#00f2fe]">
                            Contact Me
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;