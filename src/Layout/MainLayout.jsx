import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="px-10">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
