import { BsArrowRight } from "react-icons/bs";

export default function Section({
  title,
  children,
  allOption,
  box,
  iconVisibility,
  styleBackground,
  styleSet
}) {
  return (
    <section className={`pl-4 pr-4 mb-6 ${box} relative  z-10 screen-500:w-[90%] block m-auto `}>
      <div className="flex justify-between items-center  mb-3 ">
        <h2 className="text-lg font-bold text-[#7b4c2d] "> {title} </h2>

        <button className="text-sm text-[#7b4c2d] flex items-center">
          {allOption}
          <BsArrowRight className={`text-base ml-1 ${iconVisibility} `} />
        </button>
      </div>

      <div className="">{children}</div>

      <div className={` ${styleBackground} stu rounded-full absolute -z-[1] ${styleSet}`} ></div>
    </section>
  );
}
