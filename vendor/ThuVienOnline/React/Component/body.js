import React from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, browserHistory, Switch, Route} from "react-router-dom";

var Header = require('Header');
var New = require('New');
var Footer = require('Footer');
// Component Main
var BaiLam = require('BaiLam');
var UpLoad = require('UpLoad');
var Register = require('Register');
var NotFound = require('NotFound');

class Body extends React.Component {
	render() {
		var {Loading} = this.props;
		return (
			<Router history={browserHistory}>
				<div>
					{Loading == true ? <div className="loading"><img src="assets/images/loader.gif" /></div> : ''}
					<Header />
					<New />
					<Switch>
						<Route exact path="/" component={BaiLam} />
						<Route path="/upload" component={UpLoad} />
						<Route path="/register" component={Register} />
						<Route path="*" component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	}
}

module.exports = connect(function(state){
	return {
		Loading : state.Loading
	}
})(Body);
