/**
 * Created by Dac Hai on 03/06/2017.
 */
var Category = (state = null , action) => {
	switch (action.type){
		case 'CATEGORY':
			return action.category;
		default:
			return state;
	}
}
module.exports = Category;

