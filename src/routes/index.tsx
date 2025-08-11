import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { Companies } from "../pages/Companies";
import { SystemLayout } from "../layouts/SystemLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rotas do sistema logado */}
        <Route path="/companies" element={<SystemLayout />}>
          <Route index element={<Companies />} />

        </Route>

        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
