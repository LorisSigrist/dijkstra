import { describe, expect, it } from "vitest";
import { modifierArgumentList } from './modifierArgumentList'

describe("ModifierArgumentList Expression", () => {
    it("can parse a list of arguments", () => {
        const result = modifierArgumentList("key1: value1 , key2: value2 ", 0);
        expect(result.args).toStrictEqual({
            key1: "value1",
            key2: "value2"
        });
        expect(result.next).toBe(28);
    })

    it("can parse an empty argument list", () => {
        const result = modifierArgumentList("", 0);
        expect(result.args).toStrictEqual({});
        expect(result.next).toBe(0);
    })
})