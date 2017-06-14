var popupRegister = (state = false,action) => {
	switch(action.type){
		case 'OPEN_POPUP_REGISTER':
			return true
		case 'OFF_POPUP_REGISTER':
			return false
		default:
			return state
	} 
}
module.exports = popupRegister;