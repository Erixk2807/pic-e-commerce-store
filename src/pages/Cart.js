import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext";
import Cartitem from "../components/CartItem";

const Cart = () => {
  const PRICE = 5.99;
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(ProductContext);
  const cartItemsElements = cartItems.map((item) => (
    <Cartitem key={item.id} item={item} price={PRICE} />
  ));
  const totalCost = (price) => {
    const fincalPrice = price * cartItems.length;
    return fincalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  };
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: {totalCost(PRICE)}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
};

export default Cart;
