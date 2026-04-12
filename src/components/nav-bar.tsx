import { useEffect, useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const NavLinks = [
    { label: "Work", link: "#work" },
    { label: "About", link: "#about" },
    { label: "Contact", link: "#contact" }
]

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [menuOpen])

    return (
        <>
            <nav className={`sticky top-0 z-50 flex justify-between text-lg py-4 flex-nowrap tracking-wide
                ${scrolled ? "backdrop-blur-md bg-black/60 border-b border-white/10" : "bg-transparent"}
            `}>
                <a
                    className="text-2xl font-semibold text-slate-200 hover:cursor-pointer hover:text-primary transition-all duration-300"
                    href="#"
                >
                    VINCENT PANTALEON
                </a>

                {/* Desktop Links */}
                <div className="hidden md:block">
                    <ul className="flex gap-x-10">
                        {NavLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    className="hover:cursor-pointer hover:text-primary transition-all duration-300"
                                    href={item.link}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Burger Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-out Drawer */}
            <div className={`fixed top-0 right-0 z-50 h-full w-64 bg-black border-l border-white/10 flex flex-col gap-10 p-8 transition-transform duration-300 ease-in-out md:hidden
                ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}>
                <button
                    className="self-end text-white text-2xl"
                    onClick={() => setMenuOpen(false)}
                >
                    <HiX />
                </button>

                <ul className="flex flex-col gap-6">
                    {NavLinks.map((item, index) => (
                        <li key={index}>
                            <a
                                className="text-2xl font-semibold tracking-wider hover:text-primary transition-all duration-300"
                                href={item.link}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export { NavBar }