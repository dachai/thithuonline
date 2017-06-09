/**
 * Created by Dac Hai on 01/06/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Menu extends React.Component{
	render(){
		var {UrlAdmin} = this.props;
		return (
			<div className="menu">
				<ul>
					<li>
						<Link to={UrlAdmin.dashboard}>
							<i className="fa fa-pie-chart" aria-hidden="true"></i>
							<p>Bảng tin</p>
						</Link>
					</li>
					<li>
						<Link to={UrlAdmin.post}>
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<p>Bài viết</p>
						</Link>
						<ul className="submenu">
							<li>
								<Link to={UrlAdmin.allpost}>Tất cả bài viết</Link>
							</li>
							<li>
								<Link to={UrlAdmin.newpost}>Bài viết mới</Link>
							</li>
							<li>
								<Link to={UrlAdmin.category}>Chuyên mục</Link>
							</li>
							<li>
								<Link to={UrlAdmin.tag}>Tag</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to={UrlAdmin.media}>
							<i className="fa fa-camera-retro" aria-hidden="true"></i>
							<p>Phương tiện</p>
						</Link>
						<ul className="submenu">
							<li>
								<a href="#"><p>Thư viện</p></a>
							</li>
							<li>
								<a href="#"><p>Thêm tệp tin</p></a>
							</li>
						</ul>
					</li>
					<li>
						<Link to={UrlAdmin.comment}>
							<i className="fa fa-comments" aria-hidden="true"></i>
							<p>Bình luận</p>
						</Link>
					</li>
					<li>
						<Link to={UrlAdmin.user}>
							<i className="fa fa-users" aria-hidden="true"></i>
							<p>Thành viên</p>
						</Link>
					</li>
					<li>
						<Link to={UrlAdmin.seo}>
							<i className="fa fa-yoast" aria-hidden="true"></i>
							<p>SEO</p>
						</Link>
					</li>
					<li>
						<Link to={UrlAdmin.setting}>
							<i className="fa fa-cogs" aria-hidden="true"></i>
							<p>Cài đặt</p>
						</Link>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
							<p>Thu gọn</p>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}
module.exports = connect(function(state){
	return {
		UrlAdmin : state.UrlAdmin
	}
})(Menu);
