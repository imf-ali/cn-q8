import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./ChatReducer";

const store = configureStore({
  reducer: {
    chatReducer,
  }
});

export default store;