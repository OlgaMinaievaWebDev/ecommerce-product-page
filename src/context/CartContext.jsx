import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.name === product.name
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
  };

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  //clear cart
 const clearCart = () => setCartItems([]);
 
 //Total price
 const totalPrice = cartItems.reduce(
   (acc, item) => acc + item.product.price * item.quantity,
   1
 );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
