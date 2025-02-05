// icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

import "./Product.css";

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
      onClick={() => navigate("/produtos/detalhes")}
      className={`ProductCard bg-white shrink-0 rounded-xl mb-7 shadow-xl shadow-zinc-600/30 cursor-pointer ${width} ${height} ${margin}`}
    >
      {/* Product picture */}
      <div
        className={`ProdCardShap w-full overflow-hidden  rounded-xl bg-secundary clipInverse flex justify-center items-center p- ${CardDesignHeight}`}
      >
        <img
          src={imgUrl}
          alt={`Imagem do produto: ${title}`}
          className={` mt- ${imgWidth} h-full rounded-t-xl object-cover `}
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
            <p className="font-medium text-sm cursor-pointer  "> {formatCurrency(price)} </p>
            <span className="text-xs text-zinc-400 -mt-0.5 block line-through">
              {" "}
              {formatCurrency(oldPrice)}{" "}
            </span>
          </div>

          <LoveComponent size={"w-6 h-6"} font={"text-sm"} />
        </div>
      </div>
    </div>
  );
}
