import React from 'react';
import logo from '../logo.svg';
import { HomePage } from '../pages/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Background from '../components/header/Netflix-background.jpg';
import '../components/header/style/header.css';

export default function Header() {
  return (
    <div className="header">
      <img className="background" src={Background} alt="" />
      <div className="header-logo">
        <img src={logo} className="logoN " alt="" />
        <div className="Lg">
          <select className="ui-select medium">
            <option>Tiếng Việt</option>
            <option>English</option>
          </select>
          <div className="header-signup">Đăng nhập</div>
        </div>
      </div>
      <div className="text-center">
        <h2>
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.
        </h2>
        <h4>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h4>
        <h6>
          Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
          thành viên của bạn.
        </h6>
        <input
          type="text"
          className="note-text"
          placeholder="Địa chỉ Email"
        ></input>
        <Link to="/HomePage">
          <button className="btn-run">Bắt đầu</button>
        </Link>
        <Router>
          <Route exact path="/HomePage">
            <HomePage />
          </Route>
        </Router>
      </div>
    </div>
  );
}
