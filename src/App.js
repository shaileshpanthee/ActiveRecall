import React from "react";
import { MeckelsDiverticulum } from "./Subjects/Surgery/MeckelsDiverticulum";
import "./App.css";

function QuestionCard() {
  const [eachQues, setEachQues] = React.useState(MeckelsDiverticulum);
  const questionAndAnswer = MeckelsDiverticulum.map((obj) => {
    function toggleShow() {
      setEachQues((prev) => {
        return [...prev, (obj.show = !obj.show)];
      });
      console.log("Clicked");
    }
    console.log(obj.answer);
    return (
      <div className="both-ques-ans-card">
        <div className="questionAndSubmit">
          <div className="question">{obj.question}</div>
          <button className="show-button" onClick={toggleShow}>
            Show
          </button>
        </div>
        <div className="answer">{obj.show && obj.answer}</div>
      </div>
    );
  });

  return <div>{questionAndAnswer}</div>;
}

function App() {
  return (
    <>
      <div>Meckel's Diverticulum</div>
      <hr />
      <div>
        <QuestionCard />
      </div>
    </>
  );
}

export default App;
