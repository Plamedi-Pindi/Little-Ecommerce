export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="w-full h-80 bg-details/30 rounded-t-[2rem] mt-40 relative ">
      <div></div>

      <div className="w-full  absolute  bottom-0 right-0  ">

        {/* Cards */}
      <div className="w-full h-[3rem] bg-white flex items-center justify-center pl-2 pr-2 ">
        <img src="paypal.png" className="h-full mr-3" />
        <img src="multicaixa.png" className=" w-48" />
      </div>

        {/* copyright  */}
        <div className="w-full h-[2.5rem] flex justify-center items-center  bg-black/60">
          <p className="text-center">copyright &copy; {year} </p>
        </div>
      </div>
    </div>
  );
}
