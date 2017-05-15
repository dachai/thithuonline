/**
 * Created by Dac Hai on 15/05/2017.
 */

function Validate(){
	return {
		checkdata : function (data) {
			if (data.required) {
				alert(data.required);
			}
		},
		checkinput : function (data) {
			if (!data.required) {
				alert(data.required);
			}
		},
		in : function () {
			console.log("xinchaof");
		},
	};
};
module.exports = Validate;