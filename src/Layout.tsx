import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import WhatsAppIcon from "./components/tools/WhatsAppIcon";

export default function Layout() {
  const location = useLocation();

  // Routes waar géén footer moet komen
  const hideFooterRoutes = ["/imagine"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
        <WhatsAppIcon />
      </main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}
