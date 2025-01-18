import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPeopleAlt, MdSearch } from "react-icons/md";

const Header = () => {
    return (
        <div className="flex items-center gap-16 py-5">
            <div className="w-[18%]">
                logo
            </div>
            <div className="w-[82%] flex items-center justify-between text-gray-500">
                <div>
                    <MdSearch className="text-3xl" />
                </div>
                <div className="flex justify-center items-center gap-8">
                    <figure>
                        <img src="bd.png" alt="" className="w-7 h-5" />
                    </figure>
                    <FaBell className="text-2xl" />
                    <MdPeopleAlt className="text-2xl" />
                    <IoSettingsSharp className="text-2xl" />
                    <FaUserCircle className="text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Header;