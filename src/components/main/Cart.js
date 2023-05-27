import { Link } from 'react-router-dom';

const Cart = ({
  cartItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleQuantityChange,
  handleDeleteItem,
  handlePurchase,
}) => {
  const itemsElements = cartItems.map((cartItem) => {
    const oldPriceSubtotal = (cartItem.oldPrice * cartItem.quantity).toFixed(2);
    const newPriceSubtotal = (cartItem.newPrice * cartItem.quantity).toFixed(2);
    return (
      <div className="grid-row-wrapper" key={cartItem.id}>
        <div className="cart-item-product">
          <img
            className="cart-item-picture"
            src={cartItem.file}
            alt="Cart Item"
          />
          <div className="cart-item-name">{cartItem.name}</div>
        </div>
        <div className="cart-item-quantity">
          <button
            onClick={() => handleDecreaseQuantity(cartItem.id)}
            className="quantity-minus-button"
          >
            -
          </button>
          <input
            onChange={(e) => handleQuantityChange(e, cartItem.id)}
            type="text"
            value={cartItem.quantity}
          />
          <button
            onClick={() => handleIncreaseQuantity(cartItem.id)}
            className="quantity-plus-button"
          >
            +
          </button>
        </div>
        {newPriceSubtotal > 0 ? (
          <div className="cart-item-subtotal">
            <div className="cart-item-old-price">{oldPriceSubtotal} €</div>
            <div className="cart-item-new-price">{newPriceSubtotal} €</div>
          </div>
        ) : (
          <div className="cart-item-subtotal">
            <div className="cart-item-old-price-only">{oldPriceSubtotal} €</div>
          </div>
        )}
        <button
          onClick={() => handleDeleteItem(cartItem.id)}
          className="delete-item-button"
        >
          ×
        </button>
      </div>
    );
  });

  let totalPrice = cartItems.reduce((accumulator, item) => {
    const price = item.newPrice === null ? item.oldPrice : item.newPrice;
    const itemTotal = price * item.quantity;
    return accumulator + itemTotal;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-grid">
              <div className="grid-row-wrapper">
                <div className="cart-category">Product</div>
                <div className="cart-category">Quantity</div>
                <div className="cart-category">Subtotal</div>
              </div>
              {itemsElements}
            </div>
            <div className="total-container">
              <div className="total-text">Total price:</div>
              <div className="total-price-container">
                <div className="total-price">{totalPrice.toFixed(2)} €</div>
                <div className="vat">VAT included</div>
              </div>
            </div>
            <div className="cart-buttons-container">
              <Link to="/products">
                <button className="continue-shipping-button">
                  Continue shipping
                </button>
              </Link>
              <Link
                replace
                className="purchase-button-link"
                to="/purchase-confirmation"
              >
                <button onClick={handlePurchase} className="purchase-button">
                  Purchase
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-message1">
              Oops! It seems like your cart is empty.
            </div>
            <div className="empty-cart-message2">
              Start browsing now and discover the perfect artwork to add a touch
              of superhero greatness to your space.
            </div>
            <Link to="/products">
              <button className="empty-cart-show-now-button">Show now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
