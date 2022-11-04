import { describe, expect, it } from "vitest";
import {modifierArgument} from './modifierArgument'

describe("ModifierArgument Expression", ()=> {
    it("matches compact (no optional whitespace) argument", ()=> {
        const result = modifierArgument("key:value",0);
        expect(result.key).toBe("key");
        expect(result.value).toBe("value");
        expect(result.next).toBe(9)
    })

    it("matches argument with whitespace", ()=> {
        const result = modifierArgument("  key  :  value  ",0);
        expect(result.key).toBe("key");
        expect(result.value).toBe("value");
    })

    it("throws if the value is missing", ()=> {
        expect(()=>modifierArgument("  key  :    ",0)).toThrow();
    })

    it("throws if the key is missing", ()=> {
        expect(()=>modifierArgument("  ",0)).toThrow();
    })
})