import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PukProject } from "./pages/PukProject";
import { SecoProject } from "./pages/SecoProject";
import { BachelorProject } from "./pages/BachelorProject";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter basename="/Fadhillah-Portfolio">
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects/bachelor" element={<BachelorProject />} />
          <Route path="projects/puk" element={<PukProject />} />
          <Route path="projects/seco" element={<SecoProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
