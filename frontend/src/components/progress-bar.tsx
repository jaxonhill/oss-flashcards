interface ProgressBarProps {
	label?: string;
	currentCardNumber: number;
	totalNumberOfCards: number;
}

export default function ProgressBar({
	label,
	currentCardNumber,
	totalNumberOfCards,
}: ProgressBarProps) {
	const progressPercentage: number = Math.round((currentCardNumber / totalNumberOfCards) * 100); // prettier-ignore
	return (
		<div className="flex flex-col items-center gap-1.5">
			<p className="text-zinc-300">{label}</p>
			<div className="w-full h-5 rounded-full bg-zinc-800 overflow-hidden">
				<div
					className="h-full transition-all duration-300 bg-green-500 rounded-full"
					style={{
						width: `${progressPercentage}%`,
					}}
				></div>
			</div>
		</div>
	);
}
