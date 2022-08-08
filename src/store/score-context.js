import React from "react";

const ScoreContext = React.createContext({
  Score: 0,
  CurrentLevel: 0,
  ProgressFill: 0,
  RequiredScore: 0,
  addScore: () => {},
  setProgressFill: () => {},
  setScore: () => {},
});
export default ScoreContext;
