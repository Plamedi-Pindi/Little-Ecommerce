// Components
import Header from "../../layouts/components/Header";
import CardItem from "./components/CardItem";
import CardList from "./components/cardList";

// Hooks
import { useCart } from "../../contexts/CartContext";

// CardList
const productCardList = [
  { id: 1, image: "https://i.imgur.com/aYkGwXX.jpg" },
  { id: 2, image: "https://i.imgur.com/cbMYsnY.jpg" },
  { id: 3, image: "/3.webp" },
  { id: 4, image: "https://i.imgur.com/pkjzKdF.jpg" },
];

export default function Cart({ toggle, toggleVisibility }) {
  const {cart} = useCart();
  const quantity = cart.length;


  return (
    <div className="h-screen overflow-y-auto relative bg-primary overflow-hidden">
      {/* header */}
      <Header toggle={toggle} toggleVisibility={toggleVisibility} />

      <section className="pr-4 pl-4 w-full mt-5">
        <CardList>
          {cart.map((item, index) => {
            const { id, image } = item;
            return (
              <CardItem
                key={id}
                price={20000}
                imgUrl={image}
                name={"Nome do produto"}
                id={id}
              />
            );
          })}
        </CardList>
      </section>

      <section className="pr-4 pl-4 w-[17rem] screen-350:w-[21rem] mt-5 m-auto bg-white rounded h-[12rem] pt-3 ">
        <h2 className="text-center text-font-base font-medium mb-3">Resumo</h2>
        <ul className=" ">
          <li className="flex justify-between border-b border-details2/60 pb-2 mb-2">
            <h2 className="text-sm font-bold text-zinc-700">Total</h2>
            <p className="text-sm">230000</p>
          </li>
          <li className="flex justify-between border-b border-details2/60 pb-2">
            <h2 className="text-sm font-bold text-zinc-700">Qtd. Itens</h2>
            <p className="text-sm">{quantity}</p>
          </li>
        </ul>
        <button className="w-full mt-5 h-8 block text-center text-white text-sm font-bold m-auto bg-green-600 rounded-md">Finalizar Compra</button>
      </section>
    </div>
  );
}
