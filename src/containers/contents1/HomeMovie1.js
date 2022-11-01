import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Han from '../image/han1.jpeg';
import Han11 from '../image/han12.png';
import Han1 from '../image/han2.jpg';
import Han12 from '../image/han22.png';
import Han3 from '../image/han3.jpg';
import Han32 from '../image/han32.png';
import Han4 from '../image/han4.jpg';
import Han42 from '../image/han42.png';
import Han5 from '../image/han5.jpg';
import Han52 from '../image/han52.png';
import Han6 from '../image/han6.jpg';
import Han62 from '../image/han62.png';

export default class AsNavForHan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      dots: false,
    });
  }

  render() {
    return (
      <div className="slide-show">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/_J8tYxYB_YU"
                title="Vincenzo | Official Trailer | Netflix"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={Han11} alt="" className="name-movie-img" />

              <p>
                Trong chuyến thăm quê hương, một luật sư mafia người Ý gốc Hàn
                cho một tập đoàn không có đối thủ nếm mùi gậy ông đập lưng ông
                và cả chút công lý.
              </p>
              <p>Diễn viên chính:Song Joong Ki,Jeon Yeo Been,Ok Taec Yeon</p>
              <p>Tác giả:Kim Hee Won,Park Jae Beom</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/3EQf2Y5KCsE"
                title="[티저] 한소희X송강, 그럼에도 불구하고 운명이라 믿었다! 〈알고있지만,〉 6/19(토) 밤 11시 첫 방송"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={Han12} alt="" className="name-movie-img" />
              <p>
                Trước sức mê hoặc của anh bạn cùng trường nghệ thuật giỏi tán
                tỉnh, cô nàng hoài nghi tình yêu, dù do dự, vẫn bị kéo vào mối
                quan hệ thể xác nhưng chỉ là bạn bè.
              </p>
              <p>Diễn viên chính:Song Kang,Han So Hee,Chae Jong Hyeop</p>
              <p>Tác giả:Kim Ga Ram,Jung Won</p>
              <p> Phim chính kịch Hàn Quốc chuyển thể từ webtoon</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/i3hgYs0kdyk"
                title="Lawless Lawyer 전투 후 설레는 투샷..♥ 서예지를 지켜봐 온 이준기의 빅픽처! 180513 EP.2"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={Han32} alt="" className="name-movie-img" />
              <p>
                Muốn báo thù cho cái chết bất ngờ của mẹ mình, một luật sư từng
                là xã hội đen tận dụng lỗ hổng luật pháp để hạ bệ những kẻ nắm
                quyền lực tuyệt đối.
              </p>

              <p>Diễn viên chính:Lee Joon Gi,Seo Yea Ji,Lee Hye Yeong</p>
              <p>Tác giả:Kim Jin Min,Yoon Hyun Ho</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/MjIm27-goAs"
                title="Nữ luật sư kỳ lạ Woo Young Woo | Trailer chính thức | Netflix"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={Han42} alt="" className="name-movie-img" />
              <p>
                Mắc chứng tự kỷ và là lính mới tại công ty luật hàng đầu, luật
                sư tài ba Woo Young Woo đương đầu với những thử thách trong
                phòng xử án và nhiều nơi khác.
              </p>
              <p>Diễn viên chính:Park Eun Bin,Kang Tae Oh,Kang Ki Young</p>
              <p>Tác giả:Yoo In Sik,Moon Ji Won</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/65xa8TG2G8o"
                title="Inventing Anna | Official Trailer | Netflix"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={Han52} alt="" className="name-movie-img" />
              <p>
                Các cư dân tham vọng khôn cùng ở khu căn hộ sang trọng nhất
                Seoul vứt bỏ đạo đức qua một bên để leo lên đỉnh cao chót vót
                của sự giàu có và quyền lực.
              </p>
              <p>Diễn viên chính:E Ji Ah,Kim So Yeon,Eugene</p>
              <p>Tác giả:Joo Dong Min,Kim Soon Ok</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/Z2fsMJpozHk"
                title="Tầng lớp Itaewon (Itaewon Class) | Official Trailer | ENG SUB"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={Han62} alt="" className="name-movie-img" />
              <p>
                Tại một khu phố nhộn nhịp của Seoul, một cựu tù nhân và bạn bè
                mình chiến đấu với đối thủ khó nhằn để biến tham vọng quán bar
                đường phố của họ thành hiện thực.
              </p>
              <p>Diễn viên chính:Park Seo Jun,Kim Da Mi,Yoo Jae Myung</p>
              <p>Tác giả:Kim Sung Youn,Gwang Jin</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="slider-click">
            <img src={Han} alt="" className="hinh" />
            Vincenzo
          </div>
          <div className="slider-click">
            <img src={Han1} alt="" className="hinh" />
            Dẫu biết
          </div>
          <div className="slider-click">
            <img src={Han3} alt="" className="hinh" />
            Luật sư vô pháp
          </div>
          <div className="slider-click">
            <img src={Han4} alt="" className="hinh" />
            Nữ luật sư kỳ lạ Woo Young Woo
          </div>
          <div className="slider-click">
            <img src={Han5} alt="" className="hinh" />
            Cuộc chiến thượng lưu
          </div>
          <div className="slider-click">
            <img src={Han6} alt="" className="hinh" />
            Tầng lớp Itaewon
          </div>
        </Slider>
      </div>
    );
  }
}
