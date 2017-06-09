/**
 * Created by Dac Hai on 01/06/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var store = require('./redux.js');
var Body = require('Body');

ReactDOM.render(
	<Provider store={store}>
		<Body/>
	</Provider>,
	document.getElementById('admin')
);

