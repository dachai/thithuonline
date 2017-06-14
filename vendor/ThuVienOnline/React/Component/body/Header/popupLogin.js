import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
var jwt = require('jwt-simple');
var key = require('key');

class PopupLogin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			submitError : ''
		}
	}

	loginSubmit(e) {
		/****  Sự kiện đăng nhập  ****/
		e.preventDefault();
		var {dispatch} = this.props;
		var $this = this;
		dispatch({type: 'ON_LOADING'});
		var data = {
			"username": this.refs.username.value,
			"password": this.refs.password.value
		}
		$.ajax({
			type:"POST",
			url:"/api/login",
			data: data,
			success:function (res) {
				if (res.status == 1) {
					let user = jwt.decode(res.token, key);
					dispatch({type: 'LOG_IN', user: user});
					localStorage.setItem("token", res.token);
					dispatch({type: 'OFF_POPUP_LOGIN'});
					dispatch({type: 'OFF_LOADING'});
				}else{
					$this.setState((prevState, props) => {
					  return {
					  	submitError: <p>{res.message}</p>
					  };
					});
					dispatch({type: 'OFF_LOADING'});
				}
			}
		});
	}
	loginFacebook(){
		var {dispatch} = this.props;
		var $this = this;
		dispatch({type: 'ON_LOADING'});
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId=985944054831668";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		$.getScript('//connect.facebook.net/vi_VN/sdk.js', function(){
		    FB.init({
		      	appId            : '985944054831668',
		      	autoLogAppEvents : true,
		      	xfbml            : true,
		      	version          : 'v2.9'
		    });    
		    FB.getLoginStatus(function(response) {
		    	if (response.status === 'connected') {
			      	testAPI();
			    }else{
			    	FB.login(function(response){
			    		testAPI();
			    	})
			    }
		  	});
		});
		function testAPI() {
		    let data = { 
	    		fields: 'first_name, last_name, email, birthday, cover, picture'
	    	}
	     	FB.api('/me',data, function(res) {
	     		$.ajax({
	     			type:"POST",
					url:"/api/login/facebook",
					data: { id: res.id},
					success : function (respon) {
						if (respon.status == 1) {
							let user = jwt.decode(respon.token, key);
							dispatch({type: 'LOG_IN', user: user});
							localStorage.setItem("token", respon.token);
							dispatch({type: 'OFF_POPUP_LOGIN'});
							dispatch({type: 'OFF_LOADING'});
						}else{
							if(respon.status == 0){
								let value;
								if(res.email){
									value = {
						     			'firstname': res.first_name,
						     			'lastname' : res.last_name,
						     			'username' : res.id,
						     			'email' : res.email,
						     			'more':{
						     				'avatar':res.picture.data.url,
						     				'cover' :res.cover.source,
						     				'birthday': res.birthday
						     			},
						     			'facebookId': res.id,
						     			'level':'user',
						     			'status':'off',
						     			'public' : 'action',
						     		};
					     		}else{
					     			value = {
					     			'firstname': res.first_name,
						     			'lastname' : res.last_name,
						     			'username' : res.id,
						     			'public' : 'private',
						     			'more':{
						     				'avatar':res.picture.data.url,
						     				'cover' :res.cover.source,
						     				'birthday': res.birthday
						     			},
						     			'facebookId': res.id,
						     			'level':'user',
						     			'status':'off'
						     		};
					     		}
								$.ajax({
					     			type:"POST",
									url:"/api/register/facebook",
									data: value,
									success:function (response) {
										if (response.status == 1) {
											let user = jwt.decode(response.token, key);
											dispatch({type: 'LOG_IN', user: user});
											localStorage.setItem("token", response.token);
											dispatch({type: 'OFF_POPUP_LOGIN'});
											dispatch({type: 'OFF_LOADING'});
										}else{
											$this.setState((prevState, props) => {
											  return {
											  	submitError: <p>{response.message}</p>
											  };
											});
											dispatch({type: 'OFF_LOADING'});
										}
									}
					     		})
							}else{
								$this.setState((prevState, props) => {
								  return {
								  	submitError: <p>{res.message}</p>
								  };
								});
								dispatch({type: 'OFF_LOADING'});
							}
						}
					}
	     		});
	     	});
		}
	}
	dongdangnhap() {
		/****  Sự kiện đóng khung đăng nhập  ****/
		var {dispatch} = this.props;
		dispatch({type: 'OFF_POPUP_LOGIN'});
	}

	dongdangnhapbody(e) {
		/****  Sự kiện click bên ngoài khung đăng nhập để đóng  ****/
		if (!$(e.target).closest('.khungdangnhap').length) {
			var {dispatch} = this.props;
			dispatch({type: 'OFF_POPUP_LOGIN'});
		}
	}
	render() {
		if (this.props.popupDangNhap) {
			return (
				<div className="dangnhap" onClick={this.dongdangnhapbody.bind(this)}>
					<div className="col-3 khungdangnhap">
						<div id="dong-dangnhap" onClick={this.dongdangnhap.bind(this)}>
							<i className="fa fa-times" aria-hidden="true"></i>
						</div>
						<h3>Đăng nhập</h3>
						<div className="messageError">{this.state.submitError}</div>
						<form onSubmit={this.loginSubmit.bind(this)}>
							<div className="group">
								<input 
									type="text"
									ref="username"
									placeholder="Tài khoản hoặc Email"
								/>
							</div>
							<div className="group">
								<input 
									type="password"
									ref="password"
									placeholder="Mật khẩu"
								/>
							</div>
							<Link to="/register">Tạo tài khoản mới</Link> <a>|</a> <a href="#">Quên mật khẩu?</a>
							<div className="group">
								<button >Đăng nhập</button>
							</div>
							<small>Hoặc</small>
							<div className="group">
								<a onClick={this.loginFacebook.bind(this)}><img src="assets/images/icon/facebook.png" alt="Đăng nhập bằng Facebook" title="Đăng nhập bằng Facebook"/></a>
								<a href="#"><img src="assets/images/icon/googleplus.png" alt="Đăng nhập bằng Google Plus" title="Đăng nhập bằng Google Plus"/></a>
								<a href="#"><img src="assets/images/icon/twitter.png" alt="Đăng nhập bằng Twitter" title="Đăng nhập bằng Twitter"/></a>
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
})(PopupLogin);
