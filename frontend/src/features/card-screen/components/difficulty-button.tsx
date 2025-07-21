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
			className="flex flex-col items-center justify-center bg-zinc-800 border border-zinc-700 rounded-xl w-full h-32 cursor-pointer hover:bg-zinc-800/80 hover:border-zinc-600 transition-colors"
			onClick={onClick}
		>
			<span className="text-4xl">{difficulty.emoji}</span>
			<div className="flex flex-col items-center">
				<span className="text-white text-lg font-medium">
					{difficulty.difficultyText}
				</span>
				<span className="text-zinc-400 text-base mt-[-4px]">
					{difficulty.lengthText}
				</span>
			</div>
		</button>
	);
}
