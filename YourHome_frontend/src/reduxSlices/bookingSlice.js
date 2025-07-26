import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createBooking = createAsyncThunk(
  "bookings/create",
  async (bookingData) => {
    const res = await axios.post("http://localhost:8000/bookings", bookingData);
    return res.data;                
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState: { list: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending,  (s) => { s.status = "loading"; })
      .addCase(createBooking.fulfilled,(s,a)=>{ s.status="succeeded"; s.list.push(a.payload); })
      .addCase(createBooking.rejected, (s) => { s.status = "failed";   });
  },
});

export default bookingSlice.reducer;
