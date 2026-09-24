import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import EcommerceDemo from "./pages/demos/EcommerceDemo";
import TaskDemo from "./pages/demos/TaskDemo";
import TicTacToeDemo from "./pages/demos/TicTacToeDemo";
import DashboardDemo from "./pages/demos/DashboardDemo";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
        <Route path="/demo/tasks" element={<TaskDemo />} />
        <Route path="/demo/tictactoe" element={<TicTacToeDemo />} />
        <Route path="/demo/dashboard" element={<DashboardDemo />} />
      </Routes>
      <Footer />
    </div>
  );
}