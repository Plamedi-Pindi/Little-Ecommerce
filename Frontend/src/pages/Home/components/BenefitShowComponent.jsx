import { useState, useRef, useEffect } from "react";
import './BenefitShowComponent.css';

export default function BenefitShowComponent({ desc, title, imgUrl, imgDim }) {
  const [isImageLoad, setIsImageLoad] = useState(false);
  const [color, setColor] = useState("#ddd");

  const imageLoudRef = useRef(null);

  const handleImageLoadStart = () => {
    setIsImageLoad(true);
  };

  const handleImageLoadComplete = () => {
    setIsImageLoad(false);
  };

  const element = imageLoudRef.current;

  useEffect(() => {
    if (element && isImageLoad) {
      const childDivs = element.querySelectorAll("div");

      childDivs.forEach((child) => {
        child.style.background = color;
        child.style.transition = ".5s ";
      });
    }
  }, [color, isImageLoad]);

  useEffect(() => {
    // Function
    const loading = () => {
      if (isImageLoad) {
        setColor((prevColor) => (prevColor === "#ddd" ? "#eee" : "#ddd"));
      }
    };

    const interval = setInterval(() => {
      loading();
    }, 1000);

    return () => clearInterval(interval);
  }, [isImageLoad]);

  //
  let elemtens;

  if (isImageLoad) {
    elemtens = (
      <div
        ref={imageLoudRef}
        className="bg-white shadow-lg w-48 h-56 p-2 rounded-xl flex flex-col items-center shrink-0 relative"
      >
        <div className=" w-[4rem] h-[4rem] z-10 mb-3 mt-2 rounded-full"></div>

        <div className="w-[90%] h-3  mb-2 rounded-full"></div>

        <div className="w-[90%] h-20  mb-2 rounded-xl mt-4"></div>
      </div>
    );
  } else {
    elemtens = (
      <div className="Card bg-white shadow-lg w-48 h-56 p-2 rounded-xl flex flex-col items-center overflow-hidden shrink-0 relative">
        
        <img
          onLoadStart={handleImageLoadStart}
          onLoad={handleImageLoadComplete}
          src="1.png"
          className="absolute  top-0 left-0 w-full h-full object-cover rounded-xl opacity-20"
        />
        
        {/* Picture */}
        <div className="bg-[#d7e6e6] w-[4rem] h-[4rem] z-10 mb-3 mt-2 rounded-full flex justify-center items-center">
          <img src={imgUrl} className={`${imgDim}`} />
        </div>
        {/* Title */}
        <h2 className="text-sm text-center font-bold text-zinc-600 z-10 mb-2 cursor-default">
          {title}
        </h2>
        {/* Description */}
        <p className="text-center text-sm text-[#7b4c2d] z-10 cursor-default">{desc}</p>


          <div className="cardStyle bg-secundary   w-[4rem] h-[4rem]  absolute -bottom-10 -right-5  mb-3 mt-2 rounded-full"></div>
      </div>
    );
  }

  return elemtens;
}
