import { useState } from "react";
import { SquarePenIcon, Undo2 } from "lucide-react";
import DefaultFlashcard from "../default-card";
import { FlashcardActionButton } from "../flashcard-action-button";
import type { FrontBackCardData } from "../../types/types";

interface FrontBackCardProps {
	flashcard: FrontBackCardData;
}

export default function FrontBackCard({ flashcard }: FrontBackCardProps) {
	const [isFlipped, setIsFlipped] = useState<boolean>();
	const displayText: string = isFlipped ? flashcard.back : flashcard.front;

	return (
		<DefaultFlashcard
			contentSection={<span>{displayText}</span>}
			actionButtons={[
				<FlashcardActionButton
					icon={<SquarePenIcon className="size-6" />}
					tooltipText="Edit card"
					onClick={() => {}}
				/>,
				<FlashcardActionButton
					icon={<Undo2 className="size-6" />}
					tooltipText="Flip"
					onClick={() => setIsFlipped(!isFlipped)}
				/>,
			]}
		/>
	);
}
