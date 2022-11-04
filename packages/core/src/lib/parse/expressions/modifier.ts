import { literal } from "./literal.js"
import { modifierArgumentList } from "./modifierArgumentList.js";
import { token } from "./token.js";

export function modifier(code: string, pos: number): { modifier: Modifier, next: number } {
    const literalResult = literal(code, pos, "@");
    pos = literalResult.next;

    const tokenResult = token(code, pos);
    const modifierName = tokenResult.token;
    pos = tokenResult.next;

    ({ next: pos } = literal(code, pos, "("));

    const arglistResult = modifierArgumentList(code, pos);
    const args = arglistResult.args;
    pos = arglistResult.next;

    ({ next: pos } = literal(code, pos, ")"));

    return {
        modifier: {
            name: modifierName,
            args
        },
        next: pos
    }

}