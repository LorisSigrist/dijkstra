import type { Plugin } from 'vite'
import { compile } from '@dijkstra/core'


export function dijkstra(): Plugin {
    return {
        name: "dijkstra",
        transform(code, id) {
            if (!id.endsWith(".djk")) return;
            return compile(code);
        }
    }
}