
<template>
    <div>
        <el-container>
            <el-header>
                aaaaa
            </el-header>
            <el-container class="x-cls-container">
                <el-aside width="3rem">
                    <x-menus></x-menus>
                </el-aside>
                <el-main>
                    <transition>
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
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
.el-container .el-header {
    margin: 0rem;
    border-bottom: 1px solid #eaecef;
    padding: 0rem;
    height: 3rem;
    width: 100%;
    position: absolute;
    top: 0rem;
    left: 0rem;
}
.el-container .x-cls-container {
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 0rem;
    height: 100%;
    width: 100%;
}
.el-container .x-cls-container .el-aside {
    height: 100%;
    width: 3rem;
    overflow: visible;
    position: absolute;
    z-index: 1000;
    top: 0rem;
    left: 0rem;
}
.el-container .x-cls-container .el-main {
    margin-left: 3rem;
}
.el-container .el-footer {
    background-color: #ffffff;
    color: #545c64;
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