// Components
import { FormatCurrency } from "../../../utils/Currency";

// Icons
import { BsPlus, BsDash, BsTrash3, BsX } from "react-icons/bs";

// Hooks
import { useState } from "react";

export default function CardItem({ price, imgUrl, name, removeItem }) {
  const [quantity, setQuantity] = useState(1); // Quantity value
  const [productTotal, setProductTotal] = useState(price); // Total of product

  // Function to Add product quantity Start
  const addQuantinty = (price) => {
    setQuantity((prev) => prev + 1);

    setProductTotal((prev) => prev + price);
  };
  // Function to Add product quantity End

  //Function to Reduce product quentity Start
  const reduceQuantity = (price) => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (productTotal > price) {
      setProductTotal((prev) => prev - price);
    }
  };
  //Function to Reduce product quentity End

  return (
    <li className="w-full h-auto flex justify-between items-center border-b mt-4 pb-2">
      {/* Description */}
      <div className="flex items-center">
        <img
          src={imgUrl}
          className="w-[5rem] h-[5rem] rounded object-cover mr-2"
        />
        <div>
          <p className="text-sm font-medium"> {name} </p>
          <span className="text-xs text-[#7b4c2d] block">
            ({FormatCurrency(price)})
          </span>

          {/* Component to Add ou Reduce quantity */}
          <AddOrReduceQuantity
            addQuantinty={() => addQuantinty(price)}
            reduceQuantity={() => reduceQuantity(price)}
            quantity={quantity}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-end mt-5 h-full">
        {/* Total */}
        <p className="text-xs mb-1 font-medium">
          {FormatCurrency(productTotal)}
        </p>

        {/* Remove button */}
        <button onClick={removeItem} className="block mt-3">
          <BsTrash3 className="text-sm text-red-400" />
        </button>
      </div>
    </li>
  );
}

// Component to to Add ou Reduce quantity
const AddOrReduceQuantity = ({ addQuantinty, reduceQuantity, quantity }) => {
  return (
    <div className="flex mt-4 flex-c items-center ">
      {/* Reduce start */}
      <button
        onClick={reduceQuantity}
        className={`w-6 h-6 ${
          quantity > 1 ? "bg-details2" : "bg-zinc-100  "
        } border flex items-center justify-center  `}
      >
        <BsDash className="text-base" />
      </button>
      {/* Reduce end */}

      {/* Quantity start */}
      <div className="text-sm border-t border-b  w-6 h-6 flex items-center justify-center">
        {quantity}
      </div>
      {/* quantity end */}

      {/* Add start */}
      <button
        onClick={addQuantinty}
        className="w-6 h-6 border border-details2 flex items-center justify-center bg-details2 "
      >
        <BsPlus className="text-base" />
      </button>
      {/* Add end */}
    </div>
  );
};
