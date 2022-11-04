import { describe, expect, it } from "vitest";
import {store} from './store'

describe("Store Expression", ()=> {
    it("parses an empty store", ()=> {
        const result = store("store store1 {}", 0);
        expect(result.store.name).toBe("store1")
        expect(result.store.fields.length).toBe(0);
    })

    it("parses a non-empty store", ()=> {
        const result = store(`  store store1 {
            field1: type1 @key(generator: uuid)

        }`, 0);
        expect(result.store.name).toBe("store1");

        expect(result.store.fields).toStrictEqual([{
            name: "field1",
            type: "type1",
            modifiers: [{
                name: "key",
                args: {
                    generator: "uuid"
                }
            }]
        }]);
    })
})