import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : []
}

export const blogSlice = createSlice({
  name: "blog",
    initialState,
    reducers: {
      // all methods go here
  }
});

// export const {  } = blogSlice.actions; 
export default blogSlice.reducer;