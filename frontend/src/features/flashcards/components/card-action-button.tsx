import { twMerge } from "tailwind-merge";

interface CardActionButtonProps {
	icon: React.ReactElement;
	onClick: () => void;
	tooltipText: string;
	className?: string;
}

export default function CardActionButton({
	icon,
	tooltipText,
	onClick,
	className,
}: CardActionButtonProps) {
	return (
		<button
			className={twMerge(
				className,
				"rounded-full border border-zinc-600 bg-zinc-700 size-10 flex justify-center items-center cursor-pointer group hover:bg-zinc-700/80 transition-colors"
			)}
			onClick={onClick}
		>
			<span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
				{icon}
			</span>
		</button>
	);
}
