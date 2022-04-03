import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";
const Header = () => {
  const { cartItems } = useContext(ProductContext);
  const cartIcon = (
    <i
      className={`ri-shopping-cart-${
        cartItems.length == 0 ? "line" : "fill"
      } ri-fw ri-2x`}
    ></i>
  );
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">{cartIcon}</Link>
    </header>
  );
};

export default Header;
