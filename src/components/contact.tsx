import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const email = import.meta.env.VITE_EMAIL
const formspree_id = import.meta.env.VITE_FORMSPREE_ID

const StatusMessage = ({ message, className, onDone }: { message: string; className: string; onDone: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onDone, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <p className={`text-center text-sm transition-opacity duration-500 ${className}`}>
            {message}
        </p>
    );
};

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(`https://formspree.io/f/${formspree_id}`, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                console.log(res)
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="scroll-mt-20" id="contact">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20">

                {/* Left */}
                <div className="md:w-1/2 space-y-6 flex flex-col">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl transition-all duration-500 font-semibold tracking-wider">LET'S CONNECT</h1>
                        <p className="text-gray-300">
                            Have a project in mind or just want to say hi? My inbox is always open.
                        </p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-300">
                        <p>
                            Say hello at{" "}
                            <a
                                href={`mailto:${email}`}
                                className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
                            >
                                {email}
                            </a>
                        </p>
                    </div>

                    <a
                        href="https://github.com/Vincent-Pantaleon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-fit"
                    >
                        <FaGithub className="text-2xl" />
                        <span className="text-sm">Vincent-Pantaleon</span>
                    </a>
                </div>

                {/* Right — Form */}
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Project Inquiry"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                        </button>

                        {status === "success" && (
                            <StatusMessage
                                message="Message sent! I'll get back to you soon."
                                className="text-green-400"
                                onDone={() => setStatus("idle")}
                            />
                        )}
                        {status === "error" && (
                            <StatusMessage
                                message="Something went wrong. Please try again."
                                className="text-red-400"
                                onDone={() => setStatus("idle")}
                            />
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export { Contact };