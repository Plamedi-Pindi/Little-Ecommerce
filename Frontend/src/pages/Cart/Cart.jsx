// Components
import Header from "../../layouts/components/Header";

export default function Cart({ toggle, toggleVisibility }) {
  return (
    <div>
      {/* header */}
      <Header toggle={toggle} toggleVisibility={toggleVisibility} />

      
      <h2 className="text-xl text-green-400 text-center font-bold">
        Hello Brother
      </h2>
    </div>
  );
}
