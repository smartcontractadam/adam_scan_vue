<template>
    <div>
        <!-- 统计数据区域 -->
        <div class="synthetic_data">
            <div class="data_area">
                <el-row class="first">
                    <el-col :span="8">
                        <div class="first_data">
                            <el-row style="padding-top: 50px">
                                $ {{showValue(adamPrice)}}
                            </el-row>
                            <el-row class="second_text">
                                ADAM price
                                <el-image class="data_icon" :src="excIcon"></el-image>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="first_data">
                            <el-row style="padding-top: 50px">
                                {{simpData.total_power}} TIB
                            </el-row>
                            <el-row class="second_text">
                                Total network power
                                <el-image class="data_icon" :src="excIcon"></el-image>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="first_data">
                            <el-row style="padding-top: 50px">
                                {{simpData.total_node}}
                            </el-row>
                            <el-row class="second_text">
                                Number of active nodes
                                <el-image class="data_icon" :src="excIcon"></el-image>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="second">
                    <div class="second_area">
                        <el-col :span="8">
                            <el-row style="padding-top: 50px">
                                {{showValue(simpData.profit_24)}} ADAM
                            </el-row>
                            <el-row class="second_text">
                                24H output
                                <el-image class="data_icon" :src="excIcon"></el-image>
                            </el-row>
                        </el-col>
                        <el-col :span="8">
                            <el-row style="padding-top: 50px">
                                {{simpData.total_adam}} ADAM
                            </el-row>
                            <el-row class="second_text">
                                Internet pledge amount
                                <el-image class="data_icon" :src="excIcon"></el-image>
                            </el-row>

                        </el-col>
                        <el-col :span="8">
                            <el-row style="padding-top: 50px">
                                {{simpData.rate}} ADAM/TIB
                            </el-row>
                            <el-row class="second_text">
                                Number of active nodes
                                <el-image class="data_icon" :src="excIcon"></el-image>
                            </el-row>
                        </el-col>
                    </div>
                </el-row>
                <el-row>
                    <HomeData ref="children"></HomeData>
                </el-row>
                <el-row>
                    <div class="all_data_area">
                        <el-row>
                            <div class="head_area">
                                <i class="public_label_icon home_label_shift"></i>
                                <span style="height: 50px;font-weight: bold">Collection list</span>
                            </div>
                        </el-row>
                        <el-row>
                            <PageList ref="pageListData"></PageList>
                        </el-row>
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import "@/css/base.css"
    import "@/css/resource.css"
    import jquery from "jquery"
    import HomeData from "@/views/home/homeData"
    import PageList from "@/views/list/pageList"
    // import Pagination from '@/components/Pagination'
    import {
        getAllPledgeInfo,
    } from "@/api/home/api"
    import excIcon from "@/img/icon/exc_point.png";
    export default {
        name: "homeMain",
        components: {
            HomeData,
            PageList,
            // Pagination,
        },
        mounted() {
            this.getAllPledgeInfo()
            this.getAdamPrice()
            this.changeList()
        },
        data() {
            return {
                excIcon: excIcon,
                simpData: {
                    total_power: "", //全网总算力
                    total_adam: "", //全网质押量
                    total_node: "", //活跃节点数
                    rate: "",   //当前算力比
                    profit_24: "",  //24小时产出量
                    power_24: "",   //24小时新增算力
                },
                adamPrice: 0,
            }
        },
        methods: {
            changeList(){
                this.$refs.pageListData.updateList(true);
            },
            getAllPledgeInfo(){
                var params = {};
                getAllPledgeInfo(params).then(
                    res => {
                        // eslint-disable-next-line no-empty
                        if(res != undefined && res.errorCode === 1000) {
                            this.simpData = res.content
                        }else{
                            this.$message({
                                message: res.message,
                                type: 'error'
                            });
                        }
                        // console.info("是否正确1:" + (res.errorCode == 1000) + ";2:" + (res.errorCode == "1000"))

                    }
                ).catch(()=>{
                })
            },
            getAdamPrice(){
                var price = 0;
                // eslint-disable-next-line no-undef
                jquery.ajax({
                    type: "GET",
                    url: "https://bsc.api.0x.org/swap/v1/price?sellToken=0xdde077002982956DF24E23E3f3743BA5e56929fe&buyToken=0x55d398326f99059ff775485246999027b3197955&sellAmount=10000000",
                    async: false,
                    success: function (res) {
                        price = res.price
                        // console.info(JSON.stringify(res))
                    },
                    error: function () {
                        alert("网络错误")
                    }
                })
                this.adamPrice = price
            },
            // getAdamTypeLists(params) {
            //     // console.info("我要去搜索了")
            //     // console.info("搜索条件是" + JSON.stringify(params))
            //     getAdamTypeList(params).then(
            //         res => {
            //             console.info(res)
            //         }
            //     ).catch(
            //         this.$message({
            //             message: '查询失败',
            //             type: 'fail'
            //         })
            //     )
            //     //调用子组件方法
            //     this.$refs.children.lineGraph(0);
            // },

            showValue(value){
                if(value == "-"){
                    return "-";
                }
                // 保留素位小数
                return parseFloat(value).toFixed(4)
            },

        }
    }

</script>

<style scoped>

</style>
