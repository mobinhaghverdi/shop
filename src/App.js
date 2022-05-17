import React from "react";
import Home from "./container/Home";
import Nav from "./components/common/Nav";
import { Route, Routes } from "react-router";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
