import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import { useState } from "react";

interface ButtonProps {
    icon?: LucideIcon | IconType;
    onClick?: () => void;
    label?: string;
    size?: number;
}

const Button = ({ icon: Icon, onClick, label, size }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    
    return (
        <button
            className={`p-3 bg-primary w-fit rounded-full text-black font-semibold flex items-center justify-center hover:cursor-pointer gap-2 button ${isHovered ? "hovered" : ""}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Only render the span if a label is actually provided */}
            {label && <span>{label}</span>}
            {Icon && <Icon size={size}/>}
        </button>
    );
};

export { Button };