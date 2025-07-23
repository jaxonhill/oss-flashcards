import { tokenizeClozeCardText } from "../utils/cloze-parsing";
import type { ClozeNode } from "../types/types";
import DefaultCard from "../../flashcards/components/default-card";
import { Eye } from "lucide-react";

// prettier-ignore
const sampleText: string = "Einstein was born in {{c1::1879}} and published his theory in {{c2::1905}}.";

interface ClozeCardProps {
	revealGroup: number;
}

export default function ClozeCard({ revealGroup }: ClozeCardProps) {
	const clozeCardTokens: (ClozeNode | string)[] = tokenizeClozeCardText(sampleText); // prettier-ignore
	return (
		<DefaultCard
			contentSection={
				<ClozeCardContent
					clozeCardTokens={clozeCardTokens}
					revealGroup={revealGroup}
				/>
			}
			actionButtons={[]}
		/>
	);
}

interface ClozeCardContentProps {
	clozeCardTokens: (ClozeNode | string)[];
	revealGroup: number;
}

function ClozeCardContent({
	clozeCardTokens,
	revealGroup,
}: ClozeCardContentProps) {
	return (
		<p>
			{clozeCardTokens.map((token, i) => {
				if (typeof token === "string") {
					return <span key={i}>{token}</span>;
				} else {
					const isRevealGroup: boolean = revealGroup === token.group;
					if (isRevealGroup) {
						return (
							<button
								key={i}
								className="bg-zinc-700 select-none rounded px-2 relative inline-flex justify-center items-center w-fit"
							>
								<Eye className="size-6 text-zinc-300 absolute" />
								<span className="invisible">
									{token.content}
								</span>
							</button>
						);
					} else {
						return <span key={i}>{token.content}</span>;
					}
				}
			})}
		</p>
	);
}
