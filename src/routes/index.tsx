import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />


        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
