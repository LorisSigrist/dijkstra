import { describe, expect, it } from "vitest";
import { field } from './field'

describe("Field Expression", () => {
    it("parses a field with no arguments", () => {
        const result = field("  name:type \n", 0);
        expect(result.field.name).toBe("name")
        expect(result.field.type).toBe("type")
        expect(result.field.modifiers.length).toBe(0);
        expect(result.next).toBe(13);
    })

    it("parses a field with arguments", () => {
        const result = field("  name:type @key()\n", 0);
        expect(result.field.name).toBe("name")
        expect(result.field.type).toBe("type")
        expect(result.field.modifiers).toStrictEqual([
            {
                name: "key",
                args: {}
            }
        ]);
    })

    it("parses a field with whitespace", () => {
        const result = field("  name  :   type    @key()   \n", 0);
        expect(result.field.name).toBe("name")
        expect(result.field.type).toBe("type")
        expect(result.field.modifiers).toStrictEqual([
            {
                name: "key",
                args: {}
            }
        ]);
    })


    it("throws at an invalid field", () => {
        expect(()=>field("name:  ", 0)).toThrow()
    })  
})