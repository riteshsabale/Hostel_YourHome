import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiCall from "../axiosConfig/axiosConfig"; // Import the apiCall function

// Initial state for the slice
const initialState = {
  hostelData: [],
  loading: false,
  error: null,
};

// Create an asynchronous thunk action for fetching data
export const fetchHostels = createAsyncThunk(
  "hostels/fetchHostels",
  async (endpoint, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8000/hostel"); // Full URL
      const data = await response.json(); // Parse the response as JSON
      console.log("API response received:", data);
      return data; // Return the data for the slice to consume
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong"); // If there's an error, reject with the error message
    }
  }
);

// Create the slice with reducers
const hostelSlice = createSlice({
  name: "hostels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // For fetching data
      .addCase(fetchHostels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHostels.fulfilled, (state, action) => {
        state.loading = false;
        state.hostelData = action.payload; // Store fetched hostel data
      })
      .addCase(fetchHostels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error if the API call fails
      });
  },
});

// Export the reducer
export default hostelSlice.reducer;
