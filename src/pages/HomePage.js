import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.HomePageContainer}>
      <h1 className={styles.heder}>Wellcome</h1>
      <span className={styles.icon} role="img" aria-label="иконка приветствия">
        &#128075;
      </span>
      <p className={styles.text}>
        Please, <NavLink to="/register">Sign in</NavLink> or{" "}
        <NavLink to="/login">Log in</NavLink> to have access to the Phonebook!
      </p>
    </div>
  );
};

export default HomePage;
