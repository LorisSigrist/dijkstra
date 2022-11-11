import type { Plugin } from 'vite'
import { compile } from '@dijkstra/core'


export function dijkstra(): Plugin {
    return {
        name: "dijkstra",
        transform(code, id) {
            if (!id.endsWith(".djk")) return;
            console.log(id, code);
            return "export default 'Hello World';"
        }
    }
}