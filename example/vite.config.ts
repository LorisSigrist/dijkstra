import { UserConfig } from 'vite'
import { dijkstra } from '../packages/vite/dist';

const config : UserConfig = {
    plugins: [dijkstra()]
}

export default config;