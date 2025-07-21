import { useState } from "react";
import { SquarePenIcon, Undo2 } from "lucide-react";
import DefaultCard from "./default-card";
import CardActionButton from "./card-action-button";
import type { FrontBackCardData } from "../types/types";

interface FrontBackCardProps {
	flashcard: FrontBackCardData;
}

export default function FrontBackCard({ flashcard }: FrontBackCardProps) {
	const [isFlipped, setIsFlipped] = useState<boolean>();
	const displayText: string = isFlipped ? flashcard.back : flashcard.front;

	return (
		<DefaultCard
			contentSection={<span>{displayText}</span>}
			actionButtons={[
				<CardActionButton
					icon={<SquarePenIcon className="size-6" />}
					tooltipText="Edit card"
					onClick={() => {}}
				/>,
				<CardActionButton
					icon={<Undo2 className="size-6" />}
					tooltipText="Flip"
					onClick={() => setIsFlipped(!isFlipped)}
				/>,
			]}
		/>
	);
}
