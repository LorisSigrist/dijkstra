import {describe, it, expect} from 'vitest'
import { compile } from '.'

describe("Dijkstra compiler", ()=>{
    it("runs", ()=> {
        const compilationResult = compile("asd")
        expect(compilationResult).toBeTruthy();
    })
})