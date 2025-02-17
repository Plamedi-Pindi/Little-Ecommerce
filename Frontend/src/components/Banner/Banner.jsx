export default function Banner({ display }) {
  return (
    <div className={` ${display} w-full screen-730:w-1/2  screen-500:w-[90%]  block m-auto `}>
      <div className="h-48  screen-930:h-[14rem] w-full rounded-xl bg-[url('/3.webp')] bg-center bg-cover p-2  text-[#7b4c2d] flex justify-center items-center  ">
        <div className="bg-[#d7e6e6]/90 p-2 h-[80%] w-[90%] rounded-lg ">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam?
          </p>
        </div>
      </div>
    </div>
  );
}
