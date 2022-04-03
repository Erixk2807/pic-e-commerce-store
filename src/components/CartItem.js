import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const CartItem = ({ item, price }) => {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(ProductContext);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>${price}</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
