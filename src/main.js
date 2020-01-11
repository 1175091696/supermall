import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
// require('mock/mock.js')

import toast from 'components/common/toast/index.js'

Vue.config.productionTip = false
// Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();
// 安装toast插件
Vue.use(toast)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
