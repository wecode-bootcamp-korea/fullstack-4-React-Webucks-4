import { BrowserRouter, Routes, Route } from "react-router-dom";

import TekwooLogin from "./Login/Login.js";
import TekwooList from "./List/List.js";
import TekwooDetail from "./Detail/Detail.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TekwooLogin />} />
        <Route path="/list-tekwoo" element={<TekwooList />} />
        <Route path="/detail-tekwoo" element={<TekwooDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
