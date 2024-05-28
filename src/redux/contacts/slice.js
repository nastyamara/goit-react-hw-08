import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";


const contactsInitialState = {
    items: [],
    loading: false,
    error: null
  }

const contactsSlice = createSlice(
    {
        name: 'contacts',
        initialState: contactsInitialState,
        extraReducers: (builder) => 
            builder
                .addCase(fetchContacts.pending, (state) => {
                    state.error = false;
                    state.loading = true;
                })
                .addCase(fetchContacts.fulfilled, (state, action) => {
                    state.items = action.payload;
                    state.loading = false;
                })
                .addCase(fetchContacts.rejected, (state) => {
                    state.error = true;
                    state.loading = false;
                })
                .addCase(addContact.pending, (state) => {
                    state.error = false;
                    state.loading = true;
                })
                .addCase(addContact.fulfilled, (state, action) => {
                    state.items.push(action.payload)
            state.loading = false
                })
                .addCase(addContact.rejected, (state) => {
                    state.error = true;
                    state.loading = false;
                })
                .addCase(deleteContact.pending, (state) => {
                    state.error = false;
                    state.loading = true;
                })
                .addCase(deleteContact.fulfilled, (state, action) => {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload.id);
                    state.loading = false;
                })
                .addCase(logOut.fulfilled, state => {
                    state.items = [];
                    state.loading = false;
                    state.error = null;
        })
    }
)



export default contactsSlice.reducer;