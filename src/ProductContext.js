import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  const toggleFavorite = (id) => {
    setAllPhotos((prevState) =>
      prevState.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  };

  const addToCart = (img) => {
    setCartItems((prevItems) => [...prevItems, img]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };
  return (
    <ProductContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        cartItems,
        emptyCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };
