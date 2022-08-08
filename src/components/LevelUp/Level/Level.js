import classes from "./Level.module.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import ScoreContext from "../../../store/score-context";

const Level = () => {
  const { CurrentLevel } = useContext(ScoreContext);
  return (
    <motion.div
      key={CurrentLevel}
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      animate={{ scale: 1, opacity: 1 }}
      className={classes.level}
    >
      <p>LEVEL : {CurrentLevel}</p>
    </motion.div>
  );
};

export default Level;
