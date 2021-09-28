<template>
    <div>
        <el-table
                :data="dataList"
                :header-cell-style="headerStyle"
                :cell-style="cellStyle"
                stripe>
            <el-table-column min-width="100" style="text-align: center;" prop="date" label="日期"> </el-table-column>
            <el-table-column min-width="100" prop="name" label="姓名"> </el-table-column>
            <el-table-column min-width="200" prop="address" label="地址"> </el-table-column>
        </el-table>
        <Pagination style="float: right" v-show="total>0" :total="total" :page.sync="query.pageNum" :limit.sync="query.pageSize" @pagination="getList" />
    </div>
</template>

<script>
    import Pagination from '@/components/Pagination'
    export default {
        name: "cnrData",
        components: {
            Pagination,
        },
        data() {
            return {
                total: 10,
                query: {
                    pageNum: 1,
                    pageSize: 10,
                },
                headerStyle: {
                    'text-align':'center',
                    'font-size':'18px',
                    'color':'black',
                    'height':'60px',
                    'border':'0px'},
                cellStyle: {
                    'text-align':'center',
                    'color':'black',
                    'border':'0px'},
                dataList: [{
                    date: '2016-05-02',
                    name: '王三虎',
                    address: '上海市普···路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王三虎',
                    address: '上海市普···路 1517 弄',
                }, {
                    date: '2016-05-01',
                    name: '王三虎',
                    address: '上海市普···路 1519 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }, {
                    date: '2016-05-03',
                    name: '王三虎',
                    address: '上海市普···路 1516 弄',
                }],
            }
        },
        methods: {
            getList(){
                this.total = 10;
            }
        }
    }
</script>

<style scoped>

</style>
