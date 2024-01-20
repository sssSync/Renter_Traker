// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/Search/Page";
import RoomDetails from "./components/RoomPage/RoomDetails";
import UserProfile from "./pages/UserProfile/UserProfile";
import Auth from "./pages/Auth/Auth";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/room/:id" element={<RoomDetails />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
};

export default AllRouter;
