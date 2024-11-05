//Icons
import { BsList, BsChatDots, BsRobot, BsArrowReturnLeft } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between p-2 pl-4 pr-4 mb-4 items-center">
      <BsList className="text-3xl text-zinc-700" />

      <h2 className="text-lg font-bold text-zinc-700">Logo</h2>

      <div className="flex">
        <div>
          <BsChatDots className="text-zinc-700 text-xl mr-4" />
        </div>
        <div>
          <BsRobot className="text-zinc-700 text-xl" />
        </div>
      </div>
    </div>
  );
}

export const NavigateBackHeader = ({color}) => {
  return (
    <div className= {`flex justify-between p-2 pl-4 pr-4 mb-4 items-center  ${color}`} >
      <BsArrowReturnLeft className="text-3xl " />

      <div className= {`flex`} >
        <div>
          <BsChatDots className=" text-xl mr-4" />
        </div>
        <div>
          <BsRobot className="text-xl" />
        </div>
      </div>
    </div>
  );
};
