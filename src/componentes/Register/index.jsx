import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./style";

const Register = () => {
  const [name, namechange] = useState("");
  const [contact, contactchange] = useState("");

  const [password, passwordchange] = useState("");
  const [role, rolechange] = useState("");

  const navigate = useNavigate();

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
        console.log("");
      });
    
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
              required
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
              <option value="" disabled selected>
                Select role
              </option>
              <option value="faculty" onChange={(e) => rolechange('Faculty')}>Faculty</option>
              <option value="student" onChange={(e) => rolechange('Student')}>Student</option>
            </select>

            <input type="submit" onClick={handlesubmit} value="Register" />
            <span>Already have an account</span>
            <Link className="run" to="/login">
              Login
            </Link>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;

