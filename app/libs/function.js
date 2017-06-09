/**
 * Created by Dac Hai on 20/05/2017.
 */
'use strict';
let md5 = require('md5');
module.exports = class Ham{
	encode_md5(data){
		return data = md5(data);
	}
	encode_password(matkhau){
		return matkhau = md5(matkhau + 'ankid');
	}
	ToSlug(slug){
		//Đổi chữ hoa thành chữ thường
		slug = slug.toLowerCase();
		//Đổi ký tự có dấu thành không dấu
		slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
		slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
		slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
		slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
		slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
		slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
		slug = slug.replace(/đ/gi, 'd');
		//Xóa các ký tự đặt biệt
		slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
		//Đổi khoảng trắng thành ký tự gạch ngang
		slug = slug.replace(/ /gi, " - ");
		//Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
		//Phòng trường hợp người nhập vào quá nhiều ký tự trắng
		slug = slug.replace(/\-\-\-\-\-/gi, '-');
		slug = slug.replace(/\-\-\-\-/gi, '-');
		slug = slug.replace(/\-\-\-/gi, '-');
		slug = slug.replace(/\-\-/gi, '-');
		//Xóa các ký tự gạch ngang ở đầu và cuối
		slug = '@' + slug + '@';
		slug = slug.replace(/\@\-|\-\@|\@/gi, '');
		//In slug ra textbox có id “slug”
		return slug;
	}
	getTime() {
		let date = new Date();
		let hour = date.getHours();
		hour = (hour < 10 ? "0" : "") + hour;
		let min  = date.getMinutes();
		min = (min < 10 ? "0" : "") + min;
		let sec  = date.getSeconds();
		sec = (sec < 10 ? "0" : "") + sec;
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;
		let day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;
		return day + "-" + month + "-" + year + "|" + hour + "-" + min + "-" + sec;

	}
}