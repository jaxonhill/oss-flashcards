import { useState } from "react";

const FLASHCARDS: Flashcard[] = [
	{
		front: "front of the card 1",
		back: "back of the card 1",
	},
	{
		front: "front of the card 2",
		back: "back fo the card 2",
	},
];

type Flashcard = {
	front: string;
	back: string;
};

export default function Flashcard() {
	const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0); // prettier-ignore
	const [isFrontSide, setIsFrontSide] = useState<boolean>(true);

	const currentFlashcard: Flashcard = FLASHCARDS[currentFlashcardIndex];

	return (
		<div className="flex flex-col space-y-4">
			<span>
				{isFrontSide ? currentFlashcard.front : currentFlashcard.back}
			</span>
			<button onClick={() => setIsFrontSide(!isFrontSide)}>
				Flip Side
			</button>
			<button
				onClick={() =>
					setCurrentFlashcardIndex(currentFlashcardIndex + 1)
				}
			>
				Go Next
			</button>
		</div>
	);
}
