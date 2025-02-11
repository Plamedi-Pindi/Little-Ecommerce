// Components
import { FormatCurrency } from "../../../utils/Currency";

// Icons
import { BsPlus, BsDash, BsTrash3, BsX } from "react-icons/bs";

// Hooks
import { useState, useEffect } from "react";
import { useCart } from "../../../contexts/CartContext";

export default function CardItem({ price, imgUrl, name, id }) {
  const [quantity, setQuantity] = useState(1); // Quantity value
  const [productTotal, setProductTotal] = useState(price); // Total of product
  const [totals, setTotals] = useState([]);

  const [islonger, setisLonger] = useState(false);
 const {removeFromCart} = useCart();
  
  useEffect(() => {
    const numberToStg = productTotal.toString();
    const totalLength = numberToStg.length;
    const isLengthLonger = totalLength <= 5;
    setisLonger(isLengthLonger)
    
    
  }, [productTotal]);

  useEffect(() => {
    localStorage.setItem('Total', totals.toString());
  }, [totals]);



  // Function to Add product quantity Start
  const addQuantinty = (price) => { 
    setQuantity((prev) => prev + 1);

    setProductTotal((prev) => prev + price);
    setTotals((prev)=> [...prev, productTotal+price] );
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
    <li className="w-full h-auto flex justify-between items-center border-b mt-5 pb-3">
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
        <p className={` mb-1 font-medium ${islonger ? 'text-sm' : 'text-xs'}`}>
          {FormatCurrency(productTotal)}
        </p>

        {/* Remove button */}
        <button onClick={()=> removeFromCart(id)} className="block mt-3">
          <BsTrash3 className="text-lg text-red-400" />
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
        className={`w-8 h-7 ${
          quantity > 1 ? "bg-details2" : "bg-zinc-100  "
        } border flex items-center justify-center  `}
      >
        <BsDash className="text-base" />
      </button>
      {/* Reduce end */}

      {/* Quantity start */}
      <div className="text-sm border-t border-b  w-8 h-7 flex items-center justify-center">
        {quantity}
      </div>
      {/* quantity end */}

      {/* Add start */}
      <button
        onClick={addQuantinty}
        className="w-8 h-7 border border-details2 flex items-center justify-center bg-details2 "
      >
        <BsPlus className="text-base" />
      </button>
      {/* Add end */}
    </div>
  );
};
