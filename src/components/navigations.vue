
<template>
    <div class="x-cls-navigations">
        <el-menu
            :collapse="false"
            mode="horizontal">
            <el-menu-item index="1">
                <i class="el-icon-back"></i>
            </el-menu-item>
            <slot name="buttons"></slot>
        </el-menu>
        <div style="clear: both;"></div>
        <div class="x-cls-left"></div>
        <div class="x-cls-right">
            <slot name="contents"></slot>
        </div>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
    export default {
        name: 'Navigations',
        methods: {
        }
    }
</script>

<style>
.x-cls-navigations {
    margin-bottom: 0.5rem;
}
.x-cls-navigations .x-cls-left {
    width: 3rem;
}
.x-cls-navigations .x-cls-right {
    margin-left: 3rem;
    width: 100%;
}
.x-cls-navigations .el-menu {
    float: left;
    width: 100%;
}
.x-cls-navigations .el-menu--horizontal {
    border-bottom: 0rem;
}
.x-cls-navigations .el-menu-item {
    border-bottom: 0rem;
    padding: 0rem 0.5rem;
}
.x-cls-navigations .el-menu-item.is-active {
    border-bottom: 0rem;
}
</style>