import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: InitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
