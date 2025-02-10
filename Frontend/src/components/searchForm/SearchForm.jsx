// Icons
import { BsSearch, BsSliders } from "react-icons/bs"

export default function SearchForm() {
  return (
    <div className=" mb-6 md:mb-2 ">
        <form className="bg-[#fff] w-full h-[3rem] border border-secundary flex items-center text-zinc-500 pr-4 pl-4 rounded-md h-10">
            <BsSearch className="text-xl mr-4 "/>
            <input type="text" className="bg-transparent p-1 select-none outline-none text-sm grow" placeholder="Search" />
            <BsSliders className="ml-2 text-xl"/>
        </form>
    </div>
  )
}
