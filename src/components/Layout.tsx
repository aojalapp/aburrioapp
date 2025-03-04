
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 opacity-60 blur-3xl float-animation"></div>
        <div className="absolute bottom-40 right-[5%] w-80 h-80 rounded-full bg-gradient-to-tl from-primary-100 to-primary-200 opacity-50 blur-3xl float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-tr from-secondary-100 to-secondary-200 opacity-40 blur-3xl float-animation" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <TopBar />
      <main className="pt-20 pb-28 px-4 max-w-lg mx-auto min-h-screen relative z-10">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
