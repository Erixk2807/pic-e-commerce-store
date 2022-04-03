import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../ProductContext";
import useHover from "../hooks/useHover";

const Image = ({ className, img }) => {
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(ProductContext);
  const [hovered, ref] = useHover();

  const heartIcon = (onClick) =>
    img.isFavorite ? (
      <i className="ri-heart-fill favorite" onClick={onClick}></i>
    ) : hovered ? (
      <i className="ri-heart-line favorite" onClick={onClick}></i>
    ) : undefined;

  const cartIcon = () =>
    cartItems.some((item) => item.id === img.id) ? (
      <i
        className="ri-shopping-cart-fill cart"
        onClick={() => removeFromCart(img.id)}
      ></i>
    ) : hovered ? (
      <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    ) : undefined;

  return (
    <div className={`${className} image-container`} ref={ref}>
      {heartIcon(() => toggleFavorite(img.id))}
      {cartIcon()}
      <img className="image-grid" src={img.url} alt="" />
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
