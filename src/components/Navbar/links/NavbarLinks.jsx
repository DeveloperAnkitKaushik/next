"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks/NavLinks";
import Navbar from "../Navbar";
import { useState } from "react";
import Image from "next/image";

const Links = () => {
    const [menu, setMenu] = useState(false);
    const links = [
        {
            id: 1,
            name: "Home",
            destination: "/",
        },
        {
            id: 2,
            name: "About",
            destination: "/about",
        },
        {
            id: 3,
            name: "Contact",
            destination: "/contact",
        },
        {
            id: 4,
            name: "Blog",
            destination: "/blog",
        },
    ];
    const session = true;
    const admin = true;

    return (
        <>
            <div className="nav-links">
                {links.map((link) => (
                    <NavLinks item={link} key={link.id} />
                ))}
                {
                    session ? (
                        <>
                            {admin && <NavLinks item={{ id: 6, name: "Admin", destination: "/admin" }} />}
                            <button className="nav-link-bold">Logout</button>
                        </>
                    ) : (
                        <NavLinks item={{ id: 5, name: "Login", destination: "/login" }} />
                    )
                }
            </div>
            <Image src="/menu.png" width={30} height={30} onClick={() => setMenu(!menu)} className="nav-link-hamburger"/>
            {
                menu && (
                    <div className="nav-links-mobile">
                        {links.map((link) => (
                            <NavLinks item={link} key={link.id} />
                        ))}
                    </div>
                )
            }

        </>

    );
}

export default Links;