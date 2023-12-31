import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import admin from "../../assets/images/admin.jpg"
import AdminNavs from "./AdminNavs";
const Sidebar = () => {
    return (
        <div className="text-secondary bg-black min-h-screen w-[250px] pl-2 pr-3">

        
            {/* admin  */}

            <div className="flex  items-center py-5 border-bottom">
                <div className="h-10 w-10 mr-5">
                    <img src={admin} className="rounded-full" alt="admin" />
                </div>
                <h2 className="text-lg text-secondary text-opacity-80 label">Md. Sakil Anwar</h2>
            </div>

            {/* admin navs */}
            <AdminNavs />
        </div>
    );
};

export default Sidebar;