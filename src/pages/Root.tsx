import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
