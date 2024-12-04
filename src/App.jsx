// CSS 
import './index.css';

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import Details from './pages/Products/Details';
import Cart from './pages/Cart/Cart';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/produtos/detalhes' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
