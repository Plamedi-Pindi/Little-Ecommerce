
export default function BenefitShowComponent({desc, title}) {
  return (
    <div className="bg-white shadow-lg w-48 h-56 p-2 rounded-xl flex flex-col items-center shrink-0 relative">
        <img src="1.png" className="absolute  top-0 left-0 w-full h-full object-cover rounded-xl opacity-60"/>

        <div className="bg-zinc-400 w-[4rem] h-[4rem] z-10 mb-3 mt-2 rounded-full">

        </div>
        <h2 className="text-sm text-center font-medium text-zinc-700 z-10 mb-2">{title}</h2>

        <p className="text-center text-sm text-zinc-500 z-10">{desc}</p>
    </div>
  )
}
