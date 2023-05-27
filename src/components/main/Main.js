import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import About from './About';

const Main = ({
  posters,
  selectedPosterId,
  handlePosterSelection,
  handleAddToCart,
  cartItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleQuantityChange,
  handleDeleteItem,
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
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleQuantityChange={handleQuantityChange}
              handleDeleteItem={handleDeleteItem}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Main;
