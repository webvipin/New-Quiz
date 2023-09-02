import { Link, useNavigate } from "react-router-dom"
import Wrapper from "./style";


const Home = () => {
 

  return (
    <Wrapper>
    <div>
    <div className="instructions">
       <p>How to play the Quiz</p>
        <p>Ensure you read this guide from start to finsh.</p>
        <ul className="list">
          <li>The Quizs has a duration of 15 min and ends as soon as your</li>
          <li>Each Quiz consists of 15 questions.</li>
          <li>
            Every questions contains 4 options.
            
          </li>
          <li>
            Select the options which best answer the questions By clicking (or
            selecting )it.
            
          </li>   
          <li>
            Using a Hints by clicking the icon Will remove 2 Wrong answer, leaving the correct answer and one Wrong
            answer
            
          </li>
          <li>
            Feel free to quit (or retire from) the Quiz at any time. In that
            case your score will be revealed after wards.
          </li>
          <li>The timer starts as the Quiz loads.</li>
          <li>Let's do this if you think you've got what it takes?.</li>
        </ul>
        <div>
            <Link to="/Questionlist">Okay, Let's do this!</Link>
            <Link to={"/Login"}> Logout</Link>  
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default Home;

