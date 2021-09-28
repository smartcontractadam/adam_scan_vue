<template>
    <div class="background_global">
        <div class="content">
            <el-row style="padding: 2% 0.6%;">
                <i class="public_label_icon "></i>
                <div class="title_content">Quick entry</div>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="jump_area">
                        <div class="bottom_background">
                            <div class="top">
                                <div>
                                    <el-image class="logo" :src="logoOne"></el-image>
                                </div>
                                <div class="text_content">
                                    ADAM website address
                                </div>
                            </div>
                            <div class="bottom">
                                <el-image class="button" :src="circleUrl" @click="jump('https://www.adamoracle.io')"></el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="jump_area">
                        <div class="bottom_background">
                            <div class="top">
                                <div>
                                    <el-image class="logo" :src="logoTwo"></el-image>
                                </div>
                                <div class="text_content">
                                    ADAM
                                    <br/>
                                    document
                                </div>
                            </div>
                            <div class="bottom">
                                <el-image class="button" :src="circleUrl" @click="jump()"></el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="jump_area">
                        <div class="bottom_background">
                            <div class="top">
                                <div>
                                    <el-image class="logo" :src="logoThree"></el-image>
                                </div>
                                <div class="text_content">
                                    ADAM <br/> Twitter
                                </div>
                            </div>
                            <div class="bottom">
                                <el-image class="button" :src="circleUrl" @click="jump('https://twitter.com/ADAM_Oracle')"></el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="jump_area">
                        <div class="bottom_background">
                            <div class="top">
                                <div>
                                    <el-image class="logo" :src="logoFour"></el-image>
                                </div>
                                <div class="text_content">
                                    ADAM <br/> Blog
                                </div>
                            </div>
                            <div class="bottom">
                                <el-image class="button" :src="circleUrl" @click="jump()"></el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin: 5% 0% 3% 0%;">
                <i class="public_label_icon"></i>
                <div class="title_content">Official cooperation</div>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="offcial_area">
                        <el-image class="officialLogo" :src="logoCaiJing" @click="jumpOfficial('https://www.jinse.com/')"></el-image>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="offcial_area">

                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="offcial_area">

                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="offcial_area">

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import "@/css/global.css"
    import "@/css/base.css"
    import logoOne from "@/img/icon/logoOne.png";
    import logoTwo from "@/img/icon/logoTwo.png";
    import logoThree from "@/img/icon/logoThree.png";
    import logoFour from "@/img/icon/logoFour.png";
    import logoCaiJing from "@/img/logo/caijing.png";
    import circleUrl from "@/img/icon/right-circle-fill.png";
    export default {
        name: "globalMain",
        data(){
            return {
                circleUrl: circleUrl,
                logoOne: logoOne,
                logoTwo: logoTwo,
                logoThree: logoThree,
                logoFour: logoFour,
                logoCaiJing: logoCaiJing,
            }
        },
        methods: {
            jump(path){
                if(path != "" && path != undefined){
                    window.location.href=path
                }
            },
            jumpOfficial(path){
                if(path != "" && path != undefined){
                    window.location.href=path
                }
            }
        }
    }
</script>

<style scoped>

</style>
