import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/reset.scss";
import "./styles/common.scss";

// import Login from "./pages/LeeTekWoo/Login/Login.js";
// import List from "./pages/LeeTekWoo/List/List.js";
// import Detail from "./pages/LeeTekWoo/Detail/Detail";

// 민지's 컴포넌트
// import LoginMinji from "./pages/minjiKong/Login/Login";
// import ListMinji from "./pages/minjiKong/List/List";
// import DetailMinji from "./pages/minjiKong/Detail/Detail";

// 연주's 컴포넌트
// import LoginYeonjoo from "./pages/yeonjookim/Login/Login";
// import ListYeonjoo from "./pages/yeonjookim/List/List";
// import DetailYeonjoo from "./pages/yeonjookim/Detail/Detail";

// 채원's 컴포넌트
// import LoginChaeWon from "./pages/chaewonSuh/Login/Login";
// import ListChaeWon from "./pages/chaewonSuh/List/List";
// import DetailChaeWon from "./pages/chaewonSuh/Detail/Detail";

// 경훈's 컴포넌트
import LoginGyeonghun from './pages/Gyeonghunim/Login/Login';
import ListGyeonghun from './pages/Gyeonghunim/List/List';
import DetailGyeonghun from './pages/Gyeonghunim/Detail/Detail';

// 민우's 컴포넌트
// import LoginMinwoo from './pages/minwooKim/Login/Login';
// import ListMinwoo from './pages/minwooKim/List/List';
// import DetailMinwoo from './pages/minwooKim/Detail/Detail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />

        <Route path="/login-minji" element={<LoginMinji />} />
        <Route path="/list-minji" element={<ListMinji />} />
        <Route path="/detail-minji" element={<DetailMinji />} />
        
        <Route path="/Login-yeonjoo" element={<LoginYeonjoo />} />
        <Route path="/List-yeonjoo" element={<ListYeonjoo />} />
        <Route path="/Detail-yeonjoo" element={<DetailYeonjoo />} />

        <Route path="/Login-ChaeWon" element={<LoginChaeWon />} />
        <Route path="/List-ChaeWon" element={<ListChaeWon />} />
        <Route path="/Detail-ChaeWon" element={<DetailChaeWon />} /> */}

        <Route path="/login-gyeonghun" element={<LoginGyeonghun />} />
        <Route path="/list-gyeonghun" element={<ListGyeonghun />} />
        <Route path="/detail-gyeonghun" element={<DetailGyeonghun />} />

        {/* <Route path="/login-minwoo" element={<LoginMinwoo />} />
        <Route path="/list-minwoo" element={<ListMinwoo />} />
        <Route path="/detail-minwoo" element={<DetailMinwoo />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;