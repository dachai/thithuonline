import React from 'react';

class Footer1 extends React.Component{
  render(){
    return (
    	<div className="col-4 footer1">
	      	<div className="gioithieu">
		        <img src="assets/images/logo-footer.png"/>
		        <h2>Hanyny - Website tổng hợp đề thi THPT quốc gia mới nhất.</h2>
		        <p>Sáng lập bởi: <a href="#">Cao Đắc Hải</a></p>
		    </div>
		    <div className="blogbanbe">
		        <h3>Blog bạn bè</h3>
		        <a href="#" target="_blank">Blog Hóa Học</a> | <a href="#" target="_blank">Blog Vật Lý</a> | <a href="#"
		            target="_blank">Blog Toán Học</a>
		    </div>
	    </div>
    )
  }
}

module.exports = Footer1;
