import { Link } from 'react-router-dom';
import Logo from './Logo';
import cartIcon from '../../assets/shopping-cart.svg';

const Header = ({ cartItems }) => {
  const totalItems = cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return (
    <div className="header">
      <Logo />
      <div className="cart-button">
        <Link to="/cart">
          {totalItems > 0 && (
            <div className="cart-items-quantity">{totalItems}</div>
          )}
          <img src={cartIcon} alt="Cart icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
