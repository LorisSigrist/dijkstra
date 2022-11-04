import { literal } from "./literal.js";
import { modifierList } from "./modifierList.js";
import { token } from "./token.js";
import { optionalWhitespace } from "./whitespace.js"

export function field(code: string, pos: number) : {field: Field, next: number}{
    pos = optionalWhitespace(code, pos, true);

    const nameTokenResult = token(code, pos);
    const name = nameTokenResult.token;
    pos = nameTokenResult.next;

    pos = optionalWhitespace(code, pos, false);

    const colonLiteralResult = literal(code, pos, ":");
    pos = colonLiteralResult.next;

    pos = optionalWhitespace(code, pos, false);

    const typeTokenResult = token(code, pos);
    const type = typeTokenResult.token;
    pos = typeTokenResult.next;

    const modifiersResult = modifierList(code, pos);
    const modifiers = modifiersResult.modifiers;
    pos = modifiersResult.next;

    pos = optionalWhitespace(code, pos, false);

    const newLineLiteralResult = literal(code, pos, "\n");
    pos = newLineLiteralResult.next;

    return {
        field: {
            name,
            type,
            modifiers
        },
        next: pos
    }

}