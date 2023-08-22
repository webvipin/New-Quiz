 import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  
  const [contact, contactupdate] = useState("");
  const [password, passwordupdate] = useState("");


  const usenavigate =useNavigate();

  const ProceedLogin=(e)=>{
   e.preventDefault();
   if(validate()){
    // console.log('proceed');
     sessionStorage.setItem('contact', contact)
     usenavigate("/");
      
     axios.post("https://server-api1-li2k.onrender.com/api/user/login",{
      contact ,password
     }).then(res =>{console.log(res.data)
    }).catch(err =>{console.log(err.message)
    }).finally(()=>{console.log('Login succesfuly')
  })
    Navigate('/')
    }
  };
  const validate=()=>{
    let result=true;
    if(contact===''|| contact ===null){
        result=false;
        toast.warning('Pelase Enter contact')
    }

    if(password ===''|| password ===null){
        result=false; 
        toast.warning('Pelase Enter password')
    }

    return result;
  }
  return (
    <div className="row">
      <div className="login page">
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>

            <div className="card-body">
              <div className="from-group">
               
                <input  className="form-control" placeholder="contact" type="contact"value={contact} onChange={e=>contactupdate(e.target.value)} ></input>
              </div>

              <div className="from-group">
               
                <input className="form-control" placeholder="Password" type="Password" value={password} onChange={e=>passwordupdate(e.target.value)} ></input>
              </div>

              <div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <Link className="btn btn-success" to={"/Register"}>
                New User
                </Link>
                
              </div>
            </div>
          </div>
          </form>
          
      </div>
    </div>
  );
}
  
export default Login


