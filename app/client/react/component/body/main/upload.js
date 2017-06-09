import React from 'react';
import {Helmet} from "react-helmet";

class UpLoad extends React.Component {
	render() {
		return (
			<div className="main-upload">
				<Helmet>
					<title>Upload</title>
					<meta name="description" content="Đây là mô tả trang upload" />
					<meta name="keywords" content="từ khóa của trang uploa" />
					<meta name="robots" content="noodp,index,follow" />
				</Helmet>
				<div className="container-fluid">
					<div className="row">
						<div className="col-9 content">
							<div className="group">
								<lable></lable>
								<input type="text" placeholder="Tên của đề thi"/>
							</div>
						</div>
						<div className="col-3 sidebar">

						</div>
					</div>
				</div>
			</div>
		)
	}
}
module.exports = UpLoad;
