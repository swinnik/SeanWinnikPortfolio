import React from "react";

import "./App.css";
import Landing from "./pages/Landing";
import ViteBoilerplate from "./pages/ViteBoilerplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/vite-boilerplate" element={<ViteBoilerplate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
