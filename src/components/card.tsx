import { useState } from "react"
import { FadeIn } from "./fade-in"

interface ComponentProps {
    repo: Repo
}

interface ContainerProps {
    repos: Repo[]
}

const CardContainer = ({ repos }: ContainerProps) => {
    const [page, setPage] = useState(1)
    const itemsPerPage = 9

    const totalPages = Math.ceil(repos.length / itemsPerPage)
    const paginated = repos.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginated.map((repo, index) => (
                    <FadeIn key={index}>
                        <ProjectCard key={repo.name} repo={repo} />
                    </FadeIn>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-white/10 rounded-full text-white/40 hover:text-white hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`w-8 h-8 text-xs font-bold rounded-full border transition-all duration-200
                                ${page === p
                                    ? "bg-[#c8f135] text-black border-[#c8f135]"
                                    : "border-white/10 text-white/40 hover:text-white hover:border-white/30"
                                }`}
                        >
                            {p}
                        </button>
                    ))}

                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-white/10 rounded-full text-white/40 hover:text-white hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

const ProjectCard = ({ repo }: ComponentProps) => {
    return (
        <div className="w-full h-60 rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
            <div className="space-y-2"> 
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Repository
                </p>

                <p className="text-white font-black text-xl uppercase leading-tight group-hover:text-primary transition-colors duration-300">
                    {repo.name}
                </p>

                <div className="border-t border-white/10" />

                <p className="text-white/50 text-sm leading-relaxed">
                    {repo.description ?? "No description provided."}
                </p>
            </div>

            <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary hover:underline transition-colors duration-200"
            >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
            </a>
        </div>
    )
}

export { ProjectCard, CardContainer }