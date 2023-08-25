import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "./style";

const Register = () => {
  const [name, namechange] = useState("");
  const [contact, contactchange] = useState("");

  const [password, passwordchange] = useState("");
  const [role, rolechange] = useState("Admin");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
     let errmessage = "please enter the value in";
  

    if (name === null || name === "") {
      isproceed = false;
      errmessage += "Username";
    }

    if (contact === null || contact === "") {
      isproceed = false;
      errmessage += "Username";
    }

    if (password === null || password === "") {
      isproceed = false;
      errmessage += "Username";
    }

    if (role === null || role === "") {
      isproceed = false;
      errmessage += "Username";
    }

    if (isproceed) {
      toast.warning(errmessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-z0-9]+\.[A-za-z]+$/.test(contact)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the vaild E-mail");
      }
    }

    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .post(" https://server-api1-li2k.onrender.com/api/user/add", {
        name,
        contact,
        password,
        role,
      })
      .then((res) => {
        console.log(res.data);
        alert("Account is created");
        navigate("/Login");

      })
      .catch((err) => {
        console.log(err.message);
     
      })
      .finally(() => {
        console.log("finally is running");
      });
    if (IsValidate()) {
    }
  };

  return (
    <Wrapper>
    <div className="top">
    <h2>Quiz-Hub</h2>
      <div className="signinContainer">
      
    
        <form>
          <h2>Sign up</h2>
          <input
            type="text"
            placeholder="UserName"
            value={name}
            onChange={(e) => namechange(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact"
            value={contact}
            pattern="[0-9]{10}"
            onChange={(e) => contactchange(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => passwordchange(e.target.value)}
          />
          <select onChange={(e) => rolechange(e.target.value)}>
            <option value="" disabled selected >Select role</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          <input type="submit" onClick={handlesubmit} value="Register" />
          <span>
          Already have an account</span><Link className="run" to="/login">Login</Link>
        </form>
      </div>
      </div>
    </Wrapper>
  );
};

export default Register;
