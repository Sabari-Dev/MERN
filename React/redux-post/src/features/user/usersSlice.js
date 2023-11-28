import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "same" },
  { id: "2", name: "lossy" },
  { id: "3", name: "john" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
