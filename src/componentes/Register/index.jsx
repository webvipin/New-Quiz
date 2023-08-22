 import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [contact, contactchange] = useState(""); 

  const [password, passwordchange] = useState("");
  const [role, rolechange] = useState("Admin");

  const navigate=useNavigate();

  const IsValidate =()=>{

    let isproceed=true;
    let errmessage='please enter the value in';
    if(id===null|| id==='')
    {
        isproceed=false;
        errmessage +='Username';
    }

    if(name===null|| name==='')
    {
        isproceed=false;
        errmessage +='Username';
    }

    if(contact===null|| contact==='')
    {
        isproceed=false;
        errmessage +='Username';
    }

    if(password===null|| password==='')
    {
        isproceed=false;
        errmessage +='Username';
    }

    if(role===null|| role==='')
    {
        isproceed=false;
        errmessage +='Username';
    }

    if(isproceed)
    {
        toast.warning(errmessage)
    }
    else{
        if(/^[a-zA-Z0-9]+@[a-zA-z0-9]+\.[A-za-z]+$/.test(contact)){
        }else{
        isproceed=false;
        toast.warning('Please enter the vaild E-mail')
        }
    }

    return isproceed;
  }

  const handlesubmit = (e) => { 
    e.preventDefault();

    axios.post(" https://server-api1-li2k.onrender.com/api/user/add",{
         name, contact, password, role
    }).then(res=>{
        console.log(res.data) 
        
    }).catch(err=>{
        console.log(err.message)
    }).finally(()=>{
        console.log("finally is running")
    })
    if(IsValidate()){
      navigate('/Login')
}
    }

    return (
      <div className="Register-title">
      <div>
      <h1 className="hader-title">Quiz-App</h1>
      </div>
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h2>User Register</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="user_input" style={{width:"40vh"}}>
                  <div className="form-group">
                    <label>
                      User Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className="from-control"
                    ></input>
                  </div>
                </div>
  
                <div className="user_input" style={{width:"40vh"}}>
                  <div className="form-group">
                    <label>
                      Full Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      type="name"
                      className="from-control"
                    ></input>
                  </div>
                </div>
  
                <div className="user_input" style={{width:"40vh"}}>
                  <div className="form-group">
                    <label>
                      Contact<span className="errmsg">*</span>
                    </label>
                    <input
                      value={contact}
                      onChange={(e) => contactchange(e.target.value)}
                      type="contact"
                      className="from-control"
                    ></input>
                  </div>
                </div>
  
                <div className="user_input" style={{width:"40vh"}}>
                  <div className="form-group">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="from-control"
                    ></input>
                  </div>
                </div>
  
                <div className="user_input" style={{width:"40vh"}} >
                  <div className="form-group">
                    <label>Role</label>
                    <br />
                    <input 
                      type="radio"
                      checked={role === "Admin" }
                      onChange={(e) => rolechange(e.target.value)}
                      name="Role"
                      value="Admin"
                      className="app-check" 
                    ></input>
                    <label>Admin</label>
  
                    <input
                      type="radio"
                      checked={role === "Student"}
                      onChange={(e) => rolechange(e.target.value)}
                      name="Role"
                      value="Student"
                      className="app-check"
                    ></input>
                    <label>Student</label>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" >
                Register
              </button>
              <a className="btn btn-danger"> Back</a>
            </div>
          </div>
        </form>
        <div className="footer">
            <h3 className="footer_title">© copy2023</h3>
            </div>
            
      </div>
    );
  };
  

export default Register;

// "bootstrap": "^5.3.1",