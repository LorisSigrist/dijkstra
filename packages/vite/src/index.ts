import type {Plugin} from 'vite'
import { compile } from '@dijkstra/core'

export function dijkstra() : Plugin {
    return {
        name: "dijkstra"
    }
}