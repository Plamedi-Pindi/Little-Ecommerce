import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// CartProvider Component Start
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Load from local storage while start
    const cartSaved = localStorage.getItem("cart");

    return cartSaved ? JSON.parse(cartSaved) : [];
  }); // Cart State

  // Function to Store Cart data in LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prev) => [...(prev || []), product]);
  };

  // Functio to remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Functio to Update quantity value Start ===================
  const UpdateAddQuantity = (id) => {
    const newCart = cart.map((pedido) => {
      if (pedido.id !== id) {
        return pedido;
      } else {
        return {
          ...pedido,
          quantity: pedido.quantity + 1,
        };
      }
    });

    // Update Cart with new list
    setCart(newCart);
  };
  // Functio to Update quantity value End ===================

  // Functio to Update quantity value Start ===================
  const UpdateSubQuantity = (id) => {
    const newCart = cart.map((pedido) => {
      if (pedido.id !== id || pedido.quantity <= 1) {
        return pedido;
      } else {
        return {
          ...pedido,
          quantity: pedido.quantity - 1,
        };
      }
    });

    // Update Cart with new list
    setCart(newCart);
  };
  // Functio to Update quantity value End ===================

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, UpdateAddQuantity, UpdateSubQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
// CartProvider Component End

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Seu carrinho deve ser usado dentro de um CartProvider");
  }
  return context;
}
