import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPageMatUI";
import LoginPage from "./pages/LoginPageMatUI";
import ContactsPage from "./pages/ContactsPage";
import authOperations from "./redux/auth/auth-operations";
// import { StylesProvider } from "@material-ui/core";
// import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <div> */}
      <AppBar />
      {/* </div> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/contacts" component={ContactsPage}></Route>
      </Switch>
    </>
  );
}
export default App;
