import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import About from './About';
import PurchaseConfirmation from './PurchaseConfirmation';

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
  handlePurchase,
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
              handlePurchase={handlePurchase}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/purchase-confirmation"
          element={<PurchaseConfirmation />}
        />
      </Routes>
    </div>
  );
};

export default Main;
