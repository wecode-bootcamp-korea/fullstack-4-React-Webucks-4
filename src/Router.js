import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 민지's 컴포넌트
import LoginMinji from "./pages/minjiKong/Login/Login";
import MainMinji from "./pages/minjiKong/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-minji" element={<LoginMinji />} />
        <Route path="/main-minji" element={<MainMinji />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
