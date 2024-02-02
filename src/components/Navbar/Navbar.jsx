import "./navbar.css";
import Link from "./links/NavbarLinks.jsx";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                Logo
            </div>
            <div>
                <Link />
            </div>
        </div>
    );
}

export default Navbar;