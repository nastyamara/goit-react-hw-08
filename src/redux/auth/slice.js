import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
                       
        })
        .addCase(register.rejected, (state) => {
                    state.error = true;
                    state.isLoading = false;
        })
     .addCase(logIn.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
                       
        })
        .addCase(logIn.rejected, (state) => {
                    state.error = true;
                    state.isLoading = false;
        })
     .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          };
            state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
})
  
  
  export default authSlice.reducer;