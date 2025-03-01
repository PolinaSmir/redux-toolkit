import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";

const SLICE_NAME = "users";

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, async (arg, thunkAPI) => {
  try {
    const { data: users } = await API.getUsers();

    return users;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

//export createAsyncThunk result
export { getUsers };

export default usersSlice.reducer;
