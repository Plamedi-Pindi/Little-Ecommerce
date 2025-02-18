// Components
import Header from "../../../layouts/components/Header";
import ProductCard from "../../../components/Cards/ProductCard";
import Produtos from "../../../../public/data/Produtos.json";

// Route
import { useNavigate } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

export default function Shop({ toggleVisibility, toggle }) {
  const navigate = useNavigate(); // Navigate function
  const [filter, setFilter] = useState("Lenco"); // ["Lenco", "Abano"]
  const [productsList, setProductsList] = useState([]);

  const Lencos = productsList.filter((item) => item.type === "Lenco");
  const Abanos = productsList.filter((item) => item.type === "Abano");

  const isLencoFilter = filter === "Lenco";
  const isAbanoFilter = filter === "Abano";

  // Function to Filter Lencos
  const handleLencoClick = () => {
    setFilter("Lenco");
  };

  //    Function to Filter Abanos
  const handleAbanoClick = () => {
    setFilter("Abano");
  };

  // Getting Products from API ==========================
  useEffect(() => {
    // fetch("http://localhost:5173/public/data/produtos.json")
    //   .then((response) => response.json())
    //   .then(setProducstList);
    setProductsList(Produtos);
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto relative bg-primary overflow-hidden">
      <div className="w-full">
        {/* Heading */}
        <Header toggle={toggle} toggleVisibility={toggleVisibility} />

        {/* Bradcramb */}
        <section className="w-full bg-details2 p-3">
          <h1 className="text-center text-lg font-bold mb-1">
            Grade de Produtos
          </h1>

          <ul className="flex items-center justify-center text-sm italic bradcramb ">
            <li onClick={() => navigate("/")}>Home</li>
            <span className="ml-2 mr-2">/</span>
            <li className="text-details">Loja</li>
          </ul>
        </section>
      </div>

      {/* Filter Start */}
      <ul className="w-full flex items-center justify-center mt-4 text-sm">
        {/* Lenco Filter */}
        <li onClick={handleLencoClick} className="mr-4 flex items-center">
          <input
            type="checkbox"
            className="block mr-2"
            checked={isLencoFilter}
            readOnly
          />
          <span className="block">Lenços</span>
        </li>

        {/* Abano Filter */}
        <li onClick={handleAbanoClick} className=" flex items-center">
          <input
            type="checkbox"
            className="block mr-2"
            checked={isAbanoFilter}
            readOnly
          />
          <span className="block">Abanos</span>
          Abanos
        </li>
      </ul>
      {/* Filter End */}

      {/* Product Grid Start*/}
      <div className="flex flex-wrap justify-center items-center mt-8 pl-4 pr-4 space-x-2 screen-430:space-x-1 screen-438:space-x-3 ">
        {/* Lencos */}
        {isLencoFilter &&
          Lencos.map((lenco) => {
            return (
              <div key={lenco.id} className="">
                <ProductCard
                  imgUrl={lenco.image}
                  imgWidth="w-[100%]"
                  title={lenco.name}
                  price={lenco.price}
                  oldPrice={lenco.oldPrice}
                  id={lenco.id}
                />
              </div>
            );
          })}

        {isAbanoFilter &&
          Abanos.map((abano) => {
            return (
              <div key={abano.id}>
                <ProductCard
                  imgUrl={abano.image}
                  imgWidth="w-[100%]"
                  title={abano.name}
                  price={abano.price}
                  oldPrice={abano.oldPrice}
                  id={abano.id}
                />
              </div>
            );
          })}
      </div>
      {/* Product Grid End*/}
    </div>
  );
}
