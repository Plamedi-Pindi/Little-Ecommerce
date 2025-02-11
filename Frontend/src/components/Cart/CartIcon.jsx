import { BsCart4 } from "react-icons/bs";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

export const CartIcon = ({ onClick }) => {
  const [isCartEmpt, setIsCartEmpt] = useState(true);
  const { cart } = useCart();
  const quantity = cart.length;

  useEffect(() => {
    if (quantity > 0) {
      setIsCartEmpt(false);
    } else {
      setIsCartEmpt(true);
    }
  }, [quantity]);

  return (
    <div className="relative ">
      <BsCart4 onClick={onClick} className="text-zinc-700 text-2xl " />

      <div
        className={`w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-xs absolute -top-1 -right-1.5 ${
          isCartEmpt ? "hidden" : "block"
        }`}
      >
        <span>{quantity}</span>
      </div>
    </div>
  );
};
