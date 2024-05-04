import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="p-8">
      <Navbar />
      <Outlet />
    </div>
  );
}
