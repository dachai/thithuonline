var redux = require('redux');
var popupDangNhap = require('./reducer/popupDangNhap.js');
var CheckLogin = require('./reducer/CheckLogin.js');
var Loading = require('./reducer/Loading.js');

var reducer = redux.combineReducers({
	popupDangNhap,CheckLogin,Loading
});
 
var store = redux.createStore(reducer);
// store.dispatch({type:'LOG_IN', user: 'caodachai'});
// store.dispatch({type:'OPEN_POPUP_LOGIN'});
// console.log(store.getState());
module.exports = store;