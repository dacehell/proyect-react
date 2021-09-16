import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../../components/product/Product";

//Actions
import { getProducts as listProducts } from "../../store/products/actions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { data: products, isLoading, error } = getProducts;
  //const isLoading = useSelector((state) => state.getProducts.isLoading);

  useEffect(() => {
    if (isLoading === "initial") {
      dispatch(listProducts());
    }
  }, [dispatch, isLoading]);

  return (
    <div>
      <h2 className="homescreen__title">Latest Products</h2>
      <div>
        <div className="row">
          {isLoading === "loading" ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <div className="col col-md-6 col-lg-4 py-4">
                <Product
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product._id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
