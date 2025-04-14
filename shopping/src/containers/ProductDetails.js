import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  const fetchProductDetail = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(selectedProduct(response.data));
      setLoading(false);
    } catch (err) {
      setError("Product not found");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  if (loading) return <div>Loading...</div>;

  if (error || !product || Object.keys(product).length === 0)
    return <Navigate to="/404" />;

  const { image, title, price, category, description } = product;

 

  const handleContinueShopping = () => {
    setShowModal(false);
    navigate("/"); // Home page
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/confirmation", { state: { totalPrice: price } });
  };
  

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">YOUR SELECTED PRODUCT</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt={title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <button onClick={handleAddToCart} className="ui primary button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="ui modal active">
          <div className="header">Product Added to Cart</div>
          <div className="content">
            <p>Your item has been added to the cart.</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
          <div className="actions">
            <button
              onClick={handleContinueShopping}
              className="ui green button"
            >
              Continue Shopping
            </button>
            <button onClick={handleAddToCart} className="ui blue button">
              Go to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
