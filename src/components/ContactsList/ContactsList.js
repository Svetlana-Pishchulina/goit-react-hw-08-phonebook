// const ContactsList = ({ children }) => {
//   return <ul>{children}</ul>;
// };

// export default ContactsList;
import styles from "./ContactsList.module.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import pnotify from "@pnotify/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ContactsList({ children }) {
  const classes = useStyles();
  const onButtonClick = () => {
    // pnotify.error({
    //   text: "something gone wrong",
    //   mode: "light",
    //   closer: true,
    //   sticker: false,
    //   hide: true,
    //   delay: 2000,
    // });
    alert("qweqweqwe");
  };
  return (
    <div className={`${classes.root} ${styles.list}`}>
      <button onClick={onButtonClick}></button>
      <List component="nav" aria-label="main mailbox folders">
        {children}
      </List>
    </div>
  );
}
