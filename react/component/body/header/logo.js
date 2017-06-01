import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component{
  render(){
    return (
    	<Link to="/">
    		<h1>
	        	<img src="assets/images/logo-header.png" alt=""/>
	        </h1>
    	</Link>
    )
  }
}
module.exports = Logo;
