import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="content">
      <h3>God Abeg</h3>
      <Header />
      <Content />
      <Footer />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/content" element={<Content />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
