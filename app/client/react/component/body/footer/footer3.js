import React from 'react';

class Footer3 extends React.Component{
  render(){
    return (
        <div className="col-4 footer3">
          	<div className="formdangkynhantin">
                <form>
                    <h3>Đăng ký nhận tài liệu mới nhất</h3>
                    <p>Vui lòng nhập Email của bạn vào phía dưới. Hỗ trợ: Gmail, Yahoo, Outlook, Hotmail...</p>
                    <input type="email" name="subwebsite" placeholder="Email của bạn..."/>
                    <input type="submit" name="subgui" value="Đăng ký"/>
                </form>
            </div>
            <div className="doinguadmin">
                <h3>Đội ngũ Admin</h3>
                <p>
                    Đỗ Văn Toàn, Nguyễn Thị Hồng Ngát, Vũ Văn An, Vũ Thành Trung, Vũ Ngọc Hà, Cao Đắc Hải, Nguyễn Quốc Khánh, Lê Thị Mai Quỳnh
                </p>
            </div>
        </div>
    )
  }
}

module.exports = Footer3;
