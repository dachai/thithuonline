import React from 'react';
import {Helmet} from "react-helmet";

class UpLoad extends React.Component{
  render(){
    return (
      	<div>
      		<Helmet>
	            <title>Upload</title>
	            <meta name="description" content="Đây là mô tả trang upload" />
	            <meta name="keywords" content="từ khóa của trang uploa" />
	            <meta name="robots" content="noodp,index,follow" />
	        </Helmet>
      		Đây là trang upload
      	</div>
    )
  }
}
module.exports = UpLoad;
