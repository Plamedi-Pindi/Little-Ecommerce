// Components
import MenuToggle from "../../components/Sidebar/MenuToggle";
import { PingAnimation } from "../../components/PingAnimation/PingAnimation";
import { CartIcon } from "../../components/Cart/CartIcon";

// Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

//Icons
import {
  BsChatDots,
  BsChevronLeft,
  BsBag,
  BsCart4,
  BsPersonCircle,
  BsGrid,
} from "react-icons/bs";

// Main Function
export default function Header({ toggle, toggleVisibility }) {
  const [myAccountDisplayed, setMyAccountDisplayed] = useState(false);

  const { cart } = useCart();

  const displayAccountMenu = () => {
    setMyAccountDisplayed((preView) => !preView);
  };

  // Router navigation
  const navigate = useNavigate();

  // Function to navigate to the cart page
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="flex justify-between p-2 pl-4 pr-4 pt-4 mb-4 items-center relative screen-500:w-[90%] block m-auto  screen-1020:w-[85%] ">
      <MenuToggle toggle={toggle} toggleVisibility={toggleVisibility} />

      {/*  */}
      <h2 className="text-lg font-bold text-zinc-700  flex-growtext-centeR select-none ">
        Quicadorcas
      </h2>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 text-sm text-zinc-700 ">
          <li className="relative hover:border-t border-details cursor-pointer select-none hover:text-details">
            Home
            <PingAnimation position={"left-3 top-5"} />
          </li>
          <li className=" hover:border-t border-details cursor-pointer select-none hover:text-details">
            Sobre
          </li>
          <li className=" hover:border-t border-details cursor-pointer select-none hover:text-details">
            Serviços
          </li>
        </ul>
      </nav>

      <div className="flex justify-end basis-[18%]  ">
        {/* Cart  */}
        <div className="mr-5">
          <CartIcon onClick={handleCartClick} />
        </div>

        {/* User Login */}
        <div>
          <BsPersonCircle
            onClick={displayAccountMenu}
            className="text-zinc-700 text-2xl "
          />

          <ul
            className={`bg-white shadow-lg pr-3 pl-3 text-sm absolute right-4 w-36 overflow-hidden z-[3] duration-700 rounded ${
              myAccountDisplayed ? "pt-6 h-36" : "h-0"
            }`}
          >
            <li className="flex items-center mb-2 border-b pb-2">
              <BsGrid className="mr-2" />
              Minha conta
            </li>
            <li className="flex items-center mb-2  border-b pb-2">
              <BsGrid className="mr-2" />
              Carrinho
            </li>
            <li className="flex items-center mb-2   pb-2">
              <BsGrid className="mr-2" />
              Sair
            </li>
          </ul>
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
        className="border rounded-lg border-zinc-700 w-6 h-6 flex justify-center items-center"
      >
        <BsChevronLeft className="text-sm  text-zinc-700" />
      </button>

      <div className={`flex`}>
        <div>
          <BsChatDots className=" text-xl mr-4 text-zinc-700" />
        </div>
        <div>
          <CartIcon onClick={handleCartClick} />
        </div>
      </div>
    </div>
  );
};
