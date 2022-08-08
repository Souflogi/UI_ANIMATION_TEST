import classes from "./App.module.css";
import AddScoreForm from "./components/AddScoreForm/AddScoreForm";
import LevelUp from "./components/LevelUp/LevelUp";
import CustomProvider from "./store/CustomProvider";

const App = () => {
  return (
    <div className={classes.app}>
      <CustomProvider>
        <LevelUp />
        <AddScoreForm />
      </CustomProvider>
    </div>
  );
};

export default App;
