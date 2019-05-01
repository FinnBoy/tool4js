
<template>
    <div>
        <el-container>
            <el-header>
                <v-menus></v-menus>
            </el-header>
            <el-main>
                <transition>
                    <router-view></router-view>
                </transition>
            </el-main>
            <el-footer>
            Footer
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    // transition 标签用于增加 过渡效果/css 的挂载标签
    import VueRouter from 'vue-router'

    import Menus from './menus.vue'

    import ManagementView from '../views/management.vue'
    import ProcessView from '../views/process.vue'

    let router = new VueRouter({
        routes: [
            {
                path: '/management',
                component: ManagementView
            },
            {
                path: '/process',
                component: ProcessView
            }
        ]
    })

    export default {
        name: 'Layout',
        components: {
            'v-menus': Menus
        },
        router: router
    }
</script>
