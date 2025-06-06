// Icons
import { BsX } from "react-icons/bs";

// Hooks
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
import { PingAnimation } from "../PingAnimation/PingAnimation";

export default function Menu({ toggle, setToggle }) {
  const [active, setActive] = useState("Home"); // ["Home", "Loja", "About"]

  const isHomeActive = active === "Home";
  const isLojaActive = active === "Loja";
  const isAboutActive = active === "About";

  // Function to close sidebar
  const closeMenu = () => {
    setToggle(false);
  };

  // Nav list reference
  const navRef = useRef(null);

  // Function to navigate to another page
  const navigate = useNavigate();

  // Function to hid and show sidebar Start =======================
  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      if (toggle) {
        const menuListDisplay = () => {
          nav.style.height = "10rem";
        };

        setTimeout(() => {
          menuListDisplay();
        }, 400);
      } else {
        const menuListClose = () => {
          nav.style.height = "0rem";
        };

        menuListClose();
      }
    }
    return () => {};
  }, [toggle]);
  // Function to hid and show sidebar End =======================

  // Function to navigate to Shop page
  const handleLojaClick = () => {
    navigate("/loja"); // Navigate to the route
    closeMenu(); // Close the sidebar
    setActive("Loja"); // Active Lojas page
  };

  // Function to navigate to Home page
  const handleHomeClick = () => {
    navigate("/"); // Navigate to the route
    closeMenu(); // Close the sidebar
    setActive("Home"); // Active Lojas page
  };

  return (
    <>
      <div
        onClick={closeMenu}
        className={`bg-black/10 h-screen top-0 left-0 z-[60] absolute duration-300 ${
          toggle ? "w-full" : "w-0 "
        } `}
      ></div>

      {/* Nav */}
      <nav
        className={`h-screen  absolute top-0 left-0 z-[100] bg-secundary shadow-xl duration-700 ${
          toggle ? "w-[15rem] p-4" : "w-0"
        }`}
      >
        <div className="w-full flex h-7  justify-end">
          <button onClick={closeMenu}>
            <BsX className={`text-2xl duration-300 ${!toggle && "hidden"}`} />
          </button>
        </div>

        {/* Nav list */}
        <ul
          ref={navRef}
          className={`  text-base overflow-hidden duration-700 h-0   ${
            toggle ? "" : ""
          }`}
        >
          <li
            onClick={handleHomeClick}
            className="mt-2 flex items-center relative border-b border-details/30 pb-2"
          >
            Home
            {isHomeActive && <PingAnimation position={"left-14 top-2"} />}
          </li>
          <li
            onClick={handleLojaClick}
            className="mt-2 flex items-center relative border-b border-details/30 pb-2"
          >
            Loja
            {isLojaActive && <PingAnimation position={"left-14 top-2"} />}
          </li>
          <li className="mt-2 flex items-center relative border-b border-details/30 pb-2">
            Sobre
            {isAboutActive && <PingAnimation position={"left-14 top-2"} />}
          </li>
          <li className="mt-2 flex items-center relative border-b border-details/30 pb-2">
            Serviços
          </li>
        </ul>
      </nav>
    </>
  );
}
