import { describe, expect, it } from "vitest";
import {literal} from './literal'

describe("Literal Expression", () => {
    it("matches the literal itself", ()=> {
        const result = literal("asd", 0, "asd")
        expect(result.next).toBe(3);
        expect(result.literal).toBe("asd")
    })

    it("matches the literal out of a list of literals", ()=> {
        const result = literal("01word", 2, ["word", "literal"])
        expect(result.next).toBe(6);
        expect(result.literal).toBe("word")
    })

    it("throws EOF error if empty string is passed", ()=> {
        expect(()=>literal("", 0, "asd")).toThrow();
    })

    it("throws if there is no space left in the string", ()=> {
        expect(()=>literal("12", 2, "asd")).toThrow();
    })

    it("Throws if the literal is not found", ()=> {
        expect(()=>literal("khjsdfskl", 2, "eloquent")).toThrow();
    })
})