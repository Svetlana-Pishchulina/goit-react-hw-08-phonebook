import Navigation from "./Navigation";
// import UserMenu from './'
import AuthNav from "./AuthNav";

const AppBar = () => {
  return (
    <>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
    </>
  );
  // {
  //   isLoggedIn ? <UserMenu /> : <AuthNav />;
  // }
};
export default AppBar;
