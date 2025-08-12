import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const SystemLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-26 pb-6 px-4">
        <Outlet />
      </main>
    </div>
  );
}