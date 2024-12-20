export default function Menu({ toggle }) {
  return (
    <nav
      className={`h-screen  absolute top-0 left-0 z-[90] bg-secundary shadow-xl duration-700 ${
        toggle ? "w-[15rem] p-4" : "w-0"
      }`}
    >
      <ul className={` mt-10 text-base  ${toggle ? "" : "hidden"}`}>
        <li className="mt-2 flex items-center"> <PingAnimation/> Home</li>
        <li className="mt-2 flex items-center">Sobre</li>
        <li className="mt-2 flex items-center">Serviços</li>
      </ul>
    </nav>
  );
}

const PingAnimation = () => {
  return (
    <span class="relative flex items-center justify-center h-3 w-3 mr-1">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-details"></span>
    </span>
  );
};
