import React, { useState } from "react";
import "./style.js";
import Wrapper from "./style.js";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Admin = () => {
  const [formData, setFormData] = useState({
    CreateQuiz: "",
    sub: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate;
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("https://quizattendace.onrender.com/api/quiz/add", {
        formData,
        setFormData,
        
      })
      .then((res) => {
         console.log(res);
        if (res) {
          alert("Quiz is Create");
                   
        }
      })
      .catch((err) => {
        console.log(err.message);
       
      })
      .finally(() => {
        console.log("Create succesfuly");
      });
  };

  return (
    <Wrapper>
      <div className="top">
      <h2>Quiz-Hub</h2>

        <div className="admin-form-container">
          <h2>Create Quiz</h2>
          <form  className="admin-form">
            <div className="form-group">
              <label htmlFor="createQuiz"></label>
              <input
                type="text"
                id="CreateQuiz"
                name="CreateQuiz"
                placeholder="Create-Quiz"
                value={formData.CreateQuiz}
                onChange={handleChange}
              />
            </div>
           
            <button type="submit" onClick={handleSubmit} >
              Create
            </button>

            <a className="log" href="/login">
            Logout
            </a>
            <a href="/Questionform"> Add Question?</a>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Admin;
