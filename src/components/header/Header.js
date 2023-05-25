import Logo from './Logo';
import cartIcon from '../../assets/shopping-cart.svg';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <img src={cartIcon} alt="Cart icon" />
    </div>
  );
};

export default Header;
