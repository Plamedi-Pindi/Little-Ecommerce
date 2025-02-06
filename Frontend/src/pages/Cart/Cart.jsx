// Components
import Header from "../../layouts/components/Header";
import CardItem from "./components/CardItem";
import CardList from "./components/cardList";

// Hooks
import { useState } from "react";

// CardList
const productCardList = [
  { id: 1, image: "https://i.imgur.com/aYkGwXX.jpg" },
  { id: 2, image: "https://i.imgur.com/cbMYsnY.jpg" },
  { id: 3, image: "/3.webp" },
  { id: 4, image: "https://i.imgur.com/pkjzKdF.jpg" },
];

export default function Cart({ toggle, toggleVisibility }) {
  const [cardList, setCardList] = useState(productCardList);

  // Function to remove an item from the cardList
  const removeCardItem = (item) => {
    let newList = cardList.filter((product) => product.id != item);
    setCardList(newList);
  };

  return (
    <div className="h-screen">
      {/* header */}
      <Header toggle={toggle} toggleVisibility={toggleVisibility} />

      <section className="pr-4 pl-4 w-full mt-5">
        <CardList>
          {cardList.map((item, index) => {
            const { id, image } = item;
            return (
              <CardItem
                key={item.id}
                price={20000}
                imgUrl={image}
                name={"Nome do produto"}
                removeItem={() => removeCardItem(item.id)}
              />
            );
          })}
          {/* <CardItem price={20000} imgUrl={"/3.webp"} name={'Nome do produto'}/> */}
        </CardList>
      </section>
    </div>
  );
}
