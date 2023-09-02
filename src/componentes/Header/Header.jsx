import React, {  useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import {  useNavigate } from "react-router-dom";
// import ErrorMessage from "../ErrorMessage/";
import Wrapper from './style'

const Header = ({ name, setname, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  // const [error, seterror] = useState(false);

  
  
  const navigate = useNavigate()
  const handleSubmit =() =>{
    if(!category|| !Difficulty || !name){
      // seterror(true);
      return;
    }
    else{
      // seterror(false)
      fetchQuestions(category,Difficulty);

       navigate('/quiz')
    }
  }

  return (
    <Wrapper>
    <div className="top">
 <p>Quiz-Hub</p>
      <hr className="divider" />

      <div className="contact">
        <div className="setting">
          <span>Quiz-Settings</span>
          <div className="setting_select">
       
         
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter your Name"
              variant="outlined"
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              select
              label="select Category"
              variant="outlined"
              style={{ marginBottom: 30 }}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 30 }}
              onChange={(e) => setDifficulty(e.target.value)}
              value={Difficulty}
              
              >
              <MenuItem key="Easy" value="easy">
              Eassy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
              Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
              Hard
              </MenuItem>
             
              </TextField>
              <Button variant="contained"  onClick={handleSubmit}color="primary" size="large">
              Start Quiz
              </Button>
              </div>
              </div>
              <img src="/new.svg" className="banner" alt="banner"></img>
              </div>
              </div>
              </Wrapper>
              );
};

export default Header;

// {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}