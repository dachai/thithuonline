import React from "react";
import {connect} from "react-redux";
var axios = require('axios');

class PopupDangNhap extends React.Component {
	loginSubmit(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		dispatch({type: 'LOADING'});
		var data = {
			"username": this.refs.username.value,
			"password": this.refs.password.value
		}
		axios.post('/api/login/abc', data)
			.then(function (response) {
				if (response.data.status == 1) {
					dispatch({type: 'LOG_IN', user: response.data.user});
					dispatch({type: 'OFF_LOADING'});
					dispatch({type: 'OFF_POPUP_LOGIN'});
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	dongdangnhap() {
		// Bắt sự kiện click đóng popup
		var {dispatch} = this.props;
		dispatch({type: 'OFF_POPUP_LOGIN'});
	}

	dongdangnhapbody(e) {
		// Bắt sự kiện click bên ngoài khung đăng nhập
		if (!$(e.target).closest('.khungdangnhap').length) {
			var {dispatch} = this.props;
			dispatch({type: 'OFF_POPUP_LOGIN'});
		}
	}

	validateUsername() {
		let data = this.refs.username.value;
		let thongbao = $('#dangnhap-thongbao-taikhoan');
		if (data == "") {
			thongbao.html('<div class="thongbaoloi">Bạn chưa nhập Tài khoản hoặc Email.</div>');
		} else if (data.length < 6) {
			thongbao.html('<div class="thongbaoloi">Tài khoản hoặc email phải nhiều hơn 6 ký tự.</div>');
		} else if (data.length > 200) {
			thongbao.html('<div class="thongbaoloi">Tài khoản hoặc email phải ít hơn 100 ký tự.</div>');
		} else {
			thongbao.html('');
		}
	}

	validatePassword() {
		let data = this.refs.password.value;
		let thongbao = $('#dangnhap-thongbao-matkhau');
		if (data == "") {
			thongbao.html('<div class="thongbaoloi">Bạn chưa nhập mật khẩu.</div>');
		} else if (data.length < 6) {
			thongbao.html('<div class="thongbaoloi">Mật khẩu phải nhiều hơn 6 ký tự.</div>');
		} else if (data.length > 200) {
			thongbao.html('<div class="thongbaoloi">Tài mật khẩu phải ít hơn 200 ký tự.</div>');
		} else {
			thongbao.html('');
		}
	}

	render() {
		if (this.props.popupDangNhap) {
			return (
				<div className="dangnhap" onClick={this.dongdangnhapbody.bind(this)}>
					<div className="col-4 khungdangnhap">
						<div id="dong-dangnhap" onClick={this.dongdangnhap.bind(this)}>
							<i className="fa fa-times" aria-hidden="true"></i>
						</div>
						<h3>Đăng nhập</h3>
						<form onSubmit={this.loginSubmit.bind(this)}>
							<div className="group">
								<label>
									Tài khoản
								</label>
								<input type="text" onKeyUp={this.validateUsername.bind(this)} ref="username" placeholder="Tên đăng nhập hoặc email" />
								<span id="dangnhap-thongbao-taikhoan"></span>
							</div>
							<div className="group">
								<label>
									Mật khẩu
								</label>
								<input type="password" onKeyUp={this.validatePassword.bind(this)} ref="password" />
								<span id="dangnhap-thongbao-matkhau"></span>
							</div>
							<div className="group">
								<label>
									Ghi nhớ đăng nhập
								</label>
								<input type="checkbox" id="dangnhap_ghinho" />
							</div>
							<div className="group">
								{this.props.Loading ? (
										<i className='fa fa-spinner fa-pulse fa-fw'></i>
									) : ''}
							</div>
							<div className="group">
								<button >Đăng nhập</button>
								<a href="#">Quên mật khẩu?</a>
							</div>
						</form>
					</div>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
}

module.exports = connect(function (state) {
	return {
		popupDangNhap: state.popupDangNhap,
		Loading      : state.Loading
	}
})(PopupDangNhap);