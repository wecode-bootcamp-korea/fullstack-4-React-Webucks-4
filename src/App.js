import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./styles/reset.scss";
import "./styles/common.scss";

import Login from "./pages/LeeTekWoo/Login/Login.js";
import List from "./pages/LeeTekWoo/List/List.js";
import Detail from "./pages/LeeTekWoo/Detail/Detail";
import Tekwoo from "./pages/LeeTekWoo/Router";

function App() {
  return (
    <>
      {/* <Link to="/about">이택우의 프로젝트</Link> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
