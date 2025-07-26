import { configureStore } from "@reduxjs/toolkit";
import hostelReducer from "../reduxSlices/hostelSlice"; 
import authSlice from "../reduxSlices/authSlice";
import { signupUser } from "../reduxSlices/signupSlice";


export const store = configureStore({
  reducer: {
    Hostel: hostelReducer, 
    auth: authSlice,
    signup: signupUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["auth/signupUser/rejected"],
        ignoredActionPaths: ["payload", "meta"],
        ignoredPaths: ["items.dates", "items.value"], 
      },
    }),
});

export default store;
