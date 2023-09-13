import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail, Main } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
