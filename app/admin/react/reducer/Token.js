/**
 * Created by Dac Hai on 09/06/2017.
 */

var Token = (state = null,action) => {
	switch (action.type){
		case 'TOKEN':
			return action.token;
		case 'DELETE_TOKEN':
			return null;
		default:
			return state;
	}
}

module.exports = Token;