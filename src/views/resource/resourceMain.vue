<template>
    <div class="background_res">
        <div class="little_div total_data_area" style="height: 300px">
            <el-image class="level_second" :src="circleUrl"></el-image>
            <div class="level_first total_data">
                <div class="content_address">
                    <span>{{address}}</span>
                </div>
                <div style="width: 100%;height: 32px;text-align: center">
                    <div class="content_address_icon">{{poolName}}</div>
                </div>
                <div class="line_space">
                    <el-row class="word_large">
                        <el-col :span="8">
                            {{dataList.one}}
                        </el-col>
                        <el-col :span="8">
                            {{dataList.two}} TIB
                        </el-col>
                        <el-col :span="8">
                            {{dataList.three}}
                        </el-col>
                    </el-row>
                    <el-row class="word_small">
                        <el-col :span="8">
                            {{pointData.one}}
                            <el-image class="data_icon" :src="excIcon"></el-image>
                        </el-col>
                        <el-col :span="8">
                            {{pointData.two}}
                            <el-image class="data_icon" :src="excIcon"></el-image>
                        </el-col>
                        <el-col :span="8">
                            {{pointData.three}}
                            <el-image class="data_icon" :src="excIcon"></el-image>
                        </el-col>
<!--                        <el-col :span="8">-->
<!--                            {{pointData.four}}-->
<!--                            <el-image class="data_icon" :src="excIcon"></el-image>-->
<!--                        </el-col>-->
                    </el-row>
                </div>
            </div>
        </div>
        <div class="out_div pie_charts_out" style="padding-top: 70px;">
            <div class="charts_area pie_left">
                <!-- echarts图表部分 -->
                <div class="charts_show_div">
                    <div class="div_area">
                        <i class="public_label_icon" style="margin: 10px 10px"></i>
                        <span class="title_text">Asset Statistics</span>
                    </div>
                    <div id="pieChartLeft" ref="pieChartLeft" style="height:550px;width:100%"></div>
                    <div class="pie_bottom_div" v-for="(item) of pieChartLeftList" :key="item.id" :style="item.rate">
                        <div class="pie_bottom_data" :style="item.color"></div>
                        <div class="pie_bottom_title">{{item.name}}</div>
                        <div style="float: left"><el-image class="data_icon" :src="excIcon"></el-image></div>
                        <div style="float: right;">{{showValue(item.value)}} ADAM</div>
                    </div>
                </div>
            </div>
            <div class="charts_area pie_right">
                <!-- echarts图表部分 -->
                <div class="charts_show_div">
                    <div class="div_area">
                        <i class="public_label_icon" style="margin: 10px 10px"></i>
                        <span class="title_text">Computing power statistics</span>
                    </div>
                    <div id="pieChartRight" ref="pieChartRight" style="height:550px;width:100%"></div>
                    <div class="pie_bottom_div" v-for="(item) of pieChartRightListData" :key="item.id" :style="item.rate">
                        <div class="pie_bottom_data" :style="item.color"></div>
                        <div class="pie_bottom_title">{{item.name}}</div>
                        <div style="float: left"><el-image class="data_icon" :src="excIcon"></el-image></div>
                        <div style="float: right;">{{item.value}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="out_div bar_charts_out">
            <div class="charts_area bar_left">
                <div class="charts_show_div">
                    <div class="div_area">
                        <div class="div_title">
                            <i class="public_label_icon" style="margin: 10px 10px"></i>
                            <span class="title_text">Child node</span>
                        </div>
                        <div :hidden="!isExistL" class="resource_day_button">
                            <div class="resource_button_div">
                                <el-button :autofocus="isDefault" @click="barEcharts(7,'left')">7Day</el-button>
                            </div>
                            <div class="resource_button_div">
                                <el-button @click="barEcharts(30,'left')">30Day</el-button>
                            </div>
                            <div class="resource_button_div">
                                <el-button @click="barEcharts(180,'left')">180Day</el-button>
                            </div>
                        </div>
                    </div>
                    <div :hidden="!isExistL" id="barChartLeft" ref="barChartLeft" style="height:550px;width:100%;margin-top: 80px;background-color: transparent"></div>
                    <div :hidden="isExistL" class="resource_day_button" style="text-align: center">
                        暂无数据
                    </div>
                </div>
            </div>
            <div class="charts_area bar_right">
                <div class="charts_show_div">
                    <div class="div_area">
                        <div class="div_title">
                            <i class="public_label_icon" style="margin: 10px 10px"></i>
                            <span class="title_text">Income</span>
                        </div>
                        <div :hidden="!isExistR" class="resource_day_button">
                            <div class="resource_button_div">
                                <el-button :autofocus="isDefaultTwo" @click="barEcharts(7,'right')">7Day</el-button>
                            </div>
                            <div class="resource_button_div">
                                <el-button @click="barEcharts(30,'right')">30Day</el-button>
                            </div>
                            <div class="resource_button_div">
                                <el-button @click="barEcharts(180,'right')">180Day</el-button>
                            </div>
                        </div>
                    </div>
                    <div :hidden="!isExistR" id="barChartRight" ref="barChartRight" style="height:550px;width:100%;margin-top: 80px;background-color: transparent;"></div>
                    <div :hidden="isExistR" class="resource_day_button" style="text-align: center">
                        暂无数据
                    </div>
                </div>
            </div>
        </div>
        <div class="all_data_area_resource out_div" :style="cssStyle">
            <el-row>
                <div class="head_area_two">
                    <i class="public_label_icon" style="margin: 11px;"></i>
                    <span style="font-size: 18px;font-weight: bold;">Child node list</span>
                </div>
                <div class="bottom_search_squ" style="line-height: 80px">
                    <el-input v-model="input" style="font-weight: bold;font-size: 18px" placeholder="Please enter ICD search">
                        <i
                                class="el-icon-search search_button"
                                slot="suffix"
                                @click="handleIconClick" circle>
                        </i>
                    </el-input>
                </div>
            </el-row>
            <el-row style="position:absolute;top: 108px;min-height: 880px;width: 100%">
                <PageList @updateTableHeight="updateTableHeight" ref="pageListData"></PageList>
            </el-row>
        </div>
    </div>
</template>

<script defer="true">
    import "@/css/resource.css"
    import "@/css/main.css"
    import "@/css/base.css"
    import * as echarts from 'echarts';
    // require('echarts/lib/chart/pie')
    // require('echarts/lib/chart/bar')
    import circleUrl from "@/img/icon/resource_add.png";
    import excIcon from "@/img/icon/exc_point.png";
    import {
        pieOptions,
        barOptions
    } from '@/api/resource/option'
    import PageList from "@/views/list/pageNodeList";
    import Utils from "@/utils/js/transferStation";
    import {
        getNodeLinkGraph,
        getProfitLinkGraph,
        getAccDetailInfo,
    } from "@/api/resource/api"
    import {
        getMinerNodeCount,
        getMinerSortList,
    } from "@/api/home/api";
    export default {
        name: "resourceMain",
        components: {
            PageList,
        },
        mounted() {
            this.changeList()
            this.pieEcharts()
            this.barEcharts()
            let that = this;
            Utils.$on('demo', function (params) {
                //增加属性判断是否激活
                this.isActiveMethod = true
                console.info("当前入参:" + JSON.stringify(params))
                that.getParams(params)
            })
            console.info("-------------------------------")
            if(!this.isActiveMethod){
                var params = {
                    searchType:  sessionStorage.getItem('searchType'),
                    searchValue:  sessionStorage.getItem('searchValue'),
                }
                console.info("未激活入参:" + JSON.stringify(params))
                this.getParams(params)
            }
        },
        data() {
            return {
                total: 10,
                isDefault: true,
                isDefaultTwo: true,
                isActiveMethod: false,
                isExistL: true,
                isExistR: true,
                query: {
                    pageNum: 1,
                    pageSize: 10,
                },
                circleUrl: circleUrl,
                excIcon: excIcon,
                address: "No Data",
                cid: "",
                poolName: "No Data",
                input: '',
                pointData: {
                    one: "Child Node",
                    two: "Computing power",
                    three: "Rank",
                    four: "Creation time",
                },
                dataList: {
                    one: "-",
                    two: "-",
                    three: "-",
                    four: "-",
                },
                pieChart:{
                    color:["#001594","#FF6B22","#88CD1B"],
                },
                pieChartLeftList:[],
                pieChartRightList:[],
                pieChartRightListData:[
                    { id: 0, color: 'background: #001594', name: 'Total power', value: 0, rate: 'top: 79%',},
                    { id: 1, color: 'background: #FF6B22', name: 'Power rate', value: "0%", rate: 'top: 86%',},
                    { id: 2, color: 'background: #FF6B22', name: 'Power feed', value: 0, rate: 'top: 93%',},
                ],
                seriesData: [],
                headerStyle: {
                    'text-align':'center',
                    'font-size':'18px',
                    'color':'#999999',
                    'height':'50px',
                    'line-height': '50px',
                    'border':'0px'},
                cellStyle: {
                    'text-align':'center',
                    'color':'black',
                    'border':'0px',
                    'height':'55px'},
                cssStyle: "margin-top: 151px",
                xDataLF: [],
                xDataRG: [],
                yDataLF: [],
                yDataRG: [],
            }
        },
        methods:{
            getParams(params){
                //查询首页数据
                if(params.searchType == "1"){
                    this.$refs.pageListData.queryPageList(params.searchValue,"")
                }else{
                    this.$refs.pageListData.queryPageList("",params.searchValue)
                }
                this.$nextTick(() => {
                    //开始更新页面数据
                    this.initPageData(params);
                });
            },
            //更新页面数据
            initPageData(params){
                this.isActiveMethod = false
                if(params.searchType == null || params.searchType.trim() == "" || params.searchType == "0"){
                    return
                }
                // console.info("页面数据:" + JSON.stringify(params))
                //首先是修改最上方数据
                if(params.searchType == "1"){
                    this.address = params.searchValue
                }else if(params.searchType == "2"){
                    this.getSortList()
                }
                this.changeList()
                //更新线状图信息
                this.barEcharts()
                //更新饼图信息
                this.pieEcharts()
                //获取顶部信息
                this.headerData()
            },
            updateTableHeight(value){
                if(value >= 10){
                    this.cssStyle = "margin-top: 151px;min-height:" + (828 + (value / 10 - 1) * 500) + "px;"
                }
            },
            changeList(){
                this.$refs.pageListData.updateTableStyle(this.headerStyle,this.cellStyle);
            },
            handleIconClick(){
                //传递搜索参数
                this.$refs.pageListData.queryPageList(this.address=="No Data"?"":this.address,this.input)
            },
            headerData(){
                var param = {
                    address: this.address
                }
                getAccDetailInfo(param).then(
                    res => {
                        if(res != undefined && res.errorCode == 1000){
                            this.poolName = res.content.pool_name
                            //获取子节点个数
                            this.getSortList("",this.address)
                            //当前算力
                            this.dataList.two = res.content.power
                            //排名
                            this.dataList.three = res.content.sort
                            //根据参数更新饼状图信息
                            this.pieEcharts(res.content)
                        }else{
                            this.address = "No Data"
                            this.poolName = "No Data"
                            this.dataList = {
                                one: "-",
                                two: "-",
                                three: "-",
                                four: "-",
                            }
                            this.initBarData()
                        }
                    }
                ).catch()
            },
            getSortList(name,address){
                var params = {
                    currentPage: "1",
                    pageSize: "1",
                    address: address==undefined?"":address,
                    c_id: name==undefined?"":name,
                };
                //由于push数据的原因，因此，每次查询前需要清空数据
                getMinerSortList(params).then(
                    res => {
                        if(res != undefined && res.errorCode === 1000) {
                            // this.address = res.content.rows[0].address
                            this.cid = res.content.rows[0].m_no
                            if(this.address == "No Data" || this.address == "" || this.address == undefined){
                                this.address = res.content.rows[0].address
                            }
                            //当前子节点数
                            this.dataList.one = res.content.count
                        }else{
                            this.address = "No Data"
                            this.poolName = "No Data"
                            this.cid = ""
                        }
                    }
                ).catch(()=>{
                })
            },
            pieEcharts(params){
                // let echarts = require('echarts/lib/echarts');    //可以直接写到方法中
                // require('echarts/lib/chart/pie')        //饼状
                // 基于准备好的dom，初始化echarts实例
                let pieLeft = echarts.init(document.getElementById('pieChartLeft'));
                let pieRight = echarts.init(document.getElementById('pieChartRight'));
                // 绘制基本图表
                pieLeft.setOption(pieOptions);
                pieRight.setOption(pieOptions);

                //显示加载动画
                pieLeft.showLoading();
                pieRight.showLoading();

                //初始化饼图数据
                this.initBarData(params);

                //获取数据
                setTimeout(()=>{  //为了让加载动画效果明显,这里加入了setTimeout,实现300ms延时
                    pieLeft.hideLoading(); //隐藏加载动画
                    pieRight.hideLoading();
                    pieLeft.setOption({
                        color: this.pieChart.color,
                        series: [{
                            data: this.pieChartLeftList
                        }]
                    })
                    pieRight.setOption({
                        color: this.pieChart.color,
                        series: [{
                            data: this.pieChartRightList
                        }]
                    })
                }, 300)
                if(this.address != "No Data" && this.address != ""){
                    this.getMinerCount(params)
                }
            },
            barEcharts(day,type){
                if(day == undefined || day == ""){
                    day = "7"
                }else{
                    day += ""
                }
                // let echarts = require('echarts/lib/echarts');    //可以直接写到方法中
                // require('echarts/lib/chart/bar')        //折线
                // console.info("开始更新数据：" , day)
                var params = {
                    address: this.address,
                    select_day: day,
                };
                // 基于准备好的dom，初始化echarts实例
                if(type == null || type == "left"){
                    this.initBarDataLF()
                    let chartLeft = echarts.init(document.getElementById('barChartLeft'));
                    // 绘制基本图表
                    chartLeft.setOption(barOptions);
                    if(this.address != "No Data" && this.address != ""){
                        //获取数据
                        getNodeLinkGraph(params).then(res => {
                            if(res != undefined && res.content != null && res.errorCode == 1000){
                                //显示加载动画
                                chartLeft.showLoading();
                                //分离出横轴数据
                                this.isExistL = true
                                this.list = res.content
                                for (let i = 0; i < this.list.length; i++) {
                                    let item = this.list[i];
                                    this.xDataLF.push(item.time)
                                    this.yDataLF.push(item.count)
                                }
                                //如果y轴小于1
                                setTimeout(()=>{  //为了让加载动画效果明显,这里加入了setTimeout,实现300ms延时
                                    chartLeft.hideLoading(); //隐藏加载动画
                                    chartLeft.setOption({
                                        xAxis: {
                                            data: this.xDataLF
                                        },
                                        series: [{
                                            data: this.yDataLF
                                        }]
                                    })
                                }, 300)
                            }else{
                                this.isExistL = false
                            }
                        })
                    }else{
                        this.isExistL = false
                        this.initBarData()
                    }
                }
                if(type == null || type == "right"){
                    this.initBarDataRG()
                    let chartRight = echarts.init(document.getElementById('barChartRight'));
                    chartRight.setOption(barOptions);
                    if(this.address != "No Data" && this.address != ""){

                        //获取数据
                        getProfitLinkGraph(params).then(res => {
                            if(res != undefined && res.content != null && res.errorCode == 1000) {
                                chartRight.showLoading();
                                //分离出横轴数据
                                this.isExistR = true
                                this.list = res.content
                                for (let i = 0; i < this.list.length; i++) {
                                    let item = this.list[i];
                                    this.xDataRG.push(item.time)
                                    this.yDataRG.push(item.profit)
                                }
                                setTimeout(() => {  //为了让加载动画效果明显,这里加入了setTimeout,实现300ms延时
                                    chartRight.hideLoading(); //隐藏加载动画
                                    chartRight.setOption({
                                        xAxis: {
                                            data: this.xDataRG
                                        },
                                        series: [{
                                            data: this.yDataRG
                                        }]
                                    })
                                }, 300)
                            }else{
                                this.isExistR = false
                            }
                        })
                    }else{
                        this.isExistR = false
                        this.initBarData()
                    }
                }
            },
            getMinerCount(params){
                //计算算力供给次数
                var param = {
                    currentPage: "1",
                    pageSize: "1",
                    address: this.address,
                    c_id: "",
                };
                //由于push数据的原因，因此，每次查询前需要清空数据
                getMinerSortList(param).then(
                    res => {
                        if(res != undefined && res.errorCode === 1000) {
                            var paramTwo = {
                                serial_number: res.content.rows[0].serial_number
                            }
                            getMinerNodeCount(paramTwo).then(
                                res => {
                                    if(res != undefined && res.errorCode === 1000) {
                                        this.pieChartRightListData = [
                                            { id: 0, color: 'background: #001594', name: 'Total power', value: params==undefined?0:this.showValue(params.total_power), rate: 'top: 79%',},
                                            { id: 1, color: 'background: #88CD1B', name: 'Power rate', value: params==undefined?"0%":this.showValue(params.power/params.total_power) + "%", rate: 'top: 86%',},
                                            { id: 2, color: 'background: #88CD1B', name: 'Power feed', value: params==undefined?0:res.content, rate: 'top: 93%',},
                                        ]
                                    }else{
                                        this.initBarData();

                                    }
                                }
                            ).catch()
                        }
                    }
                ).catch(()=>{
                })
            },
            showValue:function(value){
                if(value == "-"){
                    return "-";
                }
                // 保留素位小数
                return parseFloat(value).toFixed(4)
            },
            initBarDataLF(){
                this.xDataLF = [];
                this.yDataLF = [];
            },
            initBarDataRG(){
                this.xDataRG = [];
                this.yDataRG = [];
            },
            initBarData(params){
                // console.info("查看数据:" + JSON.stringify(params))
                //模拟拼接不同数据
                this.pieChartLeftList = [
                    { id: 0, color: 'background: #001594', name: 'Available Balance',
                        value: params==undefined?0:this.showValue((params.release == undefined || params.release == null)?0:params.release), rate: 'top: 79%',},
                    { id: 1, color: 'background: #FF6B22', name: 'Pledge amount',
                        value: params==undefined?0:this.showValue((params.adam == undefined || params.adam == null)?0:params.adam), rate: 'top: 86%',},
                    { id: 2, color: 'background: #88CD1B', name: 'Currency lock-up',
                        value: params==undefined?0:this.showValue((params.lock == undefined || params.lock == null)?0:params.lock), rate: 'top: 93%',}
                ]
                this.pieChartRightList = [
                    { id: 0, color: 'background: #001594', name: 'Current power',
                        value: params==undefined?0:this.showValue((params.power == undefined || params.power == null)?0:params.power), rate: 'top: 79%',},
                    { id: 1, color: 'background: #FF6B22', name: 'Total power',
                        value: params==undefined?0:this.showValue((params.total_power == undefined || params.total_power == null)?0:params.total_power), rate: 'top: 86%',},
                ]
                //由于右边饼图与下方数据不相同，因此需增加参数显示
                this.seriesData =
                    [{value: 0, name: 'Available Balance'},
                        {value: 0, name: 'Pledge amount'},
                        {value: 0, name: 'Currency lock-up'},]
                if(params == undefined){
                    this.pieChartRightListData = [
                        { id: 0, color: 'background: #001594', name: 'Total power', value: 0, rate: 'top: 79%',},
                        { id: 1, color: 'background: #FF6B22', name: 'Power rate', value: "0%", rate: 'top: 86%',},
                        { id: 2, color: 'background: #FF6B22', name: 'Power feed', value: 0, rate: 'top: 93%',},
                    ]
                }
            },
        }
    }
</script>

<style scoped>
    >>>.level_second .el-image__inner{
        width: 80px;
    }
</style>
