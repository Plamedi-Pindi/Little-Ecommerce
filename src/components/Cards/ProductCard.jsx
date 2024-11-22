// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Components
import LoveComponent from "../Rate/LoveComponent";

// Router
import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, isLoved }) {
    const navigate = useNavigate();

  return (
    <div 
        onClick={()=> navigate('/produtos/detalhes')}
        className=" w-[8.5rem] sl:w-40 h-56 sl:h-60 bg-neutral-200 shrink-0 rounded-xl mb-7 shadow-xl shadow-zinc-600/30"
    >
      <div className="w-full h-36 sl:h-40 rounded-xl bg-zinc-400 clipInverse"></div>

      <div className="pl-2 pr-2 mt-2">
        <h3 className="text-sm text-zinc-900 font-bold">{title}</h3>

        <div className="flex items-center justify-between mt-2 text-zinc-900">
          <p className="font-bold text-sm">10.000,00kz</p>

          <LoveComponent size={'w-6 h-6'} font={'text-sm'}/>
        </div>
      </div>
    </div>
  );
}
