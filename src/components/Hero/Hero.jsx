export default function Hero() {
  return (
    <div className="w-full pl-4 pr-4 mb-6">
      <div className="w-full h-40 bg-zinc-600 rounded-xl text-white relative">
        <div className="bg-zinc-400/50 backdrop-blur-sm w-36 h-10  rounded-r-full text-sm relative top-5 flex items-center justify-center mb-8">
          <p> Promoção especial</p>
        </div>

        <div className="ml-4 mb-4">
          <h2 className="text-lg font-bold">50% de Disconto</h2>
        </div>

        <button className="text-sm bg-white w-32 text-zinc-700 p-1 ml-4 rounded-md text-center">
            Comprar agora
        </button>
      </div>
    </div>
  );
}
