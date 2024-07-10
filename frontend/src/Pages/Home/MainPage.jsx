import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import About from "../../Components/Home/About";
import Features from "../../Components/Home/Features";
import Footer from "../../Components/Navbar/Footer";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Footer />
    </div>
  );
}
