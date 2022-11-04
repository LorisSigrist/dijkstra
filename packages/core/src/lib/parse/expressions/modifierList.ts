import { modifier } from "./modifier.js";
import { optionalWhitespace } from "./whitespace.js";

export function modifierList(code: string, pos: number): { modifiers: Modifier[], next: number } {
    pos = optionalWhitespace(code, pos);

    const modifiers = [];

    while(pos < code.length) {
        try {
            const result = modifier(code, pos);
            pos = result.next;
            modifiers.push(result.modifier);
        }catch(e) {
            break;
        }
        pos = optionalWhitespace(code, pos);
    }

    return {
        modifiers,
        next: pos
    }

}