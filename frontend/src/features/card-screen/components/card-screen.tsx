import { FLASHCARDS, DIFFICULTIES } from "../config/config";
import DifficultyButton from "./difficulty-button";
import FrontBackCard from "../../flashcards/components/front-back-card";
import ProgressBar from "../../../components/progress-bar";

export default function CardScreen() {
	const deckName: string = "College Algebra";
	const currentCardNumber: number = 12;
	const totalCards: number = 40;
	const label: string = `${deckName} - ${currentCardNumber}/${totalCards}`;
	return (
		<div className="px-64 pt-14 flex flex-col gap-6">
			<ProgressBar
				label={label}
				currentCardNumber={currentCardNumber}
				totalNumberOfCards={totalCards}
			/>
			<div className="flex flex-col gap-3 w-full">
				<FrontBackCard flashcard={FLASHCARDS[0]} />
				<div className="flex gap-3">
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
		</div>
	);
}
