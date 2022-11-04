import { describe, expect, it } from "vitest";
import {modifierList} from './modifierList'

describe("ModifierList Expression", ()=> {
    it("matches an empty string", ()=> {
        const result = modifierList("",0);
        expect(result.modifiers.length).toBe(0);
        expect(result.next).toBe(0);
    })

    it("matches a single modifier", ()=> {
        const result = modifierList("@key()  ",0);
        expect(result.modifiers.length).toBe(1);
        expect(result.next).toBe(8);
    })

    it("matches multiple modifiers", ()=> {
        const result = modifierList("  @modifier1(arg1: val1) @modifier2() ",0);
        expect(result.modifiers).toStrictEqual([
            {
                name: "modifier1",
                args: {
                    arg1: "val1"
                }
            },
            {
                name: "modifier2",
                args: {}
            }
        ])
    })
})