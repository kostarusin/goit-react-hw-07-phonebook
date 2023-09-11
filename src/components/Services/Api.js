import axios from 'axios';

const BASE_URL = 'https://64fdb0c7596493f7af7e73b5.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`${BASE_URL}`, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
}