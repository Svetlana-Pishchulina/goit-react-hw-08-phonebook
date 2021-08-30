import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Wellcome</h1>
      <span role="img" aria-label="иконка приветствия">
        &#128075;
      </span>
      <p>
        Please, <NavLink to="/register">Sign in</NavLink> or{" "}
        <NavLink to="/login">Log in</NavLink> to have access to the Phonebook!
      </p>
    </div>
  );
};

export default HomePage;
