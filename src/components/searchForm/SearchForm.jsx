// Icons
import { BsSearch, BsSliders } from "react-icons/bs"

export default function SearchForm() {
  return (
    <div className="pr-4 pl-4 mb-6">
        <form className="bg-white w-full flex items-center text-zinc-500 pr-4 pl-4 rounded-md h-10">
            <BsSearch className="text-xl mr-4 "/>
            <input type="text" className="bg-transparent p-1 outline-none text-sm grow" placeholder="Search" />
            <BsSliders className="ml-2 text-xl"/>
        </form>
    </div>
  )
}
