import { field } from "./field.js";

export function fields(code: string, pos: number): { fields: Field[], next: number } {
    const fields = [];
    while(pos < code.length) {
        try {
            const result = field(code, pos);
            pos = result.next;
            fields.push(result.field);
        }catch(e) {
            break;
        }
    }

    return {
        fields,
        next: pos
    }
}