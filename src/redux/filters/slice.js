import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState: filterInitialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
})



export default filterSlice.reducer;

export const selectNameFilter = (state) => state.filters.name



export const { changeFilter } = filterSlice.actions