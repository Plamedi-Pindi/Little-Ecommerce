export default function Hero() {
  return (
    <div className="w-full mb-6 ">
      <div className="w-full h-40 screen-500:h-48 flex flex-col justify-center bg-gradient-to-r from-[#012a4a] to-[#61a5c2]  rounded-xl text-white relative">

        <div className="bg-zinc-400/40 backdrop-blur-sm w-36 h-10  rounded-r-full text-sm relative top-3 flex items-center justify-center mb-6">
          <p> Promoção especial</p>
        </div>

        <div className="ml-4 mb-4">
          <h2 className="text-lg font-bold">50% de Disconto</h2>
        </div>

        <button className="text-sm bg-yellow-600/90 text-white w-32  p-1 ml-4 rounded-md text-center">
            Comprar agora
        </button>
      </div>
    </div>
  );
}
