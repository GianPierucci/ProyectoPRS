import './scss/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import ItemListContainer from './components/ItemListContainer';   

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path='/Catalogo' element={<ItemListContainer />}/>
        {/* <Route path='/Nosotros' element={<Nosotros />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;


// ctrl + espacio hace un import automaticamente
