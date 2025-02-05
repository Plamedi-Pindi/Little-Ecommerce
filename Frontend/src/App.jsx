// CSS
import "./index.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Details from "./pages/Products/Details";
import Cart from "./pages/Cart/Cart";

// Hooks
import { useState } from "react";

function App() {
    const [toggle, setToggle] = useState(false); // toggle to display sidebar

  // OnClick Event Handeler
  const toggleVisibility = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout toggle={toggle} setToggle={setToggle} />}>
            <Route index element={<Home toggle={toggle} toggleVisibility={toggleVisibility} />} />
            <Route path="/produtos/detalhes" element={<Details />} />
            <Route path="/cart" element={<Cart toggle={toggle} toggleVisibility={toggleVisibility} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
