import { BsQuote } from "react-icons/bs";

export default function TestimunialCard({ imgUrls, desc, name, funct, center }) {
  return (
    <div className={`w-52 h-[17rem] p-3 bg-white overflow-hidden shadow-lg rounded-md relative shrink-0 ${center}`} >

      {/* Div stye 1  */}
      <div className="w-36 h-36 rounded-full bg-secundary absolute -top-20 -left-20"></div>

      {/* Quote icon */}
      <BsQuote className="absolute top-2 left-2 text-3xl text-white" />

      {/* Div style 2 */}
      <div className="absolute top-6 right-0 ">
        <div className="w-2 h-10 bg-details2"></div>
        <div className="w-2 h-10 bg-secundary"></div>
      </div>

     

      {/* Description */}
      <div className="  flex flex-col items-center text-sm text-center text-zinc-500 mt-12 ">
        <p className=""> {desc} </p>

        {/* Image */}
        <img
          src={imgUrls}
          alt="Testimonial image"
          className="w-16 h-16 rounded-full m-1.5 object-cover"
        />

        {/* Name */}
        <h2 className="text-sm font-bold text-details block "> {name} </h2>
        {/* Rule */}
        <p className="block -mt-1"> {funct} </p>
      </div>
    </div>
  );
}
