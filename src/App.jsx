import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PukProject } from "./pages/PukProject";

function App() {
  return (
    <>
      <BrowserRouter basename="/Fadhillah-Portfolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects/puk" element={<PukProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
