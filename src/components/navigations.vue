
<template>
    <div class="x-cls-navigations">
        <el-button-group>
            <el-button plain icon="el-icon-back" @click="goBack"></el-button>
            <slot></slot>
        </el-button-group>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'Navigations',
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style>
.x-cls-navigations {
    margin-bottom: 0.5rem;
}
.x-cls-navigations>.el-button-group {
    float: left;
}
.x-cls-navigations>div {
    clear: both;
}
</style>