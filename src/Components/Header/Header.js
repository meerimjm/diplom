import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'
// import { BsCart4 } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";
import logo from "../../imges/logo.png"
import Auth from "../Auth/Auth"
import CartLink from "../CartLink/CartLink"


function Header() {
  return (
    <header className="Header ">
      <div className="container">
        <div className="Head flex ">
          <Menu />
          <div className="header_right flex">
            <div className="Buttons flex">
              <Auth />
            </div>
            {/* <FaRegHeart /> */}
            <CartLink />
          </div>
        </div>
        <div className="">
          <img className='logo' src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;