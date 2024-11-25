export default function GaleryGrid() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-2 h-60">
      <div className="rounded-lg bg-zinc-300 row-span-2 relative">
        <img
          src="https://i.imgur.com/enLZSF4.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
      <div className="rounded-lg bg-zinc-300 row-span-1 relative">
        <img
          src="https://i.imgur.com/4IZC5G8.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
      <div className="rounded-lg bg-zinc-300 row-span-1 relative">
        <img
          src="https://i.imgur.com/ZXabLM9.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
      <div className="rounded-lg bg-zinc-300 row-span-2 relative">
        <img
          src="https://i.imgur.com/CqOf6lv.png"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
      <div className="rounded-lg bg-zinc-300 row-span-2 relative">
        <img
          src="https://i.imgur.com/g5UVY2j.jpg"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
      <div className="rounded-lg bg-zinc-300 row-span-1 relative overflow-hidden">
        <img
          src="https://i.imgur.com/oOFP0dn.jpg"
          className="object-cover w-full h-full rounded-lg "
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-50% z-[1] bottom-0 rounded-lg "></div>
      </div>
    </div>
  );
}
