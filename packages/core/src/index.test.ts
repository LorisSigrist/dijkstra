import {describe, it, expect} from 'vitest'
import { compile } from '.'

describe("Dijkstra compiler", ()=>{
    it("runs", ()=> {
        expect(compile("asd")).toBeTruthy();
    })
})