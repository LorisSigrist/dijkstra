import { literal } from "./literal.js";
import { token } from "./token.js";
import { mandatoryWhitespace, optionalWhitespace } from "./whitespace.js";
import { fields } from "./fields.js";
import { modifierList } from "./modifierList.js";

export function store(code: string, pos: number): { store: Store, next: number } {
    pos = optionalWhitespace(code, pos, true);

    const storeLiteralResult = literal(code, pos, "store");
    pos = storeLiteralResult.next;

    pos = mandatoryWhitespace(code, pos);

    const storeNameTokenResult = token(code, pos);
    const name = storeNameTokenResult.token;
    pos = storeNameTokenResult.next;

    pos = optionalWhitespace(code, pos, true);

    const modifiersResult = modifierList(code, pos);
    pos = modifiersResult.next;
    const modifiers = modifiersResult.modifiers;

    pos = optionalWhitespace(code, pos, true);

    const openingParenLiteralResult = literal(code, pos, "{");
    pos = openingParenLiteralResult.next;

    const fieldsResult = fields(code, pos);
    const storeFields = fieldsResult.fields;
    pos = fieldsResult.next;

    pos = optionalWhitespace(code, pos, true);

    const closingParenLiteralResult = literal(code, pos, "}");
    pos = closingParenLiteralResult.next;

    return {
        store: {
            name,
            fields: storeFields,
            modifiers
        },
        next: pos
    }
}