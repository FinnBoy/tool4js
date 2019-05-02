
<template>
    <el-menu
    :default-active="activeIndex"
    class="x-menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/process">待处理</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/management">管理项</router-link></el-menu-item>
        <el-submenu index="3" class="x-submenu">
            <template slot="title">我的工作台</template>
            <el-menu-item index="3-1">待定1</el-menu-item>
            <el-menu-item index="3-2">待定2</el-menu-item>
            <el-menu-item index="3-3">待定3</el-menu-item>
            <el-submenu index="3-4">
                <template slot="title">待定4</template>
                <el-menu-item index="3-4-1">待定1</el-menu-item>
                <el-menu-item index="3-4-2">待定2</el-menu-item>
                <el-menu-item index="3-4-3">待定3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="4" disabled>未开启功能</el-menu-item>
        <el-menu-item index="5" disabled><a href="https://www.ele.me" target="_blank">未开启功能</a></el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'Menus',
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
        }
    }
</script>

<style>
ul.x-menu>.el-menu-item {
    height: 3rem;
    line-height: 3rem;
}
ul.x-menu .x-submenu>.el-submenu__title {
    height: 3rem;
    line-height: 3rem;
}
</style>