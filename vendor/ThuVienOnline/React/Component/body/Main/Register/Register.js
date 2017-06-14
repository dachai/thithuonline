import React from "react";
import {connect} from "react-redux";
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'
let Validate = require('validate');
Validate = new Validate();
var jwt = require('jwt-simple');
var key = require('key');

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			errorLastName: '',
			errorFirstName: '',
			errorEmail : '',
			errorUserName:'',
			errorPassword:'',
			errorOldPassword:'',
			submitError : []
		}
	}
	registerSubmit(e) {
		/****  Sự kiện đăng ký  ****/
		e.preventDefault();
		var {dispatch} = this.props;
		dispatch({type: 'ON_LOADING'});
		var $this = this;
		var error = [];
		let lastname = this.refs.lastname.value;
		if(Validate.isRequired(lastname) == false){
			error.push(<p key="lastname">Bạn chưa nhập Họ</p>)
		}

		let firstname = this.refs.firstname.value;
		if(Validate.isRequired(firstname) == false){
			error.push(<p key="firstname">Bạn chưa nhập Tên</p>)
		}

		let email = this.refs.email.value;
		if(Validate.isRequired(email) == false){
			error.push(<p key="email">Bạn chưa nhập Email</p>)
		}else if(Validate.isEmail(email) == false){
			error.push(<p key="email">Định dạng Email không chính xác</p>)
		}

		let username = this.refs.username.value;
		if(Validate.isRequired(username) == false){
			error.push(<p key="username">Bạn chưa nhập Tài khoản</p>)
		}else if(Validate.isUsername(username) == false){
			error.push(<p key="username">Tài khoản không được chứa đấu hoặc ký tự đặc biệt</p>)
		}else if(Validate.isMin(username,6) == false){
			error.push(<p key="username">Tài khoản phải nhiều hơn 6 ký tự</p>)
		}else if(Validate.isMax(username,100) == false){
			error.push(<p key="username">Tài khoản phải ít hơn 100 ký tự</p>)
		}

		let password = this.refs.password.value;
		if(Validate.isRequired(password) == false){
			error.push(<p key="password">Bạn chưa nhập mật khẩu</p>)
		}else if(Validate.isMin(password,6) == false){
			error.push(<p key="password">Mật khẩu phải nhiều hơn 6 ký tự</p>)
		}else if(Validate.isMax(password,100) == false){
			error.push(<p key="password">Mật khẩu không được quá 100 ký tự</p>)
		}

		let old_password = this.refs.old_password.value;
		if(Validate.isRequired(old_password) == false){
			error.push(<p key="old_password">Bạn chưa xác nhận mật khẩu</p>)
		}else if(Validate.isEqual(old_password,password) == false){
			error.push(<p key="old_password">Mật khẩu xác nhận không chính xác</p>)
		}
		if(error.length == 0){
			let data = {
				'firstname' : this.refs.firstname.value,
				'lastname' : this.refs.lastname.value,
				'email' : this.refs.email.value,
				'username' : this.refs.username.value,
				'password' : this.refs.password.value,
				'old_password' : this.refs.old_password.value
			}
			$.ajax({
				type:"POST",
				url:"/api/register",
				data:data,
				success:function(res){
					if(res.status == 1){
						localStorage.setItem("token", res.token);
						let user = jwt.decode(res.token, key);
						dispatch({type: 'LOG_IN', user: user});
						dispatch({type: 'OFF_LOADING'});
						if(res.token){
							return (
						       <Redirect push to="/"/>
							)
						}
					}else{
						$this.setState({submitError: 'Đăng ký thất bại, vui lòng kiểm tra lại'});
						dispatch({type: 'OFF_LOADING'});
					}
				}
			})
		}else{
			$this.setState({submitError:error});
			dispatch({type: 'OFF_LOADING'});
		}
	}
	onKeyUpLastName(){
		let $this = this;
		let value = this.refs.lastname.value;
		if(Validate.isRequired(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorLastName: 'Bạn chưa nhập Họ'
				};
			})
		}else{
			$this.setState((prevState, props) => {
			  	return {
			  		errorLastName: ''
				};
			})
		}
	}
	onKeyUpfirstname(){
		let $this = this;
		let value = this.refs.firstname.value;
		if(Validate.isRequired(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorFirstName: 'Bạn chưa nhập Tên'
				};
			})
		}else{
			$this.setState((prevState, props) => {
			  	return {
			  		errorFirstName: ''
				};
			})
		}
	}
	onKeyUpEmail(){
		let $this = this;
		let value = this.refs.email.value;
		if(Validate.isRequired(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorEmail: 'Bạn chưa nhập Email'
				};
			})
		}else if(Validate.isEmail(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorEmail: 'Vui lòng nhập đúng địa chỉ Email'
				};
			})
		}else{
			$this.setState((prevState, props) => {
			  	return {
			  		errorEmail: ''
				};
			})
		}
	}
	isExistUserName(value){
		$.ajax({
			type:"POST",
			url:"/api/register/check",
			data: {
				'username' : value
			},
			success: function(res){
				if(res.status == 1){
					return false;
				}else{
					return true;
				}
			}
		});
	}
	onKeyUpUserName(){
		let $this = this;
		let value = this.refs.username.value;
		if(Validate.isRequired(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorUserName: 'Bạn chưa nhập Tài khoản!'
				};
			})
		}else if(Validate.isUsername(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorUserName: 'Tài khoản không được chứa đấu hoặc ký tự đặc biệt!'
				};
			})
		}else if(Validate.isMin(value,6) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorUserName: 'Tài khoản phải dài hơn 6 ký tự'
				};
			})
		}else if(Validate.isMax(value,100) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorUserName: 'Tài khoản không được dài hơn 100 ký tự'
				};
			})
		}else{
			$this.setState((prevState, props) => {
			  	return {
			  		errorUserName: ''
				};
			})
		}
	}
	onKeyUpPassword(){
		let $this = this;
		let value = this.refs.password.value;
		if(Validate.isRequired(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorPassword: 'Bạn chưa nhập Mật khẩu!'
				};
			})
		}else if(Validate.isMin(value,6) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorPassword: 'Mật khẩu phải dài hơn 6 ký tự'
				};
			})
		}else if(Validate.isMax(value,100) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorPassword: 'Mật khẩu không được dài hơn 100 ký tự'
				};
			})
		}else{
			$this.setState((prevState, props) => {
			  	return {
			  		errorPassword: ''
				};
			})
		}
	}
	onKeyUpOldPassword(){
		let $this = this;
		let value = this.refs.old_password.value;
		let value2 = this.refs.password.value;
		if(Validate.isRequired(value) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorOldPassword: 'Bạn chưa xác nhận mật khẩu!'
				};
			})
		}else if(Validate.isEqual(value,value2) == false){
			$this.setState((prevState, props) => {
			  	return {
			  		errorOldPassword: 'Xác nhận mật khẩu không chính xác!'
				};
			})
		}else{
			$this.setState((prevState, props) => {
			  	return {
			  		errorOldPassword: ''
				};
			})
		}
	}
	componentDidMount(){
		let {dispatch} = this.props;
		dispatch({type:'OFF_POPUP_LOGIN'});
	}
	render() {
		if(localStorage.getItem('token')){
			return (
		       <Redirect push to="/"/>
			)
		}
		return (
			<div className="register">
				<div className="container-fluid">
					<div className="row">
						<div className="col-8 left">
							<h3>Tạo tài khoản mới</h3>
							<div className="messageError">
							{this.state.submitError != '' ? this.state.submitError : ''}
							</div>
							<form onSubmit={this.registerSubmit.bind(this)}>
								<div className="group">
									<div className="row">
										<div className="col-6">
											<label>
												Họ <span>*</span>
												{
													this.state.errorLastName != ''
													?<small>{this.state.errorLastName}</small> 
													: ''
												}
											</label>
											<input 
												className={
													this.state.errorLastName != ''
													? 'error'
													: ''
												}
												type="text"
												ref="lastname"
												onKeyUp={this.onKeyUpLastName.bind(this)}
											/>
										</div>
										<div className="col-6">
											<label>
												Tên <span>*</span>
												{
													this.state.errorFirstName != ''
													?<small>{this.state.errorFirstName}</small> 
													: ''
												}
											</label>
											<input
												className={
													this.state.errorFirstName != ''
													? 'error'
													: ''
												}
												type="text"
												ref="firstname"
												onKeyUp={this.onKeyUpfirstname.bind(this)}
											/>
										</div>
									</div>
								</div>
								<div className="group">
									<label>
										Email <span>*</span>
										{
											this.state.errorEmail != ''
											?<small>{this.state.errorEmail}</small> 
											: ''
										}
									</label>
									<input
										className={
											this.state.errorEmail != ''
											? 'error'
											: ''
										}
										type="email"
										ref="email"
										onKeyUp={this.onKeyUpEmail.bind(this)}
									/>
								</div>
								<div className="group">
									<label>
										Tài khoản <span>*</span>
										{
											this.state.errorUserName != ''
											?<small>{this.state.errorUserName}</small> 
											: ''
										}
									</label>
									<input
										className={
											this.state.errorUserName != ''
											? 'error'
											: ''
										}
										type="text"
										ref="username"
										onKeyUp={this.onKeyUpUserName.bind(this)}
									/>
								</div>
								<div className="group">
									<label>
										Mật khẩu <span>*</span>
										{
											this.state.errorPassword != ''
											?<small>{this.state.errorPassword}</small> 
											: ''
										}
									</label>
									<input 
										className={
											this.state.errorPassword != ''
											? 'error'
											: ''
										}
										type="password"
										ref="password"
										onKeyUp={this.onKeyUpPassword.bind(this)}
									/>
								</div>
								<div className="group">
									<label>
										Nhập lại mật khẩu <span>*</span>
										{
											this.state.errorOldPassword != ''
											?<small>{this.state.errorOldPassword}</small> 
											: ''
										}
									</label>
									<input
										className={
											this.state.errorOldPassword != ''
											? 'error'
											: ''
										}
										type="password"
										ref="old_password"
										onKeyUp={this.onKeyUpOldPassword.bind(this)}
									/>
								</div>
								<div className="group">
									<button >Đăng ký</button>
								</div>
							</form>
						</div>
						<div className="col-4 right">
							<h3>Điều khoản sử dụng</h3>
							<p>1, Cung cấp đầy đủ thông tin và chính xác.</p>
							<p>2, Những mục có đấu <span>*</span> là những mục bắt buộc bạn phải cung cấp.</p>
							<p>3, Nếu thông tin đã bị đăng ký xin vui lòng liên hệ với chúng tôi <a href="#">Tại đây</a>.</p>
							<p>4, Sau khi đăng ký bạn sẽ được cấp một tài khoản và chúng tôi khuyến khích bạn không đưa thông tin tài khoản cho bất kỳ ai.</p>
							<p>5, Thông tin tài khoản của bạn sẽ được bảo mật tuyệt đối nếu bạn mất tài khoản thì hãy báo với chúng tôi ngay để lấy lại.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
module.exports = connect(function (state) {
	return {
		Loading : state.Loading
	}
})(Register);
