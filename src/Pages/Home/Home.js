import './Home.css';
import secondBlock1 from "../../imges/secondBlock1.jpg"
import secondIc1 from "../../imges/secondIc-1.png"
import secondIc2 from "../../imges/secondIc-2.png"
import chtor1 from "../../imges/chtor1.jpg"
import Svg1 from "../../imges/Svg1.png"
import chtor2 from "../../imges/chtor2.jpg"
import Svg2 from "../../imges/Svg2.png"
import Svg3 from "../../imges/Svg3.png"
import Svg4 from "../../imges/Svg4.png"
import Svg5 from "../../imges/Svg5.png"
import Svg6 from "../../imges/Svg6.png"
import video1 from '../../video/shtory.mp4'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Home() {
  return (
    <>
      <section className='shtor'>
        <div className="all_txt">
          <div className="shtor_txt">Мы Воплотим в Реальность Любую Вашу Мечту!</div>
          <h1 className="main_tit">САЛОН  ШТОР
            «ТЮЛЬПАН»</h1>
          {/* <Link to="#main_site" className='main_btn'>просмотр сайта</Link> */}
        </div>
      </section>

      <section className='second_block grey' id="main_site">
        <h2 className="second_tit">ДИЗАЙНЕРСКИЕ  ШТОРЫ НА ЗАКАЗ В КАРАКОЛЕ</h2>
        <p className="second_txt">Зачем откладывать реализацию мечты на завтра?</p>
        <h3 className="second_min_tit">ТОЛЬКО У НАС ЕСТЬ ДОСТАВКА НА ДОМ, РЕСТАВРАЦИЯ ЛЮБОЙ СЛОЖНОСТИ, ШИРОКИЙ ВЫБОР И УСЛУГИ ВЕДУЩИХ ДИЗАЙНЕРОВ!</h3>
        <p className="second_txt">С нашим салоном Ваши самые невообразимые фантазии могут воплотиться в реальность уже сегодня! Наши дизайнеры знают, как обставить Ваш дом и подобрать мебель под Ваш вкус и цвет, а также превратить роскошные европейские ткани в настоящие произведения искусства – изысканные и неповторимые шторы, которые будут долгое время радовать Вас, Ваших близких и друзей.</p>
        {/* <ul className='second_block_slider'>
              <li style="float:left;"></li>
            </ul> */}
        {/* <div className="second_img">
            <img src={secondBlock1} alt="" />
          </div> */}
        <video className='video1' autoPlay muted>
          <source src={video1} type="video/mp4"></source>
        </video>

        <div className="cards flex">
          <div className="card_left">
            <div className="card_item flex">
              <div className="card_left_ic-1">
                <img src={secondIc1} alt="" />
              </div>
              <div className="card_left_txt">«ТЮЛЬПАН» - КАЧЕСТВО И ЭКСКЛЮЗИВНОСТЬ
                Мы работаем индивидуально с каждым клиентом. Если у Вас есть задумка, но Вы не знаете, как ее воплотить в реальность, наши профессиональные дизайнеры легко сориентируют Вас в оформлении, помогут с выбором дизайна. И уже через короткое время Вы сможете получить  шторы своей мечты.</div>
            </div>
            <div className="card_img">
              <img src={chtor1} alt="" />
            </div>



          </div>

          <div className="card_right">
            <div className="card_img">
              <img src={chtor2} alt="" />
            </div>
            <div className="card_item flex">
              <div className="card_left_ic-1">
                <img src={secondIc2} alt="" />
              </div>
              <div className="card_left_txt">УНИКАЛЬНАЯ ВОЗМОЖНОСТЬ ТОЛЬКО У НАС!
                Если же у Вас нет четкого представления о том, что же подойдет под интерьер/дизайн именно вашего дома или квартиры, то в этом случае к Вам на дом может выехать наш сотрудник, который подберет для Вас идеальное сочетание цветов и стилей мебели, тканей под интерьер Ваших стен. С нами вы легко сможете купить мебель и шторы в Бишкеке, которые будут подчеркивать красоту и роскошь Вашего дома.</div>
            </div>
          </div>
        </div>
      </section>
      <section className='servic'>
        <h2 className="servic_tit1">УСЛУГИ САЛОНА ШТОР</h2>
        <p className="servic_txt1">Если вы искали салон мебели и штор в Бишкеке, где дизайнеры не просто создают изделия, которые закрывают Вас от окружающего мира, а создают продукцию, которая гармонирует с окружающим интерьером и выглядит так, словно это произведение искусства, то Вы оказались у нас не случайно. Для наших клиентов мы готовы предложить широкий ассортимент всевозможных мебельных гарнитур и тканей. Вы сможете выбрать их у нас на любой бюджет. Всего у нас представлено более 20 000 тканей европейских и турецких производителей, а также возможность создания, сборки любой мебели под Ваши предпочтения. ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ СВОБОДНЫХ ДИЗАЙНЕРОВ ИНТЕРЬЕРА И МЕБЕЛИ. ДЛЯ ВАС ОЧЕНЬ ИНТЕРЕСНОЕ СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ!!!</p>
        <div className="servic_cards flex">
          <div className="servic_left">
            <div className="servic_item">
              <div className="servic_ic">
                <img src={Svg1} alt="" />
              </div>
              <h3 className="servic_tit">Пошив и реставрация штор </h3>
              <p className="servic_txt">Качественно создаем любую мебель и шьем шторы, покрывала, занавески из тканей европейских и турецких производителей по доступным ценам </p>


            </div>
            <div className="servic_item">
              <div className="servic_ic">
                <img src={Svg2} alt="" />
              </div>
              <h3 className="servic_tit">Дизайн  Штор</h3>
              <p className="servic_txt">Наши профессиональные дизайнеры могут выполнить заказ по интерьерному дизайну любой сложности</p>


            </div>
            <div className="servic_item">
              <div className="servic_ic">
                <img src={Svg3} alt="" />
              </div>
              <h3 className="servic_tit">Готовые  шторы</h3>
              <p className="servic_txt">Предлагаем уже готовые качественные мебель и шторы по приемлемым ценам. У нас есть сотни моделей на любой вкус. </p>


            </div>
          </div>
          <div className="servic_right">
            <div className="servic_item">
              <div className="servic_ic">
                <img src={Svg4} alt="" />
              </div>
              <h3 className="servic_tit">УСТАНОВКА РИМСКИХ СИСТЕМ</h3>
              <p className="servic_txt">В короткий срок смонтируем и установим римские системы для Вашего дома/квартиры</p>

            </div>
            <div className="servic_item">
              <div className="servic_ic">
                <img src={Svg5} alt="" />
              </div>
              <h3 className="servic_tit">Аксессуары и Карнизы</h3>
              <p className="servic_txt">Помимо мебели и штор наша компания в большом ассортименте предлагает аксессуары высокого качества. Также у нас в наличии и на заказ есть эксклюзивные карнизы.</p>

            </div>
            <div className="servic_item">
              <div className="servic_ic">
                <img src={Svg6} alt="" />
              </div>
              <h3 className="servic_tit">Монтаж и Установка</h3>
              <p className="servic_txt">Профессиональные сотрудники нашей компании осуществят монтаж и установку согласно Вашим срокам и требованиям. </p>

            </div>




          </div>
        </div>
      </section>
      <section className='youtube'>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          autoplay={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="video">
              <iframe width="100%" height="300px" src="https://www.youtube.com/embed/F_ZF6AnhI-c?si=D8dJqjCYdH852AxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="video">
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/YwizR49cGd4" title="Новинки тюлей 2023 из Турции" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="video">
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/pWlIZxZJQIQ" title="Детские шторы «Алаби» розовые" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="video">
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/Ivl-i0Ry1W4" title="ШТОРЫ НА ЛЕСТНИЦЕ 🔥 ШТОРЫ НА ВЫСОКИЕ ОКНА 💖 ШТОРЫ НА НЕСТАНДАРТНЫЕ ОКНА ОТ ГЛАДПРО 🧚‍♀️" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="video">
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/8UIDvxziHGs" title="Аксессуары для штор. Кисти и подхваты." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;