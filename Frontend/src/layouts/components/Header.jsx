//Icons
import {
  BsChatDots,
  BsChevronLeft,
  BsBag,
  BsCart4,
  BsTextLeft,
  BsPersonCircle,
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
        <BsTextLeft className="text-3xl text-details  " />
      </button>

      <h2 className="text-lg font-bold text-zinc-700  flex-growtext-center ">
        Logo
      </h2>

      <div className="flex justify-end basis-[18%]  ">
        <div>
          <BsCart4
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
      className={`flex text-details justify-between p-2 pl-4 pr-4 mb-4 items-center  ${color}`}
    >
      <button
        onClick={backTo}
        className="border rounded-lg border-details w-6 h-6 flex justify-center items-center"
      >
        <BsChevronLeft className="text-sm  text-details" />
      </button>

      <div className={`flex`}>
        <div> 
          <BsChatDots className=" text-xl mr-4 text-details" />
        </div>
        <div>
          <BsCart4 onClick={handleCartClick} className="text-xl text-details" />
        </div>
      </div>
    </div>
  );
};
