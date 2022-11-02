import './scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar"
import Main from "./components/Main/Main"
import ItemListContainer from './components/Main/ItemListContainer';
import Carrito from './components/Carrito/Carrito';
import Provider from './context/CartContext';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ToastContainer/>
        <NavBar />
        <Routes >
          <Route path="/" element={<Main />} />
          <Route path='/Catalogo' element={<ItemListContainer />} />
          <Route path='/Producto/:idProd' element={<ItemDetailContainer />} />
          {/* <Route path='/Nosotros' element={<Nosotros />} /> */}
          <Route path='/Carrito' element={<Carrito />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

