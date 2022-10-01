import React from "react";
import Header from "./components/Header";
//import Content from "./components/Content";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="content">
      <div>
      <Header />
      <Employees />
      <Footer />
      </div>
      <Routes>
        <Route path="/header" element={<Header />} />
        {/* <Route path="/content" element={<Content />} /> */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
};

export default App;
