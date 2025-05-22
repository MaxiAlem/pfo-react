import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
<div className="layout-container">
  <Sidebar />
  <div className="main-content">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
</div>
  );
};

export default MainLayout;
