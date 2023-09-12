import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, requestAddContact, requestDeleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};



const contactsActionsSlice = createSlice({
  name: 'contactsActions',
  initialState,

  reducers: {
    
    setContactFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(requestAddContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(requestAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(requestDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});


export const contactsReducer = contactsActionsSlice.reducer;

export const { setContactFilter } =
  contactsActionsSlice.actions;
