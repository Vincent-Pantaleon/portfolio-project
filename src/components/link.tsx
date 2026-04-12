
import type { IconType } from "react-icons";
import { useState } from "react";

interface ComponentProps {
    href: string;
    icon?: IconType;
    isDownloadable?: boolean;
    label?: string 
}

const LinkComponent = ({ href, icon: Icon, isDownloadable, label }: ComponentProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    
    return (
        <a
            href={href}
            className={`p-3 bg-primary rounded-full button flex items-center ${isHovered ? "hovered" : ""}`}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            download={isDownloadable ? "Vincent Resume.pdf" : undefined}
        >
            {label && <p className="text-center text-black">{label}</p>}
            {Icon && <Icon color="black" size={30} />}
        </a>
    );
};

export { LinkComponent };