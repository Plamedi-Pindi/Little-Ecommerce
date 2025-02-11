// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Components
const Layout = lazy(() => import("../layouts/Layout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Details = lazy(() => import("../pages/Products/Details"));
const Cart = lazy(() => import("../pages/Cart/Cart"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Layout toggle={toggle} setToggle={setToggle} />}
            >
              <Route
                index
                element={
                  <Home toggle={toggle} toggleVisibility={toggleVisibility} />
                }
              />
              <Route path="/produtos/detalhes/:id" element={<Details />} />
              <Route
                path="/cart"
                element={
                  <Cart toggle={toggle} toggleVisibility={toggleVisibility} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}
