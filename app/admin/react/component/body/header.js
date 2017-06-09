/**
 * Created by Dac Hai on 01/06/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component {
	componentDidMount() {
		var {dispatch} = this.props;
		$.ajax({
			type   : "GET",
			url    : "api/checklogin",
			success: function (res) {
				if (res != 'NO_LOG_IN') {
					dispatch({type: 'LOG_IN', user: res});
				}
			}
		});
	}
	render() {
		var {UrlAdmin} = this.props;
		var {CheckLogin} = this.props;
		return (
			<div className="header">
				<div className="left">
					<small>
						<a href="#">
							<i className="fa fa-home" aria-hidden="true"></i>
							Thi Thử 24h
						</a>
					</small>
				</div>

				<div className="right">
					<small>
						<a href="#">
							{CheckLogin
								? <div><span>Chào {CheckLogin.fistname}</span><img src={CheckLogin.more.avatar} /></div>
								: ''
							}

						</a>
					</small>
				</div>
			</div>
		)
	}
}

module.exports = connect(function (state) {
	return {
		UrlAdmin  : state.UrlAdmin,
		CheckLogin: state.CheckLogin
	}
})(Header);
