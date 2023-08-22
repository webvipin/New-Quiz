import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Header from "./componentes/Header/Header";
// import  footer  from "./componentes/footer/footer";
// import { ToastContainer } from 'react-toastify';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Header" element={<Header />}></Route>
        
         
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
       
        </BrowserRouter>
  );
}

export default App;
