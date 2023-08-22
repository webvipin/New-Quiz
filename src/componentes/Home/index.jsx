import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import One from "../../pic/One.jpg"
import Two from "../../pic/Two.jpg"
import Three from "../../pic/Three.jpg"
import Four from "../../pic/Four.jpg"
import './index.css'

const Home = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/");
    }
  }, []);
  return (
    <div>
      <div className="instructions container">
       <h1>How to play the Quiz</h1>
        <p>Ensure you read this guide from start to finsh.</p>
        <ul className="brower-default" id="main-list">
          <li>The Quizs has a duration of 15 min and ends as soon as your</li>
          <li>Each Quiz consists of 15 questions.</li>
          <li>
            Every questions contains 4 options.
            <img src={One} alt="Quiz App options example" />
          </li>
          <li>
            Select the options which best answer the questions By clicking (or
            selecting )it.
            <img src={Two} alt="Quiz App options example" />
          </li>
          <li>
            Each Quiz has 2 lifelines namely:
            <ul id="sublist">
              <li>2 50-50 chances</li>
              <li>5 Hints</li>
            </ul>
          </li>
          <li>
            Selecting a 50-50 lifeline by clicking the icon
            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
            Will remove 2 Wrong answer, leaving the correct answer and one Wrong
            answer
            <img src={Three} alt="quiz app"></img>
          </li>

          <li>
            Using a Hints by clicking the icon
            <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
            Will remove 2 Wrong answer, leaving the correct answer and one Wrong
            answer
            <img src={Four} alt="quiz app"></img>
          </li>

          <li>
            Feel free to quit (or retire from) the Quiz at any time. In that
            case your score will be revealed after wards.
          </li>
          <li>The timer starts as the Quiz loads.</li>
          <li>Let's do this if you think you've got what it takes?.</li>
        </ul>
        <div>
    
          <span className="right">
            <Link to="/Login">Okay, Let's do this!</Link>
            <Link style={{ float: "right" }} to={"/Login"}> Logout</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
