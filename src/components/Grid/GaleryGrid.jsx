
export default function GaleryGrid() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-2 h-60">
        <div className="rounded-lg bg-zinc-300 row-span-2">1</div>
        <div className="rounded-lg bg-zinc-300 row-span-1 ">2</div>
        <div className="rounded-lg bg-zinc-300 row-span-1">3</div>
        <div className="rounded-lg bg-zinc-300 row-span-2">4</div>
        <div className="rounded-lg bg-zinc-300 row-span-2">5</div>
        <div className="rounded-lg bg-zinc-300 row-span-1 ">6</div>
    </div>
  )
}
