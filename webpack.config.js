/***********************************************************************/
/*************************      CLIENT     *****************************/
/***********************************************************************/

module.exports = {
	entry  : './app/client/react/app.js',
	output : {
		path    : __dirname,
		filename: './app/public/core/client.js'
	},
	resolve: {
		root : __dirname,
		alias: {
			Body         : 'app/client/react/component/body.js',
			Header       : 'app/client/react/component/body/header.js',
			Logo         : 'app/client/react/component/body/header/logo.js',
			Menu         : 'app/client/react/component/body/header/menu.js',
			Seacrh       : 'app/client/react/component/body/header/search.js',
			Login        : 'app/client/react/component/body/header/login.js',
			PopupDangNhap: 'app/client/react/component/body/header/PopupDangNhap.js',
			Footer       : 'app/client/react/component/body/footer.js',
			Footer1      : 'app/client/react/component/body/footer/footer1.js',
			Footer2      : 'app/client/react/component/body/footer/footer2.js',
			Footer3      : 'app/client/react/component/body/footer/footer3.js',
			FooterBar    : 'app/client/react/component/body/footer/footerBar.js',
			TinMoi       : 'app/client/react/component/body/tinmoi.js',
			Main         : 'app/client/react/component/body/main.js',
			TrangChu     : 'app/client/react/component/body/main/trangchu.js',
			BaiLam       : 'app/client/react/component/body/main/bailam.js',
			UpLoad       : 'app/client/react/component/body/main/upload.js',
			NotFound     : 'app/client/react/component/body/main/notfound.js',
		}
	},
	module : {
		loaders: [
			{
				loader : 'babel-loader',
				query  : {
					presets: ['es2015', 'react', 'stage-0']
				},
				test   : /\.jsx?$/,
				exclude: /node_modules/
			}
		]
	}
};

/***********************************************************************/
/*************************       ADMIN     *****************************/
/***********************************************************************/
//
// module.exports = {
// 	entry: './app/admin/react/app.js',
// 	output: {
// 		path: __dirname,
// 		filename: './app/public/core/admin.js'
// 	},
// 	resolve: {
// 		root: __dirname,
// 		alias: {
// 			Body: 'app/admin/react/component/body.js',
// 			Header:'app/admin/react/component/body/header.js',
// 			Menu:'app/admin/react/component/body/menu.js',
// 			Main: 'app/admin/react/component/body/main.js',
// 			TrangChu: 'app/admin/react/component/body/main/trangchu.js',
// 			ChuyenMuc: 'app/admin/react/component/body/main/chuyenmuc/chuyenmuc.js',
// 			SuaChuyenMuc: 'app/admin/react/component/body/main/chuyenmuc/suachuyenmuc.js'
// 		}
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				loader: 'babel-loader',
// 				query: {
// 					presets: ['es2015', 'react', 'stage-0']
// 				},
// 				test: /\.jsx?$/,
// 				exclude: /node_modules/
// 			}
// 		]
// 	}
// };
