import { useSelector } from "react-redux";

import Navigation from "./Navigation";
import authSelectors from "../redux/auth/auth-selectors";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
export default AppBar;
