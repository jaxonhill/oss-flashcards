import { useState } from "react";
import { Undo2 } from "lucide-react";
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
					icon={<Undo2 className="size-6" />}
					onClick={() => setIsFlipped(!isFlipped)}
				/>,
			]}
		/>
	);
}
