import {createRouter, createWebHistory} from 'vue-router'

/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */
const routes: any = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '',
        redirect:'/home/index'
    },
    {
        path: '/home/index',
        component: () => import('@/layouts/LayoutClassic/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

