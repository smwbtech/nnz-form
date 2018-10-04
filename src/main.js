import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import URLSearchParams from 'url-search-params'


window.URLSearchParams = window.URLSearchParams || URLSearchParams;
Vue.config.productionTip = false

//Используем Axios как http клиент
Vue.prototype.$http = Axios;

new Vue({
  render: h => h(App)
}).$mount('#app')
