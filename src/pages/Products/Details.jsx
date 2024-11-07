//Component
import { NavigateBackHeader } from "../../layouts/components/Header";
import Section from "../../components/Section/Section";
import FlexContainer from "../../components/Containers/FlexContainer";
import Card from "../../components/Cards/Card";

// Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// icons
import { BsHeart, BsCheck2, BsBag, BsChatDots } from "react-icons/bs";

export default function Details() {
  const navigate = useNavigate();

  const handleBacktoClick = () => {
    navigate("/");
  };

  return (
    <div className="pb-12">
      <div className="w-full h-96 bg-zinc-500 pt-4 p-1 mb-4 clip ">
        <NavigateBackHeader
          color={"text-zinc-200"}
          backTo={handleBacktoClick}
        />
      </div>

      {/* Product Name */}
      <h3 className="pr-4 pl-4 -mt-10 w-60 mb-2 text-base font-medium text-neutral-600 ">
        Product name jwpejpfoef
      </h3>

      {/* Product Price */}
      <div className="pr-4 pl-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">10.000,00kz</h2>

        <div className="shadow-lg w-8 h-8 flex items-center justify-center rounded-full">
          <BsHeart className={`text-base `} />
        </div>
      </div>

      <div className="pr-4 pl-4 mt-6">
        <FlexContainer>
          <Circle size={"w-6 h-6"} background={"bg-rose-400"} margin={'mr-2.5'}/>
          <Circle size={"w-6 h-6"} background={"bg-pink-400"} margin={'mr-2.5'}/>
          <Circle size={"w-6 h-6"} background={"bg-blue-400"} margin={'mr-2.5'}/>
          <Circle size={"w-6 h-6"} background={"bg-yellow-400"} margin={'mr-2.5'}/>
        </FlexContainer>
      </div>

      <Section title={'Descrição'} box={'mt-5'}>
        <div className="text-sm text-justify text-neutral-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores amet quaerat. Quas praesentium nisi in iure saepe commodi impedit voluptas aperiam. Perspiciatis repellat debitis amet atque hic assumenda modi?</p>
        </div>
      </Section>

      <div className="pr-4 pl-4 fixed bottom-4 flex justify-between items-center  w-full">
        <div className="flex">
          <button className="bg-zinc-100 p-1 w-14 h-10 rounded-lg text-neutral-600 mr-5 flex items-center justify-center  ">
            <BsChatDots className="text-lg"/>
          </button>

          <button className="bg-zinc-100 p-1 w-14 h-10 rounded-lg text-neutral-600 flex items-center justify-center ">
            <BsBag className="text-lg"/>
          </button>
        </div>
        <button className="text-sm bg-neutral-700 text-white w-36 h-10 p-1 rounded-lg ">
          Adicionar à sacola
        </button>
      </div>
    </div>
  );
}

const Circle = ({ size, background, margin }) => {
  
  return (
    <div className= {`border border-blue-400 p-0.5 ${margin} rounded-full`} >
      <div className={`${size} ${background} rounded-full flex items-center justify-center text-white`}>
        <BsCheck2 />
      </div>
    </div>
  );
};
