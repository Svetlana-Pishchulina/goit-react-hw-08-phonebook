import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./ContactsListItem.module.css";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";

import DeleteIcon from "@material-ui/icons/Delete";

// import {
//   // getItems,
//   getVisibleContacts,
// } from "redux/contacts/contacts-selection";
// import contactsOperations from "redux/contacts/contactsOperations";

import { contactsSelection, contactsOperations } from "redux/contacts";
const ContactsListItem = () => {
  const visibleContacts = useSelector(contactsSelection.getVisibleContacts);

  const dispatch = useDispatch();

  // const items = useSelector(getItems);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteButtonClick = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
    // items.length &&
    visibleContacts.map(({ id, name, number }) => (
      // <li className={styles.listItem} key={id}>
      //   {name}:{number}
      //   <button
      //     className={styles.button}
      //     onClick={() => onDeleteButtonClick(id)}
      //   >
      //     Delete
      //   </button>
      // </li>
      <ListItem button key={id}>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        {/* <span>{`${name}:`}</span>
        <span>{number}</span> */}
        <ListItemText>
          <span className="styles.name">{`${name}:`}</span>
          <span className="styles.number">{number}</span>
        </ListItemText>
        {/* <ListItemText primary={`${name}:${number}`} /> */}
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={() => onDeleteButtonClick(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))
  );
};

export default ContactsListItem;
