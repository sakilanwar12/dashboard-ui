import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";



const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="container-fluid  ">
                <div className="flex">
                    <div className="sidebar-area">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="main-dashboard pt-6 pl-5 pr-5 bg-slate w-full">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Main;