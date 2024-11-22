export default function ServicesSection({ children }) {
  return (
    <div className={`h-screen w-full bg-[#151618] rounded-xl relative `}>
      <div className="w-full h-full grid grid-rows-6 grid-flow-col gap-2 grid-cols- overflow-hidden relative ">
        <GridImage
          grid={"row-span-1 -ml-5 mr-28 -mt-10 mb-10 "}
          imgUrl={"https://i.imgur.com/4IZC5G8.jpg"}
        />
        <GridImage grid={"row-span-2 -ml-5 mr-28 -mt-10"} imgUrl={"https://i.imgur.com/10b0WW4.png"} />
        <GridImage grid={"row-span-2 -ml-5 mr-28 -mb-10"} imgUrl={"https://i.imgur.com/CqOf6lv.png"} />
        <GridImage
          grid={"row-span-1 -ml-5 mr-28 -mb-10 mt-10"}
          imgUrl={"https://i.imgur.com/crwJBbh.jpg"}
        />

        <GridImage
          grid={"row-span-2 -ml-28 -mr-6 -mt-10 mb-10 "}
          imgUrl={"https://i.imgur.com/enLZSF4.jpg"}
        />
        <GridImage
          grid={"row-span-2 -ml-28 -mr-6 -mt-10 -mb-10"}
          imgUrl={"https://i.imgur.com/4IZC5G8.jpg"}
        />
        <GridImage
          grid={"row-span-2 -ml-28 -mr-6 -mb-10 mt-10"}
          imgUrl={"https://i.imgur.com/ZXabLM9.jpg"}
        />

        <GridImage
          grid={"row-span-1 -mr-5 ml-6 -mt-10 mb-10 "}
          imgUrl={"https://i.imgur.com/oOFP0dn.jpg"}
        />
        <GridImage grid={"row-span-2 -mr-5 ml-6 -mt-10"} imgUrl={"https://i.imgur.com/q31QzKI.jpg"} />
        <GridImage grid={"row-span-2 -mr-5 ml-6 -mb-10"} imgUrl={"https://i.imgur.com/g5UVY2j.jpg"} />
        <GridImage
          grid={"row-span-1 -mr-5 ml-6 -mb-10 mt-10"}
          imgUrl={"https://i.imgur.com/10b0WW4.png"}
        />
      </div>

      <Boxx />
    </div>
  );
}

const GridImage = ({ grid, imgUrl }) => {
  return (
    <div className={` bg-zinc-900  rounded-[2rem] ${grid} relative `}>
      <img
        src={imgUrl}
        className="w-full h-full block rounded-[2rem] object-cover"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-[#30343f] to-50% z-[1] bottom-0 rounded-[2rem] "></div>
    </div>
  );
};

const Boxx = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-[#30343f] to-60% absolute top-0 left-0 p-2 flex justify-center items-end z-[2]  ">
      <div className="bg-white/10 backdrop-blur-sm w-[95%]  h-[15rem] mb-10 p-4 rounded-[2rem] flex flex-col items-center text-white text-center">
        <h2 className="text-2xl mb-3 font-bold"> Start creating your unique  images</h2>

        <p className="text-sm mb-3">Lorem ipsum, dolor sit amet lankg eoopwqew consectetur adipisicing elit. Sapiente, neque.</p>

        <button className="bg-[#fcabff] text-black w-32 h-12 rounded-full text-sm ">Get started</button>
      </div>
    </div>
  );
};
