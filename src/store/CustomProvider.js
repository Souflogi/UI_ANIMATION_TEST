import React, { useReducer } from "react";
import ScoreContext from "./score-context";

const initialGameState = {
  Score: 0,
  CurrentLevel: 1,
  ProgressFill: 0,
};

//required Score to upgrade to next LVL
let RequiredScore = 1000;
const nextRequiredScoreHandler = () => {
  RequiredScore *= 1.3;
};

const gameReducer = (prevState, action) => {
  if (action.type === "ADD_SCORE") {
    const updatedScore = prevState.Score + action.value;

    /* this helps us to see if the current score reaches next level(s) */
    /* also serves as the amount to add to the progress  */
    const levelReaching = updatedScore / RequiredScore;

    if (levelReaching < 1) {
      /*
      (100% progressbar)-------------------------- 1 =====>   RequiredScore
      ( how much we need to fill the progress bar) ?? =====>   updatedScore (how much score we have)  
      */
      return {
        ...prevState,
        Score: updatedScore,
        ProgressFill: levelReaching,
      };
    } else {
      /* NEX LEVEL REQUIRED SCORE */
      return {
        ...prevState,
        Score: RequiredScore,
        ProgressFill: 1,
        CurrentLevel: prevState.CurrentLevel + 1,
      };
    }
  }

  /* TO MAnually set the Bar */
  if (action.type === "RESET_BAR") {
    nextRequiredScoreHandler();
    return {
      ...prevState,
      ProgressFill: action.value,
    };
  }

  /* TO MAnually set the Score */

  if (action.type === "RESET_SCORE") {
    return {
      ...prevState,
      Score: action.value,
    };
  }
  return { ...prevState };
};

const CustomProvider = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);

  const addScoreHandler = points => {
    gameDispatch({ type: "ADD_SCORE", value: points });
  };
  const setProgressFillHandler = value => {
    gameDispatch({ type: "RESET_BAR", value });
  };
  const setScoreHandler = value => {
    gameDispatch({ type: "RESET_SCORE", value });
  };

  return (
    <ScoreContext.Provider
      value={{
        Score: gameState.Score,
        CurrentLevel: gameState.CurrentLevel,
        ProgressFill: gameState.ProgressFill,
        RequiredScore: RequiredScore,
        addScore: addScoreHandler,
        setProgressFill: setProgressFillHandler,
        setScore: setScoreHandler,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default CustomProvider;
