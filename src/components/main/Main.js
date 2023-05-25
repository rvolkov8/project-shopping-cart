import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const Main = ({ posters }) => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products posters={posters} />} />
      </Routes>
    </div>
  );
};

export default Main;
