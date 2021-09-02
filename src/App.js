import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";

import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPageMatUI";
import LoginPage from "./pages/LoginPageMatUI";
import ContactsPage from "./pages/ContactsPage";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";
import AuthNavigation from "./redux/auth/auth-selectors";
// import { StylesProvider } from "@material-ui/core";
// import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUse = useSelector(AuthNavigation.isFetchingCurrentUse);
  // console.log(isFetchingCurrentUse);
  return (
    !isFetchingCurrentUse && (
      // ?
      <>
        <AppBar />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          {/* <Route path="/register" component={RegisterPage}></Route> */}
          {/* <Route path="/login" component={LoginPage}></Route> */}
          {/* <Route path="/contacts" component={ContactsPage}></Route> */}
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </>
    )
  );
  //  : null;
}
export default App;
