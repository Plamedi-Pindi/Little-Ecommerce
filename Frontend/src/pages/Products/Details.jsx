//Component
import { NavigateBackHeader } from "../../layouts/components/Header";
import Section from "../../components/Section/Section";
import FlexContainer from "../../components/Containers/FlexContainer";
import LoveComponent from "../../components/Rate/LoveComponent";
import Products from "../../../public/data/Produtos.json";
import Header from "../../layouts/components/Header";

// Utils
import { FormatCurrency } from "../../utils/Currency";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

// icons
import { BsCheck2, BsCartPlus } from "react-icons/bs";

// CSS
import "./Details.css";

// Component for Other images rendering
const OtherImagesCard = ({ imgUrl, onClick }) => {
  return (
    <div onClick={onClick} className="w-14 h-14 bg-green-400 rounded-lg mb-2">
      <img className="rounded-lg object-cover w-full h-full" src={imgUrl} />
    </div>
  );
};

// MAIN FUNCTION
export default function Details() {
  const [colorIndex, setColorIndex] = useState(0); // State for color index
  const [mainImage, setMainImage] = useState("/2.jpg"); // State for Main image rendering
  const [isOnCart, setIsOnCart] = useState(false);

  const { addToCart } = useCart();

  // Function to navigate to another page
  const navigate = useNavigate();

  const { id } = useParams();

  let product = {};
  Products.filter((item) => item.id === parseInt(id)).map(
    (item) => (product = item)
  );

  const handleAddToCart = () => {
    const newPedido = {
      id: product.id,
      productName: product.name,
      image: product.image,
      quantity: 1,
      price: product.price,
      type: product.type,
    };

    addToCart(newPedido);
  };

  // List of products colors
  const color = ["bg-rose-400", "bg-pink-400", "bg-blue-400", "bg-yellow-400"];

  // List of other images
  const imagesList = [
    "/3.webp",
    "/2.jpg",
    "https://i.imgur.com/pkjzKdF.jpg",
    "https://i.imgur.com/aYkGwXX.jpg",
  ];

  // Function to change the main image rendered
  const handleCangeMainImage = (newImage) => {
    setMainImage(newImage);
  };

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
      <Header />
      <section className="w-full bg-details2 p-3">
        <h1 className="text-center text-lg font-bold mb-1">Detalhes do produto</h1>

        {/* Bradcramb */}
        <ul className="flex items-center justify-center text-sm italic bradcramb">
          <li onClick={() => navigate("/")}>Home</li>
          <span className="ml-2 mr-2">/</span>
          <li className="text-details">Detalhes</li>
        </ul>
      </section>

      <div className="w-full h-96 bg-secundary pt-4 p-1 mb-4 clip ">
        {/* Nav */}
        {/* <NavigateBackHeader
          color={"text-zinc-200"}
          backTo={handleBacktoClick}
        /> */}

        {/* Product Image display Start */}
        <div className=" w-full h-80 flex flex-row justify-between pr-4 pl-4">
          {/* Other Images */}
          <div className="h-56 overflow-y-scroll  overflow-hidden scrollBarVisibility">
            {imagesList.map((image, index) => {
              return (
                <OtherImagesCard
                  key={index}
                  imgUrl={image}
                  onClick={() => handleCangeMainImage(image)}
                />
              );
            })}
          </div>
          {/* Product Image display End */}

          {/* Main Image */}
          <div className=" h-60">
            <img
              src={product.image}
              alt="Product image"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Product Name */}
      <h3 className="pr-4 pl-4 -mt-10 w-60 mb-2 text-base font-medium text-neutral-600 ">
        {product.name}
      </h3>

      <div className="pr-4 pl-4 flex justify-between items-center">
        {/* Product Price */}
        <h2 className="text-lg font-bold"> {FormatCurrency(product.price)} </h2>

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
      <Section title={"Descrição"} box={"mt-5"} iconVisibility={"hidden"}>
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
        <button
          onClick={handleAddToCart}
          className="text-sm bg-neutral-700 text-white w-40 h-10 p-1 rounded-lg flex items-center justify-center"
        >
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
