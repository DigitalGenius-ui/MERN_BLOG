import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./actions/blogSlice";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});
