import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for the owner signup slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Create an asynchronous thunk action for owner signup
export const signupOwner = createAsyncThunk(
  "auth/signupOwner",
  async ({ name, username, password, contactInfo }, { rejectWithValue }) => {
    try {
      // Define the API endpoint for signup
      const response = await fetch("http://localhost:8000/hostelOwner/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, password, contactInfo }),
      });

      // Check for successful response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to signup");
      }

      // Parse the response and return user data
      const data = await response.json();
      return data;
    } catch (error) {
      // Reject with error message if any failure occurs
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Create the signup slice with reducers and extra reducers for async actions
const OwnerSignupSlice = createSlice({
  name: "ownerSignup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state (when signup is in progress)
      .addCase(signupOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle successful signup
      .addCase(signupOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      // Handle errors from signup
      .addCase(signupOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default OwnerSignupSlice.reducer;
