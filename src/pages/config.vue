
<template>
    <div>
        <el-form :inline="true" :model="formInline" class="x-cls-form-inline">
            <el-form-item label="产品">
                <el-input v-model="formInline.product" placeholder="产品"></el-input>
            </el-form-item>
            <el-form-item label="客户">
                <el-select v-model="formInline.customer" placeholder="客户">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        name: 'ConfigView',
        data() {
            return {
                formInline: {
                    product: '',
                    customer: ''
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        methods: {
            goUpload() {
                this.$router.push({path: 'uploader'})
            },
            onSubmit() {

            }
        }
    }
</script>
