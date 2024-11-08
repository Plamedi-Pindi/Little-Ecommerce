// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Router
import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, isLoved }) {
    const navigate = useNavigate();

  return (
    <div 
        onClick={()=> navigate('/produtos/detalhes')}
        className="w-40 h-60 bg-neutral-200 shrink-0 rounded-xl mb-7 shadow-xl shadow-zinc-600/30"
    >
      <div className="w-full h-40 rounded-xl bg-zinc-400 clipInverse"></div>

      <div className="pl-2 pr-2 mt-2">
        <h3 className="text-sm text-zinc-900 font-bold">{title}</h3>

        <div className="flex items-center justify-between mt-2 text-zinc-900">
          <p className="font-bold text-sm">10.000,00kz</p>

          {isLoved ? (
            <BsHeartFill className={`text-base text-orange-400 `} />
          ) : (
            <BsHeart className={`text-base `} />
          )}
        </div>
      </div>
    </div>
  );
}
