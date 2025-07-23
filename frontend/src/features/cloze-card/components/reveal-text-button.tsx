import { Eye } from "lucide-react";

interface RevealTextButtonProps {
	text: string;
	onClick: () => void;
}

export function RevealTextButton({ text, onClick }: RevealTextButtonProps) {
	return (
		<button
			onClick={onClick}
			className="bg-zinc-700 select-none rounded px-2 inline-flex justify-center items-center w-fit relative group hover:cursor-pointer hover:bg-zinc-700/80 transition-colors"
		>
			<Eye className="size-6 text-zinc-300 absolute group-hover:text-white transition-colors" />
			<span className="invisible">{text}</span>
		</button>
	);
}
