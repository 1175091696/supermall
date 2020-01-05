import {request} from "../request.js";

export function getHomeData() {
	return request({
		url: '/main',
		// method: "get",
	})
}

export function getHomeGoods(type) {
	return request({
		url: '/' + type,
	})
}