import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
