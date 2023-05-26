import { Link } from 'react-router-dom';

const Products = ({ posters, handlePosterSelection }) => {
  const postersElements = posters.map((poster) => {
    const posterURL = `/products/${poster.id}`;
    return (
      <Link
        onClick={() => handlePosterSelection(poster.id)}
        to={posterURL}
        key={poster.id}
      >
        <div className="poster container">
          <img className="poster picture" src={poster.file} alt="Poster" />
          <div className="poster name">{poster.name}</div>
          {poster.newPrice === null ? (
            <div className="old-price only">{poster.oldPrice} €</div>
          ) : (
            <div className="prices container">
              <div className="old-price">{poster.oldPrice} €</div>
              <div className="new-price">{poster.newPrice} €</div>
            </div>
          )}
          <div className="poster size">{poster.size} cm</div>
        </div>
      </Link>
    );
  });

  return (
    <div className="products">
      <div className="posters-grid">{postersElements}</div>
    </div>
  );
};

export default Products;
