import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //function to add item to cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItem) => {
      const existingItem = cartItems.find((item) => item.product === product);
      if (existingItem) {
        return prevItem.map((item) =>
          item.product === product
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItem, { product, quantity }];
    });
  };

  // Function to clear the cart
  const clearCart = () => setCartItems([]);

  return <CartContext.Provider value={{cartItems, addToCart, clearCart}}>{children}</CartContext.Provider>;
}

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);