import { tokenizeClozeCardText } from "../utils/cloze-parsing";
import type { ClozeNode } from "../types/types";
import DefaultCard from "../../flashcards/components/default-card";
import { ClozeCardContent } from "./cloze-card-content";
import { useState } from "react";

// prettier-ignore
const sampleText: string = "Einstein was born in {{c1::1879}} and published his theory in {{c2::1905}}.";

interface ClozeCardProps {
	revealGroup: number;
}

export default function ClozeCard({ revealGroup }: ClozeCardProps) {
	const [isRevealed, setIsRevealed] = useState<boolean>(false);
	const clozeCardTokens: (ClozeNode | string)[] = tokenizeClozeCardText(sampleText); // prettier-ignore

	return (
		<DefaultCard
			contentSection={
				<ClozeCardContent
					clozeCardTokens={clozeCardTokens}
					revealGroup={revealGroup}
					onClickReveal={() => setIsRevealed(true)}
					isRevealed={isRevealed}
				/>
			}
			actionButtons={[]}
		/>
	);
}
