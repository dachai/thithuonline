//$(document).bind('contextmenu', function(e){return false;});
$(document).ready(function () {
    // Sự kiện click chọn đáp án
    $('.main-bailam .content .group .dapan label input').click(function () {
        var $data = $(this).attr('data');
        var $cau = $data.slice(1);
        var $dapan = $data.slice(0,1);
        $('.main-bailam .sidebar .dapan #dapan'+ $cau +'').addClass('active');
    });
    // Bắt sự kiện scoll khi click đáp án
    $('.main-bailam .sidebar .dapan span').click(function () {
        var $this = $(this);
		var $data = $this.attr('id');
		var $cau = $data.slice(5);
		var $scollHienTai = parseInt($('.main-bailam .content').scrollTop());
		var $vitricauhoi;
		if($('.main-bailam').attr('class') == 'main-bailam'){
			var $vitricauhoi = parseInt($('.main-bailam .content #cau' + $cau + '').offset().top) - 140;
		}else{
			var $vitricauhoi = parseInt($('.main-bailam .content #cau' + $cau + '').offset().top) - 50;
		}
        $vitricauhoi = $vitricauhoi + $scollHienTai;
        $('.main-bailam .content').animate({ scrollTop: $vitricauhoi }, '500');
	});
    // Bắt sự kiện zoom popup bài làm
	$('#zoom').click(function () {
		var $mainBaiLam = $('.main-bailam').attr('class');
		if($mainBaiLam == 'main-bailam'){
			$('.main-bailam').addClass('popup-bailam');
			$('#zoom').html('<i class="fa fa-compress" aria-hidden="true"></i>');
		}else{
			$('.main-bailam').removeClass('popup-bailam');
			$('#zoom').html('<i class="fa fa-expand" aria-hidden="true"></i>');
		}
	});
	// Bắt sự kiện mở popup đăng nhập
	$('#mo-dangnhap').click(function () {
		$('.dangnhap').slideDown(300);
	});
	// Bắt sự kiện đóng popup đăng nhập
	$('#dong-dangnhap').click(function () {
		$('.dangnhap').slideUp(300);
	});
	// Bắt sự kiện click bên ngoài khung đăng nhập
	$('body').click(function(e) {
		if (!$(e.target).closest('.khungdangnhap').length && !$(e.target).closest('#mo-dangnhap').length){
			$(".dangnhap").fadeOut(300);
		}
	});
	// Bắt sự kiện nộp bài
	$('#nopbai').click(function () {
		var d = 0,dapan = [];
		$('.sidebar .dapan span').each(function (i,e) {
			if ($(this).attr('class') == 'active'){
				dapan[i+1] = 1;
				d++;
			}else{
				dapan[i+1] = 0;
			}
		});
		if ($('.sidebar .dapan span').length == d){
			alert('nộp bài');
		}else{
			var chuoi = '';
			for(var j = 0; j<= dapan.length ; j++){
				if (dapan[j] == 0){
					chuoi = chuoi + ' ' + j;
				}
			}
			if (confirm("Bạn chưa làm câu: " + chuoi + " .Bạn có muốn hoàn thiện không?") == true){
				alert("nộp bài");
			}
		}
	});

	// Bắt sự kiện click đăng nhập
	$('#dangnhap_btndangnhap').click(function () {
		var data = {
			"taikhoan" : $('#dangnhap-taikhoan').val(),
			"matkhau" : $('#dangnhap-matkhau').val()
		}
		// Gửi dữ liệu đăng nhập lên server
		socket.emit('dangnhap',data);
	});
	// Nhận dữ liệu kiểm tra đăng nhập
	socket.on('ketquadangnhap',function (data) {
		if (data.status == 1 ){
			alert('Thành công');
		}
	});
	// Bắt sự kiên blur Đăng nhập input tài khoản
	$('#dangnhap-taikhoan').blur(function () {
		var $input = $(this).val();
		var $thongbao = $('#dangnhap-thongbao-taikhoan');
		if($input == ""){
			$thongbao.html('<div class="thongbaoloi">Bạn chưa nhập Tài khoản hoặc Email.</div>');
		}else if($input.length < 6 ){
			$thongbao.html('<div class="thongbaoloi">Tài khoản hoặc email phải nhiều hơn 6 ký tự.</div>');
		}else if($input.length > 200 ){
			$thongbao.html('<div class="thongbaoloi">Tài khoản hoặc email phải ít hơn 200 ký tự.</div>');
		}else{
			$thongbao.html('');
		}
	});
	// Bắt sự kiên blur Đăng nhập input mật khẩu
	$('#dangnhap-matkhau').blur(function () {
		var $input = $(this).val();
		var $thongbao = $('#dangnhap-thongbao-matkhau');
		if($input == ""){
			$thongbao.html('<div class="thongbaoloi">Bạn chưa nhập mật khẩu.</div>');
		}else if($input.length < 6 ){
			$thongbao.html('<div class="thongbaoloi">Mật khẩu phải nhiều hơn 6 ký tự.</div>');
		}else if($input.length > 200 ){
			$thongbao.html('<div class="thongbaoloi">Tài mật khẩu phải ít hơn 200 ký tự.</div>');
		}else{
			$thongbao.html('');
		}
	});
});