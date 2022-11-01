import React, { Component } from 'react';
import Slider from 'react-slick';
import './slidebottom.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Phim from '../image/my.jpg';
import Phim1 from '../image/my1.jpg';
import Phim2 from '../image/my2.jpg';
import Phim3 from '../image/my3.jpg';
import Phim4 from '../image/my4.jpg';
import Phim5 from '../image/my5.jpg';
import Phim6 from '../image/my6.jpg';
import Phim7 from '../image/my7.jpg';

export default class Responsive2 extends Component {
  render() {
    const settings = {
      dots: true,
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '20px',
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <div className="sliderbottom">
        <Slider {...settings} className="slider">
          <div className="slideimg">
            <img src={Phim} aly="" className="hinh" />
            Cô ấy
          </div>
          <div className="slideimg">
            <img src={Phim1} aly="" className="hinh" />
            Lupin
          </div>
          <div className="slideimg">
            <img src={Phim2} aly="" className="hinh" />
            Đế chế
          </div>
          <div className="slideimg">
            <img src={Phim3} aly="" className="hinh" />
            Anna: Tiểu thư dựng chuyện
          </div>
          <div className="slideimg">
            <img src={Phim4} aly="" className="hinh" />
            Người sói tuổi teen
          </div>
          <div className="slideimg">
            <img src={Phim5} aly="" className="hinh" />
            Emily ở Paris
          </div>
          <div className="slideimg">
            <img src={Phim6} aly="" className="hinh" />
            Cậu bé đồ chơi
          </div>
          <div className="slideimg">
            <img src={Phim7} aly="" className="hinh" />
            Huyền thoại Vikings
          </div>
        </Slider>
      </div>
    );
  }
}
