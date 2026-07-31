import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};

export default AppRoutes;