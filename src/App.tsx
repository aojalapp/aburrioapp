
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AIChat from "./pages/AIChat";
import Plans from "./pages/Plans";
import Calendar from "./pages/Calendar";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import Chats from "./pages/Chats";
import GroupChat from "./pages/GroupChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Layout />}>
            <Route path="chats" element={<Chats />} />
            <Route path="chat/:chatId" element={<GroupChat />} />
            <Route path="plans" element={<Plans />} />
            <Route path="map" element={<Map />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
