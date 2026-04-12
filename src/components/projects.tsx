import { useState, useEffect } from "react"
import { CardContainer } from "./card"
import { ProjectsSkeleton } from "./loading-skeleton"

const token = import.meta.env.VITE_GITHUB_TOKEN
const username = import.meta.env.VITE_GITHUB_USER

const Projects = () => {
    const [data, setData] = useState<Repo[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => {
        const fetchRepos = async (username: string) => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        'Authorization': token,
                        'Accept': 'application/vnd.github+json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`)
                }

                const repos = await response.json();

                setData(repos);
                setIsLoading(false)
            } catch (error) {
                console.error(error)
                setError(error instanceof Error ? error.message : 'Something went wrong')
            }
        };

        fetchRepos(username);
    }, []);

    if (error) {
        return <p>{error}</p>
    }

    return (
        <section className="space-y-10 scroll-mt-20" id="work">  
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl transition-all duration-500 font-semibold">FEATURED PROJECTS</h1>

                <p className="text-gray-300">Here are some of my projects that showcase my passion for development</p>
            </div>

            {isLoading ? <ProjectsSkeleton/> : <CardContainer repos={data}/>}
            
        </section>
    )
}

export { Projects }