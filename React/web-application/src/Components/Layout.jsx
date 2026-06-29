import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />

      <div className="container">

        <Sidebar />

        <main className="content">
          <Outlet />
        </main>

      </div>

      <Footer />
    </>
  );
}

export default Layout;