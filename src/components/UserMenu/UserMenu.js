import { useDispatch, useSelector } from "react-redux";
// import {authSelectors, authOperations} from '../../redux'
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => authSelectors.getUserName(state));
  return (
    <div>
      {/* <img></img> */}
      <span>
        добро пожаловать,
        {name}
      </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        выйти
      </button>
    </div>
  );
};

export default UserMenu;
