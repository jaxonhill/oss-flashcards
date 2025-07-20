import type { Difficulty, Flashcard } from "../types/types";

export const FLASHCARDS: Flashcard[] = [
	{
		front: "front of the card 1",
		back: "back of the card 1",
	},
	{
		front: "front of the card 2",
		back: "back fo the card 2",
	},
];

export const DIFFICULTIES: Difficulty[] = [
	{
		emoji: "😭",
		difficultyText: "Very Hard",
		lengthText: "1 min",
	},
	{
		emoji: "🥲",
		difficultyText: "Difficult",
		lengthText: "6 min",
	},
	{
		emoji: "🙂",
		difficultyText: "Good",
		lengthText: "10 min",
	},
	{
		emoji: "😎",
		difficultyText: "Easy",
		lengthText: "3 days",
	},
];
