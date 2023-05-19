import React from "react";
import { useState } from "react";
import {
  MeckelsDiverticulum,
  MeckelsDiverticulumNote,
} from "./Subjects/Surgery/MeckelsDiverticulum";
import "./App.css";
import Try from "./Try";

function QuestionCard(prop) {
  const text = MeckelsDiverticulumNote;

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

  return (
    <>
      <div
        className="all-text"
        style={{
          marginTop: "40px",
          marginLeft: "10px",
          fontSize: "1.1em",
        }}
      >
        {" "}
        {prop.toDisplay === "Notes" ? text : questionAndAnswer}
      </div>
    </>
  );
}

function App() {
  const [displayType, setDisplayType] = useState("ActiveRecall");

  console.log(displayType);

  return (
    <>
      <div
        style={{
          display: "block",
        }}
        className="chapter"
      >
        Meckel's Diverticulum
      </div>
      <div className="buttons">
        <div
          className="button-display-type"
          style={{
            display: "block",
          }}
        >
          <button
            className="note-active-recall-buttons"
            onClick={() => setDisplayType("Notes")}
          >
            Notes
          </button>
          <button
            className="note-active-recall-buttons"
            onClick={() => setDisplayType("ActiveRecall")}
          >
            Active Recall
          </button>
        </div>
      </div>

      <div>
        <QuestionCard toDisplay={displayType} />
        <Try />
      </div>
    </>
  );
}

export default App;
