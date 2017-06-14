import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
var jwt = require('jwt-simple');
var key = require('key');

class Login extends React.Component{
	constructor(props){
		super(props);
		/****  Check Login  ****/
		let {dispatch} = this.props;
		let token = localStorage.getItem('token');
		if(token){
			$.ajax({
				type:'GET',
				url:'/api/login/check',
				headers:{
					'token':token
				},
				success:function(res){
					if(res.status == 1){
						let user = jwt.decode(token, key);
						dispatch({type: 'LOG_IN', user: user});
					}else{
						localStorage.removeItem('token')
						dispatch({type: 'LOG_OUT'});
					}
				}
			})
		}else{
			dispatch({type: 'LOG_OUT'});
		}
		this.Logout = this.Logout.bind(this);
		this.openLogin = this.openLogin.bind(this);
	}
	openLogin(){
		let {dispatch} = this.props;
		dispatch({type:'OPEN_POPUP_LOGIN'});
	}
	Logout(){
		/****  Thoát khỏi hệ thống  ****/
		let {dispatch} = this.props;
		localStorage.removeItem('token')
		dispatch({type: 'LOG_OUT'});
	}
  	render(){
  		var {CheckLogin} = this.props;
  		if (CheckLogin == null) {
  			return(
		    	<div>
			      	<a onClick={this.openLogin}>
			      		<span>Đăng nhập</span>
			      	</a>
			      	<a> | </a>
			      	<Link to="/register">
			      	 	<span>Đăng ký</span>
			      	</Link>
		      	</div>
		    )
  		}else{
			return(
  				<div>
					<p>
						{ CheckLogin.more && CheckLogin.more.avatar
							? <img src={CheckLogin.more.avatar} alt={CheckLogin.firstname} />
							: <img src='https://us.123rf.com/450wm/imagevectors/imagevectors1602/imagevectors160200185/52757072-white-user-profile-icon-with-long-shadow-on-green-circle.jpg' alt={CheckLogin.firstname}/>

						}
  						<i className='fa fa-cog' aria-hidden='true'></i>
  						<small className='submenu'>
							<Link to="/upload"><i className="fa fa-upload" aria-hidden="true"></i> Đăng đề</Link>
  							<a href='#'><i className="fa fa-user-o" aria-hidden="true"></i> Hồ sơ</a>
  							<a href='#'><i className="fa fa-key" aria-hidden="true"></i> Đổi mật khẩu</a>
  							<a onClick={this.Logout}><i className="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</a>
	  					</small>
  					</p>
  				</div>
  			)
  		}
  	}
}

module.exports = connect(function(state){
	return {
		CheckLogin: state.CheckLogin
	}
})(Login);
