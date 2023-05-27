import { Link } from 'react-router-dom';
import Logo from './Logo';
import cartIcon from '../../assets/shopping-cart.svg';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Link className="cart-button" to="/cart">
        <img src={cartIcon} alt="Cart icon" />
      </Link>
    </div>
  );
};

export default Header;
