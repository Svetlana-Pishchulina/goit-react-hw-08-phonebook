import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

function addContact(contact) {
  return axios.post("/contacts", contact);
}

function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export default { fetchContacts, addContact, deleteContact };
