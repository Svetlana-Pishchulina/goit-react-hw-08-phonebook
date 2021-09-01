import { useSelector } from "react-redux";

import Navigation from "./Navigation";
import authSelectors from "../redux/auth/auth-selectors";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";
// import { StylesProvider } from "@material-ui/core";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.rightPart}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};
export default AppBar;
