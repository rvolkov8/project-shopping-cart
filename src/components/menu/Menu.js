import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products" end>
          Products
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
