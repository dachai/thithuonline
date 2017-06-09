
var CheckLogin = (state = null,action) => {
	switch(action.type){
		case 'LOG_IN':
			return action.data;
		case 'LOG_OUT':
			return null;
		default:
			return state;
	}
}
module.exports = CheckLogin;