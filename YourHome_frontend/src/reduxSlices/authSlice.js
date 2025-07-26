import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null, 
  loading: false, 
  error: null,
  isAuthenticated: false, // Add this
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password, userType }, { rejectWithValue }) => {
    try {
      let url = "";
      if (userType === "student") {
        url = `http://localhost:8000/student/login?username=${username}&password=${password}`;
      } else if (userType === "admin") {
        url = `http://localhost:8000/admin/login?username=${username}&password=${password}`;
      } else if (userType === "hostelOwner") {
        url = `http://localhost:8000/hostelOwner/login?username=${username}&password=${password}`;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid username or password");
        }
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("API response received:", data);

      // Check if login was successful (for your current controller structure)
      if (!data || Object.keys(data).length === 0) {
        throw new Error("Invalid username or password");
      }

      return { ...data, userType }; // Include userType in response
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong"); 
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
