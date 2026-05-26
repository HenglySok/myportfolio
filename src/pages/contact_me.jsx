import { toast, Toaster } from 'react-hot-toast'; // 1. Import the toast utilities

function ContactMe() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        // Optional: Show a loading state while processing
        const loadingToast = toast.loading("Sending your message...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const resData = await response.json();

            // Dismiss the loading toast before showing the result
            toast.dismiss(loadingToast);

            if (resData.success) {
                // 2. Beautiful Success Toast
                toast.success("Message sent successfully!", {
                    duration: 4000,
                    position: "top-center",
                });
                e.target.reset();
            } else {
                // 2. Beautiful Error Toast
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            toast.dismiss(loadingToast);
            toast.error("Network error. Please check your internet connection.");
        }
    };

    return (
        <section id="contact" className="px-6 py-20 md:px-16 lg:px-24 min-h-screen text-white font-sans flex items-center justify-center">

            {/* 3. Add the Toaster component somewhere inside your JSX */}
            <Toaster toastOptions={{
                style: {
                    background: '#111c2e',
                    color: '#fff',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                },
            }} />

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Column: Contact Info */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                            Contact Information
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-md">
                            Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                    </div>

                    <ul className="space-y-6 pt-4">
                        <li className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                Location
                            </h3>
                            <p className="text-base text-slate-200">Preak Pnov, Phnom Penh, Cambodia</p>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                Email
                            </h3>
                            <a
                                href="mailto:sokhenglystudent@gmail.com"
                                className="text-base text-[#00f2fe] hover:underline transition-all w-fit"
                            >
                                sokhenglystudent@gmail.com
                            </a>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                Phone
                            </h3>
                            <a
                                href="tel:+85510612992"
                                className="text-base text-slate-200 hover:text-[#00f2fe] transition-colors w-fit"
                            >
                                010 612 992
                            </a>
                        </li>
                        {/* Social Buttons Section */}
                        <li className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://github.com/henglysok"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-sm bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://t.me/Lyrics_03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-sm bg-[#0088cc]/20 text-[#0088cc] hover:bg-[#0088cc]/30 border border-[#0088cc]/30 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 18.721c.271 1.236-.459 1.761-1.488 1.09l-5.63-4.148-2.716 2.613c-.302.302-.556.556-1.137.556l.403-5.719 10.41-9.405c.453-.403-.099-.627-.704-.224l-12.87 8.107-5.541-1.733c-1.205-.377-1.229-1.205.252-1.785l21.653-8.351c1.002-.365 1.879.234 1.503 1.778z" />
                                </svg>
                                Telegram
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Column: High-Performance Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#111c2e]/20 backdrop-blur-md border border-slate-800/40 p-6 md:p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="px-4 py-2.5 rounded-xl bg-[#111c2e]/40 backdrop-blur-md border border-slate-800/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe]/50 transition-all text-sm"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="px-4 py-2.5 rounded-xl bg-[#111c2e]/40 backdrop-blur-md border border-slate-800/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe]/50 transition-all text-sm"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            required
                            className="px-4 py-2.5 rounded-xl bg-[#111c2e]/40 backdrop-blur-md border border-slate-800/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe]/50 transition-all text-sm resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-2 px-6 py-3 bg-linear-to-r from-[#00f2fe] to-[#7036e3] text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg shadow-[#00f2fe]/10 active:scale-[0.98] cursor-pointer text-sm tracking-wide"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default ContactMe;