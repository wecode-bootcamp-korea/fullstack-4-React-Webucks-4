import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/reset.scss";
import "./styles/common.scss";

import Login from "./pages/LeeTekWoo/Login/Login.js";
import List from "./pages/LeeTekWoo/List/List.js";
import Detail from "./pages/LeeTekWoo/Detail/Detail";
// 민지's 컴포넌트
import LoginMinji from "./pages/minjiKong/Login/Login";
import ListMinji from "./pages/minjiKong/List/List";
import DetailMinji from "./pages/minjiKong/Detail/Detail";

// 연주's 컴포넌트
import LoginYeonjoo from "./pages/yeonjookim/Login/Login";
import ListYeonjoo from "./pages/yeonjookim/List/List";
import DetailYeonjoo from "./pages/yeonjookim/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />

        <Route path="/login-minji" element={<LoginMinji />} />
        <Route path="/list-minji" element={<ListMinji />} />
        <Route path="/detail-minji" element={<DetailMinji />} />

        <Route path="/Login-yeonjoo" element={<LoginYeonjoo />} />
        <Route path="/List-yeonjoo" element={<ListYeonjoo />} />
        <Route path="/Detail-yeonjoo" element={<DetailYeonjoo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
