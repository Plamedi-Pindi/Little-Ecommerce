export default function GaleryGrid() {
  return (
    <div className="grid grid-rows-5 grid-cols-3 grid-flow-col gap-2 h-[25rem] ">

      <div className="rounded-lg bg-zinc-300 row-span-3 relative">
        <img
          src="2.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>

      <div className="rounded-lg bg-zinc-300 row-span-2 relative">
        <img
          src="3.webp"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>

      <div className="rounded-lg bg-zinc-300 row-span-2 relative">
        <img
          src="5.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>

      <div className="rounded-lg bg-zinc-300 row-span-3 relative">
        <img
          src="4.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>

      <div className="rounded-lg bg-zinc-300 row-span-3 relative">
        <img
          src="3.webp"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>

      <div className="rounded-lg bg-zinc-300 row-span-2 relative overflow-hidden">
        <img
          src="5.jpg"
          className="object-cover w-full h-full rounded-lg "
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
      
    </div>
  );
}
