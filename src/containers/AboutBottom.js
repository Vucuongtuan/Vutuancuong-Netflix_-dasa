import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function AboutBottom() {
  return (
    <div className="bottomdk">
      <h1 className="bottomdk-top">Câu hỏi thường gặp</h1>
      <ul className="btt">
        <li>
          <span>Netflix là gì ?</span>
          <b>+</b>
        </li>
        <li>
          <span>Tôi phải trả bao nhiểu tiền để xem Netflix?</span>
          <b>+</b>
        </li>
        <li>
          <span>Tôi có thể xem ở đâu?</span>
          <b>+</b>
        </li>
        <li>
          <span>Làm thế nào để hủy ?</span>
          <b>+</b>
        </li>
        <li>
          <span>Tôi có thể xem gì trên Netflix?</span>
          <b>+</b>
        </li>
        <li>
          <span>Netflix phù hợp cho trẻ em không?</span>
          <b>+</b>
        </li>
      </ul>
    </div>
  );
}
