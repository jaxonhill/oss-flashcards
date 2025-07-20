import Flashcard from "./flashcard";
import { FLASHCARDS } from "../config/config";

export default function CardScreen() {
	return (
		<div className="px-64 flex flex-col gap-6 w-full pt-24">
			<Flashcard flashcard={FLASHCARDS[0]} />
		</div>
	);
}
