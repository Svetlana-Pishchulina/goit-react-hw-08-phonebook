import { useDispatch, useSelector } from "react-redux";
// import {authSelectors, authOperations} from '../../redux'
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "../../icons/defaultAvatar.jpg";
import styles from "./UserMenu.module.css";

// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const UserMenu = () => {
  // const classes = useStyles();

  const dispatch = useDispatch();
  const name = useSelector((state) => authSelectors.getUserName(state));
  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="avatar" className={styles.avatar} />

      <span className={styles.text}>
        добро пожаловать,
        {name}
      </span>
      {/* <div className={classes.root}> */}
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="outlined"
        size="small"
        // color="primary"
        // fontWeight="SemiBold"
      >
        LOG OUT
      </Button>
      {/* </div> */}
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        выйти
      </button> */}
    </div>
  );
};

export default UserMenu;
