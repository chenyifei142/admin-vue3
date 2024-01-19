// @ts-ignore
import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
// routers
import router from '@/routers'
// 全局样式
import '@/styles/global.scss'
// 通用样式
import "@/styles/common.scss";
// element-plus css
import "element-plus/dist/index.css";
// element-plus
import ElementPlus from "element-plus";
// element-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Pinia
import {createPinia} from "pinia";
// 创建Pinia实例
const store = createPinia()

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
