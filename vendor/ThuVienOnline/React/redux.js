var redux = require('redux');
var popupDangNhap = require('./reducer/popupDangNhap.js');
var popupRegister = require('./reducer/popupRegister.js');
var CheckLogin = require('./reducer/CheckLogin.js');
var Loading = require('./reducer/Loading.js');

var reducer = redux.combineReducers({
	popupDangNhap,CheckLogin,Loading,popupRegister
});
 
var store = redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
module.exports = store;