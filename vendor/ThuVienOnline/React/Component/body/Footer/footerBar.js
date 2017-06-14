import React from 'react';

class FooterBar extends React.Component{
  render(){
    return (
     	<div className="copyright">
	        <div className="container-fluid">

	            <i className="fa fa-copyright" aria-hidden="true"></i>
	            <span>2017 - Tài liệu.</span>
	        </div>
	    </div>
    )
  }
}

module.exports = FooterBar;
