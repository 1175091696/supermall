import {request} from "../request.js";

export function getDetailData() {
	return request({
		url: '/detail',
		// method: "get",
		// params: {
		// 	id
		// }
	})
}