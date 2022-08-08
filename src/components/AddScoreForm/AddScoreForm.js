import React, { useContext, useEffect, useRef, useState } from "react";
import ScoreContext from "../../store/score-context";
import classes from "./AddScoreForm.module.css";

const AddScoreForm = props => {
  const { addScore } = useContext(ScoreContext);

  const [scoreValue, setScoreValue] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const onChangeHandler = e => {
    setScoreValue(() => e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (scoreValue === "") return;
    addScore(+scoreValue);
    setScoreValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={scoreValue}
        onChange={onChangeHandler}
        type="text"
        name="score"
        ref={inputRef}
      />
      <button type="submit">Add Score</button>
    </form>
  );
};

export default AddScoreForm;
