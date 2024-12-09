

export default function Section({title, children, allOption, box}) {
  return (
    <section className= {`pl-4 pr-4 mb-6 ${box}`} >
        <div className="flex justify-between items-center text-[#d7e6e6] mb-3">
            <h2 className="text-lg font-bold text-[#7b4c2d] "> {title} </h2>

            <button className="text-sm">
                {allOption}
            </button>
        </div>

        <div>
            {children}
        </div>
    </section>
  )
}
