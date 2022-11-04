import { describe, expect, it } from "vitest";
import { stores } from './stores'

describe("Stores Expression", () => {
    it("matches single store", () => {
        const result = stores("store store1 {}", 0);
        expect(result.stores.length).toBe(1);
    })

    it("matches multiple stores", () => {
        const result = stores(`
            store store1 {}
            store store2 {
                field1: type1
            }
            `, 0);
        expect(result.stores.length).toBe(2);
    })
})