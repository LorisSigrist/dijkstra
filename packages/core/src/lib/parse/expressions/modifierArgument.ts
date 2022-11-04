import { literal } from "./literal.js";
import { token } from "./token.js";
import { optionalWhitespace } from "./whitespace.js"

export function modifierArgument(code: string, pos: number): {
    key: string,
    value: string,
    next: number
} {

    pos = optionalWhitespace(code, pos);

    const keyResult = token(code, pos);
    pos=keyResult.next;

    pos = optionalWhitespace(code, pos);

    const colonLiteralResult = literal(code,pos,":");
    pos = colonLiteralResult.next;

    pos = optionalWhitespace(code, pos);

    const valueResult = token(code, pos);
    pos= valueResult.next;

    pos = optionalWhitespace(code, pos);

    return {
        key: keyResult.token,
        value: valueResult.token,
        next: pos
    }
}