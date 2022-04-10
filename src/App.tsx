import useQueryString from "hooks/useQueryString";
import * as Pages from "pages";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/common/Nav";
import SideBar from "./components/common/SideBar";

const App = () => {
  const { disable, reset } = useQueryString();

  return (
    <>
      {/* 로그인페이지(ex localhost:3000) 일 때 Nav 및 SideBar컴포넌트 없애기*/}
      {window.location.pathname === "/" || (
        <>
          <Nav />
          <SideBar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Pages.LoginPage />} />
        <Route path="/*" element={<Pages.NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
