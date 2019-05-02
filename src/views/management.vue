
<template>
    <div>
        <x-navigations>
            <el-button plain icon="el-icon-upload" type="primary" @click="goUpload"></el-button>
        </x-navigations>
        <div>
            Management
        </div>
    </div>
</template>

<script>
    import Navigations from '../components/navigations.vue'

    export default {
        name: 'ManagementView',
        components: {
            'x-navigations': Navigations
        },
        data() {
            return {
            };
        },
        methods: {
            goUpload() {
                this.$router.push({path: 'uploader'})
            }
        }
    }
</script>
