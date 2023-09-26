import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
