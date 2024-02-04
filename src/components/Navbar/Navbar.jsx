import "./navbar.css";
import Link from "./links/NavbarLinks.jsx";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <Image src="/logo.png" className="navbar-logo-img" width={70} height={70} />
            </div>
            <div>
                <Link />
            </div>
        </div>
    );
}

export default Navbar;