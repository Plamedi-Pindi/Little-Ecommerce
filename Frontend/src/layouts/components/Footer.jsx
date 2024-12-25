import { BsWhatsapp, BsFacebook, BsTelephone } from "react-icons/bs";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="w-full h-80 bg-details/30 rounded-t-[2rem] mt-4 relative pt-8">

      {/* Footer Body */}
      <div className="text-sm text-zinc-700 pr-4 pl-4 pt-3 border-t flex justify-between screen-500:w-[90%] block m-auto ">
        <div className=" ">
          <h2 className="font-bold text-details">Contatos</h2>

          <ul className="">
            <li className="mt-2.5 flex items-center">
              <BsWhatsapp className="text-lg mr-2 text-details" />
              WhatsApp
            </li>
            <li className="mt-2.5 flex items-center">
              <BsFacebook className="text-lg mr-2 text-details" />
              Facebook
            </li>
            <li className="mt-2.5 flex items-center">
              <BsTelephone className="text-lg mr-2 text-details" />
              +244 926477947
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="font-bold text-details">Mais Opções</h2>
          <ul className="">
            <li className="mt-2 hover:text-details">Home</li>
            <li className="mt-2 hover:text-details">Sobre</li>
            <li className="mt-2 hover:text-details">Serviços</li>
          </ul>
        </div>
      </div>

      <div className="w-full z-[1] absolute  bottom-0 right-0  ">
        {/* Cards */}
        <div className="w-full h-[2rem] bg-white flex items-center justify-center pl-2 pr-2 ">
          <img src="/paypal.png" className="h-full mr-3" />
          <img src="/multicaixa.png" className=" w-32" />
        </div>

        {/* copyright  */}
        <div className="w-full h-[2.5rem] flex justify-center items-center  bg-black/60">
          <p className="text-center">copyright &copy; {year} </p>
        </div>
      </div>
    </div>
  );
}
