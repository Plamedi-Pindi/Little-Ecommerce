import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

// CartProvider Component Start
export function CartProvider({children}) {
    const [cart, setCart] = useState(()=>{
        // Load from local storage while start
        const cartSaved = localStorage.getItem("cart");
        return cartSaved ? JSON.parse(cartSaved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
 
    // Functio to add item to cart
    const addToCart = (product) => {
        setCart((prev)=> [...prev || [], product]);
    }

    // Functio to remove item from cart
    const removeFromCart = (id)=>{
        setCart((prev)=>{
            const updatedCart = prev.filter((item)=> item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart
        });
    }   

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }} >
        {children}
    </CartContext.Provider>
  )
}
// CartProvider Component End

export function useCart(){
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Seu carrinho deve ser usado dentro de um CartProvider");
    }
    return context;
}
