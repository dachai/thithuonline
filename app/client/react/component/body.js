import React from "react";
import {BrowserRouter as Router, browserHistory, Switch, Route} from "react-router-dom";

var Header = require('Header');
var TinMoi = require('TinMoi');
var Footer = require('Footer');
// Component Main
var BaiLam = require('BaiLam');
var UpLoad = require('UpLoad');
var NotFound = require('NotFound');

class Body extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<div>
					<Header />
					<TinMoi />
					<Switch>
						<Route exact path="/" component={BaiLam} />
						<Route path="/upload" component={UpLoad} />
						<Route path="*" component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	}
}

module.exports = Body;
