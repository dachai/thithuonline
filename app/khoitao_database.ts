/**
 * Created by Dac Hai on 13/05/2017.
 */
// Users
{
  	"_id" : "590edcb364ca902094dfb503",
	"ten" : "Hải",
	"ho" : "Cao Đắc",
  	"taikhoan" : "caodachai",
  	"matkhau" : "590edcb364ca902094dfb503",
  	"matkhaucu" : "590edcb364ca902094dfb503|590edcb364ca902094dfb503",
  	"email" : "caodachai@gmail.com",
	"thongtinthem" : {
  			"anhdaidien" : "test1.jpg",
  			"ngaysinh" : "19/11/1997",
			"doituong" : "hocsinh", // hocsinh //thaycogiao
			"sobaidalam" : "34",
			"solanphamquy" : "13",
			"sobaidadang" : "86",
			"diemsotrungbinh" : {
				"toan" : "6.5",
				"ly" : "5.6",
				"hoa" : "6.7",
				"sinh" : "8.5"
			}
	},
  	"quyentruycap" : "admin", // user //bientap
  	"trangthai" : "online" // socket.id
  	"ngaytao":"2017-05-07T08:37:07.849Z"
}
// ChuyenMuc
{
	"_id" : "590edcb364ca902094dfb503",
	"tenchuyenmuc" : "Toán",
	"mota" : "Đây là mô tả của chuyên mục",
	"slug": "toan",
	"keyword": "toan",
	"cha" : "590edcb364ca902094dfb503", // Lấy theo ID ChuyenMuc
	"ngaytao":"2017-05-07T08:37:07.849Z"
}
// DeThi
{
  	"_id" : "590edcb364ca902094dfb503",
	"tieude" : "Xin chào đây là tiêu đề",
	"slug" : "xzcc czxc czxcxz cxzc czxc",
	"keyword": "toan",
	"mota" : "Đây là mô tả",
	"nguoidang" : "590edcb364ca902094dfb503" // Lấy theo ID Users
	"luotthi" : "8432",
	"thoigian" : "3000",
	"danhgia" : [
		{
			"nguoidanhgia" : "590edcb364ca902094dfb503", //Lấy theo ID Users
			"diemso" : "4",
			"loidanhgia" : "Tốt",
			"creat_date":"2017-05-07T08:37:07.849Z"
		},
		{
			"nguoidanhgia" : "590edcb364ca902094dfb503", //Lấy theo ID Users
			"diemso" : "4",
			"loidanhgia" : "Tốt",
			"creat_date":"2017-05-07T08:37:07.849Z"
		}
	],
	"sodiemdanhgia" : "4.5",
	"songuoidanhgia" : "85",
	"trangthai" : "congkhai", //congkhai //thungrac //bimat //vipham
	"duocpheptruycap" : "590edcb364ca902094dfb503|590edcb364ca902094dfb503" //Lấy theo ID Users //null tức là tất cả
	"chuyenmuc" : "590edcb364ca902094dfb502", // Lấy theo ID ChuyenMuc
	"creat_date":"2017-05-07T08:37:07.849Z"
}
// Cau
{
	"_id" : "590edcb364ca902094dfb503",
	"cau" : "1",
	"cauhoi" : "Đây là câu hỏi 1",
	"dapan" : [
		{
			"chu" : "a",
			"noidung" : "câu trả lời cho đáp án A",
		},
		{
			"chu" : "b",
			"noidung" : "câu trả lời cho đáp án B",
		},
		{
			"chu" : "c",
			"noidung" : "câu trả lời cho đáp án C",
		},
		{
			"chu" : "d",
			"noidung" : "câu trả lời cho đáp án D",
		}
	],
	"dapandung" : {
		"chu" : "a",
		"noidung" : "đây là nội dung đáp án A",
		"taisaodung" : "",
	},
	"dethi" : "590edcb364ca902094dfb503", // Lấy theo ID DeThi
	"creat_date":"2017-05-07T08:37:07.849Z"
}
// BaiThi
{
	"_id" : "590edcb364ca902094dfb503",
	"dethi" : "590edcb364ca902094dfb503", // Lấy theo ID DeThi
	"nguoithi" : "590edcb364ca902094dfb503", // Lấy theo ID Users
	"thoigianconlai" : "1323",
	"thoigianbatdau" : "10",
	"trangthai" : "hoanthanh", //danglam
	"dapan" : "abc0d0bcab0bbdb0cb0ad0c00dab0c",
	"thethuc" : "online" //offline
	"sodiem" : "5.6",
	"creat_date":"2017-05-07T08:37:07.849Z"
}
// BinhLuan
{
	"_id" : "590edcb364ca902094dfb503",
	"noidung":"Xin chào đây là bình luận số 1",
	"dethi" : "590edcb364ca902094dfb503" // Lấy theo ID DeThi
	"nguoidang" : "590edcb364ca902094dfb503", // Lấy theo ID Users
	"traloi" : "590edcb364ca902094dfb503", // Lấy theo ID BinhLuan
	"trangthai" : "congkhai", //congkhai //thungrac //nhaycam
	"creat_date":"2017-05-07T08:37:07.849Z"
}
