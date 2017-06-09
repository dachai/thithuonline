/**
 * Created by Dac Hai on 03/06/2017.
 */
import React from 'react';
import {connect} from 'react-redux';

class ChuyenMuc extends React.Component{
	constructor(props) {
		super(props);
		this.state = {error: ''};
		this.state = {success: ''};
	}
	componentDidMount(){
		let {dispatch} = this.props;
		let categoryList = [];
		$.ajax({
			type: "GET",
			url: 'api/category',
			success: function (res) {
				categoryList = res;
				categoryList.sort(function(a, b){return a.location - b.location});
				dispatch({type:'CATEGORY',category:categoryList});
			}
		});
	}
	CheckLevel(Category){
		let level = 0;
		if (this.refs.drug.value == ''){
			return 1;
		}
		for(let i=0; i < Category.length;i++){
			if (Category[i]._id == this.refs.drug.value){
				level = Category[i].level;
			}
		}
		return level + 1;
	}
	CheckLocation(Category){
		let location = 0;
		for(let i=0; i < Category.length;i++){
			if(Category[i].location > location){
				location = Category[i].location;
			}
		}
		return location + 1;
	}
	addCategory(e){
		var {Category} = this.props;
		e.preventDefault();
		let data;
		let error = [];
		if (this.refs.name.value == ''){
			error.push(<p key="name">Bạn chưa nhập tên</p>);
		}
		if (this.refs.slug.value == ''){
			error.push(<p key="slug">Bạn chưa nhập đường dẫn tĩnh</p>);
		}
		if (this.refs.desc.value == ''){
			error.push(<p key="desc">Bạn chưa nhập mô tả</p>);
		}
		if (this.refs.drug.value != ''){
			data = {
				"level" : this.CheckLevel(Category),
				"location" : this.CheckLocation(Category),
				"name" : this.refs.name.value,
				"slug" : this.refs.slug.value,
				"drug" : this.refs.drug.value,
				"desc" : this.refs.desc.value,
			}
		}else{
			data = {
				"level" : this.CheckLevel(Category),
				"location" : this.CheckLocation(Category),
				"name" : this.refs.name.value,
				"slug" : this.refs.slug.value,
				"desc" : this.refs.desc.value,
			}
		}
		var $this = this;
		if (error.length == 0){
			$.ajax({
				type: "POST",
				url: 'api/category',
				data: data,
				success: function () {
					$this.setState((prevState) => ({ error: ''}));
					$this.setState((prevState) => ({ success: <p key="thanhcong">Bạn đã cập nhật thành công chuyên mục mới.</p>}));
					$this.refs.name.value = '';
					$this.refs.slug.value = '';
					$this.refs.drug.value = '';
					$this.refs.desc.value = '';
					$this.componentDidMount();
				}
			});
		}else{
			$this.setState((prevState) => ({ error: error}));
		}
	}
	deleteCategory(id){
		var $this = this;
		let data = {
			"id" : id
		}
		$.ajax({
			url: 'api/category',
			data: data,
			type: 'DELETE',
			success: function(result) {
				if (result.status == 1){
					$this.componentDidMount();
				}
			}
		});
	}
	render(){
		var {Category} = this.props;
		var $this = this;
		return (
			<div className="main">
				<div className="main-chuyenmuc">
					<div className="container">
						<div className="row">
							<div className="col-5">
								<h2>Thêm chuyên mục</h2>
								<div className="thongbaoloi">
									{this.state.error}
								</div>
								<div className="thongbaothanhcong">
									{this.state.success}
								</div>
								<form onSubmit={this.addCategory.bind(this)}>
									<div className="group">
										<label>Tên</label>
										<input ref="name" type="text"/>
									</div>
									<div className="group">
										<label>Đường dẫn tĩnh</label>
										<input ref="slug" type="text"/>
									</div>
									<div className="group">
										<label>Cha</label>
										<select ref="drug">
											<option value=''></option>
											{
												Category ? Category.map(function(data,index) {
													return (
														<option key={index} value={data._id}>
															{data.level == 2 ? '– ' : ''}
															{data.level == 3 ? '–– ' : ''}
															{data.level == 4 ? '––– ' : ''}
															{data.name}
														</option>
													)
												}) : ''
											}
										</select>
									</div>
									<div className="group">
										<label>Mô tả</label>
										<textarea ref="desc"></textarea>
									</div>
									<div className="group">
										<button>Thêm mới</button>
									</div>
								</form>
							</div>
							<div className="col-7">
								<h2>Danh sách chuyên mục</h2>
								<table>
									<thead>
										<tr>
											<th width="40%">Tên</th>
											<th width="40%">Đường dẫn tĩnh</th>
											<th width="20%">Số bài</th>
										</tr>
									</thead>
									<tbody>
									{
										Category ? Category.map(function(data,index) {
											return (
											<tr key={index}>
												<td className="table-title">
													<a href="#">
														{data.level == 2 ? '— ' : ''}
														{data.level == 3 ? '—— ' : ''}
														{data.level == 4 ? '——— ' : ''}
														{data.name}
														</a>
													<p>
														<a href="#">
															Chỉnh sửa
														</a> |
														<a onClick={ (e) => {if(confirm("Bạn có đồng ý xóa chuyên mục không?")){$this.deleteCategory(data._id)} } }>
															Xóa
														</a>
													</p>
												</td>
												<td>{data.slug}</td>
												<td><a href="#">13</a></td>
											</tr>
											)
										}) : ''
									}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = connect(function (state) {
	return{
		Category : state.Category
	}
})(ChuyenMuc);
