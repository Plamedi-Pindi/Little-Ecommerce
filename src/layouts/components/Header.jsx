//Icons
import { BsList, BsChatDots, BsChevronLeft, BsBag, BsTextLeft } from "react-icons/bs";

export default function Header() {
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
          <BsBag className="text-zinc-700 text-xl" />
        </div>
      </div>
    </div>
  );
}

export const NavigateBackHeader = ({ color, backTo }) => {
  return (
    <div
      className={`flex justify-between p-2 pl-4 pr-4 mb-4 items-center  ${color}`}
    >
      <button onClick={backTo} className="border rounded-lg w-6 h-6 flex justify-center items-center">
        <BsChevronLeft  className="text-sm " />
      </button>

      <div className={`flex`}>
        <div>
          <BsChatDots className=" text-xl mr-4" />
        </div>
        <div>
          <BsBag className="text-xl" />
        </div>
      </div>
    </div>
  );
};
