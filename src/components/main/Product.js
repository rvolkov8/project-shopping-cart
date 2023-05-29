import { Link } from 'react-router-dom';

const Product = ({ posters, selectedPosterId, handleAddToCart }) => {
  const selectedPoster = posters.find(
    (poster) => poster.id === selectedPosterId
  );
  setTimeout(() => {}, 1);
  return (
    <div className="product">
      <div className="product-container">
        <img
          className="product-picture"
          src={selectedPoster.file}
          alt="Product"
        />
        <div className="product-info-container">
          <div className="product-name">{selectedPoster.name}</div>
          <div className="product-description">
            {selectedPoster.description}
          </div>
          {selectedPoster.newPrice === null ? (
            <>
              <div className="product-original-price">Original price:</div>
              <div className="product-old-price-only">
                {selectedPoster.oldPrice} €
              </div>
            </>
          ) : (
            <>
              <div className="price-description-container">
                <div className="product-special-price">Special price:</div>
                <div className="product-original-price">Special price:</div>
              </div>
              <div className="product-prices-container">
                <div className="product-new-price">
                  {selectedPoster.newPrice} €
                </div>
                <div className="product-old-price">
                  {selectedPoster.oldPrice} €
                </div>
              </div>
            </>
          )}
          <div className="product-shipping">
            Usually shipped within 24 hours
          </div>
          <div className="product-size">{selectedPoster.size} cm</div>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to cart
          </button>
          <Link className="view-all-posters-link" to="/products">
            <button className="view-all-posters-button">
              View all posters
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
