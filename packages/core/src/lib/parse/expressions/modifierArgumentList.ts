import { literal } from "./literal.js";
import { modifierArgument } from "./modifierArgument.js";

export function modifierArgumentList(code: string, pos: number): {
    args: Record<string, string>,
    next: number
} {
    const args = {};
    let i = pos;

    while(i < code.length) {
        try {
            const argResult = modifierArgument(code, i);
            args[argResult.key] = argResult.value;
            i = argResult.next;
        }catch(e) {
            break;
        }

        try {
            const result = literal(code, i, ","); 
            i = result.next
        }catch(e) {
            break;
        }
    }

    return {
        args,
        next: i
    }
}