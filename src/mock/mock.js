import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random;

const produceData = function(opt) {
	// console.log('opt', opt);
	let articles = [];
	for (let i=0; i<30 ;i++) {
		let newArtObj = {
			title: Random.csentence(5, 30),
			data: Random.date()
		}
		articles.push(newArtObj)
	}
	return {
		data: articles
	}
}

Mock.mock('/user', /post|get/i, produceData);