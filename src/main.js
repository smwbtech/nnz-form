import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import URLSearchParams from 'url-search-params'
import VueRouter from 'vue-router';

//Routes
import { routes } from './router/Routes.js';

Vue.use(VueRouter);

const router = new VueRouter(routes);


window.URLSearchParams = window.URLSearchParams || URLSearchParams;
Vue.config.productionTip = false

//Используем Axios как http клиент
Vue.prototype.$http = Axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
