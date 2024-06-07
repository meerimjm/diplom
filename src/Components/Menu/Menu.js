import CategoryList from '../CategoryList/CategoryList';
import './Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav className='Menu'>
      <ul className='flex'>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/delivery">ДОставка</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
        <CategoryList />
      </ul>
    </nav>
  );
}

export default Menu;