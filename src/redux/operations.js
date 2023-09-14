import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'Services/Api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const postData = await getContacts();
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestAddContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const postData = await addContact(contact);
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const postData = await deleteContact(id);
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
