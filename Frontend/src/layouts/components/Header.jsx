//Icons
import {
  BsList,
  BsChatDots,
  BsChevronLeft,
  BsBag,
  BsTextLeft,
  BsPersonCircle,
  BsPerson,
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
    <div className="flex justify-between p-2 pl-4 pr-4 pt-4 mb-4 items-center">
      <button className="basis-[10%] md:hidden">
        <BsTextLeft className="text-3xl text-zinc-700  " />
      </button>

      <h2 className="text-lg font-bold text-zinc-700  flex-growtext-center ">
        Logo
      </h2>

      <div className="flex justify-end basis-[18%]  ">
        <div>
          <BsBag
            onClick={handleCartClick}
            className="text-zinc-700 text-xl mr-4"
          />
        </div>

        <div>
          <BsPersonCircle className="text-zinc-700 text-xl " />
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
