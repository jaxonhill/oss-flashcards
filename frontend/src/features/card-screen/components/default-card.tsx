interface DefaultFlashcardProps {
	contentSection: React.ReactNode;
	actionButtons: React.ReactNode[];
}
export default function DefaultFlashcard({
	contentSection,
	actionButtons,
}: DefaultFlashcardProps) {
	return (
		<div className="h-[576px] p-8 flex justify-center items-center text-3xl text-white bg-zinc-800 border border-zinc-700 rounded-2xl relative">
			{contentSection}
			<div className="bg-zinc-800 flex items-center gap-3 p-4 absolute bottom-0 w-full rounded-2xl justify-end">
				{actionButtons}
			</div>
		</div>
	);
}
