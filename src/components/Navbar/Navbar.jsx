import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "Profile" }
      ];
      
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden">
                {
                    open === true ? <IoMdCloseCircle className="text-3xl" /> : <MdMenuOpen className="text-3xl" />
                }
            </div>
           <ul className="md:flex">
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;