import { useState } from "react";

// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Main Functtion
export default function LoveComponent({ size, font }) {
  const [isLoved, setIsLoved] = useState(true);

  // Function to Like or unlike a product
  const handleLoveProductClick = (e) => {
    e.Propagation
    setIsLoved(!isLoved);
  };
  return (
    <>
      {isLoved ? (
        <div
          onClick={handleLoveProductClick}
          className={`shadow-lg bg-yellow-600/90  flex items-center justify-center rounded-full ${size}`}
        >
          <BsHeartFill className={` ${font} text-white `} />
        </div>
      ) : (
        <div
          onClick={handleLoveProductClick}
          className={`shadow-lg  flex items-center justify-center rounded-full ${size}`}
        >
          <BsHeart className={` ${font} text-yellow-700`} />
        </div>
      )}
    </>
  );
}
