import { Link } from "react-router-dom";


const NavItem = ({ url, label, variant }) => {
    return (
        <li><Link to={url} className={`${variant ? variant : 'text-black'} font-medium text-opacity-70 hover:text-opacity-100`}>{label}</Link></li>
    );
};

export default NavItem;