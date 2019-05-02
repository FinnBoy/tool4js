
<template>
    <div
        :class="menuClass"
        @click="handleClick"
        @mouseover.stop="handleMouseover"
        @mouseout.stop="handleMouseout">
        <el-menu
            :default-active="active"
            :router="routerable"
            :collapse="collapsed"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" :disabled="disabled">
                <i class="el-icon-tickets"></i>
                <span slot="title">待处理</span>
            </el-menu-item>
            <el-submenu index="2" class="x-cls-submenu" :disabled="disabled">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>我的工作台</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">产品</template>
                    <el-menu-item index="/process">报价</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">其他</template>
                    <el-menu-item index="2-2">待定</el-menu-item>
                    <el-submenu index="2-3">
                        <template slot="title">待定</template>
                        <el-menu-item index="2-3-1">待定</el-menu-item>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3" class="x-cls-submenu" :disabled="disabled">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>维护</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">产品</template>
                    <el-menu-item index="/management">价格</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Menus',
        data() {
            return {
                active: '1',
                routerable: false,
                collapsed: true,
                disabled: false
            };
        },
        computed : {
            menuClass: function () {
                return this.collapsed ? 'x-cls-menu-collapsed' : 'x-cls-menu'
            }
        },
        methods: {
            handleClick () {
                // this.collapsed = false
            },
            handleMouseover () {
                this.collapsed = false
            },
            handleMouseout () {
                // this.collapsed = true
            },
            handleSelect (index, indexPath) {
                this.$router.push(index)
                this.collapsed = true
                console.log(index, indexPath)
            }
        }
    }
</script>

<style>
/*
ul.x-menu>.el-menu-item {
    height: 3rem;
    line-height: 3rem;
}
ul.x-menu .x-submenu>.el-submenu__title {
    height: 3rem;
    line-height: 3rem;
}
*/
.x-cls-menu-collapsed {
    margin: auto;
    width: 3rem;
    overflow: hidden;
    position: absolute;
    top: 45%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.x-cls-menu-collapsed .el-menu--collapse {
    margin-left: -0.6rem;
    width: 4rem;
}
.x-cls-menu {
    width: 13rem;
    padding: 0rem;
    background-color: #545c64;
    position: absolute;
    top: 0%;
    bottom: 0%;
}
.x-cls-menu .el-menu {
    border: 0rem;
}
.x-cls-menu .el-menu-item {
    padding: 0rem;
}
.x-cls-menu .el-submenu {
    padding: 0rem;
}
.x-cls-menu .el-menu-item, .x-cls-menu .x-cls-submenu .el-submenu__title, .x-cls-menu .x-cls-submenu .el-menu-item-group__title {
    text-align: left;
}
</style>