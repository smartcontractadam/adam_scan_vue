<template>
  <div class="adamBackground homeCon" v-title data-title="AdamScan">
    <div></div>
    <div>
      <div>
        <home-head></home-head>
      </div>
      <div class="home_base_main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div>
        <home-footer></home-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeHead from "@/views/base/homeHead";
  import HomeFooter from "@/views/base/homeFooter";
  export default {
    name: 'App',
    components: {
      HomeFooter,
      HomeHead
    },
    mounted(){
      window.onpopstate = () => {
        if (!this.allowBack) {    //    这个allowBack 是存在vuex里面的变量
          history.go(1)
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>
