import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Product from './Product';

const Main = ({
  posters,
  selectedPosterId,
  handlePosterSelection,
  handleAddToCart,
}) => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route
            index
            element={
              <Products
                posters={posters}
                handlePosterSelection={handlePosterSelection}
              />
            }
          />
          <Route
            path=":id"
            element={
              <Product
                posters={posters}
                selectedPosterId={selectedPosterId}
                handleAddToCart={handleAddToCart}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
