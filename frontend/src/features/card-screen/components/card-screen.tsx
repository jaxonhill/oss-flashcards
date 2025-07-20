import Flashcard from "./flashcard";
import { FLASHCARDS, DIFFICULTIES } from "../config/config";
import DifficultyButton from "./difficulty-button";

export default function CardScreen() {
	return (
		<div className="px-64 flex flex-col gap-6 w-full pt-24">
			<Flashcard flashcard={FLASHCARDS[0]} />
			<div className="flex gap-4">
				{DIFFICULTIES.map((difficulty) => {
					return (
						<DifficultyButton
							difficulty={difficulty}
							onClick={() => {}}
						/>
					);
				})}
			</div>
		</div>
	);
}
