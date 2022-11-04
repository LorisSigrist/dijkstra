import { describe, it, expect } from "vitest";
import {database} from './database'

describe("Database Expression", () => {
    it("parses a database with a single store", ()=> {
        const result = database(`db db1 {store store1 {}}`, 0);

        expect(result.database.name).toBe("db1");
        expect(result.database.stores.length).toBe(1);
    })
})