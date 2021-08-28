import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";

// import Section from "./components/Section";
// import Form from "./components/Form";
// import ContactsList from "./components/ContactsList";
// import ContactsListItem from "./components/ContactsListItem";
// import Filter from "./components/Filter";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/contacts" component={ContactsPage}></Route>
      </Switch>

      {/* <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList>
          <ContactsListItem />
        </ContactsList>
      </Section> */}
    </>
  );
}
export default App;
