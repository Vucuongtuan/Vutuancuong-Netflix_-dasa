import React, { Component } from 'react';
import Slider from 'react-slick';
import './slidebottom.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Phim from '../image/phim1.jpg';
import Phim1 from '../image/hulk.jpg';
import Phim2 from '../image/phim2.jpg';
import Phim3 from '../image/hinh8.jpg';
import Phim4 from '../image/phim4.jpg';
import Phim5 from '../image/phim5.jpg';
import Phim6 from '../image/phim6.jpg';
import Phim7 from '../image/hinh7.jpg';

export default class Responsive extends Component {
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
            Nữ luật sư kì lạ
          </div>
          <div className="slideimg">
            <img src={Phim1} aly="" className="hinh" />
            She Hulk
          </div>
          <div className="slideimg">
            <img src={Phim2} aly="" className="hinh" />
            MINIONS 2: SỰ TRỖI DẬY CỦA GRU
          </div>
          <div className="slideimg">
            <img src={Phim3} aly="" className="hinh" />
            The Sandman: Người cát
          </div>
          <div className="slideimg">
            <img src={Phim4} aly="" className="hinh" />
            Thợ săn quái vật
          </div>
          <div className="slideimg">
            <img src={Phim5} aly="" className="hinh" />
            Bác sĩ thiên tài
          </div>
          <div className="slideimg">
            <img src={Phim6} aly="" className="hinh" />
            Anne tóc đỏ
          </div>
          <div className="slideimg">
            <img src={Phim7} aly="" className="hinh" />
            Chúa tể địa ngục
          </div>
        </Slider>
      </div>
    );
  }
}
