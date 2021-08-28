import { useEffect } from "react";
// import { Switch, Route } from "react-router-dom";
import Section from "./components/Section";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import ContactsListItem from "./components/ContactsListItem";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList>
          <ContactsListItem />
        </ContactsList>
      </Section>
    </>
  );
}
export default App;
