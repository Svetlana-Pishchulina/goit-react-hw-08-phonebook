import { useState } from "react";
import { useDispatch } from "react-redux";
// import { authOperations } from '../redux/auth';
import { authOperations } from "../redux/auth/auth-operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>страница логина</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onCange={handleCange}
          />
        </label>
        <label>
          Password
          <input type="" name="" value="" onCange={handleCange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;
