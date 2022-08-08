import classes from "./ProgressBar.module.css";
import { HiStar } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import ScoreContext from "../../../store/score-context";

const ProgressBar = () => {
  const { Score, RequiredScore, ProgressFill, setProgressFill, setScore } =
    useContext(ScoreContext);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    let emptyBartimer = undefined;
    /* because the context is what keep track of the progress bar
       here we make sure to just add the diffrence width to the bar
    */
    setBarWidth(prev => prev + (ProgressFill * 100 - prev));

    if (ProgressFill === 1) {
      emptyBartimer = setTimeout(() => {
        setProgressFill(0);
        setScore(0);
      }, 2000);
    }

    return () => {
      clearTimeout(emptyBartimer);
    };
  }, [ProgressFill, setProgressFill, setScore]);

  return (
    <div className={classes["progress-bar"]}>
      <div
        className={classes["progress-fill"]}
        style={{ width: `${barWidth}%` }}
      >
        <p className={classes["progress-score"]}>
          {Score}/{RequiredScore}
        </p>
        <HiStar className={classes["progress-star"]} />
      </div>
    </div>
  );
};

export default ProgressBar;
