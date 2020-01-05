const path = require('path');

function resolve(dir) {
	return path.join(__dirname,dir)
}

module.exports={   
    chainWebpack:(config)=>{
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
        .set('views',resolve('./src/views'))
        .set('network',resolve('./src/network'))
        .set('common',resolve('./src/common')) 
        .set('mock',resolve('./src/mock'))
        //注意 store 和 router 没必要配置　　　　
    },

    lintOnSave:false,
    devServer: {
        overlay:{
          warning:false,
          errors:false
       },
      //  proxy: {
      //   "/api": {
      //     target: "http://yapi.demo.qunar.com/mock/67211/",
      //     changeOrigin: true,
      //     ws: true,
      //     pathRewrite: {
      //       "^/api": ''
      //     }
      //   }
      // }
    },
}

