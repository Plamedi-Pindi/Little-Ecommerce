//Component
import { NavigateBackHeader } from "../../layouts/components/Header";
import Section from "../../components/Section/Section";
import FlexContainer from "../../components/Containers/FlexContainer";
import LoveComponent from "../../components/Rate/LoveComponent";
import Footer from "../../layouts/components/Footer";

// Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// icons
import { BsCheck2, BsCartPlus } from "react-icons/bs";

const color = ["bg-rose-400", "bg-pink-400", "bg-blue-400", "bg-yellow-400"];

// MAIN FUNCTION
export default function Details() {
  const [colorIndex, setColorIndex] = useState(0); // State for color index
  const navigate = useNavigate();

  // Function to navigate to the home page
  const handleBacktoClick = () => {
    navigate("/");
  };

  // Function to change the product color
  const handleProductColorClick = (index) => {
    setColorIndex(index);
  };

  return (
    <div className="w-full h-screen overflow-y-auto  bg-primary pb-12">
      <div className="w-full h-96 bg-secundary pt-4 p-1 mb-4 clip ">
        <NavigateBackHeader
          color={"text-zinc-200"}
          backTo={handleBacktoClick}
        />
      </div>

      {/* Product Name */}
      <h3 className="pr-4 pl-4 -mt-10 w-60 mb-2 text-base font-medium text-neutral-600 ">
        Product name jwpejpfoef
      </h3>

      <div className="pr-4 pl-4 flex justify-between items-center">
        {/* Product Price */}
        <h2 className="text-lg font-bold">10.000,00kz</h2>

        {/* Render icon to display whether the Product is licked or not */}
        <LoveComponent size={"w-8 h-8"} font={"text-base"} />
      </div>

      {/* Render product different color */}
      <div className="pr-4 pl-4 mt-6">
        <FlexContainer>
          {color.map((color, i) => (
            <Circle
              key={i}
              size={"w-6 h-6"}
              background={color}
              margin={"mr-2.5"}
              isClicked={colorIndex === i}
              onclick={() => handleProductColorClick(i)}
            />
          ))}
        </FlexContainer>
      </div>

      {/* Render the product Description  */}
      <Section title={"Descrição"} box={"mt-5"}>
        <div className="text-sm text-justify text-neutral-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            asperiores amet quaerat. Quas praesentium nisi in iure saepe commodi
            impedit voluptas aperiam. Perspiciatis repellat debitis amet atque
            hic assumenda modi?
          </p>
        </div>
      </Section>

      <div className="pr-4 pl-4 z-[10] fixed bottom-4 flex justify-end items-center  w-full">
        <button className="text-sm bg-neutral-700 text-white w-40 h-10 p-1 rounded-lg flex items-center justify-center">
          <BsCartPlus className="mr-2 text-base" />
          <span>Adicionar à sacola</span>
        </button>
      </div>

      {/* Footer */}
      {/* <Footer></Footer> */}
    </div>
  );
}

// Component to Render the circle shape tha going to display de product color
const Circle = ({ size, background, margin, onclick, isClicked }) => {
  return (
    <div
      onClick={onclick}
      className={` ${
        isClicked ? " border-blue-400" : "border-white"
      } border p-0.5 ${margin} rounded-full`}
    >
      <div
        className={`${size} ${background} rounded-full flex items-center justify-center text-white`}
      >
        {/* Render Check icon while the component is clicked */}
        {isClicked && <BsCheck2 />}
      </div>
    </div>
  );
};
