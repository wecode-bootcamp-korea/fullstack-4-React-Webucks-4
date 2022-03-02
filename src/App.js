import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/reset.scss";
import "./styles/common.scss";

import Login from "./pages/LeeTekWoo/Login/Login.js";
import List from "./pages/LeeTekWoo/List/List.js";
import Detail from "./pages/LeeTekWoo/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
