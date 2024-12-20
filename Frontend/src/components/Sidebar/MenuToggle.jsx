//Icons
import { BsTextLeft, BsX } from "react-icons/bs";



export default function MenuToggle({toggle, toggleVisibility}) {
  
  return (
    <div>
      <button
        className="basis-[10%] md:hidden transition-300 z-[100] relative w-auto h-auto"
        onClick={toggleVisibility}
      >
        {toggle ? (
          <BsX className="text-3xl text-details cursor-pointer " />
        ) : (
          <BsTextLeft className="text-3xl text-details cursor-pointer " />
        )}
      </button>
    </div>
  );
}
