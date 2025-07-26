import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};


export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, username, password }, { rejectWithValue }) => {
    try {
      
      const response = await fetch("http://localhost:8000/student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, password }),
      });

      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to signup");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = signupSlice.actions;
export default signupSlice.reducer;
