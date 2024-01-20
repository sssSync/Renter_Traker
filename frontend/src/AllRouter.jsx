// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/Search/Page";
import RoomDetails from "./components/RoomPage/RoomDetails";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/room/:id" element={<RoomDetails />} />
    </Routes>
  );
};

export default AllRouter;
