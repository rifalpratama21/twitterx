import DThread from "./pages/Dthread";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<DThread />} />
    </Routes>
  );
}

export default App;
