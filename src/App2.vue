<template>
    <div id="app">
        <el-container>
            <el-header height="3rem">
                Header
            </el-header>
            <el-container>
                <el-aside width="15rem">
                    <div class="f-cls-menu">
                        <el-menu
                            default-active="/upload"
                            :collapse="collapsed"
                            router>
                            <template v-for="item in routes">
                                <template v-if="item.leaf">
                                    <el-menu-item :index="item.path" :disabled="item.disabled" :key="item.id">
                                        <i :class="item.icon"></i>
                                        <span slot="title">{{item.name}}</span>
                                    </el-menu-item>
                                </template>
                                <template v-else>
                                    <el-submenu :index="item.path" :disabled="item.disabled" :key="item.id">
                                        <template slot="title">
                                            <i :class="item.icon"></i>
                                            <span>{{item.name}}</span>
                                        </template>
                                        <template v-for="subitem in item.children">
                                            <el-menu-item :index="subitem.path" :disabled="subitem.disabled" :key="subitem.id">
                                                <span slot="title">{{subitem.name}}</span>
                                            </el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                            </template>
                        </el-menu>
                    </div>
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

    import UploadView from './pages/upload.vue'
    import ConfigView from './pages/config.vue'
    import SearchView from './pages/search.vue'

    let router = new VueRouter({
        routes: [
            {
                path: '/upload',
                component: UploadView
            },
            {
                path: '/config',
                component: ConfigView
            },
            {
                path: '/search',
                component: SearchView
            }
        ]
    })

    export default {
        name: 'app',
        router: router,
        data() {
            return {
                collapsed: false,
                routes: [
                    {
                        id: 1,
                        leaf: true,
                        disabled: false,
                        icon: 'el-icon-tickets',
                        name: '待上传',
                        path: '/upload'
                    },
                    {
                        id: 2,
                        leaf: false,
                        disabled: false,
                        icon: 'el-icon-menu',
                        name: '工作台',
                        path: '/workbench',
                        children: [
                            {id: 21, path: '/search', disabled: false, name: '查询'},
                            {id: 22, path: '/config', disabled: false, name: '配置'}
                        ]
                    }
                ]
            };
        }
    }
</script>

<style>
body {
    margin: 0px;
}
#app .el-header {
    color: #545c64;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
}
#app .el-footer {
    margin: 0rem;
    padding: 0rem;
    border: 0rem;
    color: #545c64;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0rem;
    left: 0rem;
}
.f-cls-menu {
    height: 100%;
    margin: 0;

}
</style>