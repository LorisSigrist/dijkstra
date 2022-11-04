import { describe, it, expect } from "vitest";
import {mandatoryWhitespace, optionalWhitespace} from './whitespace'

describe("Whitespace Expressions", ()=> {
    describe("Mandatory Whitespace", ()=> {
        it("throws if no whitespace is present", ()=> {
            expect(()=>mandatoryWhitespace("as", 0)).toThrow();
        })
        it("matches a single space", ()=> {
            expect(mandatoryWhitespace(" ", 0)).toBe(1);
        })
        it("matches multiple space characters", ()=> {
            expect(mandatoryWhitespace("   ", 0)).toBe(3);
        })
        it("matches a mix of space and tab characters", ()=> {
            expect(mandatoryWhitespace(" \t ", 0)).toBe(3);
        })
        it("stops at linebreaks, if linebreaks is false", ()=> {
            expect(mandatoryWhitespace("as \t \n", 2, false)).toBe(5);
        })
        it("doesn't stop at linebreaks, if linebreaks is true", ()=> {
            expect(mandatoryWhitespace(" \t \naasd", 0, true)).toBe(4);
        })
        it("throws EOF error, if empty string is passed", ()=> {
            expect(()=>mandatoryWhitespace("", 0)).toThrow();
        })
        it("throws EOF error, if no space is left in the string", ()=> {
            expect(()=>mandatoryWhitespace("  ", 2)).toThrow();
        })
        it("stops at non-whitespace character", ()=> {
            expect(mandatoryWhitespace("  as", 0)).toBe(2);
        })
    })

    describe("Optional Whitespace", ()=> {
        it("is ok if no whitespace is present", ()=> {
            expect(optionalWhitespace("as", 0)).toBe(0);
        })
        it("is of if an empty string is passed", ()=> {
            expect(optionalWhitespace("", 0)).toBe(0);
        })
        it("is of if there is no space left in the string", ()=> {
            expect(optionalWhitespace("123", 3)).toBe(3);
        })
        it("matches a single space", ()=> {
            expect(mandatoryWhitespace(" ", 0)).toBe(1);
        })
        it("matches multiple space characters", ()=> {
            expect(mandatoryWhitespace("   ", 0)).toBe(3);
        })
        it("matches a mix of space and tab characters", ()=> {
            expect(mandatoryWhitespace(" \t ", 0)).toBe(3);
        })
        it("stops at linebreaks, if linebreaks is false", ()=> {
            expect(mandatoryWhitespace("as \t \n", 2, false)).toBe(5);
        })
    })
})