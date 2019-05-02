
<template>
    <div>
        <el-container class="x-container">
            <el-header height="3.5rem">
                <x-menus></x-menus>
            </el-header>
            <el-main>
                <transition>
                    <router-view></router-view>
                </transition>
            </el-main>
            <el-footer height="2rem">
            © 2019 Finn Zhao. All rights reserved.
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    // transition 标签用于增加 过渡效果/css 的挂载标签
    import VueRouter from 'vue-router'

    import Menus from '../components/menus.vue'

    import UploaderView from './uploader.vue'
    import ManagementView from './management.vue'
    import ProcessView from './process.vue'

    let router = new VueRouter({
        routes: [
            {
                path: '/uploader',
                component: UploaderView
            },
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
            'x-menus': Menus
        },
        router: router
    }
</script>

<style>
.x-container .el-header {
    margin: 0rem;
    padding: 0rem;
    height: 3.5rem;
    width: 100%;
    position: absolute;
    top: 0rem;
    left: 0rem;
}
.x-container .el-main {
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem;
    height: 100%;
    width: 100%;
}
.x-container .el-footer {
    background-color: #545c64;
    color: white;
    margin: 0rem;
    padding: 0rem;
    height: 2rem;
    line-height: 2rem;
    width: 100%;
    position: absolute;
    bottom: 0rem;
    left: 0rem;
}
</style>