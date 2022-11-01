import React, { Component } from 'react';
import Slider from 'react-slick';
import './slidebottom.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Phim from '../image/phim1.jpg';
import Phim1 from '../image/han1.jpg';
import Phim2 from '../image/han2.jpg';
import Phim3 from '../image/han3.jpg';
import Phim4 from '../image/han4.jpg';
import Phim5 from '../image/han5.jpg';
import Phim6 from '../image/han6.jpg';
import Phim7 from '../image/han7.jpg';

export default class Responsive1 extends Component {
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
            Quân vương bất diệt
          </div>
          <div className="slideimg">
            <img src={Phim2} aly="" className="hinh" />
            Vincenzo
          </div>
          <div className="slideimg">
            <img src={Phim3} aly="" className="hinh" />
            Tầng lớp Itaewon
          </div>
          <div className="slideimg">
            <img src={Phim4} aly="" className="hinh" />
            Điên thì có sao
          </div>
          <div className="slideimg">
            <img src={Phim5} aly="" className="hinh" />
            Luật sư vô pháp
          </div>
          <div className="slideimg">
            <img src={Phim6} aly="" className="hinh" />
            Cuộc chiến thượng lưu
          </div>
          <div className="slideimg">
            <img src={Phim7} aly="" className="hinh" />
            Dẫu biết
          </div>
        </Slider>
      </div>
    );
  }
}
