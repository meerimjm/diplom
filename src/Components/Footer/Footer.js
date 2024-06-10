import { Link } from 'react-router-dom';
import './Footer.css';
// import Logo  from "../../imges/logo.png"
import foto1 from "../../imges/foto1.jpeg"


function Footer() {
  return (
    <>
      <footer>
		<div className="container">
			<div className="footer_in flex">
				<div classNameName="footer_info">
					<Link to="index.html" className="logo">
					{/* <img src={logo} alt="logo" className="logo" /> */}
					</Link>
					<p className="footer_txt">Шторы - это неотъемлемая часть интерьера, они создают настроение, уют и комфорт в Вашем доме. При этом они, безусловно, должны гармонировать с общим стилем вашего интерьера. Шторы, сшитые по индивидуальному заказу, станут изюминкой вашего дома.

</p>

				</div>
				<div className="footer_menu">
					<h4 className="footer_tit">Страницы</h4>
					<ul className="footer_list">
						<li><Link to="">О главном</Link></li>
						<li><Link to="">О нас</Link></li>
						<li><Link to="">Меню</Link></li>
						<li><Link to="">Контакты</Link></li>
						<li><Link to="">Доставка</Link></li>
					</ul>
				</div>
				
				<div className="footer_imgs">
					<h4 className="footer_tit">Следуйте за нами в Instagram</h4>
					<div className="footer_img-wrap flex ">
						<Link to="" className="footer_img"><img src="img/foto1.jpg" alt=""/></Link>
						<Link to="" className="footer_img"><img src="img/foto2.jpg" alt=""/></Link>
						<Link to="" className="footer_img"><img src="img/foto3.jpg" alt=""/></Link>
						<Link to="" className="footer_img"><img src="img/foto4.jpg" alt=""/></Link>
					</div>
				</div>
			</div>
			<p className="footer_copy">© 2023 Разработчик хэштегов. Все права защищены</p>

		</div>
	</footer>
    </>
  );
}
export default Footer;
