import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import CarouselPage from "./pages/carouselPage/carouselPage";
import Main from "./pages/main/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/carousel" element={<CarouselPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
