import axios from "axios";

export function request(config) {
	// body...
	const instance = axios.create({
		baseURL: 'http://yapi.demo.qunar.com/mock/67211',
		timeout: 6000
	})

	instance.interceptors.request.use(config => {
		return config
	}, err => {
		// console.log(err)
	})

	instance.interceptors.response.use(res => {
		if (res.data.rtncod === 'SUC0000') {
			return res.data.rtndat;	
		}else {
			return null
		}
	}, err => {
		console.log(err)
	})

	return instance(config)
}

