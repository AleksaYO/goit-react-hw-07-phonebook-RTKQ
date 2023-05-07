import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
  return {
    filter: '',
  };
};

const filterSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    filteredContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
