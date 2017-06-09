import React from 'react';

class TinMoi extends React.Component{
  render(){
    return (
      <div className="tintucmoi">
        <div className="container-fluid">
            <div className="row">
                <div className="left">
                    <p>Thứ 6 - Ngày 12/5/2017</p>
                </div>
                <div className="right">
                    <marquee>
                        <a href="#">Đề thi thử môn Hóa sở Giáo Dục và Đào Tạo Phú Yên năm 2017</a>
                        <a href="#">Đề thi tdasdasdsad </a>
                        <a href="#">Đề thi tdasdasdsad  thử môn Hóa sở Giáo Dục và Đào Tạo Phú Yên năm 2017</a>
                        <a href="#">Tạo Phú Yên năm 2017 Đề thi thử môn Hóa sở Giáo Dục và Đào Tạo Phú Yên năm 2017</a>
                    </marquee>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

module.exports = TinMoi;
