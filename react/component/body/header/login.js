import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
var axios = require('axios');

class Login extends React.Component{
	modangnhap(){
		var {dispatch} = this.props;
		dispatch({type:'OPEN_POPUP_LOGIN'});
	}
	modangky(){
		
	}
	logout(){
		var {dispatch} = this.props;
		axios.get('/api/logout/abc')
		.then(function (response) {
		    if (response.data == 'SUCCESS_LOG_OUT') {
				dispatch({type:'LOG_OUT'});
		    }
		})
		.catch(function (error) {
		    console.log(error);
		});
	}
	componentDidMount(){
		var {dispatch} = this.props;
		axios.get('/api/checklogin')
		.then(function (response) {
		    if (response.data != 'NO_LOG_IN') {
		    	dispatch({type:'LOG_IN', user: response.data});
		    }
		})
		.catch(function (error) {
		    console.log(error);
		});
	}
  	render(){
  		var {CheckLogin} = this.props;
  		if (CheckLogin == null) {
  			return(
		    	<div>
			      	<a onClick={this.modangnhap.bind(this)}>
			      		<span>Đăng nhập</span>
			      	</a> / 
			      	<a onClick={this.modangky} >
			      		<span>Đăng ký</span>
			      	</a>
		      	</div>
		    ) 
  		}else{
  			if (CheckLogin.more.avatar) {
  				return(
	  				<div>
						<p>
	  						<img src={CheckLogin.more.avatar} alt={CheckLogin.fistname} />
	  						<i className='fa fa-cog' aria-hidden='true'></i>
	  						<small className='submenu'>
	  							<Link to="/upload"><i className="fa fa-upload" aria-hidden="true"></i> Đăng đề</Link>
	  							<a href='#'><i className="fa fa-user-o" aria-hidden="true"></i> Hồ sơ</a>
	  							<a href='#'><i className="fa fa-key" aria-hidden="true"></i> Đổi mật khẩu</a>
	  							<a onClick={this.logout.bind(this)}><i className="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</a>
		  					</small>
	  					</p>
	  				</div>
	  			)
  			}else{
  				return(
	  				<div>
	  					<p>
	  						<img src='https://us.123rf.com/450wm/imagevectors/imagevectors1602/imagevectors160200185/52757072-white-user-profile-icon-with-long-shadow-on-green-circle.jpg' alt={CheckLogin.fistname}/>
	  						<i className='fa fa-cog' aria-hidden='true'></i>
	  						<small className='submenu'>
	  							<a href='#'><i className="fa fa-upload" aria-hidden="true"></i> Đăng đề</a>
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
