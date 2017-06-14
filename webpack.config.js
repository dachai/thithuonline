/***********************************************************************/
/*************************      CLIENT     *****************************/
/***********************************************************************/
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry  : './vendor/ThuVienOnline/react/app.js',
	output : {
		path    : __dirname,
		filename: './public/core/client.js'
	},
	devtool: "source-map",
	resolve: {
		root : __dirname,
		alias: {
			key : 'vendor/ThuVienOnline/libs/key.js',
			validate: 'vendor/ThuVienOnline/libs/validate.js',
			Body         : 'vendor/ThuVienOnline/React/Component/body.js',
			Header       : 'vendor/ThuVienOnline/React/Component/body/header.js',
			Logo         : 'vendor/ThuVienOnline/React/Component/body/Header/logo.js',
			Menu         : 'vendor/ThuVienOnline/React/Component/body/Header/menu.js',
			Seacrh       : 'vendor/ThuVienOnline/React/Component/body/Header/search.js',
			Login        : 'vendor/ThuVienOnline/React/Component/body/Header/login.js',
			PopupLogin	 : 'vendor/ThuVienOnline/React/Component/body/Header/popupLogin.js',
			Register	 : 'vendor/ThuVienOnline/React/Component/body/Main/Register/Register.js',
			Footer       : 'vendor/ThuVienOnline/React/Component/body/footer.js',
			Footer1      : 'vendor/ThuVienOnline/React/Component/body/Footer/footer1.js',
			Footer2      : 'vendor/ThuVienOnline/React/Component/body/Footer/footer2.js',
			Footer3      : 'vendor/ThuVienOnline/React/Component/body/Footer/footer3.js',
			FooterBar    : 'vendor/ThuVienOnline/React/Component/body/Footer/footerBar.js',
			New       	 : 'vendor/ThuVienOnline/React/Component/body/Header/new.js',
			Main         : 'vendor/ThuVienOnline/React/Component/body/main.js',
			Home     	 : 'vendor/ThuVienOnline/React/Component/body/Main/Home/home.js',
			BaiLam       : 'vendor/ThuVienOnline/React/Component/body/Main/bailam.js',
			UpLoad       : 'vendor/ThuVienOnline/React/Component/body/Main/Upload/upload.js',
			NotFound     : 'vendor/ThuVienOnline/React/Component/body/Main/Notfound/notfound.js',
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
	},
	// plugins: [
	//     new UglifyJSPlugin()
	// ]
};