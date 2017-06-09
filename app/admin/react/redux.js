/**
 * Created by Dac Hai on 01/06/2017.
 */

var redux = require('redux');
var UrlAdmin = require('./reducer/UrlAdmin.js');
var Category = require('./reducer/Category.js');
var Loading = require('./reducer/Loading.js');
var CheckLogin = require('./reducer/CheckLogin.js');
var Token = require('./reducer/Token.js');

var reducer = redux.combineReducers({
	UrlAdmin,Category,Loading,CheckLogin,Token
});
var store = redux.createStore(reducer);
// store.dispatch({type:'LOG_IN', user: 'caodachai'});
// store.dispatch({type:'OPEN_POPUP_LOGIN'});
// console.log(store.getState());
module.exports = store;
