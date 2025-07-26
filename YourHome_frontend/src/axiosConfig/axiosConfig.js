import axios from "axios";


const BASE_URL = "http://localhost:8000"; 


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
   
  },
});


const apiCall = async (endpoint, method = "GET", data = null) => {
  try {
    const response = await axiosInstance({
      url: endpoint,
      method,
      data,
    });
    return response.data; 
  } catch (error) {
    
    console.error("API Error: ", error.message);
    throw error; 
  }
};

export default apiCall;
