import { useState } from "react";
import { useDispatch } from "react-redux";
// import { authOperations } from '../redux/auth';
import { authOperations } from "../redux/auth/auth-operations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);
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
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница регистрации</h1>{" "}
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text " name="name" value="name" onCange={handleCange} />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;
