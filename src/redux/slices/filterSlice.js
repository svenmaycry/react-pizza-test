import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setCategoryId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
