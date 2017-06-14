import React from 'react';
import {Helmet} from "react-helmet";

class BaiLam extends React.Component{
    render(){
        return (
            <div className="main-bailam">
                <Helmet>
                    <title>Bài Làm</title>
                    <meta name="description" content="Đây là trang bài làm" />
                    <meta name="keywords" content="từ khóa của trang bài làm" />
                    <meta name="robots" content="noodp,index,follow" />
                </Helmet>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 header-bailam">
                            <p><i className="fa fa-hand-o-right" aria-hidden="true"></i> Bạn đang làm: Đề thi thử Hóa trường THPT Chuyên Sư Phạm lần 4</p>
                            <p><i className="fa fa-user-o" aria-hidden="true"></i> Đăng bởi: Cao Đắc Hải</p>
                            <p><i className="fa fa-clock-o" aria-hidden="true"></i> Ngày đăng: 12/5/2017</p>
                            <p><i className="fa fa-heart-o" aria-hidden="true"></i> Điểm số: 9145</p>
                            <div id="chonmau-bailam">
                                <span id="mausang"></span>
                                <span id="mautoi"></span>
                            </div>
                            <div id="zoom">
                                <i className="fa fa-expand" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-9 content">
                        </div>
                        <div className="col-3 sidebar">
                            <div className="group">
                                <div className="thoigian">
                                    <p id="thoigian">15:32:12</p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="dapan">
                                </div>
                            </div>
                            <div className="group">
                                <div className="nopbai">
                                    <p>
                                        <a href="#" id="nopbai">Nộp bài</a>
                                    </p>
                                    <p>
                                        <a href="#" id="huybailam">Hủy bài làm</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = BaiLam;
