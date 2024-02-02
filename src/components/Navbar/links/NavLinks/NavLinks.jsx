import Link from "next/link";
import { usePathname } from "next/navigation"

const NavLinks = ({ item }) => {
    const pathLink = usePathname().toLowerCase();
    return (
        <Link href={item.destination} key={item.id} className={`${pathLink === item.destination ? "nav-link-active" : null} nav-link`}>
            {item.name}
        </Link>
    );
}

export default NavLinks;