import React, { useState } from "react";
import { useNavigate } from "react-router";
import Wrapper from "./style";
import axios from "axios";

const QustionForm = ({ addQuestion }) => {
  const [formData, setFormData] = useState({
    CreateQuiz: "",
    sub: "",
  });

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const navigate = useNavigate();
  const Questionlist = () => {
    console.log(question);
    axios
      .post("https://quizattendace.onrender.com/api/quiz/add", {
        formData,
        setFormData,
      })
      .then((res) => {
        console.log(res.data);
        alert("Question is Add");
        navigate("./");
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Login succesfuly");
      });
  };
  const add = () => {
    if (
      question.length === 0 &&
      option1.length === 0 &&
      option2.length === 0 &&
      option3.length === 0 &&
      option4.length === 0
    ) {
      alert("Please Enter question and their options");
    } else if (correctAnswer.length === 0) {
      alert("Please select correct option");
    } else {
      addQuestion({
        question: question,
        optionA: option1,
        optionB: option2,
        optionC: option3,
        optionD: option4,
        correctAnswer: correctAnswer,
      });
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCorrectAnswer("");
    }
  };

  return (
    <Wrapper>
      <form action="">
        <h1>Add Questions</h1>
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="option 1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />
        <input
          type="text"
          placeholder="option 2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />
        <input
          type="text"
          placeholder="option 3"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
        />
        <input
          type="text"
          placeholder="option 4"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
        />
        <select name="type" onChange={(e) => setCorrectAnswer(e.target.value)}>
          <option value selected disabled>
            --Select option--
          </option>
          <option value="option1">{option1}</option>
          <option value="option2">{option2}</option>
          <option value="option3">{option3}</option>
          <option value="option4">{option4}</option>
        </select>

        <div>
          <input type="button" value="Add Questions" onClick={Questionlist} />
          <a className="log" href="/Admin">
            Back
          </a>
        </div>
      </form>
    </Wrapper>
  );
};

export default QustionForm;

// <input type="button" value={addQuestion} onClick={add} />
