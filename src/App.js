import React from "react";
import { MeckelsDiverticulum } from "./Subjects/Surgery/MeckelsDiverticulum";
import "./App.css";

function QuestionCard() {
  const [eachQues, setEachQues] = React.useState(MeckelsDiverticulum);
  let counter = 0;
  const questionAndAnswer = eachQues.map((obj) => {
    counter = counter + 1;
    const index = eachQues.indexOf(obj);
    function toggleShow() {
      setEachQues((prev) => {
        prev[index].show = !prev[index].show;
        return [...prev];
      });
      console.log("Clicked");
    }
    //console.log(obj.answer);
    return (
      <div className="both-ques-ans-card">
        <div className="questionAndSubmit">
          <div className="question">
            {counter}. {obj.question}
          </div>
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
      <div className="chapter">Meckel's Diverticulum</div>
      <hr />
      <div>
        <QuestionCard />
      </div>
    </>
  );
}

export default App;
