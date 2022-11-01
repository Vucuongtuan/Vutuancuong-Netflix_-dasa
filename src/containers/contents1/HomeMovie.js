import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpiderManText from '../image/SpiderMan-text.jpg';
import SpiderMan from '../image/SpiderMan.jpg';
import My1 from '../image/my1.jpg';
import My12 from '../image/my1-2.png';
import My2 from '../image/my2.jpg';
import My22 from '../image/my22.png';
import My9 from '../image/my9.png';
import My92 from '../image/my92.jpeg';
import My4 from '../image/my4.jpg';
import My42 from '../image/my42.png';
import My5 from '../image/my5.jpg';
import My52 from '../image/my52.png';

export default class AsNavFor extends Component {
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
                src="https://www.youtube.com/embed/OB3g37GTALc"
                title="Spider-Man: No Way Home | Official Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={SpiderManText} alt="" className="name-movie-img" />

              <p>Đạo diễn: Jon Watts</p>
              <p>Sản xuất: Kevin Feige, Amy Pascal</p>
              <p>Tác giả:Chris McKenna ,Erik Sommers</p>
              <p>Dựa trên:Người Nhện của Stan Lee</p>
              <p>
                Diễn viên: Tom Holland Zendaya Benedict Cumberbatch Jacob
                Batalon Jon Favreau Jamie Foxx Willem Dafoe Alfred Molina
                Benedict Wong Tony Revolori Marisa Tomei Andrew Garfield Tobey
                Maguire
              </p>
              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/NNBNX34mO34"
                title="The Last Kingdom | Season 5 Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={My12} alt="" className="name-movie-img" />
              <p>Thể loại: Phim Hành Động, Phim Phiêu Lưu</p>
              <p>
                Diễn viên: Eliza Butterworth, AlexanderDreymon, Arnas
                Fedaravicius,
              </p>
              <p>Năm Phát Hành: 2022</p>
              <p>Quốc gia: Phim Âu Mỹ</p>
              <p>Đạo diễn: N/A,</p>
              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/qMmCTg8vQ7I"
                title="Thợ săn quái vật – mùa 2 | Trailer chính thức | Netflix"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={My22} alt="" className="name-movie-img" />
              <p>
                Geralt xứ Rivia, một thợ săn quái vật đột biến, dấn thân vào
                hành trình đến với số phận trong thế giới hỗn loạn mà con người
                còn ác độc hơn cả quỷ dữ.
              </p>

              <p>Diễn viên chính:Henry Cavill,Anya Chalotra,Freya Allan</p>
              <p>Quốc gia: Phim Âu Mỹ</p>
              <p>Tác giả:Lauren Schmidt Hissrich</p>
              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/Pj0wz7zu3Ms"
                title="RED NOTICE | Official Trailer | Netflix"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={My9} alt="" className="name-movie-img" />
              <p>
                Chuyên gia FBI đang tìm bắt kẻ trộm tranh bị truy nã gắt gao
                nhất thế giới thì trở thành cộng sự bất đắc dĩ của hắn để tóm
                tên tội phạm luôn đi trước họ một bước.
              </p>
              <p>Diễn viên chính:Dwayne Johnson,Ryan Reynolds,Gal Gadot</p>

              <p>Quốc gia: Phim Âu Mỹ</p>

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
              <img src={My42} alt="" className="name-movie-img" />
              <p>
                Thương nhân táo bạo hay kẻ lừa đảo? Một nhà báo lần theo câu
                chuyện của Anna Delvey, người khiến giới thượng lưu New York tin
                rằng mình thừa kế một gia sản lớn ở Đức.
              </p>
              <p>Diễn viên chính:Julia Garner,Anna Chlumsky,Arian Moayed</p>
              <p>Tác giả:Shonda Rhimes</p>
              <p>Quốc gia: Phim Âu Mỹ</p>

              <div className="btnrun">
                <button>Xem phim</button>
              </div>
            </div>
          </div>
          <div className="slide-tin">
            <div className="slide-tin1">
              <iframe
                src="https://www.youtube.com/embed/WPlXILGpOFk"
                title="She Official Trailer | A Netflix Original Series | Aditi Pohankar, Vijay Varma | March 20"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slide-tin2">
              <img src={My52} alt="" className="name-movie-img" />
              <p>
                Nhiệm vụ nằm vùng nhằm vạch trần đường dây ma túy trở thành hành
                trình khai phóng sức mạnh của một cảnh sát Mumbai nhút nhát khi
                cô nhận ra tiềm năng tình dục của mình.
              </p>
              <p>Diễn viên chính:Aaditi Pohankar,Vijay Varma,Vishwas Kini</p>
              <p>Tác giả:Imtiaz Ali</p>
              <p>Quốc gia: Phim Âu Mỹ</p>

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
            <img src={SpiderMan} alt="" className="hinh w-[10px]" />
            Spider-Man: No Way Home
          </div>
          <div className="slider-click">
            <img src={My1} alt="" className="hinh" />
            Vương triều cuối cùng
          </div>
          <div className="slider-click">
            <img src={My2} alt="" className="hinh" />
            Thợ săn quái vật
          </div>
          <div className="slider-click">
            <img src={My92} alt="" className="hinh" />
            Trùm ma túy :Mexico
          </div>
          <div className="slider-click">
            <img src={My4} alt="" className="hinh" />
            Anna: Tiểu thư dựng chuyện
          </div>
          <div className="slider-click">
            <img src={My5} alt="" className="hinh" />
            She
          </div>
        </Slider>
      </div>
    );
  }
}
