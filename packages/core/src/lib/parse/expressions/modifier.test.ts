import { describe, expect, it } from "vitest";
import { modifier } from './modifier'

describe("Modifier Expression", () => {
    it("parses a modifier without arguments", () => {
        const result = modifier("@key()", 0);
        expect(result.modifier.name).toBe("key");
        expect(result.modifier.args).toStrictEqual({});
        expect(result.next).toBe(6);
    })

    it("parses a modifier with a single argument", () => {
        const result = modifier("@key( arg1: arg1)", 0);
        expect(result.modifier.name).toBe("key");
        expect(result.modifier.args).toStrictEqual({
            arg1: "arg1"
        });
    })

    it("parses a modifier with multiple single argument", () => {
        const result = modifier("@key( arg1: arg1, arg2: arg2)", 0);
        expect(result.modifier.name).toBe("key");
        expect(result.modifier.args).toStrictEqual({
            arg1: "arg1",
            arg2: "arg2"
        });
    })

    it("throws if no modifier is passed", () => {
        expect(() => modifier("keysadf", 0)).toThrow();

    })
})