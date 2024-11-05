

export default function Section({title, children, allOption}) {
  return (
    <section className="pl-4 pr-4 mb-6">
        <div className="flex justify-between items-center text-zinc-700 mb-3">
            <h2 className="text-lg font-bold"> {title} </h2>

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
