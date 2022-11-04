import { describe, expect, it } from "vitest";
import { fields } from './fields'


describe("Fields Expression", () => {
    it("parses multiple fields", ()=> {
        const lines = [
            "field1 : number @key(generator: uuid)",
            "field2 : string",
            "   "
        ]

        const code = lines.join("\n")  

        const result = fields(code, 0);
        expect(result.fields).toStrictEqual([
            {
                name: "field1",
                type: "number",
                modifiers: [
                    {
                        name: "key",
                        args: {
                            generator: "uuid"
                        }
                    }
                ]
            },
            {
                name: "field2",
                type: "string",
                modifiers: []
            }
        ])
    })
})