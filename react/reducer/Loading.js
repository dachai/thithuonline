var Loading = (state = false,action) => {
	switch(action.type){
		case 'LOADING':
			return true;
		case 'OFF_LOADING':
			return false;
		default:
			return state;
	}
} 
module.exports = Loading;