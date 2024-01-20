import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

// Authentication Routes
export const logIn = (authData) => API.post("/login", authData);
export const signUp = (authData) => API.post("/signup", authData);

// Routes for Question

export const getAllQuestions = () => API.post("/faq/question");
export const deleteQuestion = (answer) => API.post(`faq/answer`, answer);

// Routes for Users
export const searchByLandmark = () => API.post("/search/landmark");
export const searchByAddress = () => API.post("/search/address");
