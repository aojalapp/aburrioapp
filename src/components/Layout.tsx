
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <main className="pt-20 pb-24 px-4 max-w-lg mx-auto min-h-screen">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
