import React from 'react';
import {connect} from 'react-redux';

var Logo = require('Logo');
var Menu = require('Menu');
var Login = require('Login');
var PopupLogin = require('PopupLogin');
class Header extends React.Component{
  	render(){
    	return (
      	<div className="header">
      		<PopupLogin/>
	        <div className="container-fluid">
	            <div className="row">
	                <div className="col-6 header-left">
	                    <div className="row">
	                        <div className="col-1 logo">
	                            <Logo/>
	                        </div>
	                        <div className="col-11 main-menu" >
	                            <Menu/>
	                        </div>
	                    </div>
	                </div>
	                <div className="col-6 header-right">
	                    <div className="row">
	                        <div className="col-8 search">
	                            <form>
	                                <input type="text" name="search" placeholder="Bạn cần gì?" />
	                                <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
	                            </form>
	                        </div>
	                        <div className="col-4 login" id="login">
	                            <Login/>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
    	</div>
    	)
  	}
}

module.exports = Header;
