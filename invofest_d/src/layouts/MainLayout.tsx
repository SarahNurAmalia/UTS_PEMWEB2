import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        © 2026 Invofest. All rights reserved.
      </footer>
    </div>
  );
}