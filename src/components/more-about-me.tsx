import { RiReactjsFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import {
    SiTailwindcss,
    SiVercel,
    SiPostman,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiVite
} from "react-icons/si";
import { FaGitAlt, FaFigma } from "react-icons/fa";

const techStack = {
    label: "Technical Stack",
    categories: [
        {
            sub: "Frontend",
            items: [
                { label: "React", icon: RiReactjsFill },
                { label: "Tailwind CSS", icon: SiTailwindcss },
                { label: "Vite", icon: SiVite },
            ],
        },
        {
            sub: "Frameworks",
            items: [
                { label: "Next.js", icon: RiNextjsFill },
            ],
        },
        {
            sub: "Backend",
            items: [
                { label: "Supabase (PostgreSQL)", icon: RiSupabaseFill },
                { label: "Edge Functions", icon: null },
            ],
        },
        {
            sub: "Tools",
            items: [
                { label: "Vercel", icon: SiVercel },
                { label: "Git", icon: FaGitAlt },
                { label: "Postman", icon: SiPostman },
                { label: "Figma", icon: FaFigma}
            ],
        },
    ],
};

const languages = {
    label: "Programming Languages",
    items: [
        { label: "TypeScript", icon: SiTypescript },
        { label: "JavaScript (ES6+)", icon: SiJavascript },
        { label: "HTML5", icon: SiHtml5 },
        { label: "CSS3", icon: SiCss },
    ],
};

const competencies = {
    label: "Core Competencies",
    items: [
        "Full-stack Web Development",
        "Responsive Design",
        "Server-Side Rendering (SSR)",
        "Database Management",
        "API Integration",
    ],
};

const MoreAbout = () => {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="space-y-4 scroll-mt-20" id="about">
                <h1 className="text-5xl md:text-7xl transition-all duration-500 font-semibold">MORE ABOUT ME</h1>
                <p className="text-gray-300">A Full-Stack Developer focused on building complete, production-ready web applications. Proficient in React, Next.js, Vite, TypeScript, and Supabase, with a strong grasp of responsive design, SSR, database management, and API integration — delivering projects that are clean, scalable, and user-focused.</p>
            </div>

            {/* Single Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-8">

                {/* Technical Stack */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-white tracking-widest">🛠 {techStack.label}</h2>
                    <div className="space-y-4 pl-2">
                        {techStack.categories.map((cat) => (
                            <div key={cat.sub}>
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{cat.sub}</p>
                                <ul className="space-y-1.5 pl-2">
                                    {cat.items.map((item) => (
                                        <li key={item.label} className="flex items-center gap-2 text-sm text-gray-200">
                                            {item.icon ? (
                                                <item.icon className="text-base text-gray-400 shrink-0" />
                                            ) : (
                                                <span className="text-gray-500 text-xs">⚡</span>
                                            )}
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Programming Languages */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-white tracking-widest">💻 {languages.label}</h2>
                    <ul className="space-y-1.5 pl-2">
                        {languages.items.map((item) => (
                            <li key={item.label} className="flex items-center gap-2 text-sm text-gray-200">
                                <item.icon className="text-base text-gray-400 shrink-0" />
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Core Competencies */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-white tracking-widest">🎯 {competencies.label}</h2>
                    <ul className="space-y-1.5 pl-2">
                        {competencies.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export { MoreAbout };