// Hooks
import { useState } from "react";

// Icons
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export default function Category() {
  const [isCategoryDiplayed, setIsCategoryDiplayed] = useState(true);

  // Event handler to hide or display category
  const changeCategoryState = () => {
    setIsCategoryDiplayed((preView) => !preView);
  };

  return (
    <div className="hidden md:block bg-white shadow-lg  text-zinc-700 rounded-b ">
      <button
        onClick={changeCategoryState}
        className="w-full text-center bg-details2 h-10 flex items-center justify-center font-bold "
      >
        <span className="block">Escolha uma categoria</span>
        {isCategoryDiplayed ? (
          <BsChevronDown className="ml-2" />
        ) : (
          <BsChevronUp className="ml-2" />
        )}
      </button>

      <ul className= {`pl-3 pr-3 overflow-hidden duration-700 select-none text-sm ${isCategoryDiplayed ? "h-52" : "h-0"} `}>
        <li className="mt-3 cursor-pointer hover:text-details hover:translate-x-3 duration-700">Categoria 1</li>
        <li className="mt-3 cursor-pointer hover:text-details hover:translate-x-3 duration-700">Categoria 2</li>
        <li className="mt-3 cursor-pointer hover:text-details hover:translate-x-3 duration-700">Categoria 3</li>
        <li className="mt-3 cursor-pointer hover:text-details hover:translate-x-3 duration-700">Categoria 4</li>
        <li className="mt-3 cursor-pointer hover:text-details hover:translate-x-3 duration-700">Categoria 5</li>
      </ul>
    </div>
    
  );
}
