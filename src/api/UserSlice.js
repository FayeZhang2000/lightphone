import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: localStorage.getItem("loggedIn") === "true",
  email: localStorage.getItem("email") || "",
  firstName: localStorage.getItem("firstName") || "",
  lastName: localStorage.getItem("lastName") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    setUserDetails(state, action) {
      const { email, firstName, lastName } = action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    resetUser(state) {
      Object.assign(state, initialState);
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("email");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
    },
  },
});

export const { setLoggedIn, setUserDetails, resetUser } = userSlice.actions;
export default userSlice.reducer;
