import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { CarouselPage, CompoundComponentPage, CreatePortalPage } from "./pages";
import Main from "./pages/main/main";
import { KeyExplained } from "./pages/key-explained/KeyExplained";
import { Recursive } from "./pages/recursive/Recursive";
import { recursiceData } from "./constants/recursive";
const Router = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", columnGap: "12px", padding: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/carousel">Carousel Page</Link>
        <Link to="/compound">Compound Component Page</Link>
        <Link to="/portal">Create Portal</Link>
        <Link to="/keys-explained">Keys Explained</Link>
        <Link to="/recursive">recursive</Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/compound" element={<CompoundComponentPage />} />
        <Route path="/portal" element={<CreatePortalPage />} />
        <Route path="/keys-explained" element={<KeyExplained />} />
        <Route path="/recursive" element={<Recursive data={recursiceData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
