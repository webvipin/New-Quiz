import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import "./App.css";

import Register from "./componentes/Register";
import Header from "./componentes/Header/Header";
import Quiz from "./componentes/Quiz/Quiz";
import Result from "./componentes/Result/Result";
import './'
import "./App.css";
import { useState } from "react";
import Footer from "./componentes/Footer/Footer";
// import { queries } from "@testing-library/react";
import axios from "axios";




function App() {
  const [name, setname] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

   const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      // `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
      // `https://opentdb.com/api.php?amount=10${
      //   category && `&category=${category}`
      // }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
         <Routes>
         
        
         <Route
          path="/Header"
          element={
            <Header
              name={name}
              setname={setname}
              fetchQuestions={fetchQuestions}
            />
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route
          path="/Quiz"
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        ></Route>
        <Route path="/Result" element={<Result
          name={name}
          score={score}
           />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Footerr" element={<Footer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
