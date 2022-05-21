
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Detalhes from './pages/detalhes';
import Favoritos from './pages/favoritos';
import Navbar from "./components/Navbar";

const Rotas = () => {
    return ( 
        <BrowserRouter>

        <Navbar/>
        
        <Routes>

            <Route exact path="/"  element={<Home/>}/>
            <Route exact path="/detalhes/:id" element={<Detalhes/>}  />
            <Route  exact path="/favoritos" element={<Favoritos/>} />

        </Routes>
        
        
        </BrowserRouter>
     );
}
 
export default Rotas;