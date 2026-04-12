import { FaGithub } from "react-icons/fa";
import { LinkComponent } from "./link";
import { useState } from "react";

const Hero = () => {
    const [loaded, setLoaded] = useState(false)

    return (
        <main className="h-190 flex flex-col md:flex-row transition-all duration-300">
            <div className="w-full md:w-1/2 p-2 md:p-10 flex flex-col justify-center gap-5">
                <div className="text-5xl md:text-7xl transition-all duration-500">
                    <h1>HI, I AM</h1>
                    <h2>VINCENT PANTALEON.</h2>
                </div>

                <p>A Full-Stack Developer and fresh graduate from Butuan City, passionate about turning ideas into polished, functional products through thoughtful design and clean code.</p>

                <div className="flex gap-5">
                    <LinkComponent
                        href="https://github.com/Vincent-Pantaleon"
                        icon={FaGithub}
                    />
                    <LinkComponent
                        href="src/assets/Vincent Michael's Professional Resume.pdf"
                        isDownloadable={true}
                        label="Download Resume"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 flex overflow-hidden">
                <div className="relative w-full h-125 md:h-full flex items-center justify-center">
                    {/* Skeleton */}
                    {!loaded && (
                        <div className="w-full md:w-[80%] h-[90%] rounded-2xl bg-white/40 animate-pulse" />
                    )}

                    <img
                        src="portfolio_project/IMG_5934.JPG"
                        alt="Vincent Michael N. Pantaleon"
                        className={`absolute w-[80%] h-[90%] object-cover rounded-2xl object-top transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => setTimeout(() => setLoaded(true), 1000)}
                    />
                </div>
            </div>
        </main>
    )
}

export { Hero }