var popupDangNhap = (state = false,action) => {
	switch(action.type){
		case 'OPEN_POPUP_LOGIN':
			return true
		case 'OFF_POPUP_LOGIN':
			return false
		default:
			return state
	} 
}
module.exports = popupDangNhap;