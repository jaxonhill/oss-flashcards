interface CoveredTextProps {
	text: string;
}

export function CoveredText({ text }: CoveredTextProps) {
	return (
		<div className="bg-zinc-700 select-none rounded px-2 inline-flex justify-center items-center w-fit hover:cursor-not-allowed">
			<span className="invisible">{text}</span>
		</div>
	);
}
