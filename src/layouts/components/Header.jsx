//Icons
import {
  BsList,
  BsChatDots,
  BsChevronLeft,
  BsBag,
  BsTextLeft,
  BsPersonCircle
} from "react-icons/bs";

// Hooks
import { useNavigate } from "react-router-dom";


// Main Function
export default function Header() {
  const navigate = useNavigate();

  // Function to navigate to the cart page
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="flex justify-between p-2 pl-4 pr-4 mb-4 items-center">
      <BsTextLeft className="text-3xl text-zinc-700" />

      <h2 className="text-lg font-bold text-zinc-700  flex-grow text-center">
        Logo
      </h2>

      <div className="flex">
        <div>
          <BsChatDots className="text-zinc-700 text-xl mr-4" />
        </div>

        <div>
          <BsBag onClick={handleCartClick} className="text-zinc-700 text-xl" />
        </div>
      </div>
    </div>
  );
}

export const NavigateBackHeader = ({ color, backTo }) => {
  const navigate = useNavigate();

  // Function to navigate to the cart page
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div
      className={`flex justify-between p-2 pl-4 pr-4 mb-4 items-center  ${color}`}
    >
      <button
        onClick={backTo}
        className="border rounded-lg w-6 h-6 flex justify-center items-center"
      >
        <BsChevronLeft className="text-sm " />
      </button>

      <div className={`flex`}>
        <div>
          <BsChatDots className=" text-xl mr-4" />
        </div>
        <div>
          <BsBag onClick={handleCartClick} className="text-xl" />
        </div>
      </div>
    </div>
  );
};
