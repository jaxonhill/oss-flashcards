import type { Difficulty } from "../types/types";

type DifficultyButtonProps = {
	difficulty: Difficulty;
	onClick: () => void;
};

export default function DifficultyButton({
	difficulty,
	onClick,
}: DifficultyButtonProps) {
	return (
		<button
			className="flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl w-full py-8 cursor-pointer hover:bg-zinc-800/80 transition-colors"
			onClick={onClick}
		>
			<span className="text-6xl">{difficulty.emoji}</span>
			<div className="flex flex-col items-center">
				<span className="text-white text-2xl font-medium">
					{difficulty.difficultyText}
				</span>
				<span className="text-zinc-400 text-lg">
					{difficulty.lengthText}
				</span>
			</div>
		</button>
	);
}
