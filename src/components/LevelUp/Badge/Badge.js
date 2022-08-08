import classes from "./Badge.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import ScoreContext from "../../../store/score-context";

const Badge = () => {
  const { CurrentLevel } = useContext(ScoreContext);

  const badgeRef = useRef();
  const [animate, setAnimate] = useState(false);
  const Classes = `${classes.badge} ${animate ? classes.shwitcho : ""}`;

  useEffect(() => {
    setAnimate(true);
    const animationTimer = setTimeout(() => {
      setAnimate(false);
    }, 2000);

    const badgeTimer = setTimeout(() => {
      badgeRef.current.setAttribute(
        "src",
        require(`../../../assets/level-${CurrentLevel}.png`)
      );
    }, 1000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(badgeTimer);
    };
  }, [CurrentLevel]);

  return (
    <div className={Classes}>
      <img ref={badgeRef} alt="" />
    </div>
  );
};
export default Badge;
