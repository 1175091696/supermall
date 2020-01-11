import Toast from './Toast.vue'
const obj = {}

obj.install = function (Vue) {
	// body...
	// console.log('11')
	// document.body.appendChild(Toast.$el);

	// 1创建组件构造器
	const toastContrustor = Vue.extend(Toast)
	// 2new的方式，根据组件构造器，创建一个组件对象
	const toast = new toastContrustor()
	// 3手动挂载组件对象到某一个元素
	toast.$mount(document.createElement('div'))
	// 4将toast.$el对应的就是div
	document.body.appendChild(toast.$el);

	Vue.prototype.$toast = toast;
}

export default obj