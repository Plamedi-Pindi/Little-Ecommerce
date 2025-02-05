// Icons
import { BsX } from "react-icons/bs";

// Hooks
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Component
import { PingAnimation } from "../PingAnimation/PingAnimation";

export default function Menu({ toggle, setToggle }) {
  // Function to close sidebar
  const closeMenu = () => {
    setToggle(false);
  };

  // Nav list reference
  const navRef = useRef(null);

  // Function to navigate to another page
  const navigate = useNavigate();

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

  return (
    <div onClick={closeMenu} className={`bg-black/10 h-screen top-0 left-0 z-[900] absolute duration-300 ${
      toggle ? "w-full" : "w-0 "
    } `}>
      <nav
        className={`h-screen  absolute top-0 left-0 z-[90] bg-secundary shadow-xl duration-700 ${
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
          className={` mt- text-base overflow-hidden duration-700 h-0   ${
            toggle ? "" : ""
          }`}
        >
          <li onClick={()=> navigate("/")} className="mt-2 flex items-center relative">
            <PingAnimation position={'left-14 top-2'} /> Home
          </li>
          <li className="mt-2 flex items-center">Sobre</li>
          <li className="mt-2 flex items-center">Serviços</li>
        </ul>
      </nav>
    </div>
  );
}

