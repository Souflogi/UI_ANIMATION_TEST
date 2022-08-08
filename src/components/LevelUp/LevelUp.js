import { Fragment, useState } from "react";
import Badge from "./Badge/Badge";
import Level from "./Level/Level";
import classes from "./LevelUp.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const LevelUp = () => {
  const [score, setScore] = useState(0);

  return (
    <div className={classes["level-up"]}>
      <Badge />
      <Level />
      <ProgressBar score={score} />
    </div>
  );
};

export default LevelUp;
