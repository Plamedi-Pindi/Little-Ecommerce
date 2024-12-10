// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";
import "./product.css";

// Components
import LoveComponent from "../Rate/LoveComponent";

// Router
import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, imgUrl }) {
    const navigate = useNavigate();

  return (
    <div 
        onClick={()=> navigate('/produtos/detalhes')}
        className="ProductCard w-[8.5rem] sl:w-40 h-56 sl:h-60 bg-white shrink-0 rounded-xl mb-7 shadow-xl shadow-zinc-600/30 cursor-pointer"
    >
      {/* Product picture */}
      <div className="ProdCardShap w-full h-36 sl:h-40 rounded-xl bg-secundary clipInverse flex justify-center items-center p-2">
        <img src={imgUrl} alt={`Imagem do produto: ${title}`} className="w-[80%] h- mt-4" />
      </div>

      <div className="pl-2 pr-2 mt-2">
        <h3 className="text-base text-zinc-900 font-bold cursor-default">{title}</h3>

        <div className="flex items-center justify-between mt-1 text-[#7b4c2d] ">
          <p className="font-medium text-sm cursor-pointer">10.000,00kz</p>

          <LoveComponent size={'w-6 h-6'} font={'text-sm'}/>
        </div>
      </div>
    </div>
  );
}
