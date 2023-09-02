import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Admin from "./componentes/Admin/Admin";
import QuestionForm from "./componentes/QuestionForm/QuestionForm";
import Error from "./componentes/ErrorMessage/Error";
import QuestionList from "./componentes/QuestionList/Questionlist";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
      <Route path="/" element={<Register />}></Route>
      <Route path ="/*" element={<Error />}></Route>
        <Route path="/QuestionForm" element={<QuestionForm />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/QuestionList" element={<QuestionList />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

