import { expect, describe, it } from "vitest";
import { databases } from './databases'

describe("Databases Expression", () => {
    it("parses a file with multiple databases", () => {
        const code = `
            db Bachtel {
                store User {
                    id: string @key(generator: uuid)
                }
            }

            db BachtelAnalytics {}
        `

        const result = databases(code,0);
        expect(result.databases.length).toBe(2);
        expect(result.next).toBe(code.length);
    })
})