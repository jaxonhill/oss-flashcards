import { Eye } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface RevealTextButtonProps {
	text: string;
	onClick: () => void;
	isRevealed: boolean;
}

// prettier-ignore
export function RevealTextButton({
	text,
	onClick,
	isRevealed,
}: RevealTextButtonProps) {
	return (
		<span
			onClick={onClick}
			className={twMerge([
				"bg-zinc-700 rounded px-2 inline-flex justify-center items-center w-fit",
				!isRevealed && "select-none relative group hover:cursor-pointer hover:bg-zinc-700/80 transition-colors",
			])}
		>
			{!isRevealed && (
				<Eye className="size-6 text-zinc-300 absolute group-hover:text-white transition-colors" />
			)}
			<span className={isRevealed ? "visible" : "invisible"}>{text}</span>
		</span>
	);
}
