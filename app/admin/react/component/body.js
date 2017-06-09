/**
 * Created by Dac Hai on 01/06/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, browserHistory, Switch, Route} from "react-router-dom";
var Header = require('Header');
var Menu = require('Menu');
var Main = require('Main');
var ChuyenMuc = require('ChuyenMuc');

class Body extends React.Component{
	render(){
		var {UrlAdmin} = this.props;
		var {Loading} = this.props;
		return (
			<Router history={browserHistory}>
				<div className="trangweb">
					{Loading == true ? <div className="loading"><img src="assets/images/loader.gif" /></div> : ''}
					<Header/>
					<div className="content">
						<Menu/>
						<Switch>
							<Route exact path={UrlAdmin.admin} component={Main} />
							<Route path={UrlAdmin.category} component={ChuyenMuc} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

module.exports = connect(function (state) {
	return{
		UrlAdmin : state.UrlAdmin,
		Loading : state.Loading
	}
})(Body);