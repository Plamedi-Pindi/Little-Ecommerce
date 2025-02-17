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
  imgWidth,
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
      className={`ProductCard bg-white shrink-0 rounded-xl mb-7 shadow-xl shadow-zinc-600/30 cursor-pointer ${width} ${height} ${margin} w-48 screen-830:w-[14rem] screen-930:w-[16rem] screen-1200:w-[18rem]  h-64 screen-830:h-[20rem] screen-930:h-[22rem] screen-1200:h-[22rem] screen-1200:mr-8 screen-930:mr-3   `}
    >
      {/* Product picture */}
      <div
        className={`ProdCardShap w-full overflow-hidden  rounded-xl bg-secundary clipInverse flex justify-center items-center   h-44 screen-830:h-[13rem] screen-930:h-[15rem] screen-1200:h-[13rem]`}
      >
        <img
          src={imgUrl}
          alt={`Imagem do produto: ${title}`}
          className={`  ${imgWidth} h-full rounded-t-xl object-cover `}
        />
      </div>

      {/* TITLE */}
      <div className="pl-2 pr-2 mt-2 screen-830:p-1 screen-830:pl-4 screen-830:pr-4 ">
        <h3 className="text-sm text-zinc-800 font-bold cursor-default screen-830:mb-1">
          {title}
        </h3>

        {/* CONTENT */}
        <div className="flex items-center justify-between text-[#7b4c2d] ">
          <div className="">
            <p className="font-medium text-sm screen-830:text-sm cursor-pointer  "> {formatCurrency(price)} </p>
            <span className="text-xs screen-830:text-sm text-zinc-400 -mt-0.5 block line-through">
              {" "}
              {formatCurrency(oldPrice)}{" "}
            </span>
          </div>

          <LoveComponent size={"w-6 h-6 screen-830:w-8 screen-830:h-8"} font={"text-sm screen-830:text-base"} />
        </div>
      </div>
    </div>
  );
}
