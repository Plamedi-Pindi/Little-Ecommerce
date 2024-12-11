// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";
import "./product.css";

// Components
import LoveComponent from "../Rate/LoveComponent";

// Router
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  title,
  imgUrl,
  width,
  height,
  margin,
  CardDesignHeight,
  imgWidth,
  price,
  oldPrice,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/produtos/detalhes")}
      className={`ProductCard bg-white shrink-0 rounded-xl mb-7 shadow-xl shadow-zinc-600/30 cursor-pointer ${width} ${height} ${margin}`}
    >
      {/* Product picture */}
      <div
        className={`ProdCardShap w-full  rounded-xl bg-secundary clipInverse flex justify-center items-center p-2 ${CardDesignHeight}`}
      >
        <img
          src={imgUrl}
          alt={`Imagem do produto: ${title}`}
          className={` mt-4 ${imgWidth} `}
        />
      </div>

      {/* TITLE */}
      <div className="pl-2 pr-2 mt-2">
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
