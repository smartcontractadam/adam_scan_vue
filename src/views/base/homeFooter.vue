<template>
    <div class="foot_base">
        <div class="foot_main">
            <!-- 底部开始 -->
            <div class="footer">
                <div class="footer_font_content left_div">
                    <el-image
                            style="width: 69.3%;height: 64px;"
                            :src="logoImg"
                            :fit="fit"></el-image>
                    <!-- font-size: 18px;font-weight: bold; -->
                    <div style="margin-top: 20px;">
                        ADAMScan is a blockchain browser and data service analysis platform developed with the support of ADAM LABS.
                        ADAMoracle provides users with ADAMoracle data and node information to check the latest running status of nodes in a timely manner
                    </div>
                    <div style="margin-top: 23px;">
                    </div>
                </div>
                <div class="footer_font_content content_div">
                    <el-row>
                        Community
                    </el-row>
                    <el-row style="margin-top: 32px;">
                        <el-col :span="8">
                            <div style="float: left">
                                <el-image style="width: 20px" :src="twitterIcon"></el-image>
                            </div>
                            <div style="float: left;margin-left: 5px;">
                                <el-link :underline="false" href="https://twitter.com/ADAM_Oracle">Twitter</el-link>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div style="float: left">
                                <el-image style="width: 20px" :src="flyIcon"></el-image>
                            </div>
                            <div style="float: left;margin-left: 5px;">
                                <el-link :underline="false" href="https://t.me/adamoracleEnglish">Telegram English</el-link>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div style="float: left">
                                <el-image style="width: 20px" :src="flyIcon"></el-image>
                            </div>
                            <div style="float: left;margin-left: 5px;">
                                <el-link :underline="false" href="https://t.me/adamoracleChinese">Telegram Chinese</el-link>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 5px">
                        <el-col :span="8">
                            <div style="float: left">
                                <el-image style="width: 20px" :src="mIcon"></el-image>
                            </div>
                            <div style="float: left;margin-left: 5px;">
                                <el-link :underline="false" href="https://adamoracle.medium.com">Medium</el-link>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div style="float: left">
                                <el-image style="width: 20px" :src="playIcon"></el-image>
                            </div>
                            <div style="float: left;margin-left: 5px;">
                                <el-link :underline="false" href="https://www.youtube.com/watch?v=Vi62u5p3hmU">Youtube</el-link>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 31px;">
                        Quick Links
                    </el-row>
                    <el-row style="margin-top: 26px">
                        <el-col :span="6">
                            <div style="float: left">
                                <el-image style="width: 20px" :src="adamIcon"></el-image>
                            </div>
                            <div style="float: left;margin-left: 5px;">
                                <el-link :underline="false" href="https://www.adamoracle.io">ADAM website</el-link>
                            </div>

                        </el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6"></el-col>
                    </el-row>
                </div>
                <div class="footer_font_content right_div">
                    <el-row>Partner</el-row>

                    <el-row style="margin-top: 34px">
                        <div style="float: left">
                            <el-image style="width: 70px;" :src="caijingIcon"></el-image>
                        </div>
                        <div style="float: left;margin-left: 5px;">
                            <el-link :underline="false" href="https://www.jinse.com/">Golden finance</el-link>
                        </div>
                    </el-row>
                    <el-row style="margin-top: 24px">
                        <div style="float: left">
                            <el-image style="width: 70px;" :src="caijingIcon"></el-image>
                        </div>
                        <div style="float: left;margin-left: 5px;">
                            <el-link :underline="false" href="https://bscscan.com/">Binance Smart Chain</el-link>
                        </div>
                    </el-row>
                    <el-row style="margin-top: 24px"></el-row>
                    <el-row style="margin-top: 24px"></el-row>
                </div>
            </div>
        </div>
        <!-- 底部结束 -->
    </div>
</template>

<script>
    import "@/css/base.css"
    export default {
        name: "homeFooter",
        data(){
            return{
                logoImg: require("@/img/logo.png"),
                twitterIcon: require("@/img/icon/twitter_icon.png"),
                playIcon: require("@/img/icon/play_icon.png"),
                flyIcon: require("@/img/icon/fly_icon.png"),
                mIcon: require("@/img/icon/m_icon.png"),
                caijingIcon: require("@/img/icon/caijing_icon.png"),
                adamIcon: require("@/img/icon/adam_icon.png"),
                fit: 'scale-down',
                backgroundImg: require("@/img/foot_background.png"),
            }
        }
    }
</script>

<style scoped>
    >>>.el-link.el-link--default {
        color: white;
    }
    >>>.el-link.el-link--default:hover {
        color: #409EFF;
    }
</style>
