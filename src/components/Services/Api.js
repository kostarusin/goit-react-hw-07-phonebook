import axios from 'axios';

const API_URL = 'https://64fdb0c7596493f7af7e73b5.mockapi.io/contacts';

export async function getContacts() {
  const { data } = await axios.get(`${API_URL}`);
   return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`${API_URL}`, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
}