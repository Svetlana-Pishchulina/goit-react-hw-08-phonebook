const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const isFetchingCurrentUse = (state) => state.auth.isFetchingCurrentUser;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  isFetchingCurrentUse,
};
export default authSelectors;
