import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
