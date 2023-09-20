import { Link } from "react-router-dom";


const NavItem = ({ url, label }) => {
    return (
        <li><Link to={url} className="text-secondary text-opacity-70 hover:text-opacity-100">{label}</Link></li>
    );
};

export default NavItem;