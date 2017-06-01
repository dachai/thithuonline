import React from 'react';
import {Helmet} from "react-helmet";

class NotFound extends React.Component{
  render(){
    return (
      	<div>
      		<Helmet>
	            <title>404</title>
	            <meta name="description" content="Đây là mô tả trang upload" />
	            <meta name="keywords" content="từ khóa của trang uploa" />
	            <meta name="robots" content="noodp,index,follow" />
	        </Helmet>
      		Đây là trang 404
      	</div>
    )
  }
}
module.exports = NotFound;
