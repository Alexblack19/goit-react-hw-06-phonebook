import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filters: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
