<template>
    <div class="board_data_area">
        <div style="width: 90%;padding: 2% 5%">
            <el-tabs class="text_css" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Computing power ranking" name="cpr">
                    <PageList ref="pageListData"></PageList>
                </el-tab-pane>
<!--                <el-tab-pane label="Child node ranking" name="cnr">-->
<!--                    <CnrData></CnrData>-->
<!--                </el-tab-pane>-->
            </el-tabs>
        </div>

    </div>

</template>

<script>
    import "@/css/main.css"
    import PageList from "@/views/list/pageList"
    export default {
        name: "boardMain",
        components: {
            PageList,
        },
        mounted() {
            this.changeList()
        },
        data() {
            return {
                activeName: "cpr",
            }
        },
        methods: {
            handleClick(){

            },
            changeList(){
                this.$refs.pageListData.updateList(false);
            },
        }
    }
</script>

<style scoped>
    /*去除灰线条*/
    /deep/ .el-tabs__nav-wrap::after {
        position: static !important;
    }

    .el-tabs--card ::v-deep .el-tabs__header {
        margin: 0;
    }
    >>> .el-tabs__header .el-tabs__item {
        font-weight: bold;
        font-size: 18px;
        color: black;
    }
    >>> .el-tabs__header .is-active {
        font-weight: bold;
        font-size: 18px;
        color: #FF6B22;
    }
    >>> .el-tabs__header .el-tabs__active-bar{
        background-color: #FF6B22;
        border: 4px;
        border-radius: 2px;
    }
</style>
