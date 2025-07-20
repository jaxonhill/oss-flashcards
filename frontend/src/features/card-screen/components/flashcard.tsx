"use client";
import { useState } from "react";
import type { Flashcard } from "../types/types";
import { FlashcardActionButton } from "./flashcard-action-button";
import { Undo2 } from "lucide-react";

interface FlashcardProps {
	flashcard: Flashcard;
}

export default function Flashcard({ flashcard }: FlashcardProps) {
	const [isFlipped, setIsFlipped] = useState<boolean>();
	const displayText: string = isFlipped ? flashcard.back : flashcard.front;

	return (
		<div className="h-[576px] flex justify-center items-center text-3xl text-white bg-zinc-800 border border-zinc-700 rounded-2xl relative">
			<span>{displayText}</span>
			<FlashcardActionButton
				icon={<Undo2 className="size-6" />}
				onClick={() => setIsFlipped(!isFlipped)}
				className="absolute bottom-4 right-4"
			/>
		</div>
	);
}
