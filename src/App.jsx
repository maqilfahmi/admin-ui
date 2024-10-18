import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import ForgotPassword from "../components/Fragments/ForgotPassword"; // Buat halaman ForgotPassword

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </Router>
);

export default App;
