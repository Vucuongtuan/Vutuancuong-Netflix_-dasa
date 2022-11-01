import React from 'react';
import './About.css';
export default function bottom() {
  return (
    <div className="Bottom">
      <hr />
      <h4 className="bt">Bạn có câu hỏi? Liên hệ với chúng tôi.</h4>
      <div className="Bottom-con">
        <ul className="Left-a">
          <p>Câu hỏi thường gặp</p>
          <p>Quan hệ với nhà đầu tư</p>
          <p>Quyền riêng tư</p>
          <p>Kiểm tra tốc độ</p>
        </ul>
        <ul className="Left-a m">
          <p>Trung tâm trợ giúp</p>
          <p>Việc làm</p>
          <p>Tùy chọn cookie</p>
          <p>Thông báo pháp lý</p>
        </ul>
        <ul className="Left-a m">
          <p>CTài khoản</p>
          <p>Các cách xem</p>
          <p>Thông tin doanh nghiệp</p>
          <p>Chỉ có trên Netflix</p>
        </ul>
        <ul className="Left-a">
          <p>Trung tâm đa phương tiện</p>
          <p>Điều khoản sử dụng</p>
          <p>Liên hệ với chúng tôi</p>
        </ul>
      </div>
    </div>
  );
}
