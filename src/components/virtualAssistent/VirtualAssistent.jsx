//Icons
import { BsRobot, BsX } from "react-icons/bs";

export default function VirtualAssistent({ font, size, position }) {
  return (
    <>
      <div
        className={`${size} ${position} fixed z-10 bg-blue-300 shadow-md flex items-center justify-center rounded-full`}
      >
        <div className="absolute w-32 h-24 rounded-xl bg-blue-300 shadow-lg bottom-14 right-2 p-2">
          <div className="w-full flex justify-between mb-2">
            <img src="/robot.jpeg" className="w-6 h-6 rounded-full"/>
            <BsX className="text-2xl" />
          </div>
          <p className="text-sm">Olá, em que posso lhe ajudar?</p>
        </div>

        <BsRobot className={`${font} robotJump robotRotate`} />
      </div>
    </>
  );
}
