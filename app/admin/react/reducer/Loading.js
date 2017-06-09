/**
 * Created by Dac Hai on 08/06/2017.
 */

var Loading = (state = false , action) => {
	switch (action.type){
		case 'ON_LOADING':
			return true
		case 'OFF_LOADING':
			return false
		default:
			return false
	}
}
module.exports = Loading;

