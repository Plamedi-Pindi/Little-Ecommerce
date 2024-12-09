import { useState } from "react";

// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Main Functtion
export default function LoveComponent({ size, font }) {
  const [isLoved, setIsLoved] = useState(false);

  // Function to Like or unlike a product
  const handleLoveProductClick = (e) => {
    e.stopPropagation();
    setIsLoved(!isLoved);
  };
  return (
    <>
      {isLoved ? (
        <div
          onClick={handleLoveProductClick}
          className={`shadow-lg bg-yellow-600/90  flex items-center justify-center rounded-full cursor-pointer ${size}`}
        >
          <BsHeartFill className={` ${font} text-white `} />
        </div>
      ) : (
        <div
          onClick={handleLoveProductClick}
          className={`shadow-lg bg-white flex items-center justify-center rounded-full cursor-pointer ${size}`}
        >
          <BsHeart className={` ${font} text-yellow-700`} />
        </div>
      )}
    </>
  );
}
