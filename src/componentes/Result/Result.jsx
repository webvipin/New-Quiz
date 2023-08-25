import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="top">
      <p>Quiz-Hub</p>
     
    <div className="result">
    <img src="/images.jpg" className="New" alt="banner"></img>
      <span className="title">Final Score : {name} <p>Your Score</p>{score}</span>
      <Button className="element.style"
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20}}
        href="/"
      > Go to homepage
      </Button>
      
    </div>
    </div>
  );
};

export default Result;
