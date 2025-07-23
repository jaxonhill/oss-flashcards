import type { ClozeNode } from "../types/types";

// Anki's structure (e.g., {{c1::cloze here}})
const CLOZE_REGEX: RegExp = /({{c\d+::.*?}})/g;

// Separating the group number and the content into separate groups
const CLOZE_SEPARATOR_REGEX: RegExp = /{{c(\d+)::(.*?)}}/;

// prettier-ignore
export function tokenizeClozeCardText(cardText: string): (ClozeNode | string)[] {
    const tokens: string[] = cardText.split(CLOZE_REGEX);

    return tokens.map((token) => {
        const isClozeGroup: boolean = CLOZE_REGEX.test(token);
        if (isClozeGroup) {
            return createClozeNode(token);
        } else {
            return token;
        }
    });
}

// prettier-ignore
function createClozeNode(token: string): ClozeNode {
	const matches: RegExpMatchArray | null = token.match(CLOZE_SEPARATOR_REGEX);

    if (!matches) throw Error("Token is not a valid cloze, no regex match found.");
    if (matches.length !== 3) throw Error(`Expected 2 groups, got ${matches.length - 1}.`);

    return {
        group: parseInt(matches[1], 10),
        content: matches[2],
    };
}
