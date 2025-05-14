// Components
import Header from "../../layouts/components/Header";
import CardItem from "./components/CardItem";
import CardList from "./components/cardList";
import Footer from "../../layouts/components/Footer";
import { FormatCurrency } from "../../utils/Currency";
import { Success } from "../../components/Alerts/Success";

// Hooks
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

// Route
import { useNavigate } from "react-router-dom";

export default function Cart({ toggle, toggleVisibility }) {
  const [statistic, setStatistic] = useState({
    total: 0,
    abanos: 0,
    lencos: 0,
    quantity: 0,
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [sucessAlertStatus, setSucessAlertStatus] = useState(false);

  const navigate = useNavigate();

  const { cart, removeFromCart } = useCart();

  // Function to calculate data from api
  useEffect(() => {
    let calculo = 0;
    let abano = 0;
    let lenco = 0;
    let qtd = 0;

    cart.map((item) => {
      calculo += item.quantity * item.price;
      if (item.type === "Abano") {
        abano += item.quantity;
      }
      if (item.type === "Lenco") {
        lenco += item.quantity;
      }

      qtd = lenco + abano;
    });

    setStatistic({
      ...statistic,
      lencos: lenco,
      abanos: abano,
      total: calculo,
      quantity: qtd,
    });

    return () => {
      abano = 0;
      lenco = 0;
      calculo = 0;
      qtd = 0;
    };
  }, [cart]);

//  Functio to remove item from Cart
  const handleSucessAlert = (id) => {
    removeFromCart(id);                                     // Remove item from cart

    setAlertMessage("O item foi eliminado com sucesso!");  // Set the alert message
    setSucessAlertStatus(true);                            // set alert to be displayed

    setTimeout(() => {                                     // set timeout to hidde the alert component
      setSucessAlertStatus(false)
    }, 2500);
  }
  

  return (
    <div className="h-screen overflow-y-auto relative bg-primary overflow-hidden">
      {/* header */}
      <Header toggle={toggle} toggleVisibility={toggleVisibility} />

      {/* Alert */}
      <Success message={alertMessage} state={sucessAlertStatus} />

      {/* Bradcramb */}
      <section className="w-full bg-details2 p-3">
        <h1 className="text-center text-lg font-bold mb-1">Carrinho</h1>

        <ul className="flex items-center justify-center text-sm italic bradcramb">
          <li onClick={() => navigate("/")}>Home</li>
          <span className="ml-2 mr-2">/</span>
          <li className="text-details">Carrinho</li>
        </ul>
      </section>

      <section className="pr-4 pl-4 w-full mt-5">
        <CardList>
          {cart.length == 0 ? (
            <>
              <div className="flex h-40 flex-col items-center justify-center text-center bg-red-300/50 p-2">
                <h2 className="text-lg font-bold">
                  Opss 😅, O teu carrinho está vaizio!
                </h2>
                <p>Seleciona produtos para o carrinho. </p>
                <p className="text-blue-600 mt-2">👉👉 Página de produtos</p>
              </div>
            </>
          ) : (
            cart.map((item) => {
              const { id, image, productName } = item;
              return (
                <CardItem
                  key={id}
                  price={20000}
                  imgUrl={image}
                  name={productName}
                  id={id}
                  onClick={()=> handleSucessAlert(id)}
                />
              );
            })
          )}
        </CardList>
      </section>

      <section className="pr-4 pl-4 pt-3 pb-8 mt-10 mb-[4rem] w-[17rem] screen-350:w-[21rem] mt-5 m-auto bg-white rounded min-h-[12rem]   ">
        <h2 className="text-center text-lg font-medium mb-6">Resumo</h2>
        <ul className=" ">
          <li className="flex justify-between border-b border-details2/80 pb-2 mb-3">
            <h2 className="text-sm font-bold text-zinc-700">Total:</h2>
            <p className="text-sm">{FormatCurrency(statistic.total)} </p>
          </li>
          <li className="flex justify-between border-b border-details2/80 pb-3 mb-3">
            <h2 className="text-sm font-bold text-zinc-700">Lenços:</h2>
            <p className="text-sm">{statistic.lencos}</p>
          </li>
          <li className="flex justify-between border-b border-details2/80 pb-3 mb-3">
            <h2 className="text-sm font-bold text-zinc-700">Abanos:</h2>
            <p className="text-sm">{statistic.abanos}</p>
          </li>
          <li className="flex justify-between border-b border-details2/80 pb-3 mb-3">
            <h2 className="text-sm font-bold text-zinc-700">Qtd:</h2>
            <p className="text-sm">{statistic.quantity}</p>
          </li>
        </ul>
        <button className="w-full h-[3rem] mt-5 h-8 block text-center text-white text-sm font-bold m-auto bg-green-600 rounded-md">
          Finalizar Compra
        </button>
      </section>

      <Footer />
    </div>
  );
}
