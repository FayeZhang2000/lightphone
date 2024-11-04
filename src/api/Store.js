import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import userInfoReducer from "./UserInfoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
