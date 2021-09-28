import Vue from 'vue';
import Router from 'vue-router';

import Main from "@/api/base/router";
import Account from "@/api/account/router"
import LeaderBoard from "@/api/leaderboard/router"
import Global from "@/api/global/router"
import Resource from "@/api/resource/router"

Vue.use(Router)

var config = {
    mode: 'history',
    routes: []
};

config.routes = config.routes.concat(new Main().config);
config.routes = config.routes.concat(new Account().config);
config.routes = config.routes.concat(new LeaderBoard().config);
config.routes = config.routes.concat(new Global().config);
config.routes = config.routes.concat(new Resource().config);


export default new Router(config);

