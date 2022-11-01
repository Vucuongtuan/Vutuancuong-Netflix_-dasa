import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../components/homepage/style/homepage.css';
export default function HomePageHeader() {
  return (
    <div className="HomePage">
      <div className="HomePage-header">
        <Link className="header-logoN" to="/">
          <img src={logo} alt="" className="logoN" />
        </Link>
        <div className="header-menu">
          <span>
            <Link to="/HomePage">Trang chủ</Link>
          </span>

          <span>
            <Link to="/Hàn-Quốc">Hàn Quốc</Link>
          </span>
          <span>
            <Link to="/Âu-Mỹ">Âu Mỹ</Link>
          </span>
          <span className="m">
            <Link to="/">Danh sách của bạn</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
