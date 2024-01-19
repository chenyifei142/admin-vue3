import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";//这个path需要安装@types/node $ npm install @types/node --save-dev

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv): UserConfig => {
    const root = process.cwd();
    const env = loadEnv(mode, root);

    return {
        plugins: [vue()],
        resolve: {
            // ↓路径别名，主要是这部分
            alias: {
                '@': resolve(__dirname, './src'),
            }
        },
        server: {
            port: Number(env.VITE_PORT),
            open: Boolean(env.VITE_OPEN)
        },
        esbuild: {
            pure: env.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
        },
    }
})
