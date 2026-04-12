const ProjectsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4 animate-pulse">
                    {/* Label */}
                    <div className="h-3 w-20 bg-white/10 rounded-full" />

                    {/* Repo name */}
                    <div className="h-6 w-3/4 bg-white/10 rounded-full" />

                    {/* Divider */}
                    <div className="border-t border-white/10" />

                    {/* Description lines */}
                    <div className="space-y-2">
                        <div className="h-3 w-full bg-white/10 rounded-full" />
                        <div className="h-3 w-5/6 bg-white/10 rounded-full" />
                        <div className="h-3 w-4/6 bg-white/10 rounded-full" />
                    </div>

                    {/* GitHub link */}
                    <div className="h-3 w-28 bg-white/10 rounded-full" />
                </div>
            ))}
        </div>
    )
}

export { ProjectsSkeleton }