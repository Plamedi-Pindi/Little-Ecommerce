import { BsWhatsapp, BsTelephone, BsFacebook } from "react-icons/bs";

export default function ServicesRequire() {
  return (
    <div className=" w-full h-60  bg-gradient-to-r from-[#012a4a] to-[#61a5c2]  relative mb-28   ">
      <div className=" p-2 h-full w-full flex justify-center items-center ">
        <div className="text-white ">
          <p className="text-xl text-center uppercase">Entre em contato</p>
          <h2 className="text-xl text-center uppercase">
            Solicite os nossos serviços
          </h2>

          {/* <button className="bg-yellow-600/90 w-52 h-10 block m-auto rounded-lg mt-5 text-lg">
            Iniciar conversa
          </button> */}
        </div>

        <div className="absolute flex gap-4 -bottom-8">
          <div className="w-16 h-16  shadow bg-white flex items-center hover:bg-details2  justify-center duration-300 hover:scale-105 hover:rounded-full">
            <BsWhatsapp className="text-2xl text-details " />
          </div>
          <div className="w-16 h-16  shadow bg-white flex items-center hover:bg-details2  justify-center duration-300 hover:scale-105 hover:rounded-full">
            <BsFacebook className="text-2xl text-details " />
          </div>
          <div className="w-16 h-16  shadow bg-white flex items-center hover:bg-details2 justify-center duration-300 hover:scale-105 hover:rounded-full">
            <BsTelephone className="text-2xl text-details " />
          </div>
        </div>
      </div>
    </div>
  );
}
