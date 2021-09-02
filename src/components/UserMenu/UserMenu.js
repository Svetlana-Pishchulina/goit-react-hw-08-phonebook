import { useDispatch, useSelector } from "react-redux";
// import {authSelectors, authOperations} from '../../redux'
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "../../icons/defaultAvatar.jpg";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => authSelectors.getUserName(state));
  return (
    <div>
      <img src={defaultAvatar} alt="avatar" className={styles.avatar} />

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
