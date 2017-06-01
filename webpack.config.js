module.exports = {
  entry: './react/app.js',
  output: {
    path: __dirname,
    filename: './public/core/my.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Body: 'react/component/body.js',
      Header: 'react/component/body/header.js',
      Logo: 'react/component/body/header/logo.js',
      Menu: 'react/component/body/header/menu.js',
      Seacrh: 'react/component/body/header/search.js',
      Login: 'react/component/body/header/login.js',
      PopupDangNhap: 'react/component/body/header/PopupDangNhap.js',
      Footer: 'react/component/body/footer.js',
      Footer1: 'react/component/body/footer/footer1.js',
      Footer2: 'react/component/body/footer/footer2.js',
      Footer3: 'react/component/body/footer/footer3.js',
      FooterBar: 'react/component/body/footer/footerBar.js',
      TinMoi: 'react/component/body/tinmoi.js',
      Main: 'react/component/body/main.js',
      TrangChu: 'react/component/body/main/trangchu.js',
      BaiLam: 'react/component/body/main/bailam.js',
      UpLoad: 'react/component/body/main/upload.js',
      NotFound: 'react/component/body/main/notfound.js',
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
