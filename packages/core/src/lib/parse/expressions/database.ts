import { literal } from "./literal.js";
import { modifierList } from "./modifierList.js";
import { stores } from "./stores.js";
import { token } from "./token.js";
import { mandatoryWhitespace, optionalWhitespace } from "./whitespace.js";

export function database(code: string, pos: number): { database: Database, next: number } {
    pos = optionalWhitespace(code, pos, true);

    const dbLiteralResult = literal(code, pos, "db");
    pos = dbLiteralResult.next;

    pos = mandatoryWhitespace(code, pos);

    const databaseNameTokenResult = token(code, pos);
    const databaseName = databaseNameTokenResult.token;
    pos = databaseNameTokenResult.next;

    pos = optionalWhitespace(code, pos, true);

    const modifiersResult = modifierList(code, pos);
    pos = modifiersResult.next;
    const modifiers = modifiersResult.modifiers;

    const openingParenLiteralResult = literal(code, pos, "{");
    pos = openingParenLiteralResult.next;

    const storesResult = stores(code, pos);
    const databaseStores = storesResult.stores;
    pos = storesResult.next

    pos = optionalWhitespace(code, pos, true);

    const closingParenLiteralResult = literal(code, pos, "}");
    pos = closingParenLiteralResult.next;

    return {
        database: {
            name: databaseName,
            stores: databaseStores,
            modifiers
        },
        next: pos
    }

}