import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import URLSearchParams from 'url-search-params'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

//Routes
import { routes } from './router/Routes.js';
//Vuex store
import { storeObj } from './store/Store.js';

Vue.use(VueRouter);
Vue.use(Vuex);

//Инициализируем Vuex и VueRouter
const store = new Vuex.Store(storeObj);
const router = new VueRouter(routes);


window.URLSearchParams = window.URLSearchParams || URLSearchParams;
Vue.config.productionTip = false

//Используем Axios как http клиент
Vue.prototype.$http = Axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
