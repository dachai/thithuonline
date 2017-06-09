/**
 * Created by Dac Hai on 08/06/2017.
 */
var CheckLogin = (state = null,action) => {
	switch(action.type){
		case 'LOG_IN':
			return action.user;
		case 'LOG_OUT':
			return null;
		default:
			return state;
	}
}
module.exports = CheckLogin;
