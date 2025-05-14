// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Components
const Layout = lazy(() => import("../layouts/Layout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Details = lazy(() => import("../pages/Products/Details"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Shop = lazy(() => import("../pages/Products/shop/Shop"));

import { CartProvider } from "../contexts/CartContext";

// Hooks
import { useState } from "react";

export default function AppRoutes() {
  const [toggle, setToggle] = useState(false); // toggle to display sidebar

  // OnClick Event Handeler
  const toggleVisibility = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <CartProvider>
      <Router>
        <Suspense
          fallback={
            <div className="w-full h-screen flex flex-col items-center justify-center bg-secundary">
              <p className="text-2xl text-details font-bold italic">
                Quicadorcas...
              </p>
              <img src="/loading.gif" alt="" />
            </div>
          }
        >
          <Routes>
            {/* Layout */}
            <Route
              path="/"
              element={<Layout toggle={toggle} setToggle={setToggle} />}
            >
              {/*Home  */}
              <Route
                index
                element={
                  <Home toggle={toggle} toggleVisibility={toggleVisibility} />
                }
              />
              {/* Product Details */}
              <Route path="/produtos/detalhes/:id" element={<Details setToggle={setToggle} toggle={toggle} />} />
              {/* Cart */}
              <Route
                path="/cart"
                element={
                  <Cart toggle={toggle} toggleVisibility={toggleVisibility} />
                }
              />
              {/* Shop */}
              <Route
                path="/loja"
                element={
                  <Shop toggle={toggle} toggleVisibility={toggleVisibility} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}
