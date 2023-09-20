import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";



const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="container-fluid">
                <div className="flex">
                    <div className="sidebar-area">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="main-dashboard pt-20 pl-5">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Main;