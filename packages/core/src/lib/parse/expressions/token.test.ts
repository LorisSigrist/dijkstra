import { describe, it, expect } from "vitest";
import { token } from './token'


describe("Token Expression", () => {
    it("matches basic token", () => {
        const result = token("  token", 2);
        expect(result.token).toBe("token");
        expect(result.next).toBe(7);
    })

    it("matches complex token", () => {
        const result = token("aA09sxyv876   ", 0);
        expect(result.token).toBe("aA09sxyv876");
        expect(result.next).toBe(11)
    })

    it("throws if there is no token", () => {
        expect(() => token("   ", 2)).toThrow();
    })

    it("throws if the file ends", () => {
        expect(() => token("  ", 2)).toThrow();
    })
})