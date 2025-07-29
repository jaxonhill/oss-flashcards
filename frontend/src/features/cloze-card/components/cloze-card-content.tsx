import type { ClozeCardToken } from "../types/types";
import { RevealTextButton } from "./reveal-text-button";
import { CoveredText } from "./covered-text";

interface ClozeCardContentProps {
	clozeCardTokens: ClozeCardToken[];
	revealGroup: number;
	onClickReveal: () => void;
	isRevealed: boolean;
}

// prettier-ignore
export function ClozeCardContent({
	clozeCardTokens,
	revealGroup,
	onClickReveal,
	isRevealed,
}: ClozeCardContentProps) {
	return (
		<p>
			{clozeCardTokens.map((token, i) => {
				if (typeof token === "string") {
					return <span key={i}>{token}</span>;
				} else {
					const isRevealGroup: boolean = revealGroup === token.group;
					if (isRevealGroup) {
						return <RevealTextButton text={token.content} onClick={onClickReveal} isRevealed={isRevealed} />;
					} else {
						return <CoveredText key={i} text={token.content} />;
					}
				}
			})}
		</p>
	);
}
