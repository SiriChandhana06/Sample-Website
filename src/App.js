import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Web1 from "./Pages/Web1";
import Web2 from "./Pages/Web2";
import Web3 from "./Pages/Web3";
import Tech from "./Pages/Tech";

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/web1' element={<Web1 />} />
            <Route path="/web2" element={<Web2 />} />
            <Route path="/web3" element={<Web3 />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
