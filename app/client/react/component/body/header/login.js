import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component{
	openLogin(){
		var {dispatch} = this.props;
		dispatch({type:'OPEN_POPUP_LOGIN'});
	}
	openRegister(){
		
	}
	logout(){
		var {dispatch} = this.props;
		$.ajax({
			type:"GET",
			url:"api/logout",
			success : function (res) {
				if (res == 'SUCCESS_LOG_OUT') {
					dispatch({type:'LOG_OUT'});
				}
			}
		});
	}
	componentDidMount(){
		var {dispatch} = this.props;
		$.ajax({
			type:"GET",
			url:"api/checklogin",
			success:function (res) {
				if (res!= 'NO_LOG_IN') {
					dispatch({type:'LOG_IN', user: res});
				}
			}
		});
	}
  	render(){
  		var {CheckLogin} = this.props;
  		if (CheckLogin == null) {
  			return(
		    	<div>
			      	<a onClick={this.openLogin.bind(this)}>
			      		<span>Đăng nhập</span>
			      	</a> / 
			      	<a onClick={this.openRegister} >
			      		<span>Đăng ký</span>
			      	</a>
		      	</div>
		    ) 
  		}else{
  			if (CheckLogin.data.more.avatar) {
  				return(
	  				<div>
						<p>
							{CheckLogin.more.avatar
								? <img src={CheckLogin.data.more.avatar} alt={CheckLogin.data.fistname} />
								: <img src='https://us.123rf.com/450wm/imagevectors/imagevectors1602/imagevectors160200185/52757072-white-user-profile-icon-with-long-shadow-on-green-circle.jpg' alt={CheckLogin.data.fistname}/>

							}
	  						<i className='fa fa-cog' aria-hidden='true'></i>
	  						<small className='submenu'>
								{CheckLogin.data.level == 'admin' || CheckLogin.data.level == 'bientap'
									? <a href="/admin/"><i className="fa fa-cogs" aria-hidden="true"></i> Quản trị</a>
									: ''
								}
								<Link to="/upload"><i className="fa fa-upload" aria-hidden="true"></i> Đăng đề</Link>
	  							<a href='#'><i className="fa fa-user-o" aria-hidden="true"></i> Hồ sơ</a>
	  							<a href='#'><i className="fa fa-key" aria-hidden="true"></i> Đổi mật khẩu</a>
	  							<a onClick={this.logout.bind(this)}><i className="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</a>
		  					</small>
	  					</p>
	  				</div>
	  			)
  			}
  		}
  	}
}

module.exports = connect(function(state){
	return {
		popupDangNhap : state.popupDangNhap,
		CheckLogin: state.CheckLogin
	}
})(Login);
