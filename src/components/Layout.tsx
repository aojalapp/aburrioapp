
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <main className="pt-20 pb-28 px-4 max-w-lg mx-auto min-h-screen">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
