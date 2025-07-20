import { twMerge } from "tailwind-merge";

interface FlashcardActionButtonProps {
	icon: React.ReactElement;
	onClick: () => void;
	className?: string;
}

export function FlashcardActionButton({
	icon,
	onClick,
	className,
}: FlashcardActionButtonProps) {
	return (
		<button
			className={twMerge(
				className,
				"rounded-full border border-zinc-600 bg-zinc-700 size-10 flex justify-center items-center"
			)}
			onClick={onClick}
		>
			<span className="text-zinc-400">{icon}</span>
		</button>
	);
}
