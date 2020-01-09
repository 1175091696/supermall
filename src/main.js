import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
// require('mock/mock.js')

Vue.config.productionTip = false
// Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
