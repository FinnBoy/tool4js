
<template>
    <div>
        <el-upload
            class="x-upload"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: 'UploadView',
        data() {
            return {
            };
        },
        methods: {
        }
    }
</script>
