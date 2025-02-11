// Components
import LoveComponent from "../Rate/LoveComponent";

// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Router
import { useNavigate,  } from "react-router-dom";

export default function PupularProduct({
  title,
  imgUrl,
  margin,
  price,
  oldPrice,
  id
}) {
  const navigate = useNavigate();
  

    // Currency Formatation Function
    const formatCurrency = (value)=>{
      return new Intl.NumberFormat("pt-AO", {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: 2,
      }).format(value);
    }
  

  return (
    <div
      onClick={() => navigate(`/produtos/detalhes/${id}`)}
      className={`ProductCard bg-white shrink-0 rounded-xl mb-3 shadow-xl shadow-zinc-600/30  cursor-pointer ${margin} flex items-center  w-full h-20 screen-630:w-[48%] screen-830:w-[32%] `}
    >
      {/* Product picture */}
      <div
        className={`ProdCardShap w-20 h-full  rounded-l-xl bg-secundary flex justify-center items-center p- mr-3 `}
      >
        <img
          src={imgUrl}
          alt={`Imagem do produto: ${title}`}
          className={`  w-[100%] h-full object-cover rounded-l-xl `}
        />
      </div>

      {/* TITLE */}
      <div className="pl-2 pr-2  w-[70%]">
        <h3 className="text-base text-zinc-800 font-bold cursor-default">
          {title}
        </h3>

        {/* CONTENT */}
        <div className="flex items-center  justify-between text-[#7b4c2d] ">
          <div className="">
            <p className="font-medium text-sm cursor-pointer  "> {formatCurrency(price)} </p>
            {/* <span className="text-xs text-zinc-400 -mt- block line-through"> {formatCurrency(oldPrice)} </span> */}
          </div>

          <LoveComponent size={"w-6 h-6"} font={"text-sm"} />
        </div>
      </div>
    </div>
  );
}
