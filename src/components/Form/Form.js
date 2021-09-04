import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Form.module.css";
import { getItems } from "redux/contacts/contacts-selection";
import contactsOperations from "redux/contacts/contactsOperations";

import Button from "@material-ui/core/Button";

const useForm = (key) => {
  const [state, setState] = useState("");

  return [state, setState];
};

const Form = () => {
  const [name, setName] = useForm("name");
  const [number, setNumber] = useForm("number");
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsOperations.saveContact(name, number));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Enter name"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Nuber
          <input
            className={styles.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Enter number"
            onChange={handleChange}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </form>
    </>
  );
};

export default Form;
