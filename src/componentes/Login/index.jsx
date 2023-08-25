import axios from "axios";
import { useState } from "react";
import {  Link, Navigate, json, useNavigate } from "react-router-dom";
import Wrapper from "./style.js";

const Login = () => {
  const [contact, contactupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
       console.log("proceed");
     

      axios
        .post("https://server-api1-li2k.onrender.com/api/user/login", {
          contact,
          password,
        })
        .then((res) => {
          console.log(res.data);
          if(res.data)
          {
            localStorage.setItem("login-user", JSON.stringify(res.data))
             navigate("/Header")
           
          }
          else{
            alert("Invalid user");
          }
          
          
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {

         // console.log("Login succesfuly");
        });
    }
  };
  const  validate = () => {
    let result = true;
    if (contact === "" && password === "") {
      result = false;
      alert("Please enter all the fields");
    }

    if (contact === "" && password !== "") {
      result = false;
      alert("Pelase enter contact");
    }

    if (password === "" && contact !== "") {
      result = false;
      alert("Pelase enter password");
    }

    return result;
  };

  return (
    <Wrapper>
   <header><h1>Quiz Hub</h1></header>

      <div className="loginContainer">
        <form>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Contact"
            required
            value={contact}
            onChange={(e) => contactupdate(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => passwordupdate(e.target.value)}
          />
          <input
            type="submit"
            className="Button"
            id="userSubmitButton"
            value="Login"
            onClick={ProceedLogin}
          />
          <span>
           Don't have an account ? </span>
           <Link className="btn" to="/">Register</Link>
          
        </form>
      </div>
    </Wrapper>
    
  );
};

export default Login;
