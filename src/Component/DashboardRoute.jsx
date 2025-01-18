import { BsBank } from "react-icons/bs";
import { FaFileAlt, FaPlaneDeparture, FaShoppingBag } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { NavLink } from "react-router-dom";

const DashboardRoute = () => {
    const navlinks = [
        { path: "/app", name: "App", icon: <RiApps2Fill /> },
        { path: "/e-commerce", name: "E-Commerce", icon: <FaShoppingBag /> },
        { path: "/analytics", name: "Analytics", icon: <SiGoogleanalytics /> },
        { path: "/banking", name: "Banking", icon: <BsBank /> },
        { path: "/booking", name: "Booking", icon: <FaPlaneDeparture /> },
        { path: "/file", name: "File", icon: <FaFileAlt /> },
        { path: "/user", name: "User", icon: <FaCircleUser />, icon2: <IoIosArrowForward /> },
        { path: "/product", name: "Product", icon: <MdProductionQuantityLimits />, icon2: <IoIosArrowForward /> },
        { path: "/order", name: "Order", icon: <MdProductionQuantityLimits />, icon2: <IoIosArrowForward /> },
        { path: "/invoice", name: "Invoice", icon: <MdProductionQuantityLimits />, icon2: <IoIosArrowForward /> },
        { path: "/blog", name: "Blog", icon: <MdProductionQuantityLimits />, icon2: <IoIosArrowForward /> },
        { path: "/job", name: "Job", icon: <MdProductionQuantityLimits />, icon2: <IoIosArrowForward /> },
        { path: "/tour", name: "Tour", icon: <MdProductionQuantityLimits />, icon2: <IoIosArrowForward /> },
        { path: "/file-manager", name: "File Manager", icon: <MdProductionQuantityLimits /> },
        { path: "/mail", name: "Mail", icon: <MdProductionQuantityLimits />, count: "+32" },
        { path: "/chat", name: "Chat", icon: <MdProductionQuantityLimits /> },
        { path: "/calendar", name: "Calendar", icon: <MdProductionQuantityLimits /> },
    ];

    return (
        <div className="h-screen">
            <p className="text-gray-400 text-sm pl-5 font-bold py-5">OVERVIEW</p>
            {navlinks.slice(0, 6).map((link, index) => (
                <NavLink
                    key={index}
                    to={link.path}
                    className={({ isActive }) =>
                        `flex justify-between py-2 ${isActive
                            ? "text-green-600 bg-green-100 text-xl font-semibold rounded-lg pl-5"
                            : "text-xl font-semibold pl-5 rounded-lg text-gray-400"
                        }`
                    }
                >
                    <div className="flex items-center gap-3">
                        {link.icon}
                        <span>{link.name}</span>
                    </div>
                </NavLink>
            ))}

            <p className="text-gray-400 text-sm pl-5 font-bold py-3">MANAGEMENT</p>
            {navlinks.slice(6).map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                        `flex justify-between items-center py-2 ${isActive
                            ? "text-green-600 bg-green-100 text-xl font-semibold rounded-lg pl-5"
                            : "text-xl font-semibold pl-5 rounded-lg text-gray-400"
                        }`
                    }
                >
                    <div className="flex items-center gap-3">
                        {link.icon}
                        <span>{link.name}</span>
                    </div>
                    <div>
                        {link?.icon2 && <span>{link.icon2}</span>}
                        {link?.count && <span className="text-red-700 bg-red-200 px-2 rounded-full">
                            {link.count}
                        </span>}
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default DashboardRoute;