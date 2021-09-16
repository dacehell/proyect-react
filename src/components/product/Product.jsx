import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={imageUrl} alt={name} className="card-img-top" />
        <div className="card-body">
          <p className="card-title">{name}</p>

          <p className="info__description">
            {description.substring(0, 100)}...
          </p>

          <p className="info__price">${price}</p>

          <Link to={`/product/${productId}`} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
