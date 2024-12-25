// Components
import LoveComponent from "../Rate/LoveComponent";

// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";


// Router
import { useNavigate } from "react-router-dom";

export default function PupularProduct({
  title,
  imgUrl,
  margin,
  price,
  oldPrice,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/produtos/detalhes")}
      className={`ProductCard bg-white shrink-0 rounded-xl mb-3 shadow-xl shadow-zinc-600/30  cursor-pointer ${margin} flex items-center  w-full h-20 screen-630:w-[48%] `}
    >
      {/* Product picture */}
      <div
        className={`ProdCardShap w-20 h-full  rounded-l-xl bg-secundary flex justify-center items-center p-2 mr-3 `}
      >
        <img
          src={imgUrl}
          alt={`Imagem do produto: ${title}`}
          className={`  w-[80%] h-full object-cover`}
        />
      </div>

      {/* TITLE */}
      <div className="pl-2 pr-2 ">
        <h3 className="text-base text-zinc-800 font-bold cursor-default">
          {title}
        </h3>

        {/* CONTENT */}
        <div className="flex items-center justify-between text-[#7b4c2d] ">
          <div className="">
            <p className="font-medium text-sm cursor-pointer  "> {price} </p>
            <span className="text-xs text-zinc-400 -mt-0.5 block line-through"> {oldPrice} </span>
          </div>

          <LoveComponent size={"w-6 h-6"} font={"text-sm"} />
        </div>
      </div>
    </div>
  );
}