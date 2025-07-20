"use client";
import { useState } from "react";
import type { Flashcard } from "../types/types";

interface FlashcardProps {
	flashcard: Flashcard;
}

export default function Flashcard({ flashcard }: FlashcardProps) {
	const [isFlipped, setIsFlipped] = useState<boolean>();
	const displayText: string = isFlipped ? flashcard.back : flashcard.front;

	return <div>{displayText}</div>;
}
